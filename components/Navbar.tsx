'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ background: 'white', borderBottom: '2px solid #7ec4cd', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Image src="/logo-icon.png" alt="Life Magnets Co." width={40} height={40} style={{ objectFit: 'contain' }} />
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#5ba3ac', letterSpacing: '-0.01em' }}>Life Magnets Co.</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="desktop-nav">
          <Link href="/shop" style={{ padding: '8px 14px', color: '#1a3a40', fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none', borderRadius: 8 }}>Shop</Link>
          <Link href="/custom" style={{ padding: '8px 14px', color: '#1a3a40', fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none', borderRadius: 8 }}>Custom Order</Link>
          <Link href="/events" style={{ padding: '8px 14px', color: '#1a3a40', fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none', borderRadius: 8 }}>Book an Event</Link>
          <Link href="/custom" className="btn" style={{ marginLeft: 8, padding: '9px 20px', background: '#5ba3ac', color: 'white', fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none', borderRadius: 10 }}>
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(o => !o)} style={{ display: 'none', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#5ba3ac' }} className="mobile-menu-btn">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid #b2ebf2', background: 'white', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Link href="/shop" onClick={() => setMenuOpen(false)} style={{ padding: '10px 12px', color: '#1a3a40', fontWeight: 600, textDecoration: 'none', borderRadius: 8 }}>Shop</Link>
          <Link href="/custom" onClick={() => setMenuOpen(false)} style={{ padding: '10px 12px', color: '#1a3a40', fontWeight: 600, textDecoration: 'none', borderRadius: 8 }}>Custom Order</Link>
          <Link href="/events" onClick={() => setMenuOpen(false)} style={{ padding: '10px 12px', color: '#1a3a40', fontWeight: 600, textDecoration: 'none', borderRadius: 8 }}>Book an Event</Link>
          <Link href="/custom" onClick={() => setMenuOpen(false)} className="btn" style={{ margin: '8px 0 4px', padding: '12px', background: '#5ba3ac', color: 'white', fontWeight: 700, textDecoration: 'none', borderRadius: 10, textAlign: 'center' }}>
            Order Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
