import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'HASHTAG BOT - Boutique en ligne',
    template: '%s | HASHTAG BOT'
  },
  description: 'Boutique en ligne HASHTAG BOT - Numéro 1 dans le Nord Pas de Calais. Découvrez nos produits premium.',
  keywords: ['boutique', 'en ligne', 'HASHTAG BOT', 'Nord Pas de Calais', 'premium'],
  authors: [{ name: 'HASHTAG BOT' }],
  creator: 'HASHTAG BOT',
  publisher: 'HASHTAG BOT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HASHTAG BOT - Boutique en ligne',
    description: 'Boutique en ligne HASHTAG BOT - Numéro 1 dans le Nord Pas de Calais',
    siteName: 'HASHTAG BOT',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HASHTAG BOT - Boutique en ligne',
    description: 'Boutique en ligne HASHTAG BOT - Numéro 1 dans le Nord Pas de Calais',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}