
export const site = {
  name: "SetlesStudio",
  url: "https://www.setlesstudio.com",
  tagline: "Hyper realistic AI fashion photography for ecommerce brands.",
  email: "setlesstudio@gmail.com",
  bookingUrl: "/contact",
  whatsapp: "923017281412",
  phone: "+92 301 7281412",
  address: "Office 1243, 1st Floor, Street No. 13, Gulberg, Lahore, Pakistan",
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    upwork: "https://upwork.com/",
  },
};

export const legal = {
  effectiveDate: "June 21, 2026",
  paymentProvider: "Fastpay",
  governingLaw: "Islamic Republic of Pakistan",
};

export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  long: string;
  image: string; // "" = placeholder slot
  video?: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "realistic-ai-studio-photography",
    number: "01",
    title: "Realistic AI Studio Photography for Apparel Brands",
    short:
      "Clean, consistent studio imagery built for conversion. We transform flat product photos into realistic on model studio images for product pages, catalogs, Shopify, and Amazon.",
    long: "Clean, consistent studio imagery built for conversion. We transform flat product photos into realistic on model studio images with accurate fabric texture, stitching, and fit ready for product pages, catalogs, Shopify stores, Amazon, and eCommerce websites.",
    image: "/images/studio-pink.png",
    deliverables: [
      "Hyper realistic AI models wearing your apparel",
      "Consistent backgrounds and models across your catalog",
      "Custom AI models of your choice",
      "High resolution, professionally retouched files",
    ],
  },
  {
    id: "lifestyle-realistic-ai-photography",
    number: "02",
    title: "Lifestyle Fashion Realistic AI Photography",
    short:
      "Real life lifestyle scenes from city streets, cafés, homes, and beaches. AI fashion imagery that builds emotional context for social media, ads, and brand storytelling.",
    long: "Real life scenes that make your products feel lived in: city streets, cafés, homes, beaches. Lifestyle imagery builds the emotional context that studio shots can't, perfect for social media, ads, and homepage storytelling.",
    image: "/images/lifestyle-men.png",
    deliverables: [
      "Real look places on each country based scenes matched to your brand",
      "Natural looking, consistent hyper realistic AI models",
      "Social ready vertical and square formats",
      "Seasonal and campaign specific settings",
    ],
  },
  {
    id: "luxury-fashion-ai-campaign",
    number: "03",
    title: "Luxury Fashion Hyper Realistic AI Campaign",
    short:
      "Hyper realistic AI campaign photography inspired by luxury fashion houses and premium editorial magazines. Perfect for collection launches, advertising, and seasonal brand storytelling.",
    long: "Create hyper realistic AI fashion campaign photography inspired by luxury fashion houses and premium editorial magazines. Perfect for collection launches, fashion advertising, eCommerce campaigns, social media, and seasonal brand storytelling with a high end luxury look.",
    image: "/images/campaign-desert-knit-dress-2.jpeg",
    deliverables: [
      "Hyper realistic editorial AI fashion photography",
      "Luxury art direction and creative campaign concepts",
      "Magazine quality lighting and premium composition",
      "Cohesive multi image campaign collections",
      "Print ready, billboard quality, high resolution images"
    ],
  },
  {
    id: "footwear-realistic-ai-photography",
    number: "04",
    title: "Footwear Realistic AI Photography",
    short:
      "Hyper realistic AI footwear photography with accurate sole, material, stitching, and on-foot fit. Perfect for eCommerce, marketplaces, and brand campaigns.",
    long: "Create hyper realistic AI footwear photography with AI models wearing your shoes in studio or lifestyle environments. We accurately showcase sneakers, heels, boots, sandals, and all types of footwear with perfect angles, natural poses, realistic reflections, and an accurate on foot fit. Every image preserves the sole, material, stitching, texture, and product details with a 100% realistic look.",
    image: "/images/footwear-heels.png",
    deliverables: [
      "Hyper realistic AI models wearing your footwear with accurate product details",
      "Accurate sole, material, texture, and stitching details",
      "Consistent catalog angles for eCommerce and marketplaces",
      "Campaign, social media, and website-ready high resolution images",
    ],
  },
  {
    id: "realistic-ai-video-ads-ugc",
    number: "05",
    title: "Realistic AI Video Ads & UGC Content",
    short:
      "Hyper realistic AI video ads, authentic UGC style videos, and high converting social content for Shopify, TikTok, Instagram, Facebook, and YouTube.",
    long: "Create hyper realistic AI video ads, authentic UGC style videos, and high converting social media content that showcases your products with natural AI models, realistic motion, and professional storytelling. Perfect for Shopify stores, ecommerce brands, product launches, and paid advertising across TikTok, Instagram, Facebook, YouTube, and other digital platforms.",
    image: "",
    video: "https://res.cloudinary.com/dlfb8yn1x/video/upload/q_auto,w_1024,ac_none/v1783056368/video-ad-service-1_px1iey.mp4",
    deliverables: [
      "Hyper realistic AI video ads with natural model movement",
      "Authentic UGC style videos that build trust and increase conversions",
      "Optimized for TikTok, Instagram Reels, Facebook, YouTube Shorts, and Shopify",
      "High converting videos for paid ads, product launches, and social media marketing",
      "Commercial ready HD & 4K videos in vertical, square, and landscape formats",
    ],
  },
  {
    id: "bags-accessories-realistic-ai-photography",
    number: "06",
    title: "Women's Handbag Realistic AI Photography",
    short:
      "Hyper realistic AI handbag photography that showcases every detail with premium quality. Perfect for Shopify, Amazon, eCommerce stores, luxury brands, and social media.",
    long: "Create hyper realistic AI handbag photography that showcases every detail with premium quality. Perfect for Shopify, Amazon, eCommerce stores, luxury brands, catalogs, and social media marketing.",
    image: "/images/bags-shoot-with-model.jpeg",
    deliverables: [
      "Hyper realistic AI models showcasing women's handbags",
      "Accurate leather texture, stitching, hardware, and colors",
      "Luxury lifestyle and professional studio AI photography",
      "High resolution images optimized for Shopify, Amazon, and eCommerce",
      "Premium AI handbag photography for ads, catalogs, and brand campaigns",
    ],
  },
];

