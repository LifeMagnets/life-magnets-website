'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Subcategory = { slug: string; label: string }

type Props = {
  slug: string
  label: string
  tagline: string
  accent: string
  bg: string
  border: string
  dot: string
  subcategories: Subcategory[]
  customizable?: boolean
}

export default function CategoryCard({ slug, label, tagline, accent, bg, border, dot, subcategories, customizable }: Props) {
  const [open, setOpen] = useState(false)
  const [custOpen, setCustOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const custRef = useRef<HTMLDivElement>(null)
  const waveBtnRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!open && !custOpen) return
    function onOutsideClick(e: MouseEvent) {
      if (open &&
        popupRef.current && !popupRef.current.contains(e.target as Node) &&
        btnRef.current && !btnRef.current.contains(e.target as Node)
      ) setOpen(false)
      if (custOpen &&
        custRef.current && !custRef.current.contains(e.target as Node) &&
        waveBtnRef.current && !waveBtnRef.current.contains(e.target as Node)
      ) setCustOpen(false)
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') { setOpen(false); setCustOpen(false) }
    }
    document.addEventListener('mousedown', onOutsideClick)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', onOutsideClick)
      document.removeEventListener('keydown', onEscape)
    }
  }, [open, custOpen])

  return (
    <div
      style={{
        background: bg,
        border: `2px solid ${border}`,
        borderRadius: 16,
        padding: '36px 32px',
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
      onClick={() => router.push(`/shop/${slug}`)}
    >
      {/* Top row: dots + optional customizable wave icon */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {[28, 20, 14].map((size, i) => (
            <div key={i} style={{ width: size, height: size, borderRadius: '50%', background: dot, border: `2px solid ${border}` }} />
          ))}
        </div>

        {customizable && (
          <button
            ref={waveBtnRef}
            onClick={(e) => { e.stopPropagation(); setCustOpen(o => !o); setOpen(false) }}
            title="Customizable options available"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 6, lineHeight: 0,
              borderRadius: '50%',
            }}
            className="wave-btn"
          >
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: 'rgba(200,240,248,0.35)',
              border: `2px solid ${border}`,
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 0 0 3px rgba(0,70,90,0.18), 0 0 0 7px rgba(0,70,90,0.09), 0 0 0 12px rgba(0,70,90,0.04)',
            }}>
              <svg viewBox="0 0 48 34" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', display: 'block' }}>
                <defs>
                  <linearGradient id="wg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(200,235,238,0)" />
                    <stop offset="100%" stopColor="rgba(200,235,238,0.95)" />
                  </linearGradient>
                  <linearGradient id="wg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(126,196,205,0)" />
                    <stop offset="100%" stopColor="rgba(126,196,205,0.9)" />
                  </linearGradient>
                  <linearGradient id="wg3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(91,163,172,0)" />
                    <stop offset="100%" stopColor="rgba(91,163,172,0.8)" />
                  </linearGradient>
                </defs>
                <path d="M0,6 C8,0 16,14 24,6 C32,0 40,12 48,6 L48,34 L0,34 Z" fill="url(#wg1)" />
                <path d="M0,13 C8,6 16,20 24,13 C32,6 40,18 48,13 L48,34 L0,34 Z" fill="url(#wg2)" />
                <path d="M0,20 C8,14 16,26 24,20 C32,14 40,24 48,20 L48,34 L0,34 Z" fill="url(#wg3)" />
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Customizable options popup */}
      {custOpen && (
        <div
          ref={custRef}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: 68,
            right: 20,
            width: 230,
            background: 'white',
            borderRadius: 12,
            padding: '16px 18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.16)',
            zIndex: 60,
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ fontWeight: 800, color: accent, fontSize: '0.95rem', marginBottom: 8 }}>
            ✦ Customizable Options
          </div>
          <p style={{ fontSize: '0.84rem', color: '#6a8e95', lineHeight: 1.6, margin: '0 0 12px' }}>
            Designs in this category can be personalized — choose a background template, add your own photo, or request custom text.
          </p>
          <Link
            href="/custom"
            onClick={() => setCustOpen(false)}
            style={{ color: accent, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}
          >
            Start customizing →
          </Link>
        </div>
      )}

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a3a40', marginBottom: 10, lineHeight: 1.2 }}>{label}</h2>
      <p style={{ fontSize: '0.95rem', color: '#6a8e95', lineHeight: 1.6, marginBottom: 24, flex: 1 }}>{tagline}</p>

      {/* Browse button */}
      <button
        ref={btnRef}
        onClick={(e) => { e.stopPropagation(); setOpen(o => !o); setCustOpen(false) }}
        style={{
          display: 'block',
          width: '100%',
          padding: '11px 22px',
          background: accent,
          color: 'white',
          fontWeight: 700,
          fontSize: '0.9rem',
          borderRadius: 10,
          border: 'none',
          cursor: 'pointer',
          textAlign: 'center',
        }}
        className="category-btn"
      >
        Browse {label} {open ? '▲' : '▾'}
      </button>

      {/* Browse popup */}
      {open && (
        <div
          ref={popupRef}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            right: 0,
            background: 'white',
            borderRadius: 12,
            boxShadow: '0 8px 32px rgba(0,0,0,0.16)',
            overflow: 'hidden',
            zIndex: 50,
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <Link
            href={`/shop/${slug}`}
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              padding: '13px 18px',
              color: accent,
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none',
              borderBottom: subcategories.length > 0 ? '1px solid #f0f0ee' : 'none',
              background: 'rgba(0,0,0,0.01)',
            }}
          >
            See All {label}
          </Link>
          {subcategories.map((sub, i) => (
            <Link
              key={sub.slug}
              href={`/shop/${slug}?sub=${sub.slug}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '12px 18px',
                color: '#1a3a40',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                borderBottom: i < subcategories.length - 1 ? '1px solid #f0f0ee' : 'none',
              }}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .wave-btn { transition: transform 0.2s ease; }
        .wave-btn:hover { transform: translateY(-2px) scaleX(1.08); }
        .wave-btn > div { transition: box-shadow 0.2s ease; }
        .wave-btn:hover > div { box-shadow: 0 0 0 4px rgba(0,70,90,0.30), 0 0 0 9px rgba(0,70,90,0.15), 0 0 0 16px rgba(0,70,90,0.06) !important; }
      `}</style>
    </div>
  )
}
