// Single source of truth for all client-replaceable content.
// REPLACE markers indicate placeholder data — swap when client provides.
// All image URLs are verified-working Unsplash photos themed for cigar lounge / whiskey / cocktails.

export const business = {
  name: "Ash & Oak Cigar Club & Lounge",
  shortName: "Ash & Oak",
  tagline: "Where Luxury Meets Community",
  intro:
    "Birmingham's premier destination for premium cigars, handcrafted cocktails, and unforgettable evenings — rooted in elegance, excellence, and authentic Southern hospitality.",
  // REPLACE — confirm with client
  phone: "(205) 555-0142",
  phoneHref: "tel:+12055550142",
  email: "info@ashnoaklounge.com",
  emailHref: "mailto:info@ashnoaklounge.com",
  reservationsEmail: "reservations@ashnoaklounge.com",
  address: {
    line1: "2916 27th St N",
    line2: "Birmingham, AL 35207",
    full: "2916 27th St N, Birmingham, AL 35207",
    mapsHref:
      "https://www.google.com/maps/place/2916+27th+St+N,+Birmingham,+AL+35207",
    embedSrc:
      "https://www.google.com/maps?q=2916+27th+St+N,+Birmingham,+AL+35207&output=embed",
  },
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "5:00 PM – 11:00 PM" },
    { day: "Wednesday", time: "5:00 PM – 11:00 PM" },
    { day: "Thursday", time: "5:00 PM – 12:00 AM" },
    { day: "Friday", time: "5:00 PM – 2:00 AM" },
    { day: "Saturday", time: "3:00 PM – 2:00 AM" },
    { day: "Sunday", time: "3:00 PM – 10:00 PM" },
  ],
  socials: {
    instagram: "https://www.instagram.com/ashnoak_cigarclub/",
    facebook:
      "https://www.facebook.com/p/Ash-Oak-Cigar-Club-and-Lounge-61579406807091/",
  },
} as const;

