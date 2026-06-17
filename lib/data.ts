
export const site = {
  name: "SetlesStudio",
  tagline: "Realistic fashion and apparel AI model shoots for ecommerce brands.",
  email: "hello@setlesstudio.com",
  bookingUrl: "/contact",
  whatsapp: "923017281412",
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    upwork: "https://upwork.com/",
  },
};

export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  long: string;
  image: string; // "" = placeholder slot
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "studio-product-photography",
    number: "01",
    title: "Studio Product Photography",
    short:
      "High quality studio photography designed for ecommerce stores, product pages, catalogs, and online marketplaces.",
    long: "Clean, consistent studio imagery built for conversion. We turn flat product photos into on model studio shots with accurate fabric texture, stitching, and fit, ready for product pages, catalogs, and marketplaces like Amazon and Zalando.",
    image: "/images/studio-pink.png",
    deliverables: [
      "On model studio shots from flat product photos",
      "Consistent backgrounds and lighting across your catalog",
      "Marketplace compliant crops and ratios",
      "High resolution, retouched files",
    ],
  },
  {
    id: "lifestyle-photography",
    number: "02",
    title: "Lifestyle Photography",
    short:
      "Showcase your products in authentic environments that connect with your audience and bring your brand story to life.",
    long: "Real life scenes that make your products feel lived in: city streets, cafés, homes, beaches. Lifestyle imagery builds the emotional context that studio shots can't, perfect for social media, ads, and homepage storytelling.",
    image: "/images/lifestyle-men.png",
    deliverables: [
      "Authentic real world scenes matched to your brand",
      "Natural looking, consistent AI models",
      "Social ready vertical and square formats",
      "Seasonal and campaign specific settings",
    ],
  },
  {
    id: "luxury-fashion-campaigns",
    number: "03",
    title: "Luxury Fashion Campaigns",
    short:
      "High end fashion campaigns inspired by luxury brands and magazines, created for launches, advertising, and seasonal collections.",
    long: "Editorial grade campaign visuals inspired by luxury houses and fashion magazines. Built for collection launches, advertising, and seasonal storytelling where production value is the message.",
    image: "/images/luxury-stairs.jpg",
    deliverables: [
      "Editorial art direction and concepts",
      "Magazine grade lighting and composition",
      "Cohesive multi-image campaign sets",
      "Print and billboard ready resolution",
    ],
  },
  {
    id: "footwear-photography",
    number: "04",
    title: "Footwear Photography",
    short:
      "Professional photography for shoes, sneakers, heels, boots, and footwear collections. Designed for ecommerce, advertising, catalogs, and social media campaigns.",
    long: "Footwear has its own rules: angles, reflections, on foot fit. We create studio and on model footwear imagery for sneakers, heels, and boots that shows silhouette and material accurately.",
    image: "/images/footwear-heels.png",
    deliverables: [
      "On model and product only footwear shots",
      "Accurate sole, material, and stitching detail",
      "Catalog consistent angle sets",
      "Campaign and social media variants",
    ],
  },
  {
    id: "AI-video-&-advertising",
    number: "05",
    title: "AI Video & Advertising",
    short:
      "Short form video content designed for product launches, social media advertising, website banners, and brand campaigns.",
    long: "Short form video built from your products: model motion, fabric movement, and scene transitions designed for paid social, product launches, and website hero banners.",
    image: "",
    deliverables: [
      "6–30 second cuts for paid social",
      "Vertical, square, and landscape exports",
      "Hook first edits tested for ads",
      "Website banner and hero loops",
    ],
  },
  {
    id: "fashion-ai-content-course",
    number: "06",
    title: "Fashion AI Content Course",
    short:
      "Our real time process, prompts, and creative ideas. How we achieve 100% accurate outfit details and textures.",
    long: "We open up our real time process, prompts, and creative ideas: how we achieve accurate outfit details and textures, create realistic images with natural looking models, use real life scenes for authentic content, and apply the techniques that set our team apart from other content creators.",
    image: "/images/course-team.png",
    deliverables: [
      "Step by step production workflows",
      "100+ production tested prompts",
      "Practice files and real project examples",
      "Lifetime access with free updates",
    ],
  },
  {
    id: "bags-&-accessories-photography",
    number: "07",
    title: "Bags & Accessories Photography",
    short:
      "Professional handbag and bag photography designed for ecommerce, advertising, social media, and luxury brand campaigns.",
    long: "Handbags demand precision: hardware, leather grain, proportions. We create on model and still life bag imagery for ecommerce and luxury campaigns with exacting product accuracy.",
    image: "/images/bags-dress.png",
    deliverables: [
      "On model and still life bag photography",
      "Accurate hardware and material rendering",
      "Luxury campaign art direction",
      "Ecommerce detail and scale shots",
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
  { name: "Ralph Lauren",       logo: "/images/logos/Ralph-Lauren-logo.png" },
  { name: "Boohoo",             logo: "/images/logos/boohoo-png.webp" },
  { name: "Columbia",           logo: "/images/logos/columbia-sportswear-logo.png" },
  { name: "Diesel",             logo: "/images/logos/denim-division-logo.png" },
  { name: "HardTail",           logo: "/images/logos/HardTail.avif" },
  { name: "Swim Zip",           logo: "/images/logos/swim-zip-logo.png" },
  { name: "SALTY.",             logo: "/images/logos/salty..webp" },
  { name: "BASICBEIGE",         logo: "/images/logos/basicbeige-png.webp" },
  { name: "Lil Cactus Reloved", logo: "/images/logos/lilcactus-logo.png" },
  { name: "Marni",              logo: "/images/logos/marni-logo.png" },
  { name: "Mulberry",           logo: "/images/logos/Mulberry-png.png" },
  { name: "Nanushka",           logo: "/images/logos/nanushka-logo.png" },
  { name: "Paco Rabanne",       logo: "/images/logos/paco-rabanne-logo.png" },
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
  },
  {
    quote:
      "Muhammad and his team is a pleasure to work with. His work is brilliant, clear, and prompt with communications. He is patient with revisions and keeps me updated every step of the way. I highly recommend him, and will work with him again.",
    name: "Priya Sharma",
    role: "India",
  },
  {
    quote:
      "We used Muhammad's team for AI footwear visuals, and the results were outstanding. The shoes looked realistic and professionally photographed. Highly recommended for eCommerce brands.",
    name: "Jean-Pierre Moreau",
    role: "Paris, France",
  },
  {
    quote:
      "The realistic AI fashion images exceeded our expectations. Excellent quality, communication, and attention to outfit details.",
    name: "Emily Thompson",
    role: "Paris, France",
  },
  {
    quote:
      "Great experience working with Muhammad's team. The AI generated fashion and apparel images were realistic, consistent, and high quality.",
    name: "Chloe Davies",
    role: "Denmark",
  },
  {
    quote:
      "Muhammad and his team created highly realistic AI fashion images with excellent outfit accuracy. The results looked like a professional fashion photoshoot.",
    name: "Lily Davies",
    role: "UK",
  },
  {
    quote:
      "Muhammad and his team were amazing to work with. He definitely exceeded my expectations. I would highly recommend him!",
    name: "Sarah Johnson",
    role: "UK",
  },
  {
    quote:
      "Working with Muhammad was a game changer for our apparel brand. The realism in the product visuals he created is truly remarkable. The fabric textures are perfect! His communication and execution were flawless.",
    name: "NY_Apparel_Guru",
    role: "USA",
  },
  {
    quote:
      "Muhammad is highly recommended if you're looking for consistent AI characters or realistic product visuals. His work quality, communication, and creativity are all top notch!",
    name: "vivianwonder",
    role: "Germany",
  },
  {
    quote:
      "This was my second order and it was a great delivery as usual. Very good attention to detail and quality of work. Highly recommend.",
    name: "Jean-Luc Petit",
    role: "France",
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
    href: "/contact?plan=starter",
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
    href: "/contact?plan=growth",
    featured: true,
  },
  {
    name: "Premium",
    description: "Luxury campaigns for established brands",
    price: "$1,999+",
    unit: "/ project",
    features: [
      "180 Images",
      "Luxury Fashion Images",
      "Lifestyle Photography",
      "Footwear Photography",
      "AI Video & Advertising",
      "Dedicated Project Manager",
      "Fast Turnaround",
      "Priority Support",
    ],
    cta: "Contact Us",
    href: "/contact?plan=premium",
  },
];

