import Link from 'next/link'

const subcategories = [
  { slug: 'beach',            label: 'Beach' },
  { slug: 'hiking-mountains', label: 'Hiking & Mountains' },
  { slug: 'travel',           label: 'Travel' },
  { slug: 'nature',           label: 'Nature' },
]

export default async function NatureTravelPage({
  searchParams,
}: {
  searchParams: Promise<{ sub?: string }>
}) {
  const { sub } = await searchParams
  const activeSub = subcategories.find(s => s.slug === sub)

  return (
    <div>

      {/* Header */}
      <section style={{ background: 'linear-gradient(to bottom, #e8f7f9 0%, #d4eef5 100%)', padding: '64px 16px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Link href="/shop" style={{ display: 'inline-block', marginBottom: 24, color: '#0097a7', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            ← Back to Shop
          </Link>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0097a7', marginBottom: 14 }}>Pre-Made Designs</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 16 }}>
            Nature & Travel{activeSub ? ` — ${activeSub.label}` : ''}
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4a7a84', lineHeight: 1.7 }}>
            Mountains, beaches, and all the beautiful places that call you back.
          </p>
        </div>
      </section>

      {/* Subcategory filter tabs */}
      <div style={{ background: '#e8f7f9', borderBottom: '1px solid rgba(0,151,167,0.2)', padding: '0 16px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 4, overflowX: 'auto', paddingBottom: 1 }}>
          <Link href="/shop/nature-travel" style={{ display: 'inline-block', padding: '14px 18px', fontWeight: sub ? 600 : 800, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap', color: sub ? '#4a7a84' : '#0097a7', borderBottom: sub ? 'none' : '3px solid #0097a7' }}>
            All
          </Link>
          {subcategories.map(s => (
            <Link key={s.slug} href={`/shop/nature-travel?sub=${s.slug}`} style={{ display: 'inline-block', padding: '14px 18px', fontWeight: sub === s.slug ? 800 : 600, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap', color: sub === s.slug ? '#0097a7' : '#4a7a84', borderBottom: sub === s.slug ? '3px solid #0097a7' : 'none' }}>
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Coming soon */}
      <section style={{ background: '#fafaf8', padding: '80px 16px' }}>
        <div style={{ maxWidth: 540, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#1a3a40', fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>Designs Coming Soon</h2>
          <p style={{ color: '#4a7a84', fontSize: '1rem', lineHeight: 1.7, marginBottom: 32 }}>
            We're building out this collection. In the meantime, you can order a custom magnet with your own photo or image.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/custom" className="btn" style={{ display: 'inline-block', padding: '12px 24px', background: '#0097a7', color: 'white', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 10 }}>
              Order a Custom Magnet
            </Link>
            <Link href="/shop" className="btn" style={{ display: 'inline-block', padding: '12px 24px', background: 'white', color: '#0097a7', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 10, border: '2px solid #0097a7' }}>
              Browse Other Categories
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
