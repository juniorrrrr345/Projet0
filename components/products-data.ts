const products = [
  {
    id: 1,
    image: '/product1.jpg',
    overlayLabel: 'JAUNE MOUSSEUX',
    overlayEmojis: ['🍋', '🇲🇦'],
    title: 'La mousse ++',
    subtitle: 'MOUSSE PREMIUM',
    icons: ['🏆', '🏆'],
    category: 'Premium',
    prices: [
      { label: '25g', value: '150€' },
      { label: '50g', value: '250€' },
    ]
  },
  {
    id: 2,
    image: '/product2.jpg',
    overlayLabel: 'DRY-SIFT 90U',
    overlayEmojis: ['🧨', '🧨'],
    title: 'DRY-SIFT',
    subtitle: '90u',
    icons: ['🧨', '🧨'],
    category: 'Dry-Sift',
    strain: 'Lemon Haze 🍋🍋',
    description: [
      '90u premium feu feu 🔥',
      'Curage au top, terpènes de fou 😜'
    ],
    features: ['TOP', 'TOP'],
    prices: [
      { label: '25g', value: '150€' },
      { label: '50g', value: '250€' },
      { label: '100g', value: '450€' },
      { label: '200g', value: '800€' },
      { label: '500g', value: '1750€' },
      { label: '1000g', value: '3400€' },
    ]
  },
  // Ajoute les autres produits ici...
];

export default products;