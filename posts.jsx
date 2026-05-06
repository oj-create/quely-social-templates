/* Quely social posts — quote: "The retro is the only meeting in Scrum
   specifically designed to happen after it's too late to use what you learn." */

const QUOTE_FULL = "The retro is the only meeting in Scrum specifically designed to happen after it\u2019s too late to use what you learn.";

/* ---------- v1 — Cosmic / marketing surface, big quote ---------- */
function PostCosmic() {
  return (
    <div className="cosmic-scene" style={{
      width: 1080, height: 1080, position: 'relative',
      fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif',
      padding: 80, display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      <div className="glow-spot" style={{ top: -120, left: -120, width: 520, height: 520, opacity: 0.7 }} />
      <div className="glow-spot" style={{ bottom: -180, right: -180, width: 600, height: 600, opacity: 0.6 }} />

      {/* top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <img src="assets/logo-on-black.png" alt="Quely" style={{ height: 36 }} />
        <span style={{
          fontFamily: 'Geist Mono, ui-monospace, monospace',
          fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
        }}>Agile, Honestly · 001</span>
      </div>

      {/* the quote */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          fontFamily: 'Geist Mono, ui-monospace, monospace',
          fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: '#B585F2', marginBottom: 28,
        }}>
          The Retro Paradox
        </div>
        <h1 style={{
          fontSize: 84, lineHeight: 1.03, letterSpacing: '-0.045em',
          fontWeight: 600, color: '#fff', margin: 0,
          textWrap: 'balance', maxWidth: 920,
        }}>
          The retro is the only meeting in Scrum
          {' '}
          <span style={{ color: '#B585F2', fontStyle: 'italic', fontWeight: 500 }}>
            specifically designed
          </span>
          {' '}to happen after it&rsquo;s too late to use what you learn.
        </h1>
      </div>

      {/* bottom row */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{
            width: 8, height: 8, borderRadius: 999, background: '#16A34A',
            boxShadow: '0 0 12px #16A34A',
          }} />
          <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }}>
            quely.io — run your ceremonies, not the other way around.
          </span>
        </div>
        <span style={{
          fontFamily: 'Geist Mono, ui-monospace, monospace',
          fontSize: 12, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)',
        }}>#scrumtruths</span>
      </div>
    </div>
  );
}

/* ---------- v2 — Editorial light / serif-styled, illustration left ---------- */
function PostEditorial() {
  return (
    <div style={{
      width: 1080, height: 1080, background: '#F9FAFB',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      padding: 72, boxSizing: 'border-box',
      display: 'grid', gridTemplateRows: 'auto 1fr auto', gap: 32,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="assets/logo-purple.png" alt="Quely" style={{ height: 36 }} />
        <span style={{
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          fontWeight: 500, color: '#6B7280',
        }}>Field Notes · Vol. 04</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 56, alignItems: 'center' }}>
        <div style={{
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #E5D5FB 0%, #CCABF7 60%, #B585F2 100%)',
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 30px 80px -30px rgba(92,40,164,0.35)',
        }}>
          {/* Stylized clock — too late */}
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
            <circle cx="110" cy="110" r="92" fill="#F9FAFB" stroke="#030712" strokeWidth="6" />
            {/* tick marks */}
            {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => {
              const a = (i * 30 - 90) * Math.PI / 180;
              const x1 = 110 + Math.cos(a) * 76, y1 = 110 + Math.sin(a) * 76;
              const x2 = 110 + Math.cos(a) * 84, y2 = 110 + Math.sin(a) * 84;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#030712" strokeWidth={i % 3 === 0 ? 5 : 2.5} strokeLinecap="round" />;
            })}
            {/* hands pointing past the hour */}
            <line x1="110" y1="110" x2="110" y2="50" stroke="#5C28A4" strokeWidth="7" strokeLinecap="round" />
            <line x1="110" y1="110" x2="168" y2="138" stroke="#030712" strokeWidth="5" strokeLinecap="round" />
            <circle cx="110" cy="110" r="7" fill="#030712" />
            {/* steam / lateness puff */}
            <path d="M 168 50 q 10 -10 0 -20 q -10 -10 0 -18" stroke="#F7A325" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M 184 56 q 10 -10 0 -18" stroke="#F7A325" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div>
          <div style={{
            fontSize: 14, letterSpacing: '0.16em', textTransform: 'uppercase',
            fontWeight: 600, color: '#5C28A4', marginBottom: 20,
          }}>
            On Retrospectives
          </div>
          <div style={{
            fontSize: 56, lineHeight: 1.08, letterSpacing: '-0.025em',
            fontWeight: 700, color: '#030712', textWrap: 'balance',
          }}>
            The retro is the only meeting in Scrum specifically designed to happen{' '}
            <span style={{ background: 'linear-gradient(transparent 60%, #F6D08A 60%)' }}>
              after it&rsquo;s too late
            </span>{' '}
            to use what you learn.
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: 24, borderTop: '1px solid #E5E7EB',
      }}>
        <span style={{ fontSize: 16, color: '#4B5563' }}>
          Better ceremonies, before the postmortem &rarr;
        </span>
        <span style={{
          padding: '8px 14px', borderRadius: 999, background: '#111827', color: '#fff',
          fontSize: 14, fontWeight: 500,
        }}>quely.io</span>
      </div>
    </div>
  );
}