export const navLinks = [
  { label: "Cigar & Bar Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Hero media — Ken Burns animated still while client video footage is pending.
// REPLACE videoSrc with client footage when ready (uncomment <video> tag in HeroVideo.tsx).
export const heroMedia = {
  videoSrc: "", // PLACEHOLDER — will be enabled when client provides
  posterSrc:
    "https://images.unsplash.com/photo-1679419857738-f8a7ca8c5de5?auto=format&fit=crop&w=2400&q=80",
};

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  origin?: string;
};

export const menu: Record<string, MenuItem[]> = {
  Cigars: [
    {
      name: "Padrón 1964 Anniversary",
      origin: "Nicaragua",
      description: "Aged four years. Rich, complex, full-bodied.",
      price: "$28",
    },
    {
      name: "Arturo Fuente Opus X",
      origin: "Dominican Republic",
      description: "Iconic. Spicy, peppery, and remarkably refined.",
      price: "$42",
    },
    {
      name: "Davidoff Winston Churchill",
      origin: "Dominican Republic",
      description: "Smooth, balanced, with notes of cedar and cream.",
      price: "$32",
    },
    {
      name: "Montecristo No. 2",
      origin: "Cuba",
      description: "The classic torpedo — earthy, woody, timeless.",
      price: "$36",
    },
    {
      name: "Romeo y Julieta Reserva Real",
      origin: "Dominican Republic",
      description: "Mild to medium. Honey, oak, and a clean finish.",
      price: "$22",
    },
    {
      name: "Oliva Serie V Melanio",
      origin: "Nicaragua",
      description: "Toasted oak, dark chocolate, and a long finish.",
      price: "$24",
    },
  ],
  Cocktails: [
    {
      name: "Smoked Old Fashioned",
      description:
        "Bourbon, demerara, aromatic bitters — finished with applewood smoke.",
      price: "$18",
    },
    {
      name: "Oak & Honey",
      description: "Rye, local honey, lemon, thyme.",
      price: "$16",
    },
    {
      name: "The Cuban Sidecar",
      description: "Aged rum, orange liqueur, fresh lemon, cane sugar rim.",
      price: "$15",
    },
    {
      name: "Ash Negroni",
      description: "Mezcal, Campari, sweet vermouth, charred orange peel.",
      price: "$17",
    },
    {
      name: "Velvet Espresso Martini",
      description: "Cold brew, vanilla vodka, Kahlúa, tonka bean foam.",
      price: "$16",
    },
    {
      name: "Garden Martini",
      description: "Cucumber gin, elderflower, mint, lime.",
      price: "$15",
    },
  ],
  Whiskey: [
    { name: "Macallan 18", description: "Highland single malt.", price: "$45" },
    { name: "Yamazaki 12", description: "Japanese single malt.", price: "$38" },
    { name: "Pappy Van Winkle 15", description: "Kentucky bourbon.", price: "$95" },
    { name: "Blanton's Single Barrel", description: "Bourbon.", price: "$22" },
    { name: "Lagavulin 16", description: "Islay single malt.", price: "$28" },
    { name: "Woodford Reserve Double Oaked", description: "Bourbon.", price: "$16" },
  ],
  Wine: [
    { name: "Caymus Cabernet Sauvignon", description: "Napa Valley.", price: "$18 / $72" },
    { name: "Veuve Clicquot Brut", description: "Champagne.", price: "$22 / $95" },
    { name: "Stags' Leap Petite Sirah", description: "Napa Valley.", price: "$16 / $64" },
    { name: "Whispering Angel Rosé", description: "Provence.", price: "$14 / $56" },
    { name: "Kim Crawford Sauvignon Blanc", description: "Marlborough.", price: "$12 / $48" },
  ],
  Bites: [
    {
      name: "Charcuterie & Cheese Board",
      description: "Cured meats, artisanal cheeses, honey, marcona almonds.",
      price: "$32",
    },
    {
      name: "Smoked Salmon Platter",
      description: "Capers, dill cream, crostini, pickled red onion.",
      price: "$24",
    },
    {
      name: "Wagyu Sliders",
      description: "Three sliders, aged cheddar, truffle aioli.",
      price: "$22",
    },
    {
      name: "Truffle Fries",
      description: "Hand-cut, parmesan, fresh herbs.",
      price: "$14",
    },
    {
      name: "Grilled Vegetables",
      description: "Seasonal, balsamic glaze, sea salt.",
      price: "$16",
    },
  ],
};

export type Event = {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  tag: string;
};

export const events: Event[] = [
  {
    title: "Live Jazz Sessions",
    date: "Every Thursday",
    time: "8:00 PM",
    description:
      "Intimate sets from Birmingham's finest jazz musicians. Reserved seating recommended.",
    image:
      "https://images.unsplash.com/photo-1547652577-b4fe2f34d7ee?auto=format&fit=crop&w=1200&q=80",
    tag: "Live Music",
  },
  {
    title: "Whiskey & Cigar Pairing",
    date: "May 18, 2026",
    time: "7:00 PM",
    description:
      "A guided tasting through five rare whiskies, paired with hand-selected cigars.",
    image:
      "https://images.unsplash.com/photo-1615887023544-3a566f29d822?auto=format&fit=crop&w=1200&q=80",
    tag: "Tasting",
  },
  {
    title: "Saturday Night R&B",
    date: "Every Saturday",
    time: "9:00 PM",
    description:
      "Soulful live performances from rotating local artists. The dress code is sharp.",
    image:
      "https://images.unsplash.com/photo-1503971052383-6d71287aef49?auto=format&fit=crop&w=1200&q=80",
    tag: "Live Music",
  },
  {
    title: "Members Only Lounge Night",
    date: "First Friday Monthly",
    time: "9:00 PM",
    description:
      "Exclusive evening for members and their guests — private bar, curated cigars, late-night menu.",
    image:
      "https://images.unsplash.com/photo-1612659429327-8f59b894959b?auto=format&fit=crop&w=1200&q=80",
    tag: "Members",
  },
  {
    title: "Comedy & Cocktails",
    date: "Last Wednesday Monthly",
    time: "8:00 PM",
    description:
      "An evening of local stand-up — sharp wit, sharper drinks.",
    image:
      "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1200&q=80",
    tag: "Comedy",
  },
  {
    title: "Bourbon Society Dinner",
    date: "Quarterly",
    time: "7:30 PM",
    description:
      "A four-course tasting menu paired with rare bourbons. Limited seats.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
    tag: "Tasting",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1679419860191-278d0720bc1b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1547652577-b4fe2f34d7ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1550520293-d34b3f2e116d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1612659429327-8f59b894959b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1495754149474-e54c07932677?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1708103345127-f3eced933318?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1699618688395-bbe061173af8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=80",
];

export type MembershipTier = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  perks: string[];
  featured?: boolean;
};

export const membershipTiers: MembershipTier[] = [
  {
    name: "Ember",
    price: "$95",
    cadence: "/ month",
    tagline: "An invitation to the lounge.",
    perks: [
      "Priority reservations",
      "10% off the cigar menu",
      "Complimentary welcome cocktail monthly",
      "Members-only newsletter",
    ],
  },
  {
    name: "Oakwood",
    price: "$195",
    cadence: "/ month",
    tagline: "Our most-loved tier.",
    featured: true,
    perks: [
      "All Ember benefits",
      "Personal humidor locker",
      "20% off the cigar & spirits menu",
      "Two complimentary guest passes monthly",
      "Access to private members' nights",
      "Reserved seat at quarterly tasting dinners",
    ],
  },
  {
    name: "Reserve",
    price: "$395",
    cadence: "/ month",
    tagline: "For the connoisseur.",
    perks: [
      "All Oakwood benefits",
      "Premium humidor locker (climate-controlled)",
      "30% off the entire menu",
      "Unlimited guest passes",
      "Private event hosting (one per quarter)",
      "First access to rare & limited releases",
      "Concierge sourcing of rare cigars & spirits",
    ],
  },
];

export const aboutContent = {
  // REPLACE — final story copy from client. Founder is a woman per brand research; story can be made personal once we have her name & details.
  heroImage:
    "https://images.unsplash.com/photo-1679419857738-f8a7ca8c5de5?auto=format&fit=crop&w=1600&q=80",
  founderImage:
    "https://images.unsplash.com/photo-1495754149474-e54c07932677?auto=format&fit=crop&w=900&q=80",
  story: [
    "Ash & Oak was born from a simple idea: that Birmingham deserved a space where elegance, conversation, and craft could share the same room. Where the warmth of Southern hospitality could meet the refinement of a world-class lounge.",
    "What began as a vision became a sanctuary. Plush seating. Rich wood. Ambient light. A curated selection of premium cigars, fine spirits, and handcrafted cocktails — all served in a space designed for both occasion and ease.",
    "We are a club, but we are also a community. Every chair, every pour, every note of live music is meant to remind you: this is your place to slow down, to celebrate, to belong.",
  ],
  values: [
    {
      title: "Craft",
      body: "Every cigar, every pour, every plate is selected with intention.",
    },
    {
      title: "Hospitality",
      body: "Southern warmth, world-class service. No exceptions.",
    },
    {
      title: "Community",
      body: "A place to gather, to celebrate, to be known.",
    },
  ],
};

// Featured items shown on homepage — verified themed images.
export const homeFeatured = [
  {
    label: "Cigars",
    title: "Padrón 1964 Anniversary",
    blurb: "Aged four years. Rich, complex, full-bodied — a quiet classic.",
    image:
      "https://images.unsplash.com/photo-1679419860191-278d0720bc1b?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Cocktails",
    title: "Smoked Old Fashioned",
    blurb:
      "Bourbon, demerara, aromatic bitters — finished tableside with applewood smoke.",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Whiskey",
    title: "Macallan 18",
    blurb:
      "Highland single malt. Sherry oak, dried fruit, and a long, warm finish.",
    image:
      "https://images.unsplash.com/photo-1615887625746-f3d2aa27e048?auto=format&fit=crop&w=900&q=80",
  },
];

// Membership CTA + page header backdrop
export const heroBackdrops = {
  membership:
    "https://images.unsplash.com/photo-1708103345127-f3eced933318?auto=format&fit=crop&w=1800&q=80",
};
