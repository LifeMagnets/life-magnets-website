import Link from 'next/link'

const milestones = [
  {
    label: 'Birthdays',
    desc: 'From first birthdays to milestone years — a custom magnet makes the moment unforgettable.',
  },
  {
    label: 'Anniversaries',
    desc: 'Celebrate years together with a photo keepsake they\'ll display with pride.',
  },
  {
    label: 'Graduations',
    desc: 'Cap and gown, diploma in hand — mark the achievement with something lasting.',
  },
  {
    label: 'New Baby',
    desc: 'Birth announcements, nursery photos, tiny fingers — the perfect new arrival keepsake.',
  },
  {
    label: 'Retirement',
    desc: 'Honor a career well-lived with a custom magnet full of memories.',
  },
  {
    label: 'Any Big Moment',
    desc: 'Promotions, moves, reunions — if it matters to you, it\'s worth commemorating.',
  },
]

export default function MilestonesPage() {
  return (
    <div>

      {/* Header */}
      <section style={{ background: 'linear-gradient(to bottom, #fffbef 0%, #fdf0c0 100%)', padding: '64px 16px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Link href="/custom" style={{ display: 'inline-block', marginBottom: 24, color: '#c8860a', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            ← Back to Custom Orders
          </Link>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8860a', marginBottom: 14 }}>Custom Magnets</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 16 }}>
            Milestone Magnets
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4a7a84', lineHeight: 1.7 }}>
            Birthdays, anniversaries, graduations, and every big moment in between — custom magnets that become keepsakes.
          </p>
        </div>
      </section>

      {/* Milestone types */}
      <section style={{ background: '#fafaf8', padding: '56px 16px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1a3a40', textAlign: 'center', marginBottom: 36 }}>Every Big Moment Deserves a Keepsake</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: 20 }}>
            {milestones.map(m => (
              <div key={m.label} style={{ background: 'white', border: '2px solid rgba(240,180,41,0.2)', borderRadius: 16, padding: '26px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f0b429', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1a3a40', margin: 0 }}>{m.label}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#4a7a84', lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing + pricing */}
      <section style={{ background: 'white', padding: '48px 16px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1a3a40', marginBottom: 8 }}>Sizes & Pricing</h2>
          <p style={{ fontSize: '0.9rem', color: '#4a7a84', lineHeight: 1.7, marginBottom: 28 }}>
            All magnets are handcrafted and ship in 3–5 business days. Price per magnet decreases with quantity.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
            {['2×2 Square', '2×3 Portrait', '3×2 Landscape'].map(s => (
              <div key={s} style={{ padding: '10px 18px', background: '#fffbef', border: '2px solid rgba(240,180,41,0.3)', borderRadius: 10, fontWeight: 700, color: '#c8860a', fontSize: '0.88rem' }}>
                {s}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
            {[
              { label: '1–9', price: '$8.99' },
              { label: '10–24', price: '$7.49' },
              { label: '25–49', price: '$6.49' },
              { label: '50+', price: '$5.99' },
            ].map(t => (
              <div key={t.label} style={{ padding: '8px 16px', background: '#fafaf8', border: '1px solid #e8d8a0', borderRadius: 8, fontSize: '0.82rem', color: '#4a7a84', fontWeight: 600 }}>
                {t.label} magnets: <strong style={{ color: '#1a3a40' }}>{t.price} each</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#fafaf8', padding: '48px 16px 72px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1a3a40', marginBottom: 12 }}>Ready to Make It?</h2>
          <p style={{ fontSize: '0.95rem', color: '#4a7a84', lineHeight: 1.7, marginBottom: 32 }}>
            Upload your photo, choose your size and quantity, and add any custom text — names, dates, a short message. We'll take it from there.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/custom/build?category=milestones" style={{ display: 'inline-block', padding: '15px 36px', background: '#f0b429', color: 'white', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', borderRadius: 12 }}>
              Start Your Order →
            </Link>
            <Link href="/custom" style={{ display: 'inline-block', padding: '15px 36px', background: 'white', color: '#c8860a', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', borderRadius: 12, border: '2px solid #f0b429' }}>
              ← All Custom Options
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
