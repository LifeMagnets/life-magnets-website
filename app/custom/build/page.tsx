'use client'

import { useState, useCallback, useRef } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Link from 'next/link'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const SIZES = [
  { id: '2x2-square',    label: '2×2 Square',    desc: 'Classic compact square',  w: 2, h: 2 },
  { id: '2x3-portrait',  label: '2×3 Portrait',  desc: 'Tall format',             w: 2, h: 3 },
  { id: '3x2-landscape', label: '3×2 Landscape', desc: 'Wide format',             w: 3, h: 2 },
]

const TIERS = [
  { label: '50+ magnets', min: 50,  max: Infinity, price: 5.99 },
  { label: '25–49',       min: 25,  max: 49,       price: 6.49 },
  { label: '10–24',       min: 10,  max: 24,       price: 7.49 },
  { label: '1–9',         min: 1,   max: 9,        price: 8.99 },
]

function getPrice(qty: number) {
  return TIERS.find(t => qty >= t.min)!.price
}

// ─── Payment sub-form (needs to be inside <Elements>) ───────────────────────

function CheckoutForm({ total, onBack }: { total: string; onBack: () => void }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!stripe || !elements) return
    setProcessing(true)
    setError(null)

    const { error: submitErr } = await elements.submit()
    if (submitErr) { setError(submitErr.message ?? 'Payment error'); setProcessing(false); return }

    const { error: confirmErr } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/custom/success` },
    })

    if (confirmErr) { setError(confirmErr.message ?? 'Payment failed'); setProcessing(false) }
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {error && <p style={{ color: '#c0392b', fontSize: '0.88rem', marginTop: 12 }}>{error}</p>}
      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button type="button" onClick={onBack} style={{ flex: 1, padding: '13px 0', background: 'white', color: '#6a8e95', fontWeight: 700, fontSize: '0.95rem', border: '2px solid #d0e8ec', borderRadius: 10, cursor: 'pointer' }}>
          ← Back
        </button>
        <button type="submit" disabled={!stripe || processing} style={{ flex: 2, padding: '13px 0', background: processing ? '#6a8e95' : '#5ba3ac', color: 'white', fontWeight: 700, fontSize: '0.95rem', border: 'none', borderRadius: 10, cursor: processing ? 'default' : 'pointer' }}>
          {processing ? 'Processing…' : `Pay ${total}`}
        </button>
      </div>
    </form>
  )
}

// ─── Main page ───────────────────────────────────────────────────────────────

type Step = 'design' | 'photo' | 'payment'

export default function BuildYourOwnPage() {
  const [step, setStep]             = useState<Step>('design')
  const [sizeId, setSizeId]         = useState('2x2-square')
  const [quantity, setQuantity]     = useState(1)
  const [photoFile, setPhotoFile]   = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [customText, setCustomText] = useState('')
  const [notes, setNotes]           = useState('')
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [loading, setLoading]       = useState(false)
  const [dragOver, setDragOver]     = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const price = getPrice(quantity)
  const total = (price * quantity).toFixed(2)
  const activeTier = TIERS.find(t => quantity >= t.min)!

  function handleFile(file: File) {
    if (!file.type.startsWith('image/')) return
    setPhotoFile(file)
    const reader = new FileReader()
    reader.onload = e => setPhotoPreview(e.target?.result as string)
    reader.readAsDataURL(file)
  }

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [])

  async function proceedToPayment() {
    setLoading(true)
    let photoUrl = ''

    if (photoFile) {
      const fd = new FormData()
      fd.append('photo', photoFile)
      const res = await fetch('/api/upload-photo', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.url) photoUrl = data.url
    }

    const res = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sizeId, quantity, customText, notes, photoUrl, category: 'build-your-own' }),
    })
    const data = await res.json()
    if (data.clientSecret) {
      setClientSecret(data.clientSecret)
      setStep('payment')
    }
    setLoading(false)
  }

  const stepLabels: { id: Step; label: string }[] = [
    { id: 'design', label: '1. Design' },
    { id: 'photo',  label: '2. Photo & Details' },
    { id: 'payment', label: '3. Payment' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8' }}>

      {/* Header */}
      <section style={{ background: 'linear-gradient(to bottom, #e8f7f9 0%, #d4eef5 100%)', padding: '48px 16px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Link href="/custom" style={{ display: 'inline-block', marginBottom: 20, color: '#5ba3ac', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>← Back</Link>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.2, marginBottom: 8 }}>Build Your Own Magnets</h1>
          <p style={{ fontSize: '1rem', color: '#6a8e95', lineHeight: 1.7 }}>Upload your photo, choose your size, and we'll take it from there.</p>
        </div>
      </section>

      {/* Step indicator */}
      <div style={{ background: 'white', borderBottom: '1px solid #e8eeef', padding: '0 16px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex' }}>
          {stepLabels.map((s, i) => {
            const active = s.id === step
            const done = stepLabels.findIndex(x => x.id === step) > i
            return (
              <div key={s.id} style={{ flex: 1, padding: '14px 0', textAlign: 'center', fontSize: '0.82rem', fontWeight: active ? 800 : 600, color: active ? '#5ba3ac' : done ? '#6a8e95' : '#a0b8bc', borderBottom: active ? '3px solid #5ba3ac' : '3px solid transparent', transition: 'all 0.2s' }}>
                {s.label}
              </div>
            )
          })}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '40px 16px 80px' }}>

        {/* ── Step 1: Design ── */}
        {step === 'design' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Size selector */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a3a40', marginBottom: 14 }}>Choose a Size</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {SIZES.map(s => (
                  <label key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', background: sizeId === s.id ? '#f0fbfd' : 'white', border: `2px solid ${sizeId === s.id ? '#5ba3ac' : '#e0ecee'}`, borderRadius: 12, cursor: 'pointer' }}>
                    <input type="radio" name="size" value={s.id} checked={sizeId === s.id} onChange={() => setSizeId(s.id)} style={{ display: 'none' }} />
                    {/* Mini size preview */}
                    <div style={{ width: 40, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <div style={{ background: sizeId === s.id ? '#5ba3ac' : '#c8dee2', borderRadius: 4, width: s.w === 3 ? 36 : 24, height: s.h === 3 ? 36 : s.h === 2 ? 24 : 24 }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, color: '#1a3a40', fontSize: '0.95rem' }}>{s.label}</div>
                      <div style={{ fontSize: '0.82rem', color: '#6a8e95', marginTop: 2 }}>{s.desc}</div>
                    </div>
                    {sizeId === s.id && <div style={{ color: '#5ba3ac', fontWeight: 800, fontSize: '1.1rem' }}>✓</div>}
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity + pricing */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a3a40', marginBottom: 14 }}>How Many?</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ width: 44, height: 44, borderRadius: 10, border: '2px solid #d0e8ec', background: 'white', fontSize: '1.3rem', cursor: 'pointer', color: '#5ba3ac', fontWeight: 700 }}>−</button>
                <input type="number" min={1} value={quantity} onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} style={{ width: 80, height: 44, textAlign: 'center', fontSize: '1.2rem', fontWeight: 800, color: '#1a3a40', border: '2px solid #d0e8ec', borderRadius: 10, outline: 'none' }} />
                <button onClick={() => setQuantity(q => q + 1)} style={{ width: 44, height: 44, borderRadius: 10, border: '2px solid #d0e8ec', background: 'white', fontSize: '1.3rem', cursor: 'pointer', color: '#5ba3ac', fontWeight: 700 }}>+</button>
              </div>

              {/* Pricing tiers */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {[...TIERS].reverse().map(t => {
                  const active = t.label === activeTier.label
                  return (
                    <div key={t.label} style={{ padding: '8px 14px', borderRadius: 8, background: active ? '#5ba3ac' : '#f0f4f5', border: `2px solid ${active ? '#5ba3ac' : 'transparent'}`, color: active ? 'white' : '#6a8e95', fontSize: '0.8rem', fontWeight: active ? 800 : 600 }}>
                      {t.label}: <strong>${t.price.toFixed(2)}</strong>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Order summary */}
            <div style={{ background: '#e8f7f9', borderRadius: 14, padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#6a8e95', fontWeight: 600 }}>{quantity} × {SIZES.find(s => s.id === sizeId)?.label} @ ${price.toFixed(2)} each</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#5ba3ac', marginTop: 4 }}>${total}</div>
              </div>
              <button onClick={() => setStep('photo')} style={{ padding: '13px 28px', background: '#5ba3ac', color: 'white', fontWeight: 700, fontSize: '0.95rem', border: 'none', borderRadius: 10, cursor: 'pointer' }}>
                Next →
              </button>
            </div>
          </div>
        )}

        {/* ── Step 2: Photo & Details ── */}
        {step === 'photo' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

            {/* Photo upload */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a3a40', marginBottom: 6 }}>Upload Your Photo</h2>
              <p style={{ fontSize: '0.88rem', color: '#6a8e95', marginBottom: 14, lineHeight: 1.6 }}>High-resolution images (300 DPI or larger) print best. JPG or PNG preferred.</p>

              <div
                onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={onDrop}
                onClick={() => fileRef.current?.click()}
                style={{
                  border: `2px dashed ${dragOver ? '#5ba3ac' : photoPreview ? '#5ba3ac' : '#c0d8dc'}`,
                  borderRadius: 14,
                  padding: photoPreview ? 0 : '48px 24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: dragOver ? '#f0fbfd' : 'white',
                  overflow: 'hidden',
                  transition: 'all 0.2s',
                  minHeight: 180,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" style={{ width: '100%', maxHeight: 320, objectFit: 'contain', display: 'block' }} />
                ) : (
                  <div>
                    <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>📷</div>
                    <div style={{ fontWeight: 700, color: '#1a3a40', marginBottom: 6 }}>Drag & drop or click to upload</div>
                    <div style={{ fontSize: '0.82rem', color: '#6a8e95' }}>JPG, PNG, HEIC up to 25MB</div>
                  </div>
                )}
              </div>
              <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]) }} />
              {photoPreview && (
                <button onClick={() => { setPhotoFile(null); setPhotoPreview(null) }} style={{ marginTop: 8, background: 'none', border: 'none', color: '#6a8e95', cursor: 'pointer', fontSize: '0.85rem', textDecoration: 'underline' }}>
                  Remove photo
                </button>
              )}
            </div>

            {/* Custom text */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a3a40', marginBottom: 6 }}>Custom Text <span style={{ fontWeight: 400, color: '#6a8e95' }}>(optional)</span></h2>
              <p style={{ fontSize: '0.88rem', color: '#6a8e95', marginBottom: 10, lineHeight: 1.6 }}>Names, dates, a short phrase — we'll work it into the design.</p>
              <input
                type="text"
                value={customText}
                onChange={e => setCustomText(e.target.value)}
                placeholder="e.g. Smith Family · Summer 2025"
                maxLength={60}
                style={{ width: '100%', padding: '13px 16px', fontSize: '0.95rem', border: '2px solid #d0e8ec', borderRadius: 10, outline: 'none', boxSizing: 'border-box', color: '#1a3a40' }}
              />
            </div>

            {/* Notes */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a3a40', marginBottom: 6 }}>Notes for Our Team <span style={{ fontWeight: 400, color: '#6a8e95' }}>(optional)</span></h2>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Any special requests, color preferences, cropping instructions…"
                rows={3}
                style={{ width: '100%', padding: '13px 16px', fontSize: '0.95rem', border: '2px solid #d0e8ec', borderRadius: 10, outline: 'none', boxSizing: 'border-box', color: '#1a3a40', resize: 'vertical', fontFamily: 'inherit' }}
              />
            </div>

            {/* Nav */}
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setStep('design')} style={{ flex: 1, padding: '13px 0', background: 'white', color: '#6a8e95', fontWeight: 700, fontSize: '0.95rem', border: '2px solid #d0e8ec', borderRadius: 10, cursor: 'pointer' }}>
                ← Back
              </button>
              <button
                onClick={proceedToPayment}
                disabled={loading}
                style={{ flex: 2, padding: '13px 0', background: loading ? '#6a8e95' : '#5ba3ac', color: 'white', fontWeight: 700, fontSize: '0.95rem', border: 'none', borderRadius: 10, cursor: loading ? 'default' : 'pointer' }}
              >
                {loading ? 'Preparing order…' : `Continue to Payment · $${total}`}
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: Payment ── */}
        {step === 'payment' && clientSecret && (
          <div>
            {/* Order summary recap */}
            <div style={{ background: '#f0fbfd', border: '2px solid rgba(91,163,172,0.2)', borderRadius: 14, padding: '18px 22px', marginBottom: 28 }}>
              <div style={{ fontWeight: 800, color: '#1a3a40', marginBottom: 8 }}>Order Summary</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#6a8e95', marginBottom: 4 }}>
                <span>{SIZES.find(s => s.id === sizeId)?.label} × {quantity}</span>
                <span>${price.toFixed(2)} each</span>
              </div>
              {customText && <div style={{ fontSize: '0.85rem', color: '#6a8e95', marginBottom: 4 }}>Text: "{customText}"</div>}
              {photoFile && <div style={{ fontSize: '0.85rem', color: '#5ba3ac', marginBottom: 4 }}>✓ Photo uploaded</div>}
              <div style={{ borderTop: '1px solid rgba(91,163,172,0.15)', marginTop: 10, paddingTop: 10, display: 'flex', justifyContent: 'space-between', fontWeight: 800, color: '#1a3a40' }}>
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe', variables: { colorPrimary: '#5ba3ac', borderRadius: '10px' } } }}>
              <CheckoutForm total={`$${total}`} onBack={() => setStep('photo')} />
            </Elements>
          </div>
        )}

      </div>
    </div>
  )
}
