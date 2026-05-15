import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#8a6848', padding: '40px 16px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', marginBottom: 32, justifyContent: 'space-between' }}>

          <div>
            <Image src="/logo-icon.png" alt="Life Magnets Co." width={48} height={48} style={{ objectFit: 'contain', marginBottom: 10 }} />
            <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white', marginBottom: 4 }}>Life Magnets Co.</div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)' }}>Custom Photo Magnets</div>
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'white', marginBottom: 12 }}>Shop</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link href="/shop" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>Pre-Made Designs</Link>
              <Link href="/custom" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>Custom Order</Link>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'white', marginBottom: 12 }}>Events</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link href="/events" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>Book a Booth</Link>
              <Link href="/events" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>How It Works</Link>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'white', marginBottom: 12 }}>Contact</div>
            <a href="mailto:hello@lifemagnetsco.com" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none', display: 'block', marginBottom: 8 }}>hello@lifemagnetsco.com</a>
            <a href="https://www.lifemagnetsco.com" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textDecoration: 'none' }}>www.lifemagnetsco.com</a>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: 20, fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', textAlign: 'center' }}>
          © {new Date().getFullYear()} Life Magnets Co. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
