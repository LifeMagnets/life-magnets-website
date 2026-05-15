import type { Metadata } from 'next'
import { Dancing_Script } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-script',
})

export const metadata: Metadata = {
  title: 'Life Magnets Co. | Custom Photo Magnets',
  description: 'Custom photo magnets for weddings, events, and everyday life. Order online or book a live event booth.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dancingScript.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
