/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Collection, Product, Review, GalleryItem } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'rings',
    name: 'Rings',
    description: 'Bespoke diamond bands and signature engagement rings, meticulously crafted in champagne gold.',
    image: 'https://i.ibb.co/NnkKy9dh/Silver-signet-ring-on-stone-202608161451.jpg',
    count: '24 Pieces'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Captivating pendants, emerald wraps, and structured chains designed to sit with effortless grace.',
    image: 'https://i.ibb.co/ZR1BxR31/Gold-chain-necklace-on-sand-202608161451.jpg',
    count: '18 Pieces'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Charming drop earrings, delicate studs, and modern hoops featuring organic pearls and emerald highlights.',
    image: 'https://i.ibb.co/fYfm1mK9/Pearl-stud-earrings-on-background-202608161454.jpg',
    count: '16 Pieces'
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    description: 'Sleek bangles, woven gold threads, and refined cuffs that elevate every gesture.',
    image: 'https://i.ibb.co/twjh9F1Y/Silver-charm-bracelet-on-slate-202608161454.jpg',
    count: '12 Pieces'
  },
  {
    id: 'fine-jewellery',
    name: 'Fine Jewellery',
    description: 'One-of-a-kind statement pieces featuring rare gemstones, emeralds, and signature diamonds.',
    image: 'https://i.ibb.co/1ft3yY10/Silver-cocktail-ring-on-stone-202608161454.jpg',
    count: '8 Exclusive Pieces'
  },
  {
    id: 'special-occasion',
    name: 'Special Occasion',
    description: 'Custom anniversary pairings and bridal sets crafted to immortalize your unforgettable milestones.',
    image: 'https://i.ibb.co/0y8phmZP/Gold-ring-with-heart-charms-202608161534.jpg',
    count: '14 Heirloom Pieces'
  },
  {
    id: 'pendants-amulets',
    name: 'Pendants & Amulets',
    description: 'Delicately set gems suspended on gold loops, celebrating historical CDMX architectural motifs.',
    image: 'https://i.ibb.co/9Hf8dsFG/Silver-Ankh-pendant-on-silk-202608161443-3.jpg',
    count: '10 Handcrafted Gems'
  },
  {
    id: 'bespoke-engagement',
    name: 'Bespoke Engagement',
    description: 'Custom bridal sets and personal solitaire selections crafted in our private historic CDMX lounge.',
    image: '/assets/images/engagement_ring_1786959179024.jpg',
    count: '11 Private Designs'
  },
  {
    id: 'heritage-watches',
    name: 'Heritage Watches',
    description: 'Masterfully crafted luxury timepieces reflecting our dedication to fine precision and mechanics.',
    image: '/assets/images/luxury_watch_1786959165209.jpg',
    count: '6 Collector Pieces'
  }
];

export const FIRST_9_GALLERY: GalleryItem[] = [
  {
    id: 'fg1',
    category: 'Fine Jewellery',
    image: 'https://i.ibb.co/1ft3yY10/Silver-cocktail-ring-on-stone-202608161454.jpg',
    title: 'Silver Cocktail Ring on Stone',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'fg2',
    category: 'Bespoke Engagement',
    image: '/assets/images/engagement_ring_1786959179024.jpg',
    title: 'Bespoke Diamond Engagement Ring',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'fg3',
    category: 'Bracelets',
    image: 'https://i.ibb.co/twjh9F1Y/Silver-charm-bracelet-on-slate-202608161454.jpg',
    title: 'Silver Charm Bracelet on Slate',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'fg4',
    category: 'Bracelets',
    image: 'https://i.ibb.co/FbTx1SwY/Sterling-silver-charm-bracelet-d-202608161454.jpg',
    title: 'Sterling Silver Charm Bracelet',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'fg5',
    category: 'Earrings',
    image: 'https://i.ibb.co/fYfm1mK9/Pearl-stud-earrings-on-background-202608161454.jpg',
    title: 'Pearl Stud Earrings',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'fg6',
    category: 'Earrings',
    image: 'https://i.ibb.co/v4k733wb/Silver-drop-earrings-on-stone-202608161453-2.jpg',
    title: 'Silver Drop Earrings on Stone',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'fg7',
    category: 'Heritage Watches',
    image: '/assets/images/luxury_watch_1786959165209.jpg',
    title: 'Azahara Heritage Chronograph',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'fg8',
    category: 'Earrings',
    image: 'https://i.ibb.co/C3XGZw7z/Silver-drop-earrings-on-stone-202608161453.jpg',
    title: 'Classic Silver Drop Earrings',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'fg9',
    category: 'Earrings',
    image: 'https://i.ibb.co/YFnBtzY5/Silver-drop-earrings-on-stone-202608161453-1.jpg',
    title: 'Artisanal Silver Drop Earrings',
    sizeSpan: 'col-span-1'
  }
];

