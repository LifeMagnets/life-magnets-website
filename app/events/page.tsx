import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Book Your Date',
    desc: 'Reach out to reserve your event date. We\'ll confirm availability, walk through package options, and lock it in with a signed contract and deposit.',
  },
  {
    number: '02',
    title: 'We Arrive & Set Up',
    desc: 'Life Magnets Co. handles everything — we arrive early, set up the full booth, and are ready to go before your first guest walks in.',
  },
  {
    number: '03',
    title: 'Guests Scan & Upload',
    desc: 'A personal QR code is displayed at the booth. Guests scan it with their own phone, choose a photo they\'ve taken at the event, and place their order — no app download required.',
  },
  {
    number: '04',
    title: 'Magnets Made On the Spot',
    desc: 'Every magnet is handcrafted right there at the booth. Guests get a text when their order is ready for pickup — usually within minutes.',
  },
  {
    number: '05',
    title: 'They Leave With a Keepsake',
    desc: 'Each guest takes home a one-of-a-kind photo magnet made from a moment they captured themselves. No two are alike.',
  },
]

const eventTypes = [
  { label: 'Weddings & Receptions', icon: '💍' },
  { label: 'Corporate Events', icon: '🏢' },
  { label: 'Festivals & Markets', icon: '🎪' },
  { label: 'Birthday Parties', icon: '🎂' },
  { label: 'School & Grad Events', icon: '🎓' },
  { label: 'Holiday Parties', icon: '✨' },
]

export default function EventsPage() {
  return (
    <div style={{ background: '#f7f4ef', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ padding: '64px 16px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5ba3ac', marginBottom: 14 }}>Live Booth Experience</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 16 }}>
            Bring our Booth to Your Event
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6a8e95', lineHeight: 1.7, marginBottom: 32 }}>
            A live, on-site custom experience that lets your guests bring the event home with them. Their photos. Their memories. Hand-crafted keepsakes made right in front of them.
          </p>
          <Link href="/events/weddings" className="btn" style={{ display: 'inline-block', padding: '14px 36px', background: '#c8675d', color: 'white', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', borderRadius: 12 }}>
            See Wedding Packages →
          </Link>
        </div>
      </section>

      {/* 3-image collage */}
      <section style={{ padding: '0 16px 64px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '280px 280px', gap: 12, borderRadius: 18, overflow: 'hidden' }}>

            {/* Left — large, spans both rows */}
            <div style={{ gridRow: '1 / 3', background: '#ddd', position: 'relative', overflow: 'hidden' }}>
              <img
                src="/outdoorbooth.jpg"
                alt="Life Magnets Co. outdoor booth"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Top right — wedding booth */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/weddingbooth.png" alt="Life Magnets Co. wedding booth" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            {/* Bottom right — placeholder */}
            <div style={{ background: '#e0ddd8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(91,163,172,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.2rem' }}>📷</span>
              </div>
              <span style={{ fontSize: '0.78rem', color: '#6a8e95', fontWeight: 600 }}>Photo coming soon</span>
            </div>

          </div>
        </div>
      </section>

      {/* What is it */}
      <section style={{ background: 'white', padding: '56px 16px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5ba3ac', marginBottom: 14, textAlign: 'center' }}>What It Is</div>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1a3a40', textAlign: 'center', marginBottom: 24, lineHeight: 1.2 }}>
            A Keepsake Experience, Not Just a Photo Booth
          </h2>
          <div style={{ fontSize: '1rem', color: '#6a8e95', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ margin: 0 }}>
              The Life Magnets Co. live booth is a fully self-contained, on-site magnet printing experience. We bring everything — the equipment, the setup, and a hands-on operator — so your guests can walk away with a custom photo magnet made from a moment <em>they</em> captured that night.
            </p>
            <p style={{ margin: 0 }}>
              There are no generic backdrop selfies or pre-loaded graphics. Every magnet starts with a real photo taken by a real guest on their own phone. They scan a QR code, upload the image, choose their size, and within minutes — they're holding a hand-crafted keepsake that's completely unique to them and to your event.
            </p>
            <p style={{ margin: 0 }}>
              It's a conversation piece, a party favor, and a memory — all in one small, beautiful magnet that ends up on someone's fridge for years.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '56px 16px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5ba3ac', marginBottom: 14, textAlign: 'center' }}>The Process</div>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1a3a40', textAlign: 'center', marginBottom: 48, lineHeight: 1.2 }}>
            How It Works
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, i) => (
              <div key={step.number} style={{ display: 'flex', gap: 28, alignItems: 'flex-start', paddingBottom: i < steps.length - 1 ? 36 : 0, marginBottom: i < steps.length - 1 ? 0 : 0, borderLeft: i < steps.length - 1 ? '2px solid rgba(91,163,172,0.25)' : '2px solid transparent', marginLeft: 20, paddingLeft: 36, position: 'relative' }}>
                <div style={{ position: 'absolute', left: -14, top: 0, width: 28, height: 28, borderRadius: '50%', background: '#5ba3ac', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'white' }}>{step.number}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1a3a40', marginBottom: 6, marginTop: 2 }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#6a8e95', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event types */}
      <section style={{ background: 'white', padding: '56px 16px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5ba3ac', marginBottom: 14, textAlign: 'center' }}>We Work With</div>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1a3a40', textAlign: 'center', marginBottom: 40, lineHeight: 1.2 }}>
            Great For Any Occasion
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
            {eventTypes.map(e => (
              <div key={e.label} style={{ background: '#f7f4ef', borderRadius: 12, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontSize: '1.4rem' }}>{e.icon}</span>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a3a40' }}>{e.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 16px' }}>
        <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1a3a40', marginBottom: 14 }}>Ready to Book?</h2>
          <p style={{ fontSize: '0.95rem', color: '#6a8e95', lineHeight: 1.7, marginBottom: 32 }}>
            Reach out to check your date and get a quote. Wedding couples can browse full package pricing below.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/events/weddings" className="btn" style={{ display: 'inline-block', padding: '14px 32px', background: '#c8675d', color: 'white', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 12 }}>
              Wedding Packages & Pricing
            </Link>
            <Link href="/contact" className="btn" style={{ display: 'inline-block', padding: '14px 32px', background: 'white', color: '#1a3a40', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 12, border: '2px solid #1a3a40' }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
