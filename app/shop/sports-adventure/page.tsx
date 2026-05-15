import Link from 'next/link'
import ProductGrid from '@/components/ProductGrid'

const subcategories = [
  { slug: 'running-races', label: 'Running & Races' },
  { slug: 'surfing',       label: 'Surfing' },
  { slug: 'camping',       label: 'Camping' },
  { slug: 'team-sports',   label: 'Team Sports' },
]

type Product = { id: string; name: string; image: string; sub: string; group: string }

const products: Product[] = [
  // ── Running ──────────────────────────────────────────────
  { id: '5k',       name: '5K',                  image: '/sports/5k.png',       sub: 'running-races', group: 'running' },
  { id: '10k',      name: '10K',                 image: '/sports/10k.png',      sub: 'running-races', group: 'running' },
  { id: '13-1',     name: '13.1 Half Marathon',  image: '/sports/13-1.png',     sub: 'running-races', group: 'running' },
  { id: '25k',      name: '25K',                 image: '/sports/25k.png',      sub: 'running-races', group: 'running' },
  { id: '26-2',     name: '26.2 Marathon',        image: '/sports/26-2.png',     sub: 'running-races', group: 'running' },
  { id: '50m',      name: '50 Mile',              image: '/sports/50m.png',      sub: 'running-races', group: 'running' },
  { id: '100m',     name: '100 Mile',             image: '/sports/100m.png',     sub: 'running-races', group: 'running' },
  { id: '26-2-v8',  name: '26.2 Marathon — v2',  image: '/sports/26-2-v8.png',  sub: 'running-races', group: 'running' },
  { id: '26-2-v9',  name: '26.2 Marathon — v3',  image: '/sports/26-2-v9.png',  sub: 'running-races', group: 'running' },
  { id: '26-2-v10', name: '26.2 Marathon — v4',  image: '/sports/26-2-v10.png', sub: 'running-races', group: 'running' },
  { id: '26-2-v11', name: '26.2 Marathon — v5',  image: '/sports/26-2-v11.png', sub: 'running-races', group: 'running' },
  { id: '26-2-v12', name: '26.2 Marathon — v6',  image: '/sports/26-2-v12.png', sub: 'running-races', group: 'running' },

  // ── Surfing ───────────────────────────────────────────────
  { id: 's1-01', name: 'Dawn Patrol',                   image: '/surfing/individual/surfing1-01.png', sub: 'surfing', group: 'surfing' },
  { id: 's1-02', name: 'Fin',                           image: '/surfing/individual/surfing1-02.png', sub: 'surfing', group: 'surfing' },
  { id: 's1-03', name: 'Surf. Eat. Sleep. Repeat.',     image: '/surfing/individual/surfing1-03.png', sub: 'surfing', group: 'surfing' },
  { id: 's1-04', name: 'Board Wall',                    image: '/surfing/individual/surfing1-04.png', sub: 'surfing', group: 'surfing' },
  { id: 's1-05', name: 'Beach Path',                    image: '/surfing/individual/surfing1-05.png', sub: 'surfing', group: 'surfing' },
  { id: 's1-06', name: 'Wetsuits',                      image: '/surfing/individual/surfing1-06.png', sub: 'surfing', group: 'surfing' },
  { id: 's1-07', name: 'Longboard',                     image: '/surfing/individual/surfing1-07.png', sub: 'surfing', group: 'surfing' },
  { id: 's1-08', name: 'Salty Hair Don\'t Care',        image: '/surfing/individual/surfing1-08.png', sub: 'surfing', group: 'surfing' },
  { id: 's1-09', name: 'One More Set',                  image: '/surfing/individual/surfing1-09.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-01', name: 'Dawn Patrol — v2',              image: '/surfing/individual/surfing2-01.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-02', name: 'Board on Sand',                 image: '/surfing/individual/surfing2-02.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-03', name: 'Board Rack',                    image: '/surfing/individual/surfing2-03.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-04', name: 'Surf Truck',                    image: '/surfing/individual/surfing2-04.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-05', name: 'Surf. Eat. Sleep. Repeat. — v2', image: '/surfing/individual/surfing2-05.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-06', name: 'Dune Path',                     image: '/surfing/individual/surfing2-06.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-07', name: 'Board Shower',                  image: '/surfing/individual/surfing2-07.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-08', name: 'Wave',                          image: '/surfing/individual/surfing2-08.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-09', name: 'Salty Hair Don\'t Care — v2',  image: '/surfing/individual/surfing2-09.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-10', name: 'Sunset Beach',                  image: '/surfing/individual/surfing2-10.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-11', name: 'One More Set — v2',             image: '/surfing/individual/surfing2-11.png', sub: 'surfing', group: 'surfing' },
  { id: 's2-12', name: 'Fins',                          image: '/surfing/individual/surfing2-12.png', sub: 'surfing', group: 'surfing' },
  { id: 's3-01', name: 'Dawn Patrol — v3',              image: '/surfing/individual/surfing3-01.png', sub: 'surfing', group: 'surfing' },
  { id: 's3-02', name: 'Board Collection',              image: '/surfing/individual/surfing3-02.png', sub: 'surfing', group: 'surfing' },
  { id: 's3-03', name: 'One More Set — v3',             image: '/surfing/individual/surfing3-03.png', sub: 'surfing', group: 'surfing' },
  { id: 's3-04', name: 'Surf Truck — v2',               image: '/surfing/individual/surfing3-04.png', sub: 'surfing', group: 'surfing' },
  { id: 's3-05', name: 'I\'d Rather Be Surfing',        image: '/surfing/individual/surfing3-05.png', sub: 'surfing', group: 'surfing' },
  { id: 's3-06', name: 'Surf Crew',                     image: '/surfing/individual/surfing3-06.png', sub: 'surfing', group: 'surfing' },
  { id: 's3-07', name: 'Boardwalk',                     image: '/surfing/individual/surfing3-07.png', sub: 'surfing', group: 'surfing' },
  { id: 's3-08', name: 'Board Detail',                  image: '/surfing/individual/surfing3-08.png', sub: 'surfing', group: 'surfing' },
  { id: 's3-09', name: 'Toes On The Nose',              image: '/surfing/individual/surfing3-09.png', sub: 'surfing', group: 'surfing' },

  // ── Camping ───────────────────────────────────────────────
  { id: 'c1-01', name: 'Gone Camping',                        image: '/camping/individual/camping1-01.png', sub: 'camping', group: 'camping' },
  { id: 'c1-02', name: 'Campfire at Dusk',                    image: '/camping/individual/camping1-02.png', sub: 'camping', group: 'camping' },
  { id: 'c1-03', name: 'Coffee Tastes Better Outside',        image: '/camping/individual/camping1-03.png', sub: 'camping', group: 'camping' },
  { id: 'c1-04', name: 'Misty Forest',                        image: '/camping/individual/camping1-04.png', sub: 'camping', group: 'camping' },
  { id: 'c1-05', name: 'Tent View',                           image: '/camping/individual/camping1-05.png', sub: 'camping', group: 'camping' },
  { id: 'c1-06', name: 'Life Is Better Around The Fire',      image: '/camping/individual/camping1-06.png', sub: 'camping', group: 'camping' },
  { id: 'c1-07', name: 'Lakeside Camp',                       image: '/camping/individual/camping1-07.png', sub: 'camping', group: 'camping' },
  { id: 'c1-08', name: 'Campfires & Constellations',          image: '/camping/individual/camping1-08.png', sub: 'camping', group: 'camping' },
  { id: 'c1-09', name: 'Forest Camp',                         image: '/camping/individual/camping1-09.png', sub: 'camping', group: 'camping' },
  { id: 'c2-01', name: 'Gone Camping — v2',                   image: '/camping/individual/camping2-01.png', sub: 'camping', group: 'camping' },
  { id: 'c2-02', name: 'Canvas Tent',                         image: '/camping/individual/camping2-02.png', sub: 'camping', group: 'camping' },
  { id: 'c2-03', name: 'Life Is Better Around The Fire — v2', image: '/camping/individual/camping2-03.png', sub: 'camping', group: 'camping' },
  { id: 'c2-04', name: 'Forest Trail',                        image: '/camping/individual/camping2-04.png', sub: 'camping', group: 'camping' },
  { id: 'c2-05', name: 'Tent Interior',                       image: '/camping/individual/camping2-05.png', sub: 'camping', group: 'camping' },
  { id: 'c2-06', name: 'Camp Kitchen',                        image: '/camping/individual/camping2-06.png', sub: 'camping', group: 'camping' },
  { id: 'c2-07', name: 'Coffee Tastes Better Outside — v2',   image: '/camping/individual/camping2-07.png', sub: 'camping', group: 'camping' },
  { id: 'c2-08', name: 'Glamping Lights',                     image: '/camping/individual/camping2-08.png', sub: 'camping', group: 'camping' },
  { id: 'c2-09', name: 'Campfires & Constellations — v2',     image: '/camping/individual/camping2-09.png', sub: 'camping', group: 'camping' },
  { id: 'c4-01', name: 'Gone Camping — v3',                   image: '/camping/individual/camping4-01.png', sub: 'camping', group: 'camping' },
  { id: 'c4-02', name: 'Fire Circle',                         image: '/camping/individual/camping4-02.png', sub: 'camping', group: 'camping' },
  { id: 'c4-03', name: 'Life Is Better Around The Fire — v3', image: '/camping/individual/camping4-03.png', sub: 'camping', group: 'camping' },
  { id: 'c4-04', name: 'Coffee & Outdoors',                   image: '/camping/individual/camping4-04.png', sub: 'camping', group: 'camping' },
  { id: 'c4-05', name: 'Bell Tent',                           image: '/camping/individual/camping4-05.png', sub: 'camping', group: 'camping' },
  { id: 'c4-06', name: 'Mountain Lake',                       image: '/camping/individual/camping4-06.png', sub: 'camping', group: 'camping' },
  { id: 'c4-07', name: 'Forest Hike',                         image: '/camping/individual/camping4-07.png', sub: 'camping', group: 'camping' },
  { id: 'c4-08', name: 'Campfires & Constellations — v3',     image: '/camping/individual/camping4-08.png', sub: 'camping', group: 'camping' },
  { id: 'c4-09', name: 'Glamping Setup',                      image: '/camping/individual/camping4-09.png', sub: 'camping', group: 'camping' },
]

