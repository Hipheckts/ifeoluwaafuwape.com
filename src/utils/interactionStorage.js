import initialData from '../data/article-interactions.json';

const STORAGE_KEY = 'ifeoluwa_article_interactions_v4';

// Clear legacy cached storage keys from early development
try {
  localStorage.removeItem('ifeoluwa_article_interactions_v1');
  localStorage.removeItem('ifeoluwa_article_interactions_v2');
  localStorage.removeItem('ifeoluwa_article_interactions_v3');
} catch (e) {}

function getSavedUserInteractions() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to read user interactions:', e);
  }
  return {};
}

function saveUserInteractions(allSaved) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allSaved));
  } catch (e) {
    console.error('Failed to save user interactions:', e);
  }
}

/**
 * Get interaction state for a specific article slug
 */
export function getArticleInteractions(slug) {
  const base = initialData[slug] || initialData['default'] || {
    claps: 0,
    userClaps: 0,
    reactions: { clap: 0, heart: 0, mindblown: 0, insightful: 0, fire: 0 },
    userReactions: {},
    comments: []
  };

  const result = JSON.parse(JSON.stringify(base));
  const userStore = getSavedUserInteractions()[slug];

  if (userStore) {
    result.userClaps = userStore.userClaps || 0;
    result.claps = (base.claps || 0) + (userStore.userClaps || 0);

    if (userStore.userReactions) {
      result.userReactions = userStore.userReactions;
      Object.keys(userStore.userReactions).forEach((k) => {
        if (userStore.userReactions[k]) {
          result.reactions[k] = (base.reactions?.[k] || 0) + 1;
        }
      });
    }

    if (userStore.userComments && userStore.userComments.length > 0) {
      result.comments = [...userStore.userComments, ...(result.comments || [])];
    }
  }

  return result;
}

/**
 * Add a clap to an article (max 50 claps per user session)
 */
export function addClap(slug) {
  const allSaved = getSavedUserInteractions();
  if (!allSaved[slug]) {
    allSaved[slug] = { userClaps: 0, userReactions: {}, userComments: [] };
  }

  if (allSaved[slug].userClaps < 50) {
    allSaved[slug].userClaps = (allSaved[slug].userClaps || 0) + 1;
    saveUserInteractions(allSaved);
  }

  return getArticleInteractions(slug);
}

/**
 * Toggle a reaction emoji (clap, heart, mindblown, insightful, fire)
 */
export function toggleReaction(slug, reactionKey) {
  const allSaved = getSavedUserInteractions();
  if (!allSaved[slug]) {
    allSaved[slug] = { userClaps: 0, userReactions: {}, userComments: [] };
  }
  if (!allSaved[slug].userReactions) {
    allSaved[slug].userReactions = {};
  }

  const current = allSaved[slug].userReactions[reactionKey];
  allSaved[slug].userReactions[reactionKey] = !current;

  saveUserInteractions(allSaved);
  return getArticleInteractions(slug);
}

/**
 * Add a new comment or reply to an article
 */
export function addComment(slug, { author, content, parentId = null }) {
  const allSaved = getSavedUserInteractions();
  if (!allSaved[slug]) {
    allSaved[slug] = { userClaps: 0, userReactions: {}, userComments: [] };
  }
  if (!allSaved[slug].userComments) {
    allSaved[slug].userComments = [];
  }

  const nameParts = author.trim().split(' ');
  const avatar = nameParts.length >= 2
    ? (nameParts[0][0] + nameParts[1][0]).toUpperCase()
    : author.slice(0, 2).toUpperCase();

  const newComment = {
    id: 'c_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    author: author.trim() || 'Anonymous',
    avatar: avatar || 'AN',
    badge: author.toLowerCase().includes('ifeoluwa') ? 'Author' : 'Reader',
    date: new Date().toISOString(),
    content: content.trim(),
    likes: 0,
    liked: false,
    replies: []
  };

  if (parentId) {
    const findAndReply = (commentsList) => {
      for (let c of commentsList) {
        if (c.id === parentId) {
          if (!c.replies) c.replies = [];
          c.replies.push(newComment);
          return true;
        }
        if (c.replies && c.replies.length > 0) {
          if (findAndReply(c.replies)) return true;
        }
      }
      return false;
    };
    findAndReply(allSaved[slug].userComments);
  } else {
    allSaved[slug].userComments.unshift(newComment);
  }

  saveUserInteractions(allSaved);
  return getArticleInteractions(slug);
}

/**
 * Like or unlike a specific comment
 */
export function toggleLikeComment(slug, commentId) {
  const allSaved = getSavedUserInteractions();
  if (!allSaved[slug] || !allSaved[slug].userComments) {
    return getArticleInteractions(slug);
  }

  const toggleInList = (list) => {
    for (let c of list) {
      if (c.id === commentId) {
        if (c.liked) {
          c.liked = false;
          c.likes = Math.max(0, (c.likes || 1) - 1);
        } else {
          c.liked = true;
          c.likes = (c.likes || 0) + 1;
        }
        return true;
      }
      if (c.replies && c.replies.length > 0) {
        if (toggleInList(c.replies)) return true;
      }
    }
    return false;
  };

  toggleInList(allSaved[slug].userComments);
  saveUserInteractions(allSaved);
  return getArticleInteractions(slug);
}

