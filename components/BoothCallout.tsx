'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import confetti from 'canvas-confetti'

type Props = {
  href: string
  badgeColor: string
  confettiColors: string[]
}

export default function BoothCallout({ href, badgeColor, confettiColors }: Props) {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (rect.left + rect.width / 2) / window.innerWidth
    const y = (rect.top + rect.height / 2) / window.innerHeight
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { x, y },
      colors: confettiColors,
    })
    setTimeout(() => router.push(href), 500)
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        background: '#e8f7f9',
        border: '2px solid rgba(91,163,172,0.45)',
        borderRadius: 10,
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        boxShadow: hovered
          ? '0 0 0 4px rgba(91,163,172,0.22), 0 8px 24px rgba(91,163,172,0.38), 0 2px 6px rgba(0,0,0,0.08)'
          : '0 0 0 3px rgba(91,163,172,0.10), 0 4px 14px rgba(91,163,172,0.20), 0 1px 3px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-3px) scale(1.02)' : 'none',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{
        background: badgeColor,
        borderRadius: 6,
        padding: '3px 10px',
        fontSize: '0.68rem',
        fontWeight: 800,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'white',
      }}>
        Live Booth Experience
      </div>
      <a
        href={href}
        onClick={(e) => e.preventDefault()}
        style={{
          color: '#5ba3ac',
          fontWeight: 700,
          fontSize: '0.82rem',
          textDecoration: 'none',
          borderBottom: '1.5px solid rgba(91,163,172,0.4)',
          lineHeight: 1.3,
          cursor: 'pointer',
        }}
      >
        See packages →
      </a>
    </div>
  )
}
