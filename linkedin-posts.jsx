/* Quely social — LinkedIn post TEMPLATES.
   4 frame treatments. The screenshot is a drag-replaceable image slot;
   all copy is editable via the Tweaks panel.
   Reuse for every Reddit / X / community-post repost. */

const LINKEDIN_W = 1080;
const LINKEDIN_H = 1080;

/* Tweakable defaults — every per-post text field lives here.
   Replace the screenshot via drag-and-drop on the image slot. */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "v1_topNote": "Mon · 9:42am",
  "v1_circleHighlight": "this. exactly this.",
  "v1_circleSub": "we kept saving these threads in a slack channel until we just\u2026 built it.",
  "v1_bottomNote": "the \u201clearning\u201d arrives after the bill.",
  "v2_eyebrow": "Opinion \u00b7 Ceremonies",
  "v2_headline": "The retro is",
  "v2_headlineHighlight": "working as designed.",
  "v2_dek": "An EM with nine sprints of receipts says the quiet part out loud. We agree \u2014 and we built around it.",
  "v2_byline": "The Quely desk",
  "v2_exhibit": "Exhibit A \u00b7 r/agile \u00b7 3.4k upvotes",
  "v3_eyebrow": "Field Dispatch \u00b7 Vol 04",
  "v3_filed": "Filed under: ceremonies that lie to themselves",
  "v4_metaTag": "From the wild",
  "v4_takeaway": "The retro\u2019s timing problem isn\u2019t a hot take. It\u2019s the design.",
  "cta": "quely.io \u2192"
}/*EDITMODE-END*/;

/* The shared screenshot slot — sized to fit the layout's hero area.
   Each variation passes its own id so users can have different screenshots
   per variation if they want. */
function ScreenshotSlot({ id, width, height, tilt = 0, shadow }) {
  const [imgSize, setImgSize] = React.useState(null);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onSize = (e) => setImgSize(e.detail);
    el.addEventListener('image-size', onSize);
    return () => el.removeEventListener('image-size', onSize);
  }, []);

  let boxW = width;
  let boxH = height;
  if (imgSize && imgSize.w && imgSize.h) {
    const scale = Math.min(width / imgSize.w, height / imgSize.h);
    boxW = imgSize.w * scale;
    boxH = imgSize.h * scale;
  }

  return (
    <div style={{
      width, height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: `rotate(${tilt}deg)`
    }}>
      <div style={{
        width: boxW,
        height: boxH,
        boxShadow: shadow,
        borderRadius: 14,
        overflow: 'hidden',
        transition: 'width 0.2s, height 0.2s'
      }}>
        <image-slot
          ref={ref}
          id={id}
          style={{ width: '100%', height: '100%', display: 'block' }}
          shape="rounded"
          radius="14"
          fit="cover"
          placeholder="Drop a Reddit screenshot here"
        />
      </div>
    </div>
  );
}

/* ---------- v1 — Annotated evidence ---------- */
function PostMinimal({ t }) {
  return (
    <div style={{
      width: LINKEDIN_W, height: LINKEDIN_H,
      background: '#FAFAF7',
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      position: 'relative', overflow: 'hidden', boxSizing: 'border-box'
    }}>
      {/* Ruled-paper lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 31px, rgba(92,40,164,0.06) 31px, rgba(92,40,164,0.06) 32px)',
        opacity: 0.7
      }} />

      <div style={{
        position: 'absolute', top: 32, left: 40, zIndex: 5,
        display: 'flex', alignItems: 'center', gap: 10
      }}>
        <img src="assets/logo-purple.png" alt="Quely" style={{ height: 24 }} />
      </div>

      <div style={{
        position: 'absolute', top: 36, right: 44, zIndex: 5,
        fontFamily: '"Caveat", "Bradley Hand", cursive',
        fontSize: 22, color: '#5C28A4', transform: 'rotate(-2deg)'
      }}>{t.v1_topNote}</div>

      {/* Hero: replaceable screenshot, centered with slight printout tilt */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2
      }}>
        <ScreenshotSlot id="repost-v1"
          width={520} height={420}
          tilt={-1.2}
          shadow="0 22px 50px -22px rgba(40,30,60,0.28), 0 6px 14px -6px rgba(40,30,60,0.18)" />
      </div>

      {/* Right margin handwritten reaction & arrow */}
      <div style={{
        position: 'absolute', top: 70, right: 36, zIndex: 5,
        width: 240, transform: 'rotate(2deg)',
        fontFamily: '"Caveat", "Bradley Hand", cursive',
        color: '#1F1235', lineHeight: 1.15
      }}>
        <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>{t.v1_circleHighlight}</div>
        <div style={{ fontSize: 22, color: '#4B3868' }}>{t.v1_circleSub}</div>

        {/* Hand-drawn arrow pointing to screenshot */}
        <svg style={{
          display: 'block',
          marginTop: 8,
          marginLeft: -56,
          pointerEvents: 'none'
        }} width="220" height="120" viewBox="0 0 220 120" fill="none">
          <path d="M 180 0 C 120 10, 60 35, 10 85"
            stroke="#5C28A4" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 10 85 L 30 80 M 10 85 L 15 65"
            stroke="#5C28A4" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Bottom-left margin note */}
      <div style={{
        position: 'absolute', bottom: 56, left: 40, zIndex: 5,
        width: 320, transform: 'rotate(-1.5deg)',
        fontFamily: '"Caveat", "Bradley Hand", cursive',
        color: '#1F1235'
      }}>
        <div style={{ fontSize: 24, lineHeight: 1.15 }}>
          &mdash; {t.v1_bottomNote}
        </div>
      </div>

      {/* Bottom-right signature */}
      <div style={{
        position: 'absolute', bottom: 32, right: 40, zIndex: 5,
        display: 'flex', alignItems: 'center', gap: 14,
        fontSize: 12, color: '#6B7280', letterSpacing: '0.04em'
      }}>
        <span style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#1F1235', transform: 'rotate(-3deg)', display: 'inline-block' }}>— Q</span>
        <span style={{ width: 1, height: 16, background: '#D1D5DB' }} />
        <span style={{ color: '#111827', fontWeight: 600 }}>quely.io</span>
      </div>
    </div>
  );
}

