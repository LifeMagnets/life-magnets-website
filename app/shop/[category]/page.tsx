import Link from 'next/link'

const categoryMeta: Record<string, { label: string; tagline: string; accent: string; bg: string }> = {
  'holidays-seasons': {
    label: 'Holidays & Seasons',
    tagline: 'Birthdays, Christmas, Vacation, and all the moments in between',
    accent: '#e8c46e',
    bg: 'linear-gradient(to bottom, #fdf8ec 0%, #faefd0 100%)',
  },
  'home': {
    label: 'Home',
    tagline: 'Creative, practical, or just fun designs for your home or office.',
    accent: '#c8675d',
    bg: 'linear-gradient(to bottom, #fdf2f0 0%, #f5e9d0 100%)',
  },
  'kids': {
    label: 'Kids',
    tagline: 'Playful and creative magnets that kids (and parents) will love.',
    accent: '#6a8e95',
    bg: 'linear-gradient(to bottom, #eaf4f6 0%, #d4eef5 100%)',
  },
  'inspirational': {
    label: 'Inspirational',
    tagline: 'Words and designs to brighten any fridge, locker, or workspace',
    accent: '#7ec4cd',
    bg: 'linear-gradient(to bottom, #e0f8fb 0%, #d4eef5 100%)',
  },
  'nature-travel': {
    label: 'Nature & Travel',
    tagline: 'Mountains, beaches, and all the beautiful places that call you back.',
    accent: '#5ba3ac',
    bg: 'linear-gradient(to bottom, #e8f7f9 0%, #d4eef5 100%)',
  },
  'sports-adventure': {
    label: 'Sports & Adventure',
    tagline: 'For the athletes, competitors, and adventure-seekers in your life',
    accent: '#aa8860',
    bg: 'linear-gradient(to bottom, #f5ede8 0%, #f5e9d0 100%)',
  },
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const meta = categoryMeta[category]

  if (!meta) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#5ba3ac', fontSize: '1.8rem', fontWeight: 800, marginBottom: 12 }}>Category not found</h1>
          <Link href="/shop" style={{ color: '#5ba3ac', fontWeight: 700 }}>← Back to Shop</Link>
        </div>
      </div>
    )
  }

  return (
    <div>

      {/* Header */}
      <section style={{ background: meta.bg, padding: '64px 16px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Link href="/shop" style={{ display: 'inline-block', marginBottom: 24, color: meta.accent, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            ← Back to Shop
          </Link>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 14 }}>{meta.label}</h1>
          <p style={{ fontSize: '1.05rem', color: '#6a8e95', lineHeight: 1.7 }}>{meta.tagline}</p>
        </div>
      </section>

      {/* Products — coming soon placeholder */}
      <section style={{ background: '#fafaf8', padding: '80px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(91,163,172,0.08)', border: '2px solid rgba(91,163,172,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
            <div style={{ width: 40, height: 40, borderRadius: 6, background: 'rgba(91,163,172,0.15)', border: '2px solid rgba(91,163,172,0.3)' }} />
          </div>
          <h2 style={{ color: '#1a3a40', fontSize: '1.6rem', fontWeight: 800, marginBottom: 14 }}>Designs Coming Soon</h2>
          <p style={{ color: '#6a8e95', fontSize: '1rem', lineHeight: 1.7, marginBottom: 36 }}>
            We're adding {meta.label.toLowerCase()} designs to this collection. In the meantime, you can place a custom order with your own photo.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/custom" style={{
              display: 'inline-block', padding: '13px 28px',
              background: meta.accent, color: 'white',
              fontWeight: 700, fontSize: '0.95rem',
              textDecoration: 'none', borderRadius: 10,
            }} className="btn">
              Order a Custom Magnet
            </Link>
            <Link href="/shop" style={{
              display: 'inline-block', padding: '13px 28px',
              background: 'white', color: meta.accent,
              fontWeight: 700, fontSize: '0.95rem',
              textDecoration: 'none', borderRadius: 10,
              border: `2px solid ${meta.accent}`,
            }} className="btn">
              Browse Other Categories
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
