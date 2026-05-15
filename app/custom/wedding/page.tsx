import Link from 'next/link'

const designTypes = [
  {
    label: 'Save the Date',
    desc: 'Mail something they\'ll actually keep — a beautiful magnet with your date and photo.',
  },
  {
    label: 'Day-of Keepsakes',
    desc: 'Guests take home a magnet from the reception. A favor and a memory in one.',
  },
  {
    label: 'Thank-You Favors',
    desc: 'Send gratitude with a photo magnet — a heartfelt keepsake from your big day.',
  },
  {
    label: 'Engagement Announcements',
    desc: 'Share the news with a custom photo magnet your loved ones will display proudly.',
  },
]

export default function WeddingMagnetsPage() {
  return (
    <div>

      {/* Header */}
      <section style={{ background: 'linear-gradient(to bottom, #fff4ef 0%, #fde0d0 100%)', padding: '64px 16px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Link href="/custom" style={{ display: 'inline-block', marginBottom: 24, color: '#e8734a', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            ← Back to Custom Orders
          </Link>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e8734a', marginBottom: 14 }}>Custom Magnets</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 16 }}>
            Wedding Magnets
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4a7a84', lineHeight: 1.7 }}>
            From save the dates to day-of keepsakes — beautiful, personalized magnets for every chapter of your celebration.
          </p>
        </div>
      </section>

      {/* Design types */}
      <section style={{ background: '#fafaf8', padding: '56px 16px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1a3a40', textAlign: 'center', marginBottom: 36 }}>What We Can Make For You</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: 20 }}>
            {designTypes.map(d => (
              <div key={d.label} style={{ background: 'white', border: '2px solid rgba(232,115,74,0.15)', borderRadius: 16, padding: '28px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e8734a', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1a3a40', margin: 0 }}>{d.label}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#4a7a84', lineHeight: 1.65, margin: 0 }}>{d.desc}</p>
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
            All magnets are handcrafted. Price per magnet decreases with quantity — perfect for larger wedding orders.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
            {[
              { label: '2×2 Square' },
              { label: '2×3 Portrait' },
              { label: '3×2 Landscape' },
            ].map(s => (
              <div key={s.label} style={{ padding: '10px 18px', background: '#fff4ef', border: '2px solid rgba(232,115,74,0.25)', borderRadius: 10, fontWeight: 700, color: '#e8734a', fontSize: '0.88rem' }}>
                {s.label}
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
              <div key={t.label} style={{ padding: '8px 16px', background: '#fafaf8', border: '1px solid #e8d0c8', borderRadius: 8, fontSize: '0.82rem', color: '#4a7a84', fontWeight: 600 }}>
                {t.label} magnets: <strong style={{ color: '#1a3a40' }}>{t.price} each</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA split */}
      <section style={{ background: '#fafaf8', padding: '48px 16px 72px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>

          {/* Order online */}
          <div style={{ background: 'white', border: '2px solid rgba(232,115,74,0.2)', borderRadius: 18, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1a3a40', margin: 0 }}>Order Online</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a7a84', lineHeight: 1.65, margin: 0 }}>
              Upload your photo, choose your size and quantity, and place your order directly. We'll handcraft and ship them to you.
            </p>
            <Link href="/custom/build?category=wedding" style={{ display: 'block', textAlign: 'center', padding: '14px 0', background: '#e8734a', color: 'white', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 11, marginTop: 'auto' }}>
              Start Your Wedding Order →
            </Link>
          </div>

          {/* Booth package */}
          <div style={{ background: 'linear-gradient(135deg, #1a3a40 0%, #0d2a30 100%)', border: '2px solid rgba(232,115,74,0.4)', borderRadius: 18, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'inline-block', background: '#e8734a', color: 'white', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 6, alignSelf: 'flex-start' }}>
              Live Experience
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'white', margin: 0 }}>Wedding Booth Package</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, margin: 0 }}>
              Bring the magic to your reception. Guests print custom magnets on-site with our live booth experience.
            </p>
            <Link href="/events/weddings" style={{ display: 'block', textAlign: 'center', padding: '14px 0', background: '#e8734a', color: 'white', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 11, marginTop: 'auto' }}>
              See Booth Packages →
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}
