import Link from 'next/link'
import Image from 'next/image'

const subcategories = [
  { slug: 'running-races', label: 'Running & Races' },
  { slug: 'team-sports',   label: 'Team Sports' },
]

type Product = { id: string; name: string; image: string; sub: string; group: string }

const products: Product[] = [
  // ── Running ──────────────────────────────────────────────
  { id: '5k',       name: '5K',                 image: '/sports/5k.png',       sub: 'running-races', group: 'running' },
  { id: '10k',      name: '10K',                image: '/sports/10k.png',      sub: 'running-races', group: 'running' },
  { id: '13-1',     name: '13.1 Half Marathon', image: '/sports/13-1.png',     sub: 'running-races', group: 'running' },
  { id: '25k',      name: '25K',                image: '/sports/25k.png',      sub: 'running-races', group: 'running' },
  { id: '26-2',     name: '26.2 Marathon',      image: '/sports/26-2.png',     sub: 'running-races', group: 'running' },
  { id: '50m',      name: '50 Mile',            image: '/sports/50m.png',      sub: 'running-races', group: 'running' },
  { id: '100m',     name: '100 Mile',           image: '/sports/100m.png',     sub: 'running-races', group: 'running' },
  { id: '26-2-v8',  name: '26.2 Marathon — v2', image: '/sports/26-2-v8.png',  sub: 'running-races', group: 'running' },
  { id: '26-2-v9',  name: '26.2 Marathon — v3', image: '/sports/26-2-v9.png',  sub: 'running-races', group: 'running' },
  { id: '26-2-v10', name: '26.2 Marathon — v4', image: '/sports/26-2-v10.png', sub: 'running-races', group: 'running' },
  { id: '26-2-v11', name: '26.2 Marathon — v5', image: '/sports/26-2-v11.png', sub: 'running-races', group: 'running' },
  { id: '26-2-v12', name: '26.2 Marathon — v6', image: '/sports/26-2-v12.png', sub: 'running-races', group: 'running' },
  // ── Triathlon ─────────────────────────────────────────────
  // (coming soon)
]

const SECTION_TITLE: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 800,
  color: '#1a3a40',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  borderBottom: '2px solid rgba(0,151,167,0.25)',
  paddingBottom: 10,
  marginBottom: 20,
  marginTop: 40,
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#f5f5f3', padding: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: 160, height: 160, borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
          <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} unoptimized />
        </div>
      </div>
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#1a3a40', marginBottom: 4 }}>{product.name}</h2>
        <p style={{ fontSize: '0.82rem', color: '#4a7a84', marginBottom: 16, flex: 1 }}>2×2 square · handcrafted</p>
        <Link href="/custom" className="btn" style={{ display: 'block', textAlign: 'center', padding: '10px 0', background: '#aa8860', color: 'white', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', borderRadius: 10 }}>
          Order This Design
        </Link>
      </div>
    </div>
  )
}

export default async function SportsAdventurePage({
  searchParams,
}: {
  searchParams: Promise<{ sub?: string }>
}) {
  const { sub } = await searchParams
  const activeSub = subcategories.find(s => s.slug === sub)
  const filtered = sub ? products.filter(p => p.sub === sub) : products

  const showRunning = !sub || sub === 'running-races'
  const showTriathlon = !sub || sub === 'running-races'
  const showTeamSports = !sub || sub === 'team-sports'

  const runningProducts = filtered.filter(p => p.group === 'running')

  return (
    <div>

      {/* Header */}
      <section style={{ background: 'linear-gradient(to bottom, #f8f0e8 0%, #f5e6c8 100%)', padding: '64px 16px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Link href="/shop" style={{ display: 'inline-block', marginBottom: 24, color: '#aa8860', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            ← Back to Shop
          </Link>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aa8860', marginBottom: 14 }}>Pre-Made Designs</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 16 }}>
            Sports & Adventure{activeSub ? ` — ${activeSub.label}` : ''}
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4a7a84', lineHeight: 1.7 }}>
            Celebrate your finish line. Race distance magnets handcrafted and shipped straight to you.
          </p>
        </div>
      </section>

      {/* Subcategory filter tabs */}
      <div style={{ background: '#f8f0e8', borderBottom: '1px solid rgba(170,136,96,0.2)', padding: '0 16px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 4, overflowX: 'auto', paddingBottom: 1 }}>
          <Link href="/shop/sports-adventure" style={{ display: 'inline-block', padding: '14px 18px', fontWeight: sub ? 600 : 800, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap', color: sub ? '#4a7a84' : '#aa8860', borderBottom: sub ? 'none' : '3px solid #aa8860' }}>
            All
          </Link>
          {subcategories.map(s => (
            <Link key={s.slug} href={`/shop/sports-adventure?sub=${s.slug}`} style={{ display: 'inline-block', padding: '14px 18px', fontWeight: sub === s.slug ? 800 : 600, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap', color: sub === s.slug ? '#aa8860' : '#4a7a84', borderBottom: sub === s.slug ? '3px solid #aa8860' : 'none' }}>
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Product sections */}
      <section style={{ background: '#fafaf8', padding: '32px 16px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* ── Running section ── */}
          {showRunning && (
            <>
              <div style={{ ...SECTION_TITLE, marginTop: 24 }}>Running</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
                {runningProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}

          {/* ── Triathlon section ── */}
          {showTriathlon && (
            <>
              <div style={{ ...SECTION_TITLE }}>Triathlon</div>
              <div style={{ background: 'white', borderRadius: 14, padding: '32px 28px', textAlign: 'center', border: '2px dashed rgba(170,136,96,0.25)' }}>
                <p style={{ color: '#4a7a84', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 20 }}>
                  Triathlon designs are coming soon. In the meantime, order a custom magnet to celebrate your race.
                </p>
                <Link href="/custom" style={{ display: 'inline-block', padding: '11px 24px', background: '#aa8860', color: 'white', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', borderRadius: 10 }}>
                  Order a Custom Magnet
                </Link>
              </div>
            </>
          )}

          {/* ── Team Sports section ── */}
          {showTeamSports && !showRunning && (
            <div style={{ maxWidth: 540, margin: '0 auto', textAlign: 'center', padding: '40px 0' }}>
              <h2 style={{ color: '#1a3a40', fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>Coming Soon</h2>
              <p style={{ color: '#4a7a84', fontSize: '1rem', lineHeight: 1.7, marginBottom: 32 }}>
                We're adding team sports designs to this collection. In the meantime, you can order a custom magnet with your own photo.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/custom" className="btn" style={{ display: 'inline-block', padding: '12px 24px', background: '#aa8860', color: 'white', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 10 }}>
                  Order a Custom Magnet
                </Link>
                <Link href="/shop/sports-adventure" className="btn" style={{ display: 'inline-block', padding: '12px 24px', background: 'white', color: '#aa8860', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 10, border: '2px solid #aa8860' }}>
                  See All Sports & Adventure
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  )
}