export const stats = [
  { value: "1100+", label: "Projects Completed" },
  { value: "100+", label: "Happy Fashion Brands" },
  { value: "30+", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export const valueProps = [
  {
    title: "10x More Affordable",
    text: "High end content without high end production costs.",
  },
  {
    title: "7 Day Average Delivery",
    text: "Fast turnaround without compromising quality.",
  },
  {
    title: "Unlimited Creativity",
    text: "Unlimited ideas, concepts, and creative possibilities.",
  },
  {
    title: "Flexible Production",
    text: "Studio, lifestyle, editorial, and advertising content.",
  },
];

export type TrustedBrand = { name: string; logo: string };

export const trustedBy: TrustedBrand[] = [
  { name: "Ralph Lauren",       logo: "/images/logos/Ralph-lauren-logo.png" },
  { name: "Boohoo",             logo: "/images/logos/boohoo-png.webp" },
  { name: "Columbia",           logo: "/images/logos/columbia-sportswear-company-logo.png" },
  { name: "Diesel",             logo: "/images/logos/diesel-logo.png" },
  { name: "HardTail",           logo: "/images/logos/HardTail.avif" },
  { name: "Swim Zip",           logo: "/images/logos/Swim-zip-logo.png" },
  { name: "SALTY.",             logo: "/images/logos/salty..webp" },
  { name: "BASICBEIGE",         logo: "/images/logos/basicbeige-png.webp" },
  { name: "Lil Cactus Reloved", logo: "/images/logos/LIL_CACTUS_RELOVED_LINEAR-logo.png" },
  { name: "Marni",              logo: "/images/logos/marni-logo.png" },
  { name: "Mulberry",           logo: "/images/logos/Mulberry-png.png" },
  { name: "Nanushka",           logo: "/images/logos/nanushka-logo.png" },
  { name: "Paco Rabanne",       logo: "/images/logos/paco-rabanne-logo-png.png" },
  { name: "Wonder",             logo: "/images/logos/Logo-wonder.png" },
  { name: "Winter Green",       logo: "/images/logos/winter-green-png.png" },
  { name: "BH",                 logo: "/images/logos/BH-logo.png" },
];

export const process = [
  {
    step: "01",
    title: "Understand",
    text: "We understand your brand, goals, products and target audience.",
  },
  {
    step: "02",
    title: "Plan",
    text: "We plan the creative direction, content style and production strategy.",
  },
  {
    step: "03",
    title: "Create",
    text: "Our team creates premium visual content tailored to your brand.",
  },
  {
    step: "04",
    title: "Deliver",
    text: "We deliver high quality, ready to use content on time, every time.",
  },
];

export const testimonials = [
  {
    quote:
      "Muhammad continues to deliver on every project I send to him. He seems to know exactly the looks that I want just from a little guidance and usually perfect the first time. I will definitely continue to send him projects.",
    name: "John Davies",
    role: "UK",
    image: "/images/clients/client-john-davies.png",
  },
  {
    quote:
      "Muhammad and his team is a pleasure to work with. His work is brilliant, clear, and prompt with communications. He is patient with revisions and keeps me updated every step of the way. I highly recommend him, and will work with him again.",
    name: "Priya Sharma",
    role: "India",
    image: "/images/clients/client-priya-sharma.jpg",
  },
  {
    quote:
      "We used Muhammad's team for AI footwear visuals, and the results were outstanding. The shoes looked realistic and professionally photographed. Highly recommended for eCommerce brands.",
    name: "Jean-Pierre Moreau",
    role: "Paris, France",
    image: "",
  },
  {
    quote:
      "The realistic AI fashion images exceeded our expectations. Excellent quality, communication, and attention to outfit details.",
    name: "Emily Thompson",
    role: "Paris, France",
    image: "/images/clients/client-emily-thompson.jpg",
  },
  {
    quote:
      "Great experience working with Muhammad's team. The AI generated fashion and apparel images were realistic, consistent, and high quality.",
    name: "Chloe Davies",
    role: "Denmark",
    image: "/images/clients/client-chloe-davies.jpg",
  },
  {
    quote:
      "Muhammad and his team created highly realistic AI fashion images with excellent outfit accuracy. The results looked like a professional fashion photoshoot.",
    name: "Lily Davies",
    role: "UK",
    image: "/images/clients/client-lily-davies.jpg",
  },
  {
    quote:
      "Muhammad and his team were amazing to work with. He definitely exceeded my expectations. I would highly recommend him!",
    name: "Sarah Johnson",
    role: "UK",
    image: "/images/clients/client-sarah-johnson.jpg",
  },
  {
    quote:
      "Working with Muhammad was a game changer for our apparel brand. The realism in the product visuals he created is truly remarkable. The fabric textures are perfect! His communication and execution were flawless.",
    name: "NY_Apparel_Guru",
    role: "USA",
    image: "/images/clients/client-NY-apparel-guru.jpg",
  },
  {
    quote:
      "Muhammad is highly recommended if you're looking for consistent AI characters or realistic product visuals. His work quality, communication, and creativity are all top notch!",
    name: "vivianwonder",
    role: "Germany",
    image: "/images/clients/client-vivian-wonder.jpg",
  },
  {
    quote:
      "This was my second order and it was a great delivery as usual. Very good attention to detail and quality of work. Highly recommend.",
    name: "Jean-Luc Petit",
    role: "France",
    image: "/images/clients/client-jean-luc-petit.jpg",
  },
];

export type Tier = {
  name: string;
  badge?: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export const pricingTiers: Tier[] = [
  {
    name: "Starter",
    description: "Perfect for small brands and new collections",
    price: "$299",
    unit: "/ project",
    features: [
      "20 Premium Images",
      "Studio Product Photography",
      "Model Photography",
      "Ecommerce Ready",
      "High Resolution Files",
      "3 Business Days Delivery",
    ],
    cta: "Get Started",
    href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in the Starter plan. Can we get started?")}`,
  },
  {
    name: "Growth",
    badge: "Most Popular",
    description: "Professional content for growing brands",
    price: "$799",
    unit: "/ project",
    features: [
      "50 Premium Images",
      "Studio Photography",
      "Lifestyle Photography",
      "Multiple Models",
      "Social Media Content",
      "Priority Delivery",
    ],
    cta: "Get Started",
    href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in the Growth plan. Can we get started?")}`,
    featured: true,
  },
  {
    name: "Premium",
    description: "Luxury campaigns for established brands",
    price: "$1,999+",
    unit: "/ project",
    features: [
      "180 Premium Images",
      "Luxury Fashion Images",
      "Lifestyle Photography",
      "Footwear Photography",
      "AI Video & Advertising",
      "Dedicated Project Manager",
      "Fast Turnaround",
      "Priority Support",
    ],
    cta: "Contact Us",
    href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in the Premium plan. Can we discuss my requirements?")}`,
  },
];

export const faqs = [
  {
    q: "Are your images AI generated or real photographs?",
    a: "Our images are created using advanced AI workflows and professional editing techniques. The final results are designed to look like real commercial fashion photography, with realistic lighting, fabric details, skin textures, and natural poses.",
  },
  {
    q: "Can people tell that the images are AI generated?",
    a: "In most cases, no. Our goal is to create images that are virtually indistinguishable from traditional photoshoots. Many clients and viewers cannot tell the difference without being informed beforehand.",
  },
  {
    q: "Do you use ready made AI tools with one click results?",
    a: "No. I use a custom workflow that combines multiple AI tools with professional Photoshop retouching and quality control. Every image is carefully refined to achieve a realistic and premium look.",
  },
  {
    q: "Can you add my brand logo and clothing details accurately?",
    a: "Yes. I can accurately place logos, labels, embroidery, prints, and other brand elements on garments. I pay close attention to product details to ensure the final image matches your clothing as closely as possible.",
  },
  {
    q: "How realistic are your final results?",
    a: "Our focus is on creating high end, commercial quality visuals that look like they came from a professional photoshoot. I encourage clients to review our samples and judge the quality themselves, the realism speaks for itself.",
  },
  {
    q: "How many products can I submit?",
    a: "Each package covers a set number of final images, not products. The Starter plan typically covers 20 images, Growth covers 50 images, and Premium covers 180 images. If you're unsure, send us your catalog and we'll recommend the right fit.",
  },
  {
    q: "How long does delivery take?",
    a: "Our average delivery is 7 days. Starter projects ship in 3 business days, and larger campaigns are scheduled with clear milestones. Priority delivery is included in Growth and Premium.",
  },
  {
    q: "Can I choose models?",
    a: "Absolutely. You can pick from our model library or brief us on the look, age range, and style that fits your brand. We'll create consistent, natural looking models you can reuse across every campaign.",
  },
  {
    q: "Do you provide raw files?",
    a: "We deliver final, high resolution retouched files in the formats you need (JPG, PNG, TIFF). Source and layered files are available on Premium and custom plans.",
  },
  {
    q: "Do you create videos?",
    a: "Yes, short form video ads, product motion clips, and website banner loops are part of our AI Video & Advertising service, included in the Premium plan or available as an add-on.",
  },
];

export type LearnProduct = {
  id: string;
  tag: string;
  title: string;
  description: string;
  price: string;
  image: string;
  comingSoon?: boolean;
};

export const learnProducts: LearnProduct[] = [
  {
    id: "fashion-content-masterclass",
    tag: "PDF Guide",
    title: "Fashion Content Masterclass",
    description:
      "Learn how to create realistic fashion content from start to finish. A complete step by step workflow.",
    price: "Coming Soon",
    image: "",
    comingSoon: true,
  },
  {
    id: "premium-prompt-collection",
    tag: "Prompt Pack",
    title: "Premium Prompt Collection",
    description:
      "100+ high quality prompts for fashion photography, models, lifestyle shots, footwear, and product photography.",
    price: "Coming Soon",
    image: "",
    comingSoon: true,
  },
  {
    id: "realistic-model-creation-guide",
    tag: "PDF Guide",
    title: "Realistic Model Creation Guide",
    description:
      "Learn techniques to create natural looking models, consistent characters, and professional fashion visuals.",
    price: "Coming Soon",
    image: "",
    comingSoon: true,
  },
  {
    id: "apparel-detail-texture-guide",
    tag: "PDF Guide",
    title: "Apparel Detail & Texture Guide",
    description:
      "Master the process of maintaining fabric details, stitching, textures, and product accuracy in every shot.",
    price: "Coming Soon",
    image: "",
    comingSoon: true,
  },
];

export const learnIncluded = [
  { title: "Practice Files", text: "Work with real project files and examples." },
  { title: "Prompt Collections", text: "Production tested prompts for all scenarios." },
  { title: "Workflow Guides", text: "Step by step production workflows." },
  { title: "PDF Training Materials", text: "Detailed guides and explained processes." },
  { title: "Real Project Examples", text: "See behind the scenes client projects." },
  { title: "Lifetime Access", text: "Access anytime, learn at your pace." },
];

export const team = [
  { name: "Team Member", role: "Creative Director & Fashion Designer", image: "/images/team-creative-director.jpg" },
  { name: "Team Member", role: "Content Specialist & Fashion Designer", image: "/images/team-content-specialist.jpg" },
  { name: "Team Member", role: "Client Success Manager", image: "/images/team-client-success.jpg" },
  { name: "Team Member", role: "Production Expert", image: "/images/production-expert-team-member.jpeg" },
]