import Link from 'next/link'
import BoothCallout from '@/components/BoothCallout'

export default function CustomPage() {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #e8f7f9 30%, #c8e8f2 65%, #a8d4e6 100%)', minHeight: '100vh' }}>
      <style>{`.cta-btn { transition: transform 0.15s ease, box-shadow 0.15s ease; } .cta-btn:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 6px 20px rgba(0,0,0,0.18); }`}</style>

      {/* Header */}
      <section style={{ padding: '64px 16px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5ba3ac', marginBottom: 14 }}>Custom Magnets</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 16 }}>
            Make It Yours
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6a8e95', lineHeight: 1.7 }}>
            Upload your photo or choose your background, pick your size, and we'll handcraft your magnets and ship them straight to you.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <section style={{ padding: '0 16px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 28 }}>

          {/* Milestones */}
          <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.09)', border: '2px solid rgba(232,196,110,0.55)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '36px 36px 24px', textAlign: 'center' }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, background: '#e8c46e', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M18 6 L20.5 13H28L22 17.5L24.5 24.5L18 20L11.5 24.5L14 17.5L8 13H15.5Z" stroke="white" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a3a40', marginBottom: 8 }}>Milestones</h2>
              <p style={{ fontSize: '0.95rem', color: '#6a8e95', lineHeight: 1.6, margin: 0 }}>
                Birthdays, anniversaries, graduations, new babies — every big moment deserves a keepsake.
              </p>
            </div>
            <div style={{ padding: '0 36px 32px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Birthday celebrations',
                  'Family reunions',
                  'Anniversaries',
                  'Graduations',
                  'New baby announcements',
                  'Retirement',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#e8c46e', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: '#1a3a40', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ flex: 1 }} />
              <div style={{ background: '#fdf8ec', border: '1.5px solid rgba(232,196,110,0.3)', borderRadius: 10, padding: '12px 16px', fontSize: '0.85rem', color: '#b89558', fontWeight: 700 }}>
                From $5.99/magnet · priority shipping options available
              </div>
              <BoothCallout
                href="/events"
                badgeColor="#e8c46e"
                confettiColors={['#e8c46e', '#fde68a', '#ffffff', '#fbbf24', '#fff3cd']}
              />
              <Link href="/custom/milestones" className="cta-btn" style={{ display: 'block', textAlign: 'center', padding: '14px 0', background: '#e8c46e', color: 'white', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', borderRadius: 12 }}>
                Shop Milestone Magnets →
              </Link>
            </div>
          </div>

          {/* Build Your Own */}
          <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.09)', border: '2px solid rgba(91,163,172,0.45)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '36px 36px 24px', textAlign: 'center' }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, background: '#5ba3ac', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="4" y="4" width="28" height="28" rx="4" stroke="white" strokeWidth="2.5" />
                  <path d="M4 22 L11 15 L17 21 L23 14 L32 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="3" fill="white" />
                </svg>
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a3a40', marginBottom: 8 }}>Build Your Own</h2>
              <p style={{ fontSize: '0.95rem', color: '#6a8e95', lineHeight: 1.6, margin: 0 }}>
                Upload any photo and choose your size. Perfect for family photos, pets, milestone moments, and everything in between.
              </p>
            </div>
            <div style={{ padding: '0 36px 32px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: '2×2 Square', desc: 'Classic, compact' },
                  { label: '2×3 Portrait', desc: 'Tall format' },
                  { label: '3×2 Landscape', desc: 'Wide format' },
                ].map(s => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5ba3ac', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: '#1a3a40', fontWeight: 700 }}>{s.label}</span>
                    <span style={{ fontSize: '0.85rem', color: '#6a8e95' }}>— {s.desc}</span>
                  </div>
                ))}
              </div>
              <div style={{ flex: 1 }} />
              <div style={{ background: '#f0fbfd', border: '1.5px solid rgba(91,163,172,0.25)', borderRadius: 10, padding: '12px 16px', fontSize: '0.85rem', color: '#5ba3ac', fontWeight: 700 }}>
                From $5.99/magnet · priority shipping options available
              </div>
              <div style={{ background: '#e8f7f9', border: '1.5px solid rgba(91,163,172,0.25)', borderRadius: 10, padding: '12px 16px', fontSize: '0.85rem', color: '#6a8e95', lineHeight: 1.5 }}>
                ✦ Themed & customizable gift package options available
              </div>
              <Link href="/custom/build" className="cta-btn" style={{ display: 'block', textAlign: 'center', padding: '14px 0', background: '#5ba3ac', color: 'white', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', borderRadius: 12 }}>
                Create Now →
              </Link>
            </div>
          </div>

          {/* Wedding Magnets */}
          <div style={{ background: 'white', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,0,0,0.09)', border: '2px solid rgba(200,103,93,0.5)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '36px 36px 24px', textAlign: 'center' }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, background: '#c8675d', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M18 28 C18 28 7 20 7 13 C7 9.7 9.7 7 13 7 C15.1 7 17 8.1 18 9.8 C19 8.1 20.9 7 23 7 C26.3 7 29 9.7 29 13 C29 20 18 28 18 28Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(255,255,255,0.2)" />
                </svg>
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1a3a40', marginBottom: 8 }}>Wedding Magnets</h2>
              <p style={{ fontSize: '0.95rem', color: '#6a8e95', lineHeight: 1.6, margin: 0 }}>
                Save the dates, thank-you favors, day-of keepsakes — beautiful magnets for every moment of your celebration.
              </p>
            </div>
            <div style={{ padding: '0 36px 32px', flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Save the Date magnets',
                  'Wedding day keepsakes',
                  'Thank-you favors',
                  'Engagement announcements',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#c8675d', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: '#1a3a40', fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ flex: 1 }} />
              <div style={{ background: '#fff8f5', border: '1.5px solid rgba(200,103,93,0.3)', borderRadius: 10, padding: '12px 16px', fontSize: '0.85rem', color: '#c8675d', fontWeight: 700 }}>
                From $5.99/magnet · priority shipping options available
              </div>
              <BoothCallout
                href="/events/weddings"
                badgeColor="#c8675d"
                confettiColors={['#C0C0C0', '#E0E0E0', '#A8A8A8', '#ffffff', '#D8D8D8', '#B8B8C8']}
              />
              <Link href="/custom/wedding" className="cta-btn" style={{ display: 'block', textAlign: 'center', padding: '14px 0', background: '#c8675d', color: 'white', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', borderRadius: 12 }}>
                Shop Wedding Magnets →
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