export const faqs = [
  {
    q: "How many products can I submit?",
    a: "Each package covers a set number of final images, not products. The Starter plan typically covers 2–4 products, Growth covers 6–12, and Premium is unlimited. If you're unsure, send us your catalog and we'll recommend the right fit.",
  },
  {
    q: "How long does delivery take?",
    a: "Our average delivery is 7 days. Starter projects ship in 3 business days, and larger campaigns are scheduled with clear milestones. Priority delivery is included in Growth and Premium.",
  },
  {
    q: "Do you offer monthly packages?",
    a: "Yes. Brands with ongoing content needs can move to a monthly retainer with reserved capacity, faster turnaround, and volume pricing. Request a custom quote and we'll build a plan around your calendar.",
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
};

export const learnProducts: LearnProduct[] = [
  {
    id: "fashion-content-masterclass",
    tag: "PDF Guide",
    title: "Fashion Content Masterclass",
    description:
      "Learn how to create realistic fashion content from start to finish. A complete step by step workflow.",
    price: "$49",
    image: "",
  },
  {
    id: "premium-prompt-collection",
    tag: "Prompt Pack",
    title: "Premium Prompt Collection",
    description:
      "100+ high quality prompts for fashion photography, models, lifestyle shots, footwear, and product photography.",
    price: "$29",
    image: "",
  },
  {
    id: "realistic-model-creation-guide",
    tag: "PDF Guide",
    title: "Realistic Model Creation Guide",
    description:
      "Learn techniques to create natural looking models, consistent characters, and professional fashion visuals.",
    price: "$39",
    image: "",
  },
  {
    id: "apparel-detail-texture-guide",
    tag: "PDF Guide",
    title: "Apparel Detail & Texture Guide",
    description:
      "Master the process of maintaining fabric details, stitching, textures, and product accuracy in every shot.",
    price: "$39",
    image: "",
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
  { name: "Team Member", role: "Creative Director & Fashion Designer", image: "/images/team-creative-director.jpeg" },
  { name: "Team Member", role: "Content Specialist & Fashion Designer", image: "/images/team-content-specialist.png" },
  { name: "Team Member", role: "Client Success Manager", image: "/images/team-client-success.png" },
  { name: "Team Member", role: "Production Expert", image: "/images/production-expert-team-member.jpeg" },
]