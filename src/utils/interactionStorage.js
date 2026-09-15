import initialData from '../data/article-interactions.json';

const STORAGE_KEY = 'ifeoluwa_article_interactions_v2';

/**
 * Helper to retrieve full interaction state from localStorage or JSON seed
 */
function getAllInteractions() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to read interactions from storage:', e);
  }
  return initialData;
}

/**
 * Save updated interaction state to localStorage
 */
function saveAllInteractions(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save interactions to storage:', e);
  }
}

/**
 * Get interaction state for a specific article slug
 */
export function getArticleInteractions(slug) {
  const all = getAllInteractions();
  if (all[slug]) {
    return all[slug];
  }

  // Create default state for new or unspecified articles
  const defaultTemplate = all['default'] || {
    claps: 0,
    userClaps: 0,
    reactions: { clap: 0, heart: 0, mindblown: 0, insightful: 0, fire: 0 },
    userReactions: {},
    comments: []
  };

  return JSON.parse(JSON.stringify(defaultTemplate));
}

/**
 * Add a clap to an article (max 50 claps per user session)
 */
export function addClap(slug) {
  const all = getAllInteractions();
  if (!all[slug]) {
    all[slug] = getArticleInteractions(slug);
  }

  const articleState = all[slug];
  if (!articleState.userClaps) articleState.userClaps = 0;

  if (articleState.userClaps < 50) {
    articleState.claps = (articleState.claps || 0) + 1;
    articleState.userClaps += 1;
    saveAllInteractions(all);
  }

  return all[slug];
}

/**
 * Toggle a reaction emoji (clap, heart, mindblown, insightful, fire)
 */
export function toggleReaction(slug, reactionKey) {
  const all = getAllInteractions();
  if (!all[slug]) {
    all[slug] = getArticleInteractions(slug);
  }

  const articleState = all[slug];
  if (!articleState.userReactions) articleState.userReactions = {};
  if (!articleState.reactions) articleState.reactions = {};

  const isAlreadyReacted = articleState.userReactions[reactionKey];

  if (isAlreadyReacted) {
    articleState.userReactions[reactionKey] = false;
    articleState.reactions[reactionKey] = Math.max(0, (articleState.reactions[reactionKey] || 1) - 1);
  } else {
    articleState.userReactions[reactionKey] = true;
    articleState.reactions[reactionKey] = (articleState.reactions[reactionKey] || 0) + 1;
  }

  saveAllInteractions(all);
  return all[slug];
}

/**
 * Add a new comment or reply to an article
 */
export function addComment(slug, { author, content, parentId = null }) {
  const all = getAllInteractions();
  if (!all[slug]) {
    all[slug] = getArticleInteractions(slug);
  }

  const articleState = all[slug];
  if (!articleState.comments) articleState.comments = [];

  // Generate simple initials avatar
  const nameParts = author.trim().split(' ');
  const avatar = nameParts.length >= 2
    ? (nameParts[0][0] + nameParts[1][0]).toUpperCase()
    : author.slice(0, 2).toUpperCase();

  const newComment = {
    id: 'c_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    author: author.trim() || 'Anonymous Reader',
    avatar: avatar || 'AR',
    badge: author.toLowerCase().includes('ifeoluwa') ? 'Author' : 'Reader',
    date: new Date().toISOString(),
    content: content.trim(),
    likes: 0,
    liked: false,
    replies: []
  };

  if (parentId) {
    // Nested reply
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
    findAndReply(articleState.comments);
  } else {
    // Top-level comment
    articleState.comments.unshift(newComment);
  }

  saveAllInteractions(all);
  return all[slug];
}

/**
 * Like or unlike a specific comment
 */
export function toggleLikeComment(slug, commentId) {
  const all = getAllInteractions();
  if (!all[slug]) {
    all[slug] = getArticleInteractions(slug);
  }

  const articleState = all[slug];
  
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

  toggleInList(articleState.comments || []);
  saveAllInteractions(all);
  return all[slug];
}
