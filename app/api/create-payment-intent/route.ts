import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

const TIERS = [
  { min: 50, price: 5.99 },
  { min: 25, price: 6.49 },
  { min: 10, price: 7.49 },
  { min: 1,  price: 8.99 },
]

function pricePerMagnet(qty: number): number {
  return TIERS.find(t => qty >= t.min)!.price
}

export async function POST(req: NextRequest) {
  const { sizeId, quantity, customText, notes, photoUrl, category } = await req.json()

  if (!sizeId || !quantity || quantity < 1) {
    return NextResponse.json({ error: 'Invalid order details' }, { status: 400 })
  }

  const unitPrice = pricePerMagnet(quantity)
  const amount = Math.round(unitPrice * quantity * 100)

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
    metadata: {
      sizeId,
      quantity: String(quantity),
      unitPrice: String(unitPrice),
      category: category || 'build-your-own',
      customText: customText || '',
      notes: notes || '',
      photoUrl: photoUrl || '',
    },
  })

  return NextResponse.json({ clientSecret: paymentIntent.client_secret })
}
