// ---------------------------------------------------------------------------
// Central content store for SetlesStudio.
// Edit copy, prices, posts and image paths here — every page reads from this
// file, so content changes never require touching component code.
// Image convention: put files in /public/images and reference "/images/...".
// Use "" (empty string) for any image you haven't added yet — components
// render a labelled placeholder slot automatically.
// ---------------------------------------------------------------------------

export const site = {
  name: "SetlesStudio",
  tagline: "Realistic fashion and apparel AI model shoots for ecommerce brands.",
  email: "hello@setlesstudio.com",
  bookingUrl: "/contact",
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
      "High quality studio photography designed for e-commerce stores, product pages, catalogs, and online marketplaces.",
    long: "Clean, consistent studio imagery built for conversion. We turn flat product photos into on-model studio shots with accurate fabric texture, stitching, and fit — ready for product pages, catalogs, and marketplaces like Amazon and Zalando.",
    image: "/images/studio-pink.png",
    deliverables: [
      "On-model studio shots from flat product photos",
      "Consistent backgrounds and lighting across your catalog",
      "Marketplace-compliant crops and ratios",
      "High-resolution, retouched files",
    ],
  },
  {
    id: "lifestyle-photography",
    number: "02",
    title: "Lifestyle Photography",
    short:
      "Showcase your products in authentic environments that connect with your audience and bring your brand story to life.",
    long: "Real-life scenes that make your products feel lived-in: city streets, cafés, homes, beaches. Lifestyle imagery builds the emotional context that studio shots can't — perfect for social media, ads, and homepage storytelling.",
    image: "/images/lifestyle-men.png",
    deliverables: [
      "Authentic real-world scenes matched to your brand",
      "Natural-looking, consistent AI models",
      "Social-ready vertical and square formats",
      "Seasonal and campaign-specific settings",
    ],
  },
  {
    id: "luxury-fashion-campaigns",
    number: "03",
    title: "Luxury Fashion Campaigns",
    short:
      "High end fashion campaigns inspired by luxury brands and magazines, created for launches, advertising, and seasonal collections.",
    long: "Editorial-grade campaign visuals inspired by luxury houses and fashion magazines. Built for collection launches, advertising, and seasonal storytelling where production value is the message.",
    image: "/images/luxury-stairs.jpg",
    deliverables: [
      "Editorial art direction and concepts",
      "Magazine-grade lighting and composition",
      "Cohesive multi-image campaign sets",
      "Print- and billboard-ready resolution",
    ],
  },
  {
    id: "footwear-photography",
    number: "04",
    title: "Footwear Photography",
    short:
      "Professional photography for shoes, sneakers, heels, boots, and footwear collections. Designed for ecommerce, advertising, catalogs, and social media campaigns.",
    long: "Footwear has its own rules: angles, reflections, on-foot fit. We create studio and on-model footwear imagery for sneakers, heels, and boots that shows silhouette and material accurately.",
    image: "/images/footwear-heels.png",
    deliverables: [
      "On-model and product-only footwear shots",
      "Accurate sole, material, and stitching detail",
      "Catalog-consistent angle sets",
      "Campaign and social media variants",
    ],
  },
  {
    id: "video-ad-creation",
    number: "05",
    title: "Video Ad Creation",
    short:
      "Short form video content designed for product launches, social media advertising, website banners, and brand campaigns.",
    long: "Short-form video built from your products: model motion, fabric movement, and scene transitions designed for paid social, product launches, and website hero banners.",
    image: "",
    deliverables: [
      "6–30 second cuts for paid social",
      "Vertical, square, and landscape exports",
      "Hook-first edits tested for ads",
      "Website banner and hero loops",
    ],
  },
  {
    id: "fashion-ai-content-course",
    number: "06",
    title: "Fashion AI Content Course",
    short:
      "Our real time process, prompts, and creative ideas — how we achieve 100% accurate outfit details and textures.",
    long: "We open up our real-time process, prompts, and creative ideas: how we achieve accurate outfit details and textures, create realistic images with natural-looking models, use real-life scenes for authentic content, and apply the techniques that set our team apart from other content creators.",
    image: "/images/course-team.png",
    deliverables: [
      "Step-by-step production workflows",
      "100+ production-tested prompts",
      "Practice files and real project examples",
      "Lifetime access with free updates",
    ],
  },
  {
    id: "premium-bags-photography",
    number: "07",
    title: "Premium Bags Photography",
    short:
      "Professional handbag and bag photography designed for e-commerce, advertising, social media, and luxury brand campaigns.",
    long: "Handbags demand precision: hardware, leather grain, proportions. We create on-model and still-life bag imagery for e-commerce and luxury campaigns with exacting product accuracy.",
    image: "/images/bags-dress.png",
    deliverables: [
      "On-model and still-life bag photography",
      "Accurate hardware and material rendering",
      "Luxury campaign art direction",
      "E-commerce detail and scale shots",
    ],
  },
];

