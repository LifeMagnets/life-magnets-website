'use client'

import Image from 'next/image'
import { useState } from 'react'

type Product = { id: string; name: string; image: string; sub: string; group: string }

const SIZES = [
  { label: '2×2 Square',    value: '2x2' },
  { label: '2×3 Portrait',  value: '2x3' },
  { label: '3×2 Landscape', value: '3x2' },
]

function unitPrice(qty: number) {
  if (qty >= 50) return 5.99
  if (qty >= 25) return 6.49
  if (qty >= 10) return 7.49
  return 8.99
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [size, setSize] = useState('2x2')
  const [qty, setQty] = useState(1)
  const price = (unitPrice(qty) * qty).toFixed(2)

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(26,58,64,0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
        backdropFilter: 'blur(3px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white', borderRadius: 20,
          boxShadow: '0 24px 64px rgba(0,0,0,0.22)',
          display: 'flex', flexWrap: 'wrap',
          maxWidth: 780, width: '100%',
          overflow: 'hidden', position: 'relative',
          maxHeight: '90vh',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 14, right: 14, zIndex: 10,
            background: 'rgba(26,58,64,0.08)', border: 'none', borderRadius: '50%',
            width: 36, height: 36, cursor: 'pointer',
            fontSize: '1.1rem', color: '#1a3a40', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >✕</button>

        {/* Image */}
        <div style={{ flex: '0 0 320px', minWidth: 260, background: '#f5f5f3', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
          <div style={{ position: 'relative', width: 260, height: 260, borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.14)' }}>
            <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} unoptimized />
          </div>
        </div>

        {/* Details */}
        <div style={{ flex: 1, minWidth: 260, padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 20, overflowY: 'auto' }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6a8e95', marginBottom: 6 }}>Pre-Made Design</div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1a3a40', margin: 0, lineHeight: 1.2 }}>{product.name}</h2>
          </div>

          {/* Size */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1a3a40', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Size</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {SIZES.map(s => (
                <button
                  key={s.value}
                  onClick={() => setSize(s.value)}
                  style={{
                    padding: '8px 14px', borderRadius: 8, cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem',
                    border: size === s.value ? '2px solid #5ba3ac' : '2px solid #e0e0e0',
                    background: size === s.value ? '#eaf8f9' : 'white',
                    color: size === s.value ? '#5ba3ac' : '#6a8e95',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1a3a40', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Quantity</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: '2px solid #e0e0e0', borderRadius: 10, overflow: 'hidden', width: 'fit-content' }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 40, height: 40, border: 'none', background: '#f5f5f3', cursor: 'pointer', fontSize: '1.2rem', color: '#1a3a40', fontWeight: 700 }}>−</button>
              <span style={{ width: 48, textAlign: 'center', fontWeight: 800, fontSize: '1rem', color: '#1a3a40' }}>{qty}</span>
              <button onClick={() => setQty(q => q + 1)} style={{ width: 40, height: 40, border: 'none', background: '#f5f5f3', cursor: 'pointer', fontSize: '1.2rem', color: '#1a3a40', fontWeight: 700 }}>+</button>
            </div>
            <div style={{ marginTop: 8, fontSize: '0.78rem', color: '#6a8e95' }}>
              ${unitPrice(qty).toFixed(2)}/each
              {qty >= 10 && <span style={{ marginLeft: 8, color: '#5ba3ac', fontWeight: 700 }}>
                {qty >= 50 ? '🎉 Best price!' : qty >= 25 ? '✦ Volume discount' : '✦ Volume discount'}
              </span>}
            </div>
          </div>

          {/* Price */}
          <div style={{ background: '#f5f5f3', borderRadius: 10, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 700, color: '#6a8e95', fontSize: '0.9rem' }}>Subtotal</span>
            <span style={{ fontWeight: 800, fontSize: '1.3rem', color: '#1a3a40' }}>${price}</span>
          </div>

          {/* Add to cart */}
          <button
            style={{
              background: '#5ba3ac', color: 'white', border: 'none', borderRadius: 12,
              padding: '15px 0', fontWeight: 800, fontSize: '1rem', cursor: 'pointer',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              width: '100%',
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'translateY(-2px)'; (e.target as HTMLElement).style.boxShadow = '0 6px 20px rgba(91,163,172,0.4)' }}
            onMouseLeave={e => { (e.target as HTMLElement).style.transform = ''; (e.target as HTMLElement).style.boxShadow = '' }}
          >
            Add to Cart
          </button>

          <p style={{ fontSize: '0.78rem', color: '#6a8e95', margin: 0, textAlign: 'center', lineHeight: 1.5 }}>
            Handcrafted · Ships in 3–5 business days
          </p>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}
      onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 8px 28px rgba(0,0,0,0.13)' }}
      onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)' }}
    >
      <div style={{ background: '#f5f5f3', padding: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: 160, height: 160, borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
          <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} unoptimized />
        </div>
      </div>
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#1a3a40', marginBottom: 4 }}>{product.name}</h2>
        <p style={{ fontSize: '0.82rem', color: '#6a8e95', marginBottom: 16, flex: 1 }}>From $5.99 · handcrafted</p>
        <div style={{ display: 'block', textAlign: 'center', padding: '10px 0', background: '#aa8860', color: 'white', fontWeight: 700, fontSize: '0.88rem', borderRadius: 10 }}>
          View & Order
        </div>
      </div>
    </div>
  )
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} onClick={() => setSelected(p)} />
        ))}
      </div>
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