/* ---------- v2 — Newsroom front page ---------- */
function PostEditorial({ t }) {
  return (
    <div style={{
      width: LINKEDIN_W, height: LINKEDIN_H,
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      position: 'relative', overflow: 'hidden', boxSizing: 'border-box',
      background: '#F4ECFE'
    }}>
      {/* Masthead */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 54,
        background: '#030712', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 36px', zIndex: 4,
        borderBottom: '3px double rgba(255,255,255,0.25)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <img src="assets/logo-on-black.png" alt="Quely" style={{ height: 22 }} />
          <span style={{
            fontFamily: 'Geist Mono, ui-monospace, monospace',
            fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)'
          }}>The Sprint Dispatch</span>
        </div>
        <div style={{
          fontFamily: 'Geist Mono, ui-monospace, monospace',
          fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)'
        }}>Vol. IV · No. 04 · From the field</div>
      </div>

      <div style={{
        position: 'absolute', top: 54, left: 0, right: 0, bottom: 0,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        boxSizing: 'border-box'
      }}>
        {/* LEFT: editorial column */}
        <div style={{
          padding: '36px 28px 28px 44px',
          borderRight: '1px solid rgba(3,7,18,0.12)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>
          <div>
            <div style={{
              fontFamily: 'Geist Mono, ui-monospace, monospace',
              fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
              fontWeight: 700, color: '#5C28A4',
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: 14
            }}>
              <span style={{ width: 24, height: 2, background: '#5C28A4' }} />
              {t.v2_eyebrow}
            </div>
            <h1 style={{
              fontFamily: 'Geist, ui-sans-serif, system-ui',
              fontSize: 60, lineHeight: 0.95, letterSpacing: '-0.045em',
              fontWeight: 800, color: '#030712', margin: 0,
              textWrap: 'balance'
            }}>
              {t.v2_headline}{' '}
              <span style={{
                background: '#F7A325',
                boxShadow: '0.08em 0 0 #F7A325, -0.08em 0 0 #F7A325',
                color: '#030712',
                padding: '0 0.04em'
              }}>{t.v2_headlineHighlight}</span>
            </h1>
            <p style={{
              margin: '20px 0 0',
              fontSize: 17, lineHeight: 1.35,
              color: '#1F2937', maxWidth: 460, fontWeight: 400
            }}>{t.v2_dek}</p>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            paddingTop: 18, borderTop: '1px solid rgba(3,7,18,0.15)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{
                fontFamily: 'Geist Mono, ui-monospace, monospace',
                fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#6B7280', fontWeight: 600
              }}>Filed by</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: '#030712', letterSpacing: '-0.01em' }}>
                {t.v2_byline}
              </span>
            </div>
            <div style={{
              padding: '11px 18px', borderRadius: 999,
              background: '#030712', color: '#fff',
              fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em'
            }}>{t.cta}</div>
          </div>
        </div>

        {/* RIGHT: screenshot exhibit */}
        <div style={{
          padding: '36px 44px 28px 28px',
          display: 'flex', flexDirection: 'column'
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 14
          }}>
            <div style={{
              fontFamily: 'Geist Mono, ui-monospace, monospace',
              fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#6B7280', fontWeight: 700
            }}>{t.v2_exhibit}</div>
            <div style={{
              fontFamily: 'Geist Mono, ui-monospace, monospace',
              fontSize: 10, letterSpacing: '0.18em',
              color: '#9CA3AF'
            }}>↓ verbatim</div>
          </div>

          <div style={{
            flex: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <ScreenshotSlot id="repost-v2"
              width={500} height={400}
              shadow="0 22px 50px -20px rgba(3,7,18,0.35), 0 4px 12px -4px rgba(3,7,18,0.2)" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- v3 — Textured & layered ---------- */
function PostTextured({ t }) {
  const grain = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.45 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>")`;

  return (
    <div style={{
      width: LINKEDIN_W, height: LINKEDIN_H,
      fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      position: 'relative', overflow: 'hidden', boxSizing: 'border-box',
      background: '#F1E9DC'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 20%, #F8EFDE 0%, #EDE2CC 45%, #E2D3B5 100%)'
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(#0307120A 1px, transparent 1px), linear-gradient(90deg, #0307120A 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        opacity: 0.6
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: grain,
        mixBlendMode: 'multiply',
        opacity: 0.35,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute', top: 32, left: 36,
        display: 'flex', alignItems: 'center', gap: 12, zIndex: 3
      }}>
        <img src="assets/logo-purple.png" alt="Quely" style={{ height: 28 }} />
      </div>

      <div style={{
        position: 'absolute', top: 38, right: 36, zIndex: 3,
        display: 'flex', alignItems: 'center', gap: 10,
        fontFamily: 'Geist Mono, ui-monospace, monospace',
        fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: '#5C28A4', fontWeight: 600
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: '#5C28A4' }} />
        {t.v3_eyebrow}
      </div>

      {/* tape strip */}
      <div style={{
        position: 'absolute', top: 78, left: '50%',
        transform: 'translateX(-50%) rotate(-3deg)',
        width: 140, height: 26,
        background: 'rgba(247,163,37,0.55)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        zIndex: 4
      }} />

      {/* Hero */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2
      }}>
        <ScreenshotSlot id="repost-v3"
          width={540} height={420}
          tilt={-1}
          shadow="0 40px 60px -25px rgba(50,30,10,0.4), 0 12px 20px -10px rgba(50,30,10,0.25)" />
      </div>

      <div style={{
        position: 'absolute', bottom: 28, left: 36, right: 36, zIndex: 3,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{
          fontFamily: 'Geist Mono, ui-monospace, monospace',
          fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
          color: '#3F2D11', fontWeight: 600
        }}>{t.v3_filed}</div>
        <div style={{
          padding: '10px 18px', borderRadius: 999,
          background: '#030712', color: '#fff',
          fontSize: 13, fontWeight: 600
        }}>{t.cta}</div>
      </div>
    </div>
  );
}

/* ---------- v4 — Dark mode / premium ---------- */
function PostDark({ t }) {
  return (
    <div className="cosmic-scene" style={{
      width: LINKEDIN_W, height: LINKEDIN_H,
      fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif',
      position: 'relative', overflow: 'hidden', boxSizing: 'border-box',
      background: '#000'
    }}>
      <div style={{
        position: 'absolute', top: -180, left: -160, width: 540, height: 540,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(92,40,164,0.65) 0%, rgba(92,40,164,0) 70%)',
        filter: 'blur(60px)'
      }} />
      <div style={{
        position: 'absolute', bottom: -200, right: -160, width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181,133,242,0.45) 0%, rgba(181,133,242,0) 70%)',
        filter: 'blur(70px)'
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 75%)'
      }} />

      <div style={{
        position: 'absolute', top: 36, left: 44, zIndex: 3,
        display: 'flex', alignItems: 'center', gap: 12,
        filter: 'drop-shadow(0 0 16px rgba(181,133,242,0.4))'
      }}>
        <img src="assets/logo-on-black.png" alt="Quely" style={{ height: 28 }} />
      </div>

      <div style={{
        position: 'absolute', top: 44, right: 44, zIndex: 3,
        display: 'inline-flex', alignItems: 'center', gap: 10,
        fontFamily: 'Geist Mono, ui-monospace, monospace',
        fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.55)', fontWeight: 500
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: 999, background: '#16A34A',
          boxShadow: '0 0 10px #16A34A'
        }} />
        {t.v4_metaTag}
      </div>

      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2
      }}>
        <ScreenshotSlot id="repost-v4"
          width={540} height={420}
          shadow="0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px -10px rgba(92,40,164,0.55), 0 0 120px rgba(181,133,242,0.25)" />
      </div>

      <div style={{
        position: 'absolute', bottom: 32, left: 44, right: 44, zIndex: 3,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{
          fontSize: 16, color: 'rgba(255,255,255,0.7)',
          letterSpacing: '-0.01em', maxWidth: 640
        }}>{t.v4_takeaway}</div>
        <div style={{
          padding: '11px 20px', borderRadius: 999,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.18)',
          backdropFilter: 'blur(8px)',
          color: '#fff', fontSize: 14, fontWeight: 600
        }}>{t.cta}</div>
      </div>
    </div>
  );
}