export const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Happy Fashion Brands" },
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

export const trustedBy = [
  "Sova Style",
  "Lingen",
  "SwimUp",
  "SALTY.",
  "Lil Cactus",
  "M&N",
  "BASICBEIGE",
  "iknct",
  "Vienna Wude",
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
    text: "We deliver high quality, ready-to-use content on time, every time.",
  },
];

export const testimonials = [
  {
    quote:
      "SetlesStudio delivered amazing content that perfectly represents our brand. Highly professional and on time.",
    name: "Sarah Johnson",
    role: "Marketing Director, ASOS-style retail",
  },
  {
    quote:
      "The quality, attention to detail, and communication were excellent. We will definitely work again.",
    name: "Michael Brown",
    role: "Brand Owner",
  },
  {
    quote:
      "The models were outstanding and helped our brand launch faster than we thought possible.",
    name: "Emma Williams",
    role: "Ecommerce Manager",
  },
  {
    quote:
      "The prompt pack is insanely good. It saved me hours of trial and error. Highly recommended!",
    name: "John Carter",
    role: "Content Creator",
  },
  {
    quote:
      "The fashion content masterclass changed the way I create. Very detailed and practical.",
    name: "Sophia Martinez",
    role: "Photographer",
  },
  {
    quote:
      "The best resources I've purchased. Everything is explained so well and very easy to implement.",
    name: "Daniel Kim",
    role: "Brand Owner",
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
      "10 Premium Images",
      "Studio Product Photography",
      "Model Photography",
      "E-commerce Ready",
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
      "30 Premium Images",
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
      "Unlimited Images",
      "Luxury Fashion Images",
      "Lifestyle Photography",
      "Footwear Photography",
      "Video Ad Creation",
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
    a: "Absolutely. You can pick from our model library or brief us on the look, age range, and style that fits your brand — we'll create consistent, natural-looking models you can reuse across every campaign.",
  },
  {
    q: "Do you provide raw files?",
    a: "We deliver final, high-resolution retouched files in the formats you need (JPG, PNG, TIFF). Source and layered files are available on Premium and custom plans.",
  },
  {
    q: "Do you create videos?",
    a: "Yes — short-form video ads, product motion clips, and website banner loops are part of our Video Ad Creation service, included in the Premium plan or available as an add-on.",
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
      "Learn how to create realistic fashion content from start to finish. A complete step-by-step workflow.",
    price: "$49",
    image: "",
  },
  {
    id: "premium-prompt-collection",
    tag: "Prompt Pack",
    title: "Premium Prompt Collection",
    description:
      "100+ high-quality prompts for fashion photography, models, lifestyle shots, footwear, and product photography.",
    price: "$29",
    image: "",
  },
  {
    id: "realistic-model-creation-guide",
    tag: "PDF Guide",
    title: "Realistic Model Creation Guide",
    description:
      "Learn techniques to create natural-looking models, consistent characters, and professional fashion visuals.",
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
  { title: "Prompt Collections", text: "Production-tested prompts for all scenarios." },
  { title: "Workflow Guides", text: "Step-by-step production workflows." },
  { title: "PDF Training Materials", text: "Detailed guides and explained processes." },
  { title: "Real Project Examples", text: "See behind-the-scenes client projects." },
  { title: "Lifetime Access", text: "Access anytime, learn at your pace." },
];

export const team = [
  { name: "Team Member", role: "Creative Director & Fashion Designer", image: "/images/team-creative-director.jpeg" },
  { name: "Team Member", role: "Content Specialist & Fashion Designer", image: "/images/team-content-specialist.png" },
  { name: "Team Member", role: "Client Success Manager", image: "/images/team-client-success.png" },
  { name: "Team Member", role: "Production Expert", image: "" },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  body: string[]; // paragraphs
};

export const posts: Post[] = [
  {
    slug: "ai-fashion-photography-vs-traditional-photoshoots",
    title: "AI Fashion Photography vs Traditional Photoshoots: A Real Cost Breakdown",
    excerpt:
      "We compare the true cost, timeline, and flexibility of AI-powered content production against a traditional studio shoot for a 30-image campaign.",
    date: "2026-05-28",
    category: "Industry",
    readTime: "6 min read",
    image: "",
    body: [
      "A traditional 30-image campaign typically involves a photographer, studio rental, models, hair and makeup, styling, and post-production — easily $8,000–$25,000 and 4–8 weeks from brief to final delivery.",
      "AI-powered production changes the economics completely. The same 30-image set, with consistent models and accurate product detail, can be produced for a fraction of the cost and delivered in about a week.",
      "The biggest shift isn't just cost — it's iteration speed. When a scene doesn't work, you don't reschedule a shoot. You adjust the direction and regenerate, keeping the same model, lighting style, and brand look.",
      "Where traditional shoots still win: physical events, founder portraits, and campaigns where the behind-the-scenes content is itself the marketing. For everything else — product pages, social content, seasonal refreshes — AI production is now the practical default for lean ecommerce teams.",
    ],
  },
  {
    slug: "how-to-keep-fabric-details-accurate-in-ai-content",
    title: "How We Keep Fabric Details 100% Accurate in AI Fashion Content",
    excerpt:
      "Stitching, seams, texture, and print placement — the techniques we use to make sure the product in the image is exactly the product you sell.",
    date: "2026-05-14",
    category: "Process",
    readTime: "8 min read",
    image: "",
    body: [
      "The single biggest objection to AI fashion content is product accuracy. If the stitching, print placement, or fabric texture in the image doesn't match the physical garment, the content is unusable — and can even create returns.",
      "Our workflow starts with high-quality flat product photography from the brand. These reference images anchor every generation: silhouette, seams, hardware, and texture are preserved rather than reinvented.",
      "We then run a detail-verification pass on every image, comparing collar shapes, button counts, stitch lines, and print alignment against the source product at 200% zoom before anything reaches a client gallery.",
      "The result is content where the model, scene, and lighting are creative variables — but the product itself is a constant. That's the standard ecommerce brands need, and it's the core of what we teach in our Learn resources.",
    ],
  },
  {
    slug: "5-content-types-every-fashion-brand-needs",
    title: "5 Content Types Every Fashion Ecommerce Brand Needs in 2026",
    excerpt:
      "From marketplace-compliant studio shots to scroll-stopping lifestyle scenes — the content mix that converts across every channel.",
    date: "2026-04-30",
    category: "Strategy",
    readTime: "5 min read",
    image: "",
    body: [
      "1. Studio product shots. Clean, consistent, marketplace-compliant. These are your conversion workhorses on product pages and they need to be uniform across the entire catalog.",
      "2. Lifestyle imagery. Real-world context sells the feeling, not just the garment. These drive social engagement and make paid ads feel native to the feed.",
      "3. Editorial campaign sets. A handful of luxury-grade images per season elevates brand perception far beyond their media spend.",
      "4. Short-form video. Fabric movement and model motion consistently outperform static images in paid social. Even 6-second loops lift click-through rates.",
      "5. Detail shots. Texture, stitching, and hardware close-ups answer the questions that stop customers from buying — and reduce return rates.",
    ],
  },
];
