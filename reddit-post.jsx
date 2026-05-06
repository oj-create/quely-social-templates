/* Quely social — Reddit screenshot mockup component.
   Used identically as the hero element across all 4 variations.
   Authentic r/agile post about a retro pain point. */

function RedditPost({ width = 720 }) {
  // Standard scale; height is intrinsic
  return (
    <div style={{
      width: width,
      background: '#FFFFFF',
      borderRadius: 16,
      fontFamily: '"IBM Plex Sans", "Inter", system-ui, sans-serif',
      color: '#0F1A1C',
      boxShadow: '0 1px 0 rgba(0,0,0,0.04)',
      overflow: 'hidden',
      border: '1px solid #E5E7EB',
      boxSizing: 'border-box'
    }}>
      {/* Header: subreddit, user, time */}
      <div style={{ padding: '18px 20px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: '#FF4500',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 800, fontSize: 16, fontFamily: 'Inter'
        }}>
          a/
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#0F1A1C' }}>r/agile</span>
          <span style={{ fontSize: 12, color: '#576F76' }}>
            Posted by u/scrum_skeptic_42 · 14 hr ago
          </span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <span style={{
            fontSize: 12, fontWeight: 600, color: '#576F76',
            border: '1px solid #D8DEDF', borderRadius: 999,
            padding: '5px 12px'
          }}>Join</span>
        </div>
      </div>

      {/* Title */}
      <div style={{ padding: '14px 20px 8px' }}>
        <h2 style={{
          margin: 0, fontSize: 22, lineHeight: 1.25, fontWeight: 700,
          color: '#0F1A1C', letterSpacing: '-0.01em'
        }}>
          Hot take: the retro is the only meeting in Scrum specifically designed to happen after it&rsquo;s too late to use what you learn.
        </h2>
      </div>

      {/* Body */}
      <div style={{ padding: '4px 20px 16px', fontSize: 15, lineHeight: 1.55, color: '#1A1A1B' }}>
        <p style={{ margin: '0 0 10px' }}>
          Been an EM for 9 years. Ran the math on our last 6 sprints — every single &ldquo;action item&rdquo; from a retro landed in a backlog that we re-prioritized away by sprint+2.
        </p>
        <p style={{ margin: '0 0 10px' }}>
          We talk about the leak two weeks after the boat sank. Then we celebrate having &ldquo;learned&rdquo; from it.
        </p>
        <p style={{ margin: 0 }}>
          What if the ceremony just&hellip; happened mid-sprint? Genuinely asking.
        </p>
      </div>

      {/* Flair / tags row */}
      <div style={{ padding: '0 20px 14px', display: 'flex', gap: 8 }}>
        <span style={{
          fontSize: 11, fontWeight: 600, color: '#0F4C75',
          background: '#E1F0FB', borderRadius: 4, padding: '3px 8px',
          letterSpacing: '0.01em'
        }}>Discussion</span>
        <span style={{
          fontSize: 11, fontWeight: 600, color: '#7A4B00',
          background: '#FFF1D6', borderRadius: 4, padding: '3px 8px'
        }}>Retros</span>
      </div>

      {/* Action bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '8px 14px 14px', color: '#576F76', fontSize: 13, fontWeight: 600
      }}>
        {/* Vote pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#F6F8F9', borderRadius: 999, padding: '7px 12px'
        }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M10 4 L4 11 H8 V16 H12 V11 H16 Z" fill="#FF4500" />
          </svg>
          <span style={{ color: '#0F1A1C', fontWeight: 700 }}>3.4k</span>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M10 16 L4 9 H8 V4 H12 V9 H16 Z" fill="#576F76" />
          </svg>
        </div>
        {/* Comments */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#F6F8F9', borderRadius: 999, padding: '7px 12px'
        }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8l-4 3v-3H5a2 2 0 0 1-2-2z" stroke="#576F76" strokeWidth="1.6" fill="none" />
          </svg>
          <span style={{ color: '#0F1A1C' }}>487 comments</span>
        </div>
        {/* Share */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#F6F8F9', borderRadius: 999, padding: '7px 12px'
        }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M4 11v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3M10 3v10M6 7l4-4 4 4" stroke="#576F76" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span>Share</span>
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#F6F8F9', borderRadius: 999, padding: '7px 12px'
        }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M5 3h10v14l-5-3-5 3z" stroke="#576F76" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
          </svg>
          <span>Save</span>
        </div>
      </div>
    </div>
  );
}

window.RedditPost = RedditPost;
