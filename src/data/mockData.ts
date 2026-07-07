import type { Project, Testimonial, Product, WhyChooseUsItem, IndustryItem, Award } from '../types';
import { siteConfig } from '../config/siteConfig';

export const marqueeItems = [
  'VERTEX PROPERTIES',
  'METRO DEVELOPMENTS',
  'URBAN GREEN LABS',
  'APEX INFRASTRUCTURE',
  'DEPARTMENT OF PUBLIC WORKS',
  'NEXUS BUILDERS',
  'ECO-CITIES GROUP'
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Eco Plaza Walkway",
    category: "walkway",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Vanguard HQ Campus",
    category: "corporate",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Marina Permeable Parking Lot",
    category: "parking",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Greenway Public Park Path",
    category: "walkway",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Innovation Hub Courtyard",
    category: "corporate",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Transit Center Plaza",
    category: "parking",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=800&q=80"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: `${siteConfig.fullName} completely redefined our green building approach. The carbon-negative paving tiles fit perfectly with our net-zero targets and looked more premium than any concrete alternative.`,
    author: "Marcus Vance",
    role: "VP of Sustainability",
    company: "Aether Development Group",
    logo: "A E T H E R"
  },
  {
    id: 2,
    quote: `For public parks and city walkways, durability and water drainage are critical. ${siteConfig.fullName} delivered high-strength permeable paving that handles heavy storms easily while using millions of tons of local waste.`,
    author: "Elena Rostova",
    role: "Chief Urban Planner",
    company: "Munich Smart City Initiative",
    logo: "M U N I C H"
  },
  {
    id: 3,
    quote: `${siteConfig.fullName} didn't just supply paving blocks—they gave us detailed environmental product declarations showing exact carbon offsets for our certification.`,
    author: "Jonathan Pierce",
    role: "Lead Architect",
    company: "Studio Earthworks",
    logo: "E A R T H W O R K S"
  }
];

export const products: Product[] = [
  {
    id: 1,
    tag: "Flagship",
    title: "PaveEco™ Classic",
    description: "Elite geometric paving designed for commercial pedestrian plazas and public sidewalks. Heavy load-bearing capacity with sleek modern color finishes.",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80",
    sizeClass: "large",
    specs: [
      { label: "Strength", value: "85 MPa" },
      { label: "Thickness", value: "80 mm" },
      { label: "Recycled Content", value: "92%" }
    ]
  },
  {
    id: 2,
    tag: "Stormwater Management",
    title: "HydraPave™ Permeable",
    description: "Allows natural stormwater filtration directly into the soil. Stops urban flash flooding and eliminates surface runoffs completely.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    sizeClass: "tall",
    specs: [
      { label: "Infiltration", value: "1500 mm/hr" },
      { label: "Recycled Content", value: "85%" }
    ]
  },
  {
    id: 3,
    tag: "Infrastructure",
    title: "GeoBorder™",
    description: "Lightweight, impact-resistant perimeter locks for walkways.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    sizeClass: "standard",
    specs: [
      { label: "Length", value: "1000 mm" },
      { label: "Weight", value: "3.5 kg" }
    ]
  },
  {
    id: 4,
    tag: "Climate Tech",
    title: "EPD Certified Net Negative",
    description: `Every batch of ${siteConfig.fullName} comes with a verified Environmental Product Declaration, showing locked carbon credits that reduce your project's overall embodied carbon score.`,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    sizeClass: "wide",
    specs: [
      { label: "Embodied Carbon", value: "-120 kg CO2/m²" },
      { label: "LEED contribution", value: "Up to 8 Points" }
    ]
  },
  {
    id: 5,
    tag: "Decorative",
    title: "Urban Path™",
    description: "Matte-finish paving tiles for architectural landscapes.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    sizeClass: "standard",
    specs: [
      { label: "Finish", value: "Sand-grain" },
      { label: "UV resistance", value: "ASTM G154" }
    ]
  }
];

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 1,
    icon: "shield",
    title: "Carbon Negative",
    description: "Permanently traps carbon polymers inside the structural core, reducing total global atmospheric CO2."
  },
  {
    id: 2,
    icon: "refresh",
    title: "Eco Friendly",
    description: "Built with 100% recycled plastic waste and aggregate by-products, preserving local ecosystems."
  },
  {
    id: 3,
    icon: "droplet",
    title: "Waterproof",
    description: "Excellent water runoff redirection or immediate soil permeability depending on style chosen."
  },
  {
    id: 4,
    icon: "flame",
    title: "Fire Resistant",
    description: "Class-A flame protection standard with zero structural melting or harmful gas emission."
  },
  {
    id: 5,
    icon: "plus",
    title: "High Strength",
    description: "Boasts a compressive strength rating of 85+ MPa, easily outlasting standard commercial concrete tiles."
  },
  {
    id: 6,
    icon: "circle",
    title: "Lightweight",
    description: "40% lighter than traditional pavers, leading to lower freight costs and simple building layouts."
  },
  {
    id: 7,
    icon: "rect",
    title: "Cost Effective",
    description: "Competitive initial pricing matched with virtually zero ongoing maintenance requirements for 50 years."
  },
  {
    id: 8,
    icon: "award",
    title: "Patented Tech",
    description: "Proprietary non-thermal compression system tested and audited by third-party materials scientists."
  }
];

export const industryItems: IndustryItem[] = [
  {
    id: 1,
    icon: "home",
    title: "Real Estate Developers",
    description: "Enhance project values and hit green certification goals (LEED, BREEAM) with premium, modern exterior design elements."
  },
  {
    id: 2,
    icon: "building",
    title: "Government Agencies",
    description: "Meet strict municipal carbon-reduction goals while laying down durable pathways that withstand decades of public wear."
  },
  {
    id: 3,
    icon: "layers",
    title: "Architects & Landscapers",
    description: "Create striking geometric paths, sustainable courtyards, and clean garden walkways with customizable modular paving grids."
  },
  {
    id: 4,
    icon: "tool",
    title: "Construction Firms",
    description: "Speed up deployment using lighter materials that handle standard compaction equipment with ease and zero breakage."
  },
  {
    id: 5,
    icon: "globe",
    title: "ESG & Carbon Consultants",
    description: "Provide clients with auditable materials that show verified carbon storage data, fitting directly into scope-3 emissions analysis."
  },
  {
    id: 6,
    icon: "dollar",
    title: "Research Institutions",
    description: "Collaborate on the development of next-generation circular building components designed for extreme environments."
  }
];

export const awards: Award[] = [
  {
    id: 1,
    year: "2026",
    title: "Global ESG Innovation Winner",
    description: "Awarded top honors for circular building advancements at the London Circular Economy Summit."
  },
  {
    id: 2,
    year: "2025",
    title: "Patented Cold-Polymerization Process",
    description: "Officially granted EU and US patents for low-temperature binding matrices using composite fillers."
  },
  {
    id: 3,
    year: "2024",
    title: "ISO 14044 LCA Certification",
    description: "Third-party verified Life Cycle Assessment (LCA) verifying carbon capture metrics and negative scope-1 emission profiles."
  }
];
