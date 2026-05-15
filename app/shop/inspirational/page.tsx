import Link from 'next/link'
import Image from 'next/image'

const subcategories = [
  { slug: 'motivational',     label: 'Motivational' },
  { slug: 'faith-scripture',  label: 'Faith & Scripture' },
]

const products = [
  { id: 'todays-goals',     name: "Today's Goals",                    image: '/inspirational/todays-goals.png',     sub: 'motivational' },
  { id: 'be-still',         name: 'Be Still',                         image: '/inspirational/be-still.png',         sub: 'motivational faith-scripture' },
  { id: 'brilliant-minds',  name: 'Brilliant Minds — Eleanor Roosevelt', image: '/inspirational/brilliant-minds.png', sub: 'motivational' },
  { id: 'gods-mind',        name: "God's Mind — George MacDonald",    image: '/inspirational/gods-mind.png',        sub: 'faith-scripture' },
  { id: 'faith-waits',      name: 'Faith Waits — George MacDonald',   image: '/inspirational/faith-waits.png',      sub: 'faith-scripture' },
  { id: 'start-with-jesus', name: 'Start Today with Jesus',           image: '/inspirational/start-with-jesus.png', sub: 'faith-scripture' },
  { id: 'deep-waters',      name: 'Deep Waters — Isaiah 43:2',        image: '/inspirational/deep-waters.png',      sub: 'faith-scripture' },
  { id: 'strength-dignity', name: 'Strength & Dignity — Proverbs 31:25', image: '/inspirational/strength-dignity.png', sub: 'faith-scripture' },
  { id: 'life-abundantly',  name: 'Life Abundantly — John 10:10',     image: '/inspirational/life-abundantly.png',  sub: 'faith-scripture' },
]

export default async function InspirationalPage({
  searchParams,
}: {
  searchParams: Promise<{ sub?: string }>
}) {
  const { sub } = await searchParams
  const activeSub = subcategories.find(s => s.slug === sub)
  const filtered = sub ? products.filter(p => p.sub.split(' ').includes(sub)) : products

  return (
    <div>

      {/* Header */}
      <section style={{ background: 'linear-gradient(to bottom, #e0f8fb 0%, #d4eef5 100%)', padding: '64px 16px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Link href="/shop" style={{ display: 'inline-block', marginBottom: 24, color: '#7ec4cd', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            ← Back to Shop
          </Link>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7ec4cd', marginBottom: 14 }}>Pre-Made Designs</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 16 }}>
            Inspirational{activeSub ? ` — ${activeSub.label}` : ''}
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6a8e95', lineHeight: 1.7 }}>
            Words and designs to brighten any fridge, locker, or workspace.
          </p>
        </div>
      </section>

      {/* Subcategory filter tabs */}
      <div style={{ background: '#e0f8fb', borderBottom: '1px solid rgba(38,198,218,0.2)', padding: '0 16px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 4, overflowX: 'auto', paddingBottom: 1 }}>
          <Link href="/shop/inspirational" style={{ display: 'inline-block', padding: '14px 18px', fontWeight: sub ? 600 : 800, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap', color: sub ? '#6a8e95' : '#7ec4cd', borderBottom: sub ? 'none' : '3px solid #7ec4cd' }}>
            All
          </Link>
          {subcategories.map(s => (
            <Link key={s.slug} href={`/shop/inspirational?sub=${s.slug}`} style={{ display: 'inline-block', padding: '14px 18px', fontWeight: sub === s.slug ? 800 : 600, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap', color: sub === s.slug ? '#7ec4cd' : '#6a8e95', borderBottom: sub === s.slug ? '3px solid #7ec4cd' : 'none' }}>
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <section style={{ background: '#fafaf8', padding: '48px 16px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
          {filtered.map(product => (
            <div key={product.id} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#f5f5f3', padding: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: 160, height: 160, borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} unoptimized />
                </div>
              </div>
              <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h2 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1a3a40', marginBottom: 4, lineHeight: 1.3 }}>{product.name}</h2>
                <p style={{ fontSize: '0.82rem', color: '#6a8e95', marginBottom: 16, flex: 1 }}>2×2 square · handcrafted</p>
                <Link href="/custom" className="btn" style={{ display: 'block', textAlign: 'center', padding: '10px 0', background: '#7ec4cd', color: 'white', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', borderRadius: 10 }}>
                  Order This Design
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
