
export const site = {
  name: "SetlesStudio",
  url: "https://www.setlesstudio.com",
  tagline: "Professional AI fashion and product photography services for clothing, beauty and ecommerce brands across the United States and worldwide.",
  email: "contact@setlesstudio.com",
  bookingUrl: "/contact",
  whatsapp: "923017281412",
  social: {
    instagram: "https://www.instagram.com/setlesstudio/",
    linkedin: "https://www.linkedin.com/in/setles-studio-b71545416/",
    facebook: "https://www.facebook.com/profile.php?id=61590854368537",
    x: "https://x.com/SetlesStudio",
    pinterest: "https://www.pinterest.com/pin/1126322188128557386/",
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
  { id: "realistic-ai-studio-photography", number: "01", title: "AI Fashion Photography for Clothing Brands", short: "Realistic model and studio images created from your original garment photos for ecommerce, catalogs and fashion campaigns.", long: "Professional AI fashion photography for clothing and apparel brands. Our team creates model and studio images from your garment photos and creative brief. We work remotely with brands across the United States and worldwide.", image: "/images/studio-pink.png", deliverables: ["AI model images featuring your apparel", "Coordinated model and studio styling across a collection", "Creative direction based on your brand references", "High resolution files for ecommerce and marketing"] },
  { id: "ai-beauty-skincare-photography", number: "02", title: "AI Product Photography for Beauty and Skincare Brands", short: "Product focused and model visuals for skincare, cosmetics and fragrance collections, with styling aligned to your brand.", long: "Professional AI product photography for beauty, skincare, cosmetics and fragrance brands. We create product images, model portraits and campaign visuals from your product references, serving brands remotely across the United States and worldwide.", image: "/images/ai-skincare-sunscreen-model.webp", deliverables: ["Product images for skincare, sunscreen, cosmetics and fragrance", "AI model and lifestyle campaign visuals", "Coordinated backgrounds, lighting and styling", "Image formats planned for ecommerce and advertising"] },
  { id: "lifestyle-realistic-ai-photography", number: "03", title: "AI Lifestyle Photography for Fashion Brands", short: "Art directed lifestyle scenes for ecommerce storytelling, social content and paid campaigns.", long: "AI lifestyle photography for fashion brands, with model imagery in selected indoor and outdoor settings. We work from your clothing photos and creative references and serve brands across the United States and worldwide remotely.", image: "/images/lifestyle-men.png", deliverables: ["Lifestyle scenes selected to suit your brand", "Model styling guided by your references", "Social media image formats and campaign visuals", "Coordinated settings for seasonal collections"] },
  { id: "luxury-fashion-ai-campaign", number: "04", title: "AI Fashion Campaign Photography for Apparel Brands", short: "Coordinated campaign imagery for collection launches, lookbooks and seasonal advertising.", long: "Professional AI fashion campaign photography for apparel brands. Our team plans model imagery, editorial scenes and coordinated visuals for collection launches and advertising, working remotely with US and worldwide clients.", image: "/images/campaign-desert-knit-dress-2.jpeg", deliverables: ["Fashion editorial and campaign imagery", "Creative concepts for collection launches", "Coordinated model styling and composition", "Images for websites, catalogs and advertising"] },
  { id: "footwear-realistic-ai-photography", number: "05", title: "AI Footwear Photography for Ecommerce Brands", short: "Product and model visuals that show shoe shape, materials, soles, stitching and fit.", long: "AI footwear photography services for shoe and ecommerce brands. We create studio, model and lifestyle images from your original shoe photos, with attention to visible product details. Available remotely across the United States and worldwide.", image: "/images/footwear-heels.png", deliverables: ["AI model images featuring your footwear", "Attention to shoe shape, materials, soles and stitching", "Studio and lifestyle views for product collections", "Images for ecommerce, catalogs and advertising"] },
  { id: "realistic-ai-video-ads-ugc", number: "06", title: "AI Video Ads and UGC Style Production for Fashion Brands", short: "Short fashion and product video ads for ecommerce campaigns, social media and collection launches.", long: "Professional AI video production for fashion, beauty and ecommerce brands. We create product videos, campaign films and UGC style advertising content from product photos and creative briefs for clients across the United States and worldwide.", image: "/videos/fashion-ads/ad-1.webp", video: "/videos/fashion-ads/ad-1.mp4", deliverables: ["AI video ads with planned product movement and scenes", "UGC style creative for brand advertising", "Video formats for TikTok, Instagram Reels and YouTube", "Product videos for launches, websites and social media"] },
  { id: "bags-accessories-realistic-ai-photography", number: "07", title: "AI Handbag and Accessories Photography for Ecommerce Brands", short: "Studio, model and lifestyle imagery that highlights bag shape, materials, hardware and details.", long: "Professional AI handbag and accessories photography for fashion and ecommerce brands. We create studio, model and lifestyle images from your product photos and work remotely with clients across the United States and worldwide.", image: "/images/bags-shoot-with-model.jpeg", deliverables: ["AI model imagery featuring handbags and accessories", "Attention to materials, stitching, hardware and colour", "Studio and lifestyle scenes for product collections", "Images for ecommerce, catalogs and campaigns"] },
];

export const process = [
  {
    step: "01",
    title: "Share your product photos and brief",
    text: "Send product images, close-up details, logos, patterns and a short brief describing your audience and intended use.",
  },
  {
    step: "02",
    title: "Agree the creative direction",
    text: "We plan model styling, poses, lighting, backgrounds, image quantities and formats around your brand.",
  },
  {
    step: "03",
    title: "Create and review the images",
    text: "Our team produces the agreed model, product and lifestyle visuals, then checks key details against your references.",
  },
  {
    step: "04",
    title: "Approve and receive final files",
    text: "Review the agreed deliverables and receive finished images for ecommerce product pages, campaigns and social media.",
  },
];

export const testimonials = [
  {
    quote:
      "Muhammad continues to deliver on every project I send to him. He seems to know exactly the looks that I want just from a little guidance and usually perfect the first time. I will definitely continue to send him projects.",
    name: "John Davies",
    role: "UK",
    image: "/images/clients/client-john-davies.jpg",
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
    price: "$199",
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
    price: "$499",
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
    price: "$1,799",
    unit: "/ project",
    features: [
      "180 Premium Images",
      "Luxury Fashion Images",
      "Lifestyle Photography",
      "Footwear Photography",
      "AI Fashion Ads and UGC Videos",
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
    a: "Yes, short form video ads, product motion clips, and website banner loops are part of our AI Fashion Ads and UGC Videos service, included in the Premium plan or available as an add-on.",
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
  { name: "Shahid", role: "Creative Director & Fashion Designer", image: "/images/team-creative-director.jpg" },
  { name: "Anqia", role: "Content Specialist & Fashion Designer", image: "/images/team-content-specialist.jpg" },
  { name: "Javed", role: "Client Success Manager", image: "/images/team-client-success.jpg" },
  { name: "Azeem", role: "Production Expert", image: "/images/production-expert-team-member.jpeg" },
]

