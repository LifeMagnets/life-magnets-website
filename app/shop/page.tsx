import CategoryCard from '@/components/CategoryCard'

const categories = [
  {
    slug: 'home',
    label: 'Home',
    tagline: 'Creative, practical, or just fun designs for your home or office.',
    accent: '#e8734a',
    bg: '#fff4ef',
    border: 'rgba(232,115,74,0.25)',
    dot: 'rgba(232,115,74,0.15)',
    subcategories: [],
    customizable: true,
  },
  {
    slug: 'nature-travel',
    label: 'Nature & Travel',
    tagline: 'Mountains, beaches, and all the beautiful places that call you back.',
    accent: '#0097a7',
    bg: '#e8f7f9',
    border: 'rgba(0,151,167,0.25)',
    dot: 'rgba(0,151,167,0.12)',
    subcategories: [
      { slug: 'beach', label: 'Beach' },
      { slug: 'hiking-mountains', label: 'Hiking & Mountains' },
      { slug: 'travel', label: 'Travel' },
      { slug: 'nature', label: 'Nature' },
    ],
  },
  {
    slug: 'holidays-seasons',
    label: 'Holidays & Seasons',
    tagline: 'Birthdays, Christmas, Vacation, and all the moments in between',
    accent: '#f0b429',
    bg: '#fffbef',
    border: 'rgba(240,180,41,0.3)',
    dot: 'rgba(240,180,41,0.15)',
    subcategories: [],
    customizable: true,
  },
  {
    slug: 'inspirational',
    label: 'Inspirational',
    tagline: 'Words and designs to brighten any fridge, locker, or workspace',
    accent: '#26c6da',
    bg: '#e0f8fb',
    border: 'rgba(38,198,218,0.25)',
    dot: 'rgba(38,198,218,0.15)',
    subcategories: [],
    customizable: true,
  },
  {
    slug: 'sports-adventure',
    label: 'Sports & Adventure',
    tagline: 'For the athletes, competitors, and adventure-seekers in your life',
    accent: '#aa8860',
    bg: '#f8f0e8',
    border: 'rgba(170,136,96,0.25)',
    dot: 'rgba(170,136,96,0.12)',
    subcategories: [
      { slug: 'running-races', label: 'Running & Races' },
      { slug: 'team-sports', label: 'Team Sports' },
    ],
  },
  {
    slug: 'kids',
    label: 'Kids',
    tagline: 'Playful and creative magnets that kids (and parents) will love.',
    accent: '#4a7a84',
    bg: '#eaf4f6',
    border: 'rgba(74,122,132,0.25)',
    dot: 'rgba(74,122,132,0.12)',
    subcategories: [],
    customizable: true,
  },
]

export default function ShopPage() {
  return (
    <div>

      {/* Header + Category grid — single continuous gradient */}
      <section style={{ background: 'linear-gradient(to bottom, #f5e6c8 0%, #dfc49a 55%, #aa8860 100%)', padding: '64px 16px 80px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0097a7', marginBottom: 14 }}>Pre-Made Designs</div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1a3a40', lineHeight: 1.15, marginBottom: 16 }}>Shop by Category</h1>
          <p style={{ fontSize: '1.05rem', color: '#4a7a84', lineHeight: 1.7 }}>
            Browse our handcrafted magnet collections. Order online and we'll ship straight to you — or wrapped as a gift to someone you love.
          </p>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {categories.map(cat => (
            <CategoryCard key={cat.slug} {...cat} />
          ))}
        </div>
      </section>

      <style>{`
        .category-btn {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .category-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        }
      `}</style>

    </div>
  )
}
