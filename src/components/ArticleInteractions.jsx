import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, Send, Sparkles, ThumbsUp, CornerDownRight } from 'lucide-react';
import {
  getArticleInteractions,
  addClap,
  toggleReaction,
  addComment,
  toggleLikeComment
} from '../utils/interactionStorage';

const REACTION_CONFIG = [
  { key: 'clap', emoji: '👏', label: 'Clap' },
  { key: 'heart', emoji: '❤️', label: 'Love' },
  { key: 'mindblown', emoji: '🤯', label: 'Mindblown' },
  { key: 'insightful', emoji: '💡', label: 'Insightful' },
  { key: 'fire', emoji: '🔥', label: 'Fire' }
];

export default function ArticleInteractions({ slug }) {
  const [data, setData] = useState(() => getArticleInteractions(slug));
  const [authorName, setAuthorName] = useState(() => localStorage.getItem('ifeoluwa_commenter_name') || '');
  const [commentText, setCommentText] = useState('');
  const [activeReplyId, setActiveReplyId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [clapBurst, setClapBurst] = useState(false);

  useEffect(() => {
    setData(getArticleInteractions(slug));
  }, [slug]);

  const handleClap = () => {
    const updated = addClap(slug);
    setData(updated);
    setClapBurst(true);
    setTimeout(() => setClapBurst(false), 800);
  };

  const handleToggleReaction = (key) => {
    const updated = toggleReaction(slug, key);
    setData(updated);
  };

  const handlePostComment = (e, parentId = null) => {
    e.preventDefault();
    const nameToUse = (authorName || '').trim() || 'Anonymous';
    const textToUse = parentId ? replyText : commentText;

    if (!textToUse.trim()) return;

    if (authorName.trim()) {
      localStorage.setItem('ifeoluwa_commenter_name', authorName.trim());
    }

    const updated = addComment(slug, {
      author: nameToUse,
      content: textToUse,
      parentId
    });

    setData(updated);

    if (parentId) {
      setReplyText('');
      setActiveReplyId(null);
    } else {
      setCommentText('');
    }
  };

  const handleLikeComment = (commentId) => {
    const updated = toggleLikeComment(slug, commentId);
    setData(updated);
  };

  const formatTime = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    const now = new Date();
    const diffSeconds = Math.floor((now - date) / 1000);

    if (diffSeconds < 60) return 'Just now';
    if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}m ago`;
    if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}h ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const totalCommentsCount = (comments) => {
    if (!comments) return 0;
    let count = comments.length;
    for (let c of comments) {
      if (c.replies) count += c.replies.length;
    }
    return count;
  };

  return (
    <section className="article-interactions-section">
      <div className="interactions-divider" />

      {/* Claps & Reactions Header Bar */}
      <div className="reactions-container">
        <div className="clap-widget">
          <button
            onClick={handleClap}
            className={`clap-btn ${clapBurst ? 'clap-pulse' : ''}`}
            title="Click to clap for this article (up to 50 times)"
          >
            <span className="clap-emoji">👏</span>
            <span className="clap-count">{data.claps || 0}</span>
            {clapBurst && <span className="clap-burst-float">+1</span>}
          </button>
          <span className="clap-user-limit">
            {data.userClaps > 0 ? `You clapped ${data.userClaps}x` : 'Give a clap'}
          </span>
        </div>

        <div className="reactions-picker">
          {REACTION_CONFIG.map(({ key, emoji, label }) => {
            const count = data.reactions?.[key] || 0;
            const isUserReacted = data.userReactions?.[key];
            return (
              <button
                key={key}
                onClick={() => handleToggleReaction(key)}
                className={`reaction-pill ${isUserReacted ? 'active' : ''}`}
                title={`React with ${label}`}
              >
                <span className="reaction-emoji">{emoji}</span>
                {count > 0 && <span className="reaction-count">{count}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Comments Area */}
      <div className="comments-container">
        <div className="comments-header">
          <h3 className="comments-title">
            <MessageSquare size={18} />
            <span>Discussion ({totalCommentsCount(data.comments)})</span>
          </h3>
        </div>

        {/* Post Comment Form */}
        <form onSubmit={(e) => handlePostComment(e, null)} className="comment-form">
          <div className="comment-form-inputs">
            <input
              type="text"
              placeholder="Your name (optional)..."
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="comment-input-name"
            />
            <textarea
              placeholder="Share your thoughts, feedback, or questions..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="comment-textarea"
              rows={3}
              required
            />
          </div>
          <div className="comment-form-footer">
            <span className="comment-hint">JSON stored • No login required</span>
            <button type="submit" className="comment-submit-btn">
              <Send size={14} /> Post Comment
            </button>
          </div>
        </form>

        {/* List of Comments */}
        <div className="comments-list">
          {!data.comments || data.comments.length === 0 ? (
            <div className="comments-empty">
              <Sparkles size={20} style={{ color: 'var(--text-muted)' }} />
              <p>Be the first to join the discussion!</p>
            </div>
          ) : (
            data.comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-header">
                  <div className="comment-author-info">
                    <div className="comment-avatar">{comment.avatar}</div>
                    <span className="comment-author-name">{comment.author}</span>
                    {comment.badge && (
                      <span className={`comment-badge ${comment.badge === 'Author' ? 'author-badge' : ''}`}>
                        {comment.badge}
                      </span>
                    )}
                  </div>
                  <span className="comment-date">{formatTime(comment.date)}</span>
                </div>

                <div className="comment-body">{comment.content}</div>

                <div className="comment-actions">
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className={`comment-like-btn ${comment.liked ? 'liked' : ''}`}
                  >
                    <Heart size={14} fill={comment.liked ? 'currentColor' : 'none'} />
                    <span>{comment.likes || 0}</span>
                  </button>

                  <button
                    onClick={() => {
                      if (activeReplyId === comment.id) {
                        setActiveReplyId(null);
                      } else {
                        setActiveReplyId(comment.id);
                        setReplyText('');
                      }
                    }}
                    className="comment-reply-btn"
                  >
                    <CornerDownRight size={14} /> Reply
                  </button>
                </div>

                {/* Inline Reply Form */}
                {activeReplyId === comment.id && (
                  <form
                    onSubmit={(e) => handlePostComment(e, comment.id)}
                    className="comment-form reply-form"
                  >
                    <input
                      type="text"
                      placeholder="Your name (optional)..."
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="comment-input-name"
                    />
                    <textarea
                      placeholder={`Replying to ${comment.author}...`}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="comment-textarea"
                      rows={2}
                      required
                    />
                    <div className="comment-form-footer">
                      <button
                        type="button"
                        onClick={() => setActiveReplyId(null)}
                        className="comment-cancel-btn"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="comment-submit-btn">
                        <Send size={13} /> Reply
                      </button>
                    </div>
                  </form>
                )}

                {/* Render Nested Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="replies-list">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="comment-item reply-item">
                        <div className="comment-header">
                          <div className="comment-author-info">
                            <div className="comment-avatar reply-avatar">{reply.avatar}</div>
                            <span className="comment-author-name">{reply.author}</span>
                            {reply.badge && (
                              <span className={`comment-badge ${reply.badge === 'Author' ? 'author-badge' : ''}`}>
                                {reply.badge}
                              </span>
                            )}
                          </div>
                          <span className="comment-date">{formatTime(reply.date)}</span>
                        </div>
                        <div className="comment-body">{reply.content}</div>
                        <div className="comment-actions">
                          <button
                            onClick={() => handleLikeComment(reply.id)}
                            className={`comment-like-btn ${reply.liked ? 'liked' : ''}`}
                          >
                            <Heart size={13} fill={reply.liked ? 'currentColor' : 'none'} />
                            <span>{reply.likes || 0}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