/* ---------- App ---------- */

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [editing, setEditing] = React.useState(null);

  return (
    <>
      <DesignCanvas title="Quely · LinkedIn — Repost Templates">
        <DCSection id="linkedin" title="LinkedIn Square (1080 × 1080) — drop your screenshot, edit copy in Tweaks">
          <DCArtboard id="minimal" label="01 · Annotated evidence" width={LINKEDIN_W} height={LINKEDIN_H} onEdit={() => setEditing('minimal')}>
            <PostMinimal t={t} />
          </DCArtboard>
          <DCArtboard id="editorial" label="02 · Newsroom front page" width={LINKEDIN_W} height={LINKEDIN_H} onEdit={() => setEditing('editorial')}>
            <PostEditorial t={t} />
          </DCArtboard>
          <DCArtboard id="textured" label="03 · Textured & layered" width={LINKEDIN_W} height={LINKEDIN_H} onEdit={() => setEditing('textured')}>
            <PostTextured t={t} />
          </DCArtboard>
          <DCArtboard id="dark" label="04 · Dark mode / premium" width={LINKEDIN_W} height={LINKEDIN_H} onEdit={() => setEditing('dark')}>
            <PostDark t={t} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      {editing && (
        <TweaksPanel
          key={editing}
          title={
            editing === 'minimal' ? 'Edit: 01 · Annotated' :
            editing === 'editorial' ? 'Edit: 02 · Newsroom' :
            editing === 'textured' ? 'Edit: 03 · Textured' :
            'Edit: 04 · Dark'
          }
          onClose={() => setEditing(null)}
        >
          <TweakSection label="Shared" />
          <TweakText label="CTA" value={t.cta} onChange={(v) => setTweak('cta', v)} />

          <TweakSection label="Template Copy" />
          {editing === 'minimal' && (
            <>
              <TweakText label="Top date stamp" value={t.v1_topNote} onChange={(v) => setTweak('v1_topNote', v)} />
              <TweakText label="Margin headline" value={t.v1_circleHighlight} onChange={(v) => setTweak('v1_circleHighlight', v)} />
              <TweakText label="Margin subtext" value={t.v1_circleSub} multiline onChange={(v) => setTweak('v1_circleSub', v)} />
              <TweakText label="Bottom note" value={t.v1_bottomNote} multiline onChange={(v) => setTweak('v1_bottomNote', v)} />
            </>
          )}

          {editing === 'editorial' && (
            <>
              <TweakText label="Eyebrow" value={t.v2_eyebrow} onChange={(v) => setTweak('v2_eyebrow', v)} />
              <TweakText label="Headline (lead)" value={t.v2_headline} onChange={(v) => setTweak('v2_headline', v)} />
              <TweakText label="Headline (highlighted)" value={t.v2_headlineHighlight} onChange={(v) => setTweak('v2_headlineHighlight', v)} />
              <TweakText label="Dek / subhead" value={t.v2_dek} multiline onChange={(v) => setTweak('v2_dek', v)} />
              <TweakText label="Byline" value={t.v2_byline} onChange={(v) => setTweak('v2_byline', v)} />
              <TweakText label="Exhibit caption" value={t.v2_exhibit} onChange={(v) => setTweak('v2_exhibit', v)} />
            </>
          )}

          {editing === 'textured' && (
            <>
              <TweakText label="Eyebrow" value={t.v3_eyebrow} onChange={(v) => setTweak('v3_eyebrow', v)} />
              <TweakText label="Filed-under line" value={t.v3_filed} onChange={(v) => setTweak('v3_filed', v)} />
            </>
          )}

          {editing === 'dark' && (
            <>
              <TweakText label="Top-right meta tag" value={t.v4_metaTag} onChange={(v) => setTweak('v4_metaTag', v)} />
              <TweakText label="Bottom takeaway" value={t.v4_takeaway} multiline onChange={(v) => setTweak('v4_takeaway', v)} />
            </>
          )}
          
          <div style={{ marginTop: 16 }}>
            <TweakButton label="Done" onClick={() => setEditing(null)} />
          </div>
        </TweaksPanel>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