const SECTION_TITLE: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 800,
  color: '#1a3a40',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  borderBottom: '2px solid rgba(91,163,172,0.25)',
  paddingBottom: 10,
  marginBottom: 20,
  marginTop: 40,
}


export default async function SportsAdventurePage({
  searchParams,
}: {
  searchParams: Promise<{ sub?: string }>
}) {
  const { sub } = await searchParams
  const activeSub = subcategories.find(s => s.slug === sub)
  const filtered = sub ? products.filter(p => p.sub === sub) : products

  const showRunning  = !sub || sub === 'running-races'
  const showSurfing  = !sub || sub === 'surfing'
  const showCamping  = !sub || sub === 'camping'
  const showTeam     = !sub || sub === 'team-sports'

  return (
    <div>

      {/* Header */}
      <section style={{ background: 'linear-gradient(to bottom, #f5ede8 0%, #f5e9d0 100%)', padding: '64px 16px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Link href="/shop" style={{ display: 'inline-block', marginBottom: 24, color: '#aa8860', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            ← Back to Shop
          </Link>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aa8860', marginBottom: 14 }}>Pre-Made Designs</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 16 }}>
            Sports & Adventure{activeSub ? ` — ${activeSub.label}` : ''}
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6a8e95', lineHeight: 1.7 }}>
            Celebrate your finish lines, favorite waves, and best campsites — handcrafted and shipped straight to you.
          </p>
        </div>
      </section>

      {/* Subcategory tabs */}
      <div style={{ background: '#f5ede8', borderBottom: '1px solid rgba(170,136,96,0.2)', padding: '0 16px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 4, overflowX: 'auto', paddingBottom: 1 }}>
          <Link href="/shop/sports-adventure" style={{ display: 'inline-block', padding: '14px 18px', fontWeight: sub ? 600 : 800, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap', color: sub ? '#6a8e95' : '#aa8860', borderBottom: sub ? 'none' : '3px solid #aa8860' }}>
            All
          </Link>
          {subcategories.map(s => (
            <Link key={s.slug} href={`/shop/sports-adventure?sub=${s.slug}`} style={{ display: 'inline-block', padding: '14px 18px', fontWeight: sub === s.slug ? 800 : 600, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap', color: sub === s.slug ? '#aa8860' : '#6a8e95', borderBottom: sub === s.slug ? '3px solid #aa8860' : 'none' }}>
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Product sections */}
      <section style={{ background: '#fafaf8', padding: '32px 16px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Running */}
          {showRunning && (
            <>
              <div style={{ ...SECTION_TITLE, marginTop: 24 }}>Running</div>
              <ProductGrid products={filtered.filter(p => p.group === 'running')} />
              <div style={{ ...SECTION_TITLE }}>Triathlon</div>
              <div style={{ background: 'white', borderRadius: 14, padding: '32px 28px', textAlign: 'center', border: '2px dashed rgba(170,136,96,0.25)' }}>
                <p style={{ color: '#6a8e95', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 20 }}>
                  Triathlon designs coming soon. Order a custom magnet to celebrate your race in the meantime.
                </p>
                <Link href="/custom" style={{ display: 'inline-block', padding: '11px 24px', background: '#aa8860', color: 'white', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', borderRadius: 10 }}>
                  Order a Custom Magnet
                </Link>
              </div>
            </>
          )}

          {/* Surfing */}
          {showSurfing && (
            <>
              <div style={{ ...SECTION_TITLE, marginTop: showRunning ? 40 : 24 }}>Surfing</div>
              <ProductGrid products={filtered.filter(p => p.group === 'surfing')} />
            </>
          )}

          {/* Camping */}
          {showCamping && (
            <>
              <div style={{ ...SECTION_TITLE, marginTop: showRunning || showSurfing ? 40 : 24 }}>Camping & Outdoors</div>
              <ProductGrid products={filtered.filter(p => p.group === 'camping')} />
            </>
          )}

          {/* Team Sports */}
          {showTeam && !showRunning && !showSurfing && !showCamping && (
            <div style={{ maxWidth: 540, margin: '0 auto', textAlign: 'center', padding: '40px 0' }}>
              <h2 style={{ color: '#1a3a40', fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>Coming Soon</h2>
              <p style={{ color: '#6a8e95', fontSize: '1rem', lineHeight: 1.7, marginBottom: 32 }}>
                Team sports designs are on the way. Order a custom magnet with your own photo in the meantime.
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
