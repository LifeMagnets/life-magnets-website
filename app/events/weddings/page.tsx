import Link from 'next/link'

const packageA = [
  { size: '2×2 Square only',          t75: '$1,100', t125: '$1,500', t175: '$1,900', t250: '$2,500' },
  { size: '2×3 Rectangle only',       t75: '$1,300', t125: '$1,800', t175: '$2,300', t250: '$2,900' },
  { size: "Both sizes — guest's choice", t75: '$1,500', t125: '$2,000', t175: '$2,600', t250: '$3,300' },
]

const packageB = [
  { size: '2×2 Square only',          t75: '$1,800', t125: '$2,400', t175: '$3,100', t250: '$4,000' },
  { size: '2×3 Rectangle only',       t75: '$2,100', t125: '$2,800', t175: '$3,600', t250: '$4,600' },
  { size: "Both sizes — guest's choice", t75: '$2,400', t125: '$3,200', t175: '$4,100', t250: '$5,200' },
]

const included = [
  'Bride & Groom receive a complimentary 5-pack of magnets in their choice of size — a personal keepsake set featuring photos uploaded by their guests on the wedding night',
  'Each member of the wedding party (bridesmaids & groomsmen) receives one complimentary bonus magnet in addition to their included guest magnet',
  'Personal QR code displayed at your reception — guests scan with their own phone, upload a photo they\'ve taken at the reception, and order their magnet on the spot',
  'All photos printed and ready at your booth during the event',
  'SMS text notification to each guest when their order is ready for pickup',
  'Numbered order system for smooth, organized pickup',
  "Guest's choice of portrait or landscape orientation",
  'Complete setup and breakdown handled entirely by Life Magnets Co.',
  'Digital record of all guest orders provided to the couple after the event',
]

const addons = [
  { name: 'Backdrop + Props', desc: 'Life Magnets Co. brings, sets up, and styles a color-themed backdrop with a curated prop collection, giving guests a fun creative setup to photograph themselves with their own phones before uploading', price: '$275' },
  { name: 'Guest Memory Photo Book', desc: 'Hardcover photo book featuring a variety of photos that were turned into magnets at your reception — get a surprise glimpse into your special day that your guests captured themselves. Designed and mailed direct to the couple. Tracking info within 2 weeks after the reception. Note: all photos are guest-taken phone photos, not professional wedding photography.', price: '$225' },
  { name: 'Extra Magnets', desc: 'Guests ordering beyond their included amount pay directly at pickup via card reader at the booth', price: '$10 each' },
  { name: 'Extended Time', desc: 'Billed in 30-minute increments beyond prepaid package time', price: '$50/half hour' },
  { name: 'Peak Season Premium', desc: 'May, June, September, October Saturdays', price: '+$150' },
  { name: 'Rush Booking', desc: 'Less than 2 weeks notice', price: '+$200' },
]

const travel = [
  { range: '0–30 miles', rate: 'No charge — included in package' },
  { range: '31–60 miles', rate: '$1.50/mile round trip' },
  { range: '61–100 miles', rate: '$2.00/mile round trip' },
  { range: '100+ miles', rate: 'Custom quote — contact us' },
]

const notes = [
  'All magnet photos are uploaded by guests using their own personal phones at the reception — Life Magnets Co. does not take photos of guests',
  'These are not professional wedding photographs — they are candid, personal moments captured by your guests themselves',
  'Photo quality will vary by phone and camera — this is part of the charm and authenticity of the experience',
  'The Backdrop + Props add-on gives guests a fun, styled setting to photograph themselves before uploading, encouraging more creative and memorable submissions',
  'Life Magnets Co. operates completely independently from your wedding photographer and does not coincide with professional photography coverage',
]

