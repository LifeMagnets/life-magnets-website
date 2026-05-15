import Image from 'next/image'
import Link from 'next/link'
import BoothCircle from '@/components/BoothCircle'

function SectionWave({ fill = 'rgba(77,208,225,0.32)' }: { fill?: string }) {
  return (
    <svg viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ position: 'absolute', top: -58, left: 0, width: '100%', height: 72, zIndex: 0, pointerEvents: 'none' }}>
      <path d="M0,36 C180,8 360,64 540,36 C720,8 900,64 1080,36 C1260,8 1380,56 1440,36 L1440,72 L0,72 Z" fill={fill} />
    </svg>
  )
}

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(to top, #a8cfe0 0%, #c4e0ec 35%, #e0f2f8 70%, #fff 100%)', padding: '48px 16px 64px', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <Image src="/logo-full.png" alt="Life Magnets Co." width={520} height={160} style={{ width: '100%', maxWidth: 720, height: 'auto', display: 'block', margin: '0 auto 36px' }} priority unoptimized />
          <p style={{ fontSize: '1.3rem', color: '#4a7a84', marginBottom: 44, lineHeight: 1.7, fontWeight: 500 }}>
            Turn your favorite photos into beautiful custom magnets —<br />Perfect for weddings, parties, corporate events, and everyday moments.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { href: '/custom', label: 'Order a Custom Magnet' },
              { href: '/shop', label: 'Browse Pre-Made Designs' },
              { href: '/events', label: 'Live Event Booth Info' },
            ].map(btn => (
              <Link key={btn.href} href={btn.href} className="btn" style={{
                display: 'inline-block', width: 230, padding: '15px 0', textAlign: 'center',
                textDecoration: 'none', borderRadius: 12, fontWeight: 700, fontSize: '1rem', color: 'white',
                border: '1px solid rgba(255,255,255,0.85)',
                background: `radial-gradient(ellipse, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%), #0097a7`,
              }}>
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Script title strip — sunny gold */}
      <section style={{ background: '#f0b429', textAlign: 'center', position: 'relative', overflow: 'visible' }}>
        <SectionWave fill="rgba(255,255,255,0.45)" />
        <div style={{ position: 'relative', zIndex: 1, padding: '80px 16px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ lineHeight: 1.3, marginBottom: 40 }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'white' }}>Custom Handcrafted Magnets</div>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: '2.8rem', color: 'white', fontStyle: 'italic', letterSpacing: '0.06em' }}>for life's favorite moments</div>
            </div>
            <Link href="/custom" className="btn" style={{ display: 'inline-block', padding: '14px 36px', background: 'white', color: '#c8860a', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', borderRadius: 12 }}>
              Shop Custom Options
            </Link>
          </div>
        </div>
      </section>

      {/* Event Booth strip — coral */}
      <section style={{ background: '#e8734a', position: 'relative', overflow: 'visible' }}>
        <SectionWave fill="rgba(255,255,255,0.38)" />
        <div style={{ position: 'relative', zIndex: 1, padding: '80px 16px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 280, padding: '0 32px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>Live Events</div>
              <h2 style={{ color: 'white', fontSize: '2.2rem', fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>Bring our Booth to Your Live Event</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 32 }}>
                Book a live magnet booth at your wedding, party, or corporate event and send your guests home with their own life magnet to keep their event memory alive at home!
              </p>
              <Link href="/events" className="btn" style={{ display: 'inline-block', padding: '13px 30px', background: 'white', color: '#e8734a', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 10 }}>
                More Info
              </Link>
            </div>
            <div style={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'center' }}>
              <BoothCircle />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Photo strip — ocean teal */}
      <section style={{ background: '#0097a7', position: 'relative', overflow: 'visible' }}>
        <SectionWave />
        <div style={{ position: 'relative', zIndex: 1, padding: '80px 16px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap-reverse' }}>
            <div style={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ width: 80, height: 120, background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.5)', borderRadius: 8 }} />
                <div style={{ width: 100, height: 100, background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.5)', borderRadius: 8 }} />
                <div style={{ width: 120, height: 80, background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.5)', borderRadius: 8 }} />
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 280, padding: '0 32px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>Custom Orders</div>
              <h2 style={{ color: 'white', fontSize: '2.2rem', fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>Your Life, Your Photo,<br />Your Magnet</h2>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: 32 }}>
                <div>Upload your favorite photo ~ choose your size</div>
                <div>2×2 square, 2×3 portrait, or 2×3 landscape</div>
                <div>We'll handcraft it and ship it to you!</div>
              </div>
              <Link href="/custom" className="btn" style={{ display: 'inline-block', padding: '13px 30px', background: 'white', color: '#0097a7', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 10 }}>
                Start Creating
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Made Designs + Final CTA — single continuous gradient */}
      <section style={{ background: 'linear-gradient(to bottom, #f5e6c8 0%, #dfc49a 55%, #aa8860 100%)', position: 'relative', overflow: 'visible' }}>
        <SectionWave />

        {/* Pre-Made Designs */}
        <div style={{ position: 'relative', zIndex: 1, padding: '80px 16px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 280, padding: '0 32px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c8860a', marginBottom: 16 }}>Shop</div>
              <h2 style={{ color: '#8a6440', fontSize: '2.2rem', fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>Pre-Made Designs</h2>
              <p style={{ color: '#a07c54', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 32 }}>
                Browse our collection of pre-designed magnets by category.<br />Order online and we'll handcraft and ship your magnets straight to you or we can ship them wrapped as a gift straight to your favorite life-buddies.
              </p>
              <Link href="/shop" className="btn" style={{ display: 'inline-block', padding: '13px 30px', background: 'white', color: '#8a6440', fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 10 }}>
                Shop Now
              </Link>
            </div>
            <div style={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[96, 80, 80, 96].map((size, i) => (
                  <div key={i} style={{ width: size, height: size, background: 'rgba(0,151,167,0.1)', border: '2px solid rgba(0,151,167,0.3)', borderRadius: 8 }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Internal ocean wave decoration — pinned to section bottom */}
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '37%', zIndex: 0 }}>
          <defs>
            <linearGradient id="waveGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(178,235,242,0)" />
              <stop offset="100%" stopColor="rgba(178,235,242,0.55)" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(77,208,225,0)" />
              <stop offset="100%" stopColor="rgba(77,208,225,0.5)" />
            </linearGradient>
            <linearGradient id="waveGrad3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,151,167,0)" />
              <stop offset="100%" stopColor="rgba(0,151,167,0.45)" />
            </linearGradient>
          </defs>
          <path d="M0,100 C200,40 400,160 600,90 C800,20 1000,140 1200,70 C1320,30 1400,90 1440,80 L1440,220 L0,220 Z" fill="url(#waveGrad1)" />
          <path d="M0,140 C180,80 360,170 540,120 C720,70 900,160 1080,100 C1260,40 1380,130 1440,110 L1440,220 L0,220 Z" fill="url(#waveGrad2)" />
          <path d="M0,170 C160,130 320,185 480,155 C640,125 800,175 960,145 C1120,115 1300,165 1440,150 L1440,220 L0,220 Z" fill="url(#waveGrad3)" />
        </svg>

        {/* Final CTA */}
        <div style={{ padding: '60px 16px 80px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ color: '#0097a7', fontSize: '2rem', fontWeight: 800, marginBottom: 14 }}>Ready to make some magnets?</h2>
            <p style={{ color: '#4a7a84', fontSize: '1.05rem', marginBottom: 36 }}>Upload your photos and we'll take it from there.</p>
            <Link href="/custom" className="btn" style={{ display: 'inline-block', padding: '16px 44px', background: '#0097a7', color: 'white', fontWeight: 800, fontSize: '1.05rem', textDecoration: 'none', borderRadius: 12 }}>
              Create a Custom Magnet
            </Link>
          </div>
        </div>

      </section>

    </div>
  )
}