export const FINAL_9_GALLERY: GalleryItem[] = [
  {
    id: 'lng1',
    category: 'Earrings',
    image: 'https://i.ibb.co/zLN3qNY/Silver-and-amethyst-square-earrings-202608161447.jpg',
    title: 'Silver and Amethyst Square Earrings',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'lng2',
    category: 'Earrings',
    image: 'https://i.ibb.co/rRWKG9jJ/Silver-geometric-earrings-with-a-202608161447.jpg',
    title: 'Silver Geometric Amethyst Earrings',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'lng3',
    category: 'Rings',
    image: 'https://i.ibb.co/SCkLGV8/Silver-knot-ring-on-surface-202608161445-1.jpg',
    title: 'Silver Knot Ring on Surface',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'lng4',
    category: 'Rings',
    image: 'https://i.ibb.co/nMzDsnDY/Silver-knot-ring-on-surface-202608161445.jpg',
    title: 'Polished Silver Knot Ring',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'lng5',
    category: 'Special Occasion',
    image: 'https://i.ibb.co/0y8phmZP/Gold-ring-with-heart-charms-202608161534.jpg',
    title: 'Gold Ring with Heart Charms',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'lng6',
    category: 'Special Occasion',
    image: 'https://i.ibb.co/0VCHw8W9/Gold-ring-with-heart-charms-202608161445.jpg',
    title: 'Heart Charms Gold Band',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'lng7',
    category: 'Necklaces',
    image: 'https://i.ibb.co/xS0XCy7S/Silver-chain-on-textured-surface-202608161444.jpg',
    title: 'Silver Chain on Textured Surface',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'lng8',
    category: 'Pendants & Amulets',
    image: 'https://i.ibb.co/9Hf8dsFG/Silver-Ankh-pendant-on-silk-202608161443-3.jpg',
    title: 'Silver Ankh Pendant on Silk',
    sizeSpan: 'col-span-1'
  },
  {
    id: 'lng9',
    category: 'Pendants & Amulets',
    image: 'https://i.ibb.co/0RTTHcrY/Silver-ankh-pendant-on-silk-202608161443-1.jpg',
    title: 'Classic Silver Ankh Pendant',
    sizeSpan: 'col-span-1'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Silver Signet Ring on Stone',
    category: 'Rings',
    description: 'A striking structural silver signet ring nested on organic stone, capturing a refined architectural presence.',
    image: 'https://i.ibb.co/NnkKy9dh/Silver-signet-ring-on-stone-202608161451.jpg',
    specifications: ['925 Sterling Silver', 'Hand-finished Signet Front', 'Comfort Interior Curve', 'Satin Polish Accent'],
    isFeatured: true,
    price: '$150.00'
  },
  {
    id: 'p2',
    name: 'Classic Silver Signet Ring',
    category: 'Rings',
    description: 'A classic variation of our signature silver signet ring, polished to a high mirror finish that catches light beautifully.',
    image: 'https://i.ibb.co/pj8GcVPh/Silver-signet-ring-on-stone-202608161451-1.jpg',
    specifications: ['925 Sterling Silver', 'High Mirror Polish', 'Available in all custom sizes', 'Signature Box Included'],
    isFeatured: false,
    price: '$165.00'
  },
  {
    id: 'p3',
    name: 'Gold Chain Necklace on Sand',
    category: 'Necklaces',
    description: 'A beautiful warm-toned gold link chain nestled on desert sand, exhibiting an effortless editorial aesthetic.',
    image: 'https://i.ibb.co/ZR1BxR31/Gold-chain-necklace-on-sand-202608161451.jpg',
    specifications: ['18k Gold Plated Brass', '45cm Link Length', 'Reinforced Clasp', 'Unisex Editorial Profile'],
    isFeatured: true,
    price: '$195.00'
  },
  {
    id: 'p4',
    name: 'Silver Band with Gemstones',
    category: 'Bespoke Engagement',
    description: 'An elegant silver eternity band standing gracefully, encrusted with brilliant, hand-selected gemstones.',
    image: 'https://i.ibb.co/5gTQsrXd/Silver-band-with-gemstones-standing-202608161453.jpg',
    specifications: ['925 Sterling Silver', 'Micro-pave Gem Setting', '0.8ct Total Gem Weight', 'Delicate stacking structure'],
    isFeatured: false,
    price: '$180.00'
  },
  {
    id: 'p5',
    name: 'Silver Band with Sapphire Gems',
    category: 'Fine Jewellery',
    description: 'Our iconic gemstone band set with deep blue sapphire replica gemstones, celebrating historic royal motifs.',
    image: 'https://i.ibb.co/mCj2rGRm/Silver-band-with-sapphire-stones-202608161453.jpg',
    specifications: ['925 Sterling Silver', 'Precision-cut Sapphire Accents', 'Four-Prong Set Band', 'Luxury Certificate Included'],
    isFeatured: true,
    price: '$210.00'
  },
  {
    id: 'p6',
    name: 'Silver Pendant Necklace',
    category: 'Necklaces',
    description: 'A minimalist sterling silver pendant resting on a clean surface, radiating an understated luxury feel.',
    image: 'https://i.ibb.co/XxD61cXP/Silver-pendant-necklace-on-surface-202608161453.jpg',
    specifications: ['925 Sterling Silver', 'Engraved medallion detail', 'Adjustable 50cm chain', 'Perfect everyday piece'],
    isFeatured: false,
    price: '$155.00'
  },
  {
    id: 'p7',
    name: 'Silver Earrings with Amethyst',
    category: 'Earrings',
    description: 'Delightful drop earrings set with organic amethyst stones that bring a gentle purple radiance.',
    image: 'https://i.ibb.co/gMpTfGg0/Silver-earrings-with-amethyst-st-202608161447.jpg',
    specifications: ['925 Sterling Silver Hooks', 'Genuine Amethyst drops', 'Ultra-lightweight post', 'Total Drop: 2.2cm'],
    isFeatured: true,
    price: '$175.00'
  },
  {
    id: 'p8',
    name: 'Sterling Silver Ring on Slate',
    category: 'Rings',
    description: 'A rugged yet elegant hand-crafted sterling silver ring resting on natural slate, emphasizing raw beauty.',
    image: 'https://i.ibb.co/hxNW6Sw6/Sterling-silver-ring-on-slate-202608161447.jpg',
    specifications: ['Solid Sterling Silver', 'Textured Slate-hammered surface', 'Custom width profile', 'Dignity collection brand'],
    isFeatured: false,
    price: '$145.00'
  },
  {
    id: 'p9',
    name: 'Silver Ring with Blue Stone',
    category: 'Rings',
    description: 'A deep-sea blue centerpiece stone held safely in a four-prong sterling silver architecture.',
    image: 'https://i.ibb.co/QF3DnWqD/Silver-ring-with-blue-stone-202608161447.jpg',
    specifications: ['925 Sterling Silver', 'Aura blue center glass (1.0ct)', 'Hand-polished bezel', 'Memorable milestone card'],
    isFeatured: false,
    price: '$160.00'
  },
  {
    id: 'p10',
    name: 'Pink Cord Elegant Bracelet',
    category: 'Bracelets',
    description: 'A delicate friendship-style pink cord bracelet with hand-polished silver charm highlights.',
    image: 'https://i.ibb.co/rR1Jb5Vg/Pink-cord-bracelet-on-stone-202608161447.jpg',
    specifications: ['Japanese wax cord', 'Silver clasp accents', 'Fully adjustable circumference', 'Available in multiple colors'],
    isFeatured: false,
    price: '$120.00'
  },
  {
    id: 'p11',
    name: 'Pink Cord Friendship Bracelet',
    category: 'Bracelets',
    description: 'A premium handwoven pink cord bracelet accented with a solid silver centerpiece ring for timeless pairing.',
    image: 'https://i.ibb.co/1Y9Qztv8/Pink-cord-friendship-bracelet-ph-202608161447.jpg',
    specifications: ['Double-braided pink thread', '925 Silver centerpiece', 'Scratch-resistant sealant', 'Includes velvet pouch'],
    isFeatured: false,
    price: '$125.00'
  },
  {
    id: 'p12',
    name: 'Black Crystal Beaded Bracelet',
    category: 'Bracelets',
    description: 'A dark, gleaming row of polished black crystals, threaded with high-durability elastic for active luxury.',
    image: 'https://i.ibb.co/Z6WG99J0/Black-crystal-beaded-bracelet-202608161447.jpg',
    specifications: ['High-polish black crystals', 'Elasticated stretch core', 'Silver logo bead accent', 'Comfort wrist-hugging design'],
    isFeatured: true,
    price: '$140.00'
  },
  {
    id: 'p13',
    name: 'Onyx Beaded Crystal Bracelet',
    category: 'Bracelets',
    description: 'Our premium onyx beaded variant, styled with deeper hues and heavy light-refraction cuts.',
    image: 'https://i.ibb.co/RTKzvKYG/Black-crystal-beaded-bracelet-202608161448.jpg',
    specifications: ['Onyx-cut luxury crystals', 'Signature silver slider', 'Gift packaging card', 'Water-resistant thread core'],
    isFeatured: false,
    price: '$145.00'
  },
  {
    id: 'p14',
    name: 'Geometric Textured Band',
    category: 'Rings',
    description: 'A masterfully textured luxury ring resting on a rugged surface, ideal for custom wedding bands.',
    image: 'https://i.ibb.co/rRv4xNdQ/Ring-resting-on-textured-surface-202608161448.jpg',
    specifications: ['925 Sterling Silver', 'Asymmetrical textured face', 'Hypoallergenic plating', 'Comfort fit inner core'],
    isFeatured: false,
    price: '$150.00'
  },
  {
    id: 'p15',
    name: 'Rose Gold Ring on Surface',
    category: 'Rings',
    description: 'A beautiful warm rose gold ring displaying subtle curves and a soft satin finish.',
    image: 'https://i.ibb.co/5hLFyZHD/Rose-gold-ring-on-surface-202608161448-1.jpg',
    specifications: ['14k Rose Gold Plate', 'Satin smooth finish', 'Seamless curved outer ring', 'Custom sizing available'],
    isFeatured: true,
    price: '$190.00'
  },
  {
    id: 'p16',
    name: 'Silver Jaguar Statement Bracelet',
    category: 'Bracelets',
    description: 'An exceptional high-end statement bracelet featuring dual polished jaguar heads meeting at a spring clasp.',
    image: 'https://i.ibb.co/b8JpGcW/Silver-jaguar-bracelet-product-shot-202608161448.jpg',
    specifications: ['925 Sterling Silver', 'Hand-carved Jaguar heads', 'Heavy solid build (38g)', 'CDMX heritage collection'],
    isFeatured: true,
    price: '$295.00'
  },
  {
    id: 'p17',
    name: 'Sterling Jaguar Head Bracelet',
    category: 'Bracelets',
    description: 'A more detailed version of our Jaguar bracelet with meticulous fur engraving and black spinel eyes.',
    image: 'https://i.ibb.co/GQgz8f9P/Silver-bracelet-with-jaguar-heads-202608161448.jpg',
    specifications: ['Solid Sterling Silver', 'Natural Black Spinel Eyes', 'Secure integrated hinge', 'Collector Edition'],
    isFeatured: false,
    price: '$310.00'
  },
  {
    id: 'p18',
    name: 'Azahara Heritage Chronograph',
    category: 'Heritage Watches',
    description: 'A masterfully crafted chronograph luxury timepiece featuring automatic movement, detailed dial, and warm gold bezel.',
    image: '/assets/images/luxury_watch_1786959165209.jpg',
    specifications: ['Automatic Chronograph Movement', '18k Gold Bezel Accent', 'Hand-finished Leather Strap', 'Scratch-resistant Sapphire Crystal'],
    isFeatured: false,
    price: '$320.00'
  },
  {
    id: 'p19',
    name: 'Edificio Azahara Tourbillon',
    category: 'Heritage Watches',
    description: 'An exceptional luxury mechanical timepiece with an open heart tourbillon dial, reflecting our dedication to CDMX precision.',
    image: '/assets/images/luxury_watch_1786959165209.jpg',
    specifications: ['Skeletal Tourbillon Display', '925 Silver Engraved Flanks', 'Alligator Leather Strap', 'Limited Edition (6 Pieces)'],
    isFeatured: false,
    price: '$330.00'
  },
  {
    id: 'p20',
    name: 'Silver Tennis Bracelet on Silk',
    category: 'Bracelets',
    description: 'A shimmering sequence of brilliant replica diamonds set carefully on soft champagne silk.',
    image: 'https://i.ibb.co/nqQ4LDgc/Silver-tennis-bracelet-on-silk-202608161450.jpg',
    specifications: ['925 Sterling Silver', 'Continuous micro-pave sequence', 'Fold-over safety latch', 'Extremely fluid link movement'],
    isFeatured: true,
    price: '$250.00'
  },
  {
    id: 'p21',
    name: 'Engraved Silver Signet Ring',
    category: 'Rings',
    description: 'A custom-engravable flat-face signet ring crafted to carry your personal heritage symbol.',
    image: 'https://i.ibb.co/p6yvbt45/Silver-signet-ring-resting-on-202608161451.jpg',
    specifications: ['Solid 925 Silver', 'Engravable top surface', 'Thick luxury shank', 'Premium engraving template'],
    isFeatured: false,
    price: '$155.00'
  },
  {
    id: 'p22',
    name: 'Silver Ankh Pendant on Silk',
    category: 'Necklaces',
    description: 'The ancient symbol of life reimagined in beautiful high-polish silver resting on pure silk.',
    image: 'https://i.ibb.co/s9gn58wJ/Silver-Ankh-pendant-on-silk-202608161443.jpg',
    specifications: ['925 Sterling Silver', 'High-polish mirror finish', 'Includes 45cm fine chain', 'Luxury presentation case'],
    isFeatured: true,
    price: '$185.00'
  },
  {
    id: 'p23',
    name: 'Classic Ankh Silver Necklace',
    category: 'Necklaces',
    description: 'A timeless Ankh amulet reflecting balanced proportions and lightweight comfort.',
    image: 'https://i.ibb.co/hxhGmNLf/Silver-Ankh-pendant-on-silk-202608161443-2.jpg',
    specifications: ['925 Sterling Silver', 'Delicate classic loop', '40cm adjustable chain', 'Everyday luxury profile'],
    isFeatured: false,
    price: '$190.00'
  },
  {
    id: 'p24',
    name: 'Silver & Amethyst Square Studs',
    category: 'Earrings',
    description: 'Refined square studs featuring rich purple amethyst gemstones surrounded by sterling silver.',
    image: 'https://i.ibb.co/zLN3qNY/Silver-and-amethyst-square-earrings-202608161447.jpg',
    specifications: ['925 Sterling Silver', 'Square-cut natural Amethyst', 'Friction posts for security', 'Pair of two pieces'],
    isFeatured: true,
    price: '$165.00'
  },
  {
    id: 'p25',
    name: 'Geometric Amethyst Earrings',
    category: 'Earrings',
    description: 'A beautiful modern geometric framing that suspends the amethyst centerpiece for optimal light refraction.',
    image: 'https://i.ibb.co/rRWKG9jJ/Silver-geometric-earrings-with-a-202608161447.jpg',
    specifications: ['925 Sterling Silver', 'Custom geometric frames', 'Hand-set amethysts', 'Length: 1.8cm'],
    isFeatured: false,
    price: '$170.00'
  },
  {
    id: 'p26',
    name: 'Bespoke Solitaire Ring',
    category: 'Bespoke Engagement',
    description: 'A custom solitaire diamond engagement ring signifying timeless love and commitment, set in 18k champagne gold.',
    image: '/assets/images/engagement_ring_1786959179024.jpg',
    specifications: ['1.2ct Brilliant-cut Solitaire Diamond', 'VVS1 Clarity Certificate', '18k Champagne Gold Band', 'Bespoke design custom-fit'],
    isFeatured: false,
    price: '$2,450.00'
  },
  {
    id: 'p27',
    name: 'Palma Solitaire Engagement Ring',
    category: 'Bespoke Engagement',
    description: 'Our traditional solitaire setting featuring a brilliant-cut center diamond and micro-pave detailing.',
    image: '/assets/images/engagement_ring_1786959179024.jpg',
    specifications: ['1.5ct Cushion-cut Center Diamond', 'VS2 Clarity GIA Certified', 'Platinum and Gold Micro-pave Band', 'Includes luxury presentation safe'],
    isFeatured: false,
    price: '$3,138.00'
  },
  {
    id: 'p28',
    name: 'Gold Ring with Heart Charms',
    category: 'Rings',
    description: 'An elegant warm yellow gold band with hanging heart-shaped custom charms that play gracefully.',
    image: 'https://i.ibb.co/0y8phmZP/Gold-ring-with-heart-charms-202608161534.jpg',
    specifications: ['18k Yellow Gold Plating', 'Dangling miniature hearts', 'Comfort design shank', 'Romantic custom gift box'],
    isFeatured: true,
    price: '$220.00'
  },
  {
    id: 'p29',
    name: 'Heart Charms Gold Band',
    category: 'Rings',
    description: 'A solid structured variation of our heart charm ring with a wider band and micro-pave border details.',
    image: 'https://i.ibb.co/0VCHw8W9/Gold-ring-with-heart-charms-202608161445.jpg',
    specifications: ['18k Yellow Gold Plating', 'Precision soldered charms', 'Micro-pave border highlights', 'Engraved inner band'],
    isFeatured: false,
    price: '$225.00'
  },
  {
    id: 'p30',
    name: 'Heavy Silver Chain Link',
    category: 'Necklaces',
    description: 'A beautiful heavy silver link chain with customized architectural clasp elements.',
    image: 'https://i.ibb.co/xS0XCy7S/Silver-chain-on-textured-surface-202608161444.jpg',
    specifications: ['925 Solid Silver Links', 'Hand-assembled clasp', 'Length: 48cm', 'Weight: 32g'],
    isFeatured: false,
    price: '$240.00'
  },
  {
    id: 'p31',
    name: 'Sacred Ankh Silver Pendant',
    category: 'Necklaces',
    description: 'Our detailed sacred design of the silver Ankh pendant, displaying ancient micro-embossings.',
    image: 'https://i.ibb.co/9Hf8dsFG/Silver-Ankh-pendant-on-silk-202608161443-3.jpg',
    specifications: ['925 Sterling Silver', 'Micro-embossed front side', 'Includes heavy link chain', 'Bespoke story pamphlet'],
    isFeatured: false,
    price: '$180.00'
  },
  {
    id: 'p32',
    name: 'Silk Layed Silver Ankh',
    category: 'Necklaces',
    description: 'A modern sleek design featuring thin, razor-sharp edges and an exceptionally high polish.',
    image: 'https://i.ibb.co/0RTTHcrY/Silver-ankh-pendant-on-silk-202608161443-1.jpg',
    specifications: ['925 Sterling Silver', 'Ultra-thin profile design', '45cm classic silver chain', 'Elegant collector card'],
    isFeatured: false,
    price: '$185.00'
  },
  {
    id: 'p33',
    name: 'Handcrafted Knot Silver Band',
    category: 'Rings',
    description: 'An asymmetrical hand-crafted silver ring featuring a rustic sailor knot pattern.',
    image: 'https://i.ibb.co/Sg1LKMz/Silver-knot-ring-on-surface-202608161445-2.jpg',
    specifications: ['Oxidized Sterling Silver', 'Sailor knot detailing', 'Comfort fit lining', 'Rustic luxury profile'],
    isFeatured: false,
    price: '$140.00'
  },
  {
    id: 'p34',
    name: 'Elegant Silver Cocktail Ring',
    category: 'Rings',
    description: 'A beautiful high-profile silver cocktail ring set with an exceptionally polished clear center stone.',
    image: 'https://i.ibb.co/1ft3yY10/Silver-cocktail-ring-on-stone-202608161454.jpg',
    specifications: ['925 Sterling Silver Frame', 'Hand-polished white crystal', 'Showroom exclusive model', 'Premium lifetime guarantee'],
    isFeatured: true,
    price: '$260.00'
  },
  {
    id: 'p35',
    name: 'Gold Ring with Heart Charms',
    category: 'Rings',
    description: 'A beautiful gold ring with hanging heart-shaped charms that play gracefully in the light.',
    image: 'https://i.ibb.co/9mzpQGLF/Gold-ring-with-heart-charms-202608161535.jpg',
    specifications: ['18k Yellow Gold Plating', 'Miniature heart charms', 'Comfort fit shank', 'Heritage collection'],
    isFeatured: true,
    price: '$230.00'
  },
  {
    id: 'p36',
    name: 'Amour Heart Gold Ring',
    category: 'Rings',
    description: 'An exquisite hand-polished gold ring detailed with romantic hanging heart elements.',
    image: 'https://i.ibb.co/MD9V9hPd/Gold-ring-with-heart-charms-202608161534-2.jpg',
    specifications: ['18k Yellow Gold Plating', 'Precision set heart charms', 'Elegance series design', 'Satin finish accents'],
    isFeatured: false,
    price: '$235.00'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'r1',
    name: 'Sofía Martínez R.',
    rating: 5,
    date: 'July 2026',
    text: 'A truly beautiful discovery in the heart of Centro Histórico. The client experience at their Calle Palma boutique is unparalleled. Selecting our anniversary rings was a peaceful, elevated, and deeply memorable journey. The champagne gold hue is exceptionally warm and flattering.',
    verified: true,
    avatar: 'SM'
  },
  {
    id: 'r2',
    name: 'Alejandro Gómez',
    rating: 4,
    date: 'June 2026',
    text: 'Visiting the Edificio Azahara feels like stepping into a premium editorial magazine. The craftsmanship of the custom emerald pendant I ordered for my wife is magnificent. Their dedication to the fine details of Mexican luxury design shines through beautifully.',
    verified: true,
    avatar: 'AG'
  },
  {
    id: 'r3',
    name: 'Camila Rodriguez',
    rating: 5,
    date: 'May 2026',
    text: 'I cannot say enough wonderful things about the personal experience at Azahara. They listened carefully to my styling preferences and showed me several curated pieces without any sales pressure. The blossom studs are incredibly comfortable and elegant.',
    verified: true,
    avatar: 'CR'
  },
  {
    id: 'r4',
    name: 'Mateo Lezama',
    rating: 4,
    date: 'August 2026',
    text: 'Extremely professional jeweler right off Avenida Madero. The quality of the diamond setting on the tiara ring is absolute perfection. Beautifully polished presentation box and premium customer care from start to finish.',
    verified: true,
    avatar: 'ML'
  },
  {
    id: 'r5',
    name: 'Valeria Delgado',
    rating: 5,
    date: 'April 2026',
    text: 'The warm ivory aesthetics of the boutique and their products are spectacular. It’s refreshing to find a luxury jewellery shop in Mexico City that prioritizes warm, architectural-inspired color tones rather than cold dark colors. A delightful experience.',
    verified: true,
    avatar: 'VD'
  }
];
