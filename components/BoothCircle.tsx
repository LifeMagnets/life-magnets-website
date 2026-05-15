'use client'

import Image from 'next/image'
import { useRef } from 'react'
import confetti from 'canvas-confetti'

export default function BoothCircle() {
  const circleRef = useRef<HTMLDivElement>(null)

  function handleClick() {
    if (!circleRef.current) return
    const rect = circleRef.current.getBoundingClientRect()
    const x = (rect.left + rect.width / 2) / window.innerWidth
    const y = (rect.top + rect.height / 2) / window.innerHeight

    confetti({
      particleCount: 80,
      spread: 70,
      startVelocity: 28,
      decay: 0.92,
      origin: { x, y },
      colors: ['#5ba3ac', '#7ec4cd', '#e8c46e', '#c8675d', '#ffffff', '#a8cfe0'],
      shapes: ['circle', 'square'],
      scalar: 0.9,
    })
  }

  return (
    <div
      ref={circleRef}
      onClick={handleClick}
      title="Click me!"
      style={{
        width: 220, height: 220,
        background: 'rgba(255,255,255,0.12)',
        border: '3px solid rgba(255,255,255,0.3)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      }}
      className="booth-circle"
    >
      <div style={{
        width: 160, height: 160, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,1) 45%, rgba(255,255,255,0.6) 65%, rgba(255,255,255,0) 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Image src="/logo-icon.png" alt="Click for a surprise!" width={100} height={100} style={{ objectFit: 'contain' }} />
      </div>

      <style>{`
        .booth-circle:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(255,255,255,0.25);
        }
        .booth-circle:active {
          transform: scale(0.97);
        }
      `}</style>
    </div>
  )
}
