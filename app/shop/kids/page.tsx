import Link from 'next/link'
import Image from 'next/image'

const products = [
  { id: 'edi-art',     name: "Edi's Art!",      image: '/kids/edi-art.png',     desc: 'Personalized name art · customizable' },
  { id: 'johns-todos', name: "John's To-Dos",   image: '/kids/johns-todos.png', desc: 'Personalized name magnet · customizable' },
]

export default async function KidsPage({
  searchParams,
}: {
  searchParams: Promise<{ sub?: string }>
}) {
  await searchParams

  return (
    <div>

      {/* Header */}
      <section style={{ background: 'linear-gradient(to bottom, #eaf4f6 0%, #d4eef5 100%)', padding: '64px 16px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Link href="/shop" style={{ display: 'inline-block', marginBottom: 24, color: '#6a8e95', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            ← Back to Shop
          </Link>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6a8e95', marginBottom: 14 }}>Pre-Made Designs</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 16 }}>
            Kids
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6a8e95', lineHeight: 1.7 }}>
            Playful and creative magnets that kids (and parents) will love.
          </p>
        </div>
      </section>

      {/* Tab bar — no subcategories yet, just All */}
      <div style={{ background: '#eaf4f6', borderBottom: '1px solid rgba(74,122,132,0.2)', padding: '0 16px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 4 }}>
          <div style={{ display: 'inline-block', padding: '14px 18px', fontWeight: 800, fontSize: '0.9rem', whiteSpace: 'nowrap', color: '#6a8e95', borderBottom: '3px solid #6a8e95' }}>
            All
          </div>
        </div>
      </div>

      {/* Product grid */}
      <section style={{ background: '#fafaf8', padding: '48px 16px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24, marginBottom: 48 }}>
            {products.map(product => (
              <div key={product.id} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: '#f5f5f3', padding: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ position: 'relative', width: 160, height: 160, borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
                    <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} unoptimized />
                  </div>
                </div>
                <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#1a3a40', marginBottom: 4 }}>{product.name}</h2>
                  <p style={{ fontSize: '0.82rem', color: '#6a8e95', marginBottom: 16, flex: 1 }}>{product.desc}</p>
                  <Link href="/custom" className="btn" style={{ display: 'block', textAlign: 'center', padding: '10px 0', background: '#6a8e95', color: 'white', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', borderRadius: 10 }}>
                    Order This Design
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* More coming soon */}
          <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center', padding: '16px 0' }}>
            <p style={{ color: '#6a8e95', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 24 }}>
              More kids designs are on the way! In the meantime, order a custom magnet personalized with your child's name, photo, or favorite colors.
            </p>
            <Link href="/custom" style={{ display: 'inline-block', padding: '12px 28px', background: '#6a8e95', color: 'white', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 10 }}>
              Order a Custom Magnet
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