/* ---------- v3 — Bold poster / brand purple slab ---------- */
function PostPoster() {
  return (
    <div style={{
      width: 1080, height: 1080, background: '#5C28A4',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      padding: 72, boxSizing: 'border-box',
      display: 'grid', gridTemplateRows: 'auto 1fr auto', position: 'relative',
      overflow: 'hidden',
    }}>
      {/* corner accent block */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 280, height: 280,
        background: '#F7A325',
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 280, height: 280,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: 'Geist Mono, ui-monospace, monospace',
          fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase',
          fontWeight: 600, color: '#030712', textAlign: 'center', lineHeight: 1.3,
        }}>
          Retro<br />Tax<br />
          <span style={{ fontSize: 64, letterSpacing: '-0.04em', display: 'block', marginTop: 8, fontFamily: 'Inter' }}>14d</span>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <img src="assets/logo-on-black.png" alt="Quely" style={{ height: 36, filter: 'brightness(1)' }} />
      </div>

      <div style={{
        alignSelf: 'center', position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', gap: 32, marginTop: 80,
      }}>
        <div style={{
          fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase',
          fontWeight: 600, color: '#F6D08A',
        }}>
          A modest proposal
        </div>
        <h1 style={{
          fontSize: 96, lineHeight: 0.98, letterSpacing: '-0.05em',
          fontWeight: 800, color: '#fff', margin: 0,
          textWrap: 'balance',
        }}>
          The retro is the only meeting in Scrum{' '}
          <span style={{ color: '#F7A325' }}>specifically designed</span>{' '}
          to happen after it&rsquo;s too late to use what you learn.
        </h1>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        position: 'relative', zIndex: 1, gap: 40,
      }}>
        <div style={{
          fontSize: 18, lineHeight: 1.4, color: 'rgba(255,255,255,0.78)', maxWidth: 480,
        }}>
          Run continuous capacity + estimation in Quely. Catch the leak while the sprint is still leaking.
        </div>
        <div style={{
          padding: '14px 22px', borderRadius: 999, background: '#fff', color: '#030712',
          fontSize: 16, fontWeight: 600, whiteSpace: 'nowrap',
        }}>quely.io &rarr;</div>
      </div>
    </div>
  );
}

/* ---------- v4 — Magazine pull-quote with illustration ---------- */
function PostIllustrated() {
  return (
    <div style={{
      width: 1080, height: 1080, background: '#FFFFFF',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      padding: 0, boxSizing: 'border-box',
      display: 'grid', gridTemplateRows: '1fr 460px', position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ padding: '72px 72px 32px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="assets/logo-purple.png" alt="Quely" style={{ height: 36 }} />
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px', borderRadius: 999,
            background: '#F4ECFE', color: '#5C28A4',
            fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: '#5C28A4' }} />
            Hot take #07
          </div>
        </div>

        {/* Giant quotemark + quote */}
        <div style={{ flex: 1, display: 'flex', gap: 24 }}>
          <div style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: 220, lineHeight: 0.7, color: '#5C28A4',
            fontWeight: 800, marginTop: -20, flexShrink: 0,
          }}>“</div>
          <div style={{
            fontSize: 52, lineHeight: 1.1, letterSpacing: '-0.025em',
            fontWeight: 600, color: '#030712', textWrap: 'balance',
            alignSelf: 'center',
          }}>
            The retro is the only meeting in Scrum specifically designed to happen{' '}
            <em style={{
              fontStyle: 'italic', color: '#5C28A4', fontWeight: 600,
            }}>after it&rsquo;s too late</em>{' '}
            to use what you learn.
          </div>
        </div>
      </div>

      {/* illustration band */}
      <div style={{
        background: 'linear-gradient(180deg, #F4ECFE 0%, #E5D5FB 100%)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 72px',
      }}>
        <div style={{ maxWidth: 380, zIndex: 2 }}>
          <div style={{
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            fontWeight: 600, color: '#5C28A4', marginBottom: 12,
          }}>
            What if?
          </div>
          <div style={{ fontSize: 22, lineHeight: 1.35, color: '#1F2937', fontWeight: 500 }}>
            What if your sprint learned mid-flight, not 10 days after landing?
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginTop: 20,
            padding: '10px 18px', borderRadius: 999,
            background: '#030712', color: '#fff',
            fontSize: 14, fontWeight: 600,
          }}>
            Try Quely &rarr;
          </div>
        </div>
        <img src="assets/Asset-27.png" alt=""
          style={{ height: 460, objectFit: 'contain', objectPosition: 'right bottom' }} />
      </div>
    </div>
  );
}

/* ---------- mount ---------- */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DesignCanvas title="Quely · Social Post — Retro Quote">
    <DCSection id="square" title="Instagram square (1080 × 1080)">
      <DCArtboard id="cosmic" label="Cosmic / serif-italic emphasis" width={1080} height={1080}>
        <PostCosmic />
      </DCArtboard>
      <DCArtboard id="editorial" label="Editorial / clock illustration" width={1080} height={1080}>
        <PostEditorial />
      </DCArtboard>
      <DCArtboard id="poster" label="Poster / brand purple slab" width={1080} height={1080}>
        <PostPoster />
      </DCArtboard>
      <DCArtboard id="illustrated" label="Magazine pull-quote" width={1080} height={1080}>
        <PostIllustrated />
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);
