import Link from 'next/link'

export default function OrderSuccessPage() {
  return (
    <div style={{ minHeight: '70vh', background: '#fafaf8', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px' }}>
      <div style={{ maxWidth: 520, textAlign: 'center' }}>

        <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #e8f7f9, #b2ebf2)', border: '3px solid #5ba3ac', margin: '0 auto 28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M8 18 L15 25 L28 11" stroke="#5ba3ac" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a3a40', marginBottom: 12 }}>Order Received!</h1>
        <p style={{ fontSize: '1rem', color: '#6a8e95', lineHeight: 1.75, marginBottom: 32 }}>
          Thank you for your order. We'll review your photo and get your magnets into production. You'll receive a confirmation email shortly with your order details and tracking information once they ship.
        </p>

        <div style={{ background: '#f0fbfd', border: '2px solid rgba(91,163,172,0.2)', borderRadius: 14, padding: '20px 24px', marginBottom: 32, textAlign: 'left' }}>
          <div style={{ fontWeight: 800, color: '#5ba3ac', marginBottom: 10 }}>What happens next</div>
          {[
            'We review your photo and design details',
            'Your magnets are handcrafted (usually 1–2 business days)',
            'We ship with tracking — typically 3–5 business days delivery',
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: i < 2 ? 8 : 0, alignItems: 'flex-start' }}>
              <div style={{ minWidth: 22, height: 22, borderRadius: '50%', background: '#5ba3ac', color: 'white', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>{i + 1}</div>
              <span style={{ fontSize: '0.9rem', color: '#1a3a40', lineHeight: 1.5 }}>{s}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/shop" style={{ display: 'inline-block', padding: '13px 28px', background: '#5ba3ac', color: 'white', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 10 }}>
            Browse the Shop
          </Link>
          <Link href="/" style={{ display: 'inline-block', padding: '13px 28px', background: 'white', color: '#5ba3ac', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: 10, border: '2px solid #5ba3ac' }}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