const bookingTerms = [
  '50% non-refundable deposit at signing to hold your date',
  'Remaining balance due 7 days before the event',
  'Guest Memory Photo Book add-on must be confirmed and paid at time of booking',
  'Additional magnet orders beyond the included guest allotment are collected directly from guests at pickup during the event',
  'Overtime charges are due at the close of the event or invoiced within 24 hours',
  'Contract required for all wedding bookings',
]

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#1a3a40', borderRadius: '10px 10px 0 0', padding: '14px 24px' }}>
      <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1rem', margin: 0, letterSpacing: '0.03em' }}>{children}</h2>
    </div>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 14px rgba(0,0,0,0.06)', border: '1px solid rgba(0,151,167,0.13)', overflow: 'hidden', marginBottom: 24 }}>
      {children}
    </div>
  )
}

const colHeads = ['Up to 75 guests', '76–125 guests', '126–175 guests', '176–250 guests']

function PricingTable({ rows }: { rows: typeof packageA }) {
  return (
    <div style={{ overflowX: 'auto', padding: '0 20px 20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
        <thead>
          <tr>
            <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.8rem', color: '#4a7a84', fontWeight: 700, borderBottom: '2px solid #eef0ee', width: '30%' }} />
            {colHeads.map(h => (
              <th key={h} style={{ padding: '10px 12px', textAlign: 'center', fontSize: '0.78rem', color: 'white', fontWeight: 700, background: '#0097a7', borderBottom: '2px solid #eef0ee' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.size} style={{ background: i % 2 === 0 ? '#f8f7f4' : 'white' }}>
              <td style={{ padding: '12px', fontSize: '0.88rem', fontWeight: 700, color: '#0097a7', borderBottom: '1px solid #eef0ee' }}>{row.size}</td>
              {[row.t75, row.t125, row.t175, row.t250].map((p, j) => (
                <td key={j} style={{ padding: '12px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 700, color: '#1a3a40', borderBottom: '1px solid #eef0ee' }}>{p}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function WeddingBoothPage() {
  return (
    <div style={{ background: '#f7f4ef', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ padding: '64px 16px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <Link href="/events" style={{ display: 'inline-block', marginBottom: 24, color: '#0097a7', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
            ← Back to Events
          </Link>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#0097a7', marginBottom: 14 }}>Live Booth Experience</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 16 }}>
            Wedding Packages & Pricing
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4a7a84', lineHeight: 1.7 }}>
            Give your guests an extra touch of fun at your wedding reception.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 16px 80px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          {/* What is it */}
          <Card>
            <SectionHeader>What Is a Life Magnets Co. Wedding Booth?</SectionHeader>
            <div style={{ padding: '20px 24px', fontSize: '0.95rem', color: '#1a3a40', lineHeight: 1.75 }}>
              Life Magnets Co. provides a custom photo magnet experience at your reception where <strong>your guests use their own phones</strong> to capture and upload their favorite moments of the night. These are <strong>not wedding photographer images</strong> — they are candid, personal snapshots taken by your guests themselves, turned into hand-crafted photo magnets on the spot. Every guest leaves with a one-of-a-kind keepsake made from a photo they took themselves, making every magnet completely unique to that person's experience of your wedding night.
            </div>
          </Card>

          {/* Booth photo */}
          <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 24 }}>
            <img src="/weddingbooth.png" alt="Life Magnets Co. wedding booth" style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: 420 }} />
          </div>

          {/* Package A */}
          <Card>
            <SectionHeader>Package A — The Keepsake</SectionHeader>
            <p style={{ padding: '14px 20px 4px', fontSize: '0.85rem', color: '#4a7a84', fontStyle: 'italic', margin: 0 }}>
              One magnet per guest · 2 hours · Guest's choice of size if both sizes selected
            </p>
            <PricingTable rows={packageA} />
            <p style={{ padding: '0 20px 18px', fontSize: '0.82rem', color: '#4a7a84', margin: 0 }}>
              See <em>Always Included in Every Package</em> below for the full list of what comes with every booking.
            </p>
          </Card>

          {/* Package B */}
          <Card>
            <SectionHeader>Package B — The Double Memory</SectionHeader>
            <p style={{ padding: '14px 20px 4px', fontSize: '0.85rem', color: '#4a7a84', fontStyle: 'italic', margin: 0 }}>
              Two magnets per guest · 3 hours · Guest's choice of size if both sizes selected
            </p>
            <PricingTable rows={packageB} />
            <p style={{ padding: '0 20px 18px', fontSize: '0.82rem', color: '#4a7a84', margin: 0 }}>
              See <em>Always Included in Every Package</em> below for the full list of what comes with every booking.
            </p>
          </Card>

          {/* Always Included */}
          <Card>
            <SectionHeader>Always Included in Every Package</SectionHeader>
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {included.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#0097a7', flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: '0.9rem', color: '#1a3a40', lineHeight: 1.65 }}>{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Add-Ons */}
          <Card>
            <SectionHeader>Add-Ons</SectionHeader>
            <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {addons.map((a, i) => (
                <div key={a.name} style={{ display: 'flex', gap: 16, justifyContent: 'space-between', alignItems: 'flex-start', padding: '14px 0', borderBottom: i < addons.length - 1 ? '1px solid #eef0ee' : 'none' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a3a40', marginBottom: 4 }}>{a.name}</div>
                    <div style={{ fontSize: '0.85rem', color: '#4a7a84', lineHeight: 1.6 }}>{a.desc}</div>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0097a7', whiteSpace: 'nowrap', paddingLeft: 16 }}>{a.price}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Travel Fees */}
          <Card>
            <SectionHeader>Travel Fees</SectionHeader>
            <div style={{ padding: '0 20px 20px', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
                <thead>
                  <tr>
                    <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.8rem', color: 'white', fontWeight: 700, background: '#0097a7', borderRadius: '6px 0 0 6px' }}>Distance from Life Magnets Co.</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '0.8rem', color: 'white', fontWeight: 700, background: '#0097a7', borderRadius: '0 6px 6px 0' }}>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {travel.map((t, i) => (
                    <tr key={t.range} style={{ background: i % 2 === 0 ? '#f8f7f4' : 'white' }}>
                      <td style={{ padding: '12px', fontSize: '0.88rem', fontWeight: 700, color: '#1a3a40', borderBottom: '1px solid #eef0ee' }}>{t.range}</td>
                      <td style={{ padding: '12px', fontSize: '0.88rem', color: '#4a7a84', borderBottom: '1px solid #eef0ee' }}>{t.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Important Notes */}
          <Card>
            <SectionHeader>Important Notes for Couples</SectionHeader>
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {notes.map((note, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#0097a7', flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: '0.9rem', color: '#1a3a40', lineHeight: 1.65 }}>{note}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Booking Terms */}
          <Card>
            <SectionHeader>Booking Terms</SectionHeader>
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {bookingTerms.map((term, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#0097a7', flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: '0.9rem', color: '#1a3a40', lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: term.replace(/^(50% non-refundable deposit|Remaining balance|Guest Memory Photo Book|Additional magnet orders|Overtime charges|Contract required)/, '<strong>$1</strong>') }} />
                </div>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '16px 0 8px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a3a40', marginBottom: 12 }}>Ready to Book Your Wedding Booth?</h2>
            <p style={{ fontSize: '0.95rem', color: '#4a7a84', lineHeight: 1.7, marginBottom: 28 }}>
              Reach out and we'll get your date on the calendar.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn" style={{ display: 'inline-block', padding: '15px 36px', background: 'white', color: '#0097a7', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', borderRadius: 12, border: '2px solid #0097a7' }}>
                Book Your Date
              </Link>
              <Link href="/custom/wedding" className="btn" style={{ display: 'inline-block', padding: '15px 36px', background: 'white', color: '#1a3a40', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', borderRadius: 12, border: '2px solid #1a3a40' }}>
                Wedding Magnet Orders
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
