"use client";

import { services, pricingTiers, valueProps, testimonials, site } from "./data";
import { hashPassword, generateSalt } from "./crypto";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  image: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
  status: "Draft" | "Published";
}

export interface PageSEO {
  pageId: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroText: string;
  heroImage: string;
}

export interface ServiceTile {
  id: string;
  number: string;
  title: string;
  short: string;
  long: string;
  image: string;
  deliverables: string[];
}

export interface PricingTile {
  name: string;
  badge?: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

export interface ValuePropTile {
  title: string;
  text: string;
}

export interface TestimonialTile {
  quote: string;
  name: string;
  role: string;
  image: string;
}

// Initial mock blogs seed data
const DEFAULT_BLOGS: BlogPost[] = [
  {
    id: "future-of-ai-fashion-photography",
    title: "The Future of AI Fashion Photography in eCommerce",
    slug: "future-of-ai-fashion-photography",
    excerpt: "How apparel brands are leveraging hyper-realistic AI models to scale content, reduce photoshoot costs by 90%, and launch seasonal campaigns in days instead of weeks.",
    category: "AI Tech",
    readTime: "5 min read",
    publishedAt: "2026-07-10T12:00:00Z",
    image: "https://res.cloudinary.com/dlfb8yn1x/image/upload/q_auto/f_auto/v1782022435/blog-page-banner-picture_thkuwm.jpg",
    body: `### The Shift in eCommerce Imagery

Traditional fashion photoshoots are slow, expensive, and logistically painful. You have to hire models, photographers, makeup artists, book studios, rent equipment, and wait weeks for editing. If you realize a fabric looks off or need a different angle later, your only option is to book another shoot.

AI Fashion Photography is changing this paradigm. By utilizing hyper-realistic AI workflows, brands can now transform simple flat product photos into gorgeous, on-model lifestyle and studio imagery in days.

### Key Benefits for Ecommerce Brands:
1. **Unprecedented Speed**: Launch new collections within days of receiving apparel samples.
2. **Huge Cost Reductions**: Save up to 90% compared to traditional on-location photoshoots.
3. **Infinite Adaptability**: Change models, poses, backgrounds, and lighting seasons without resampling garments.
4. **Enhanced Conversion**: Displaying clothing on realistic, diverse models matching local market demographics leads to a significant bump in CTR and conversion rates.

### The Role of Custom Textures and Fit
A major hurdle in early generative AI was keeping product details accurate. With advanced control pipelines, we now preserve the exact stitch patterns, fabric texture, reflections, and wrinkles of the original apparel. The result is visual output that is not only realistic but completely faithful to the physical product.`,
    metaTitle: "The Future of AI Fashion Photography | SetlesStudio Blog",
    metaDescription: "Learn how apparel brands are leveraging hyper-realistic AI models to scale product catalogs, reduce photoshoot costs by 90%, and boost sales.",
    status: "Published",
  },
  {
    id: "ecommerce-product-page-trends",
    title: "5 eCommerce Product Page Design Trends to Watch in 2026",
    slug: "ecommerce-product-page-trends",
    excerpt: "A deep dive into visual merchandising best practices, including zoom-friendly fabrics, lifestyle-to-studio transitions, and interactive models.",
    category: "eCommerce",
    readTime: "7 min read",
    publishedAt: "2026-07-05T14:30:00Z",
    image: "https://res.cloudinary.com/dlfb8yn1x/image/upload/f_auto,q_auto/v1782022576/luxury-stairs-wide_pj21rk.jpg",
    body: `### Design Trends Reshaping Conversion

eCommerce stores are no longer static digital storefronts; they are immersive brand experiences. The modern consumer expects high-fidelity visual context before hitting 'Add to Cart'.

Here are the top 5 product page visual design trends dominating 2026:

1. **Contextual Lifestyle Backdrops**: Moving away from sterile, plain white backdrops. Customers want to see products in real-world scenarios (urban streets, cozy cafes, scenic outdoors).
2. **Fabric Texture Transparency**: Showing extreme close-ups of seams, stitch lines, and fabric weave to overcome the tactile limitations of online shopping.
3. **Hyper-Localized Models**: Displaying the same garment on different body shapes, age groups, and ethnicities tailored to the visitor's location.
4. **Interactive Video Banners**: Short-looping cinematic product movements that give dynamic perspective on how fabric fits and moves in motion.
5. **Clean Minimalist Information Architecture**: Keeping details readable with spacious typography, accordion lists for specifications, and prominent WhatsApp booking or checkout options.`,
    metaTitle: "5 eCommerce Product Page Design Trends to Watch (2026)",
    metaDescription: "Explore the visual trends transforming product detail pages in 2026. Learn about contextual backgrounds, fabric close-ups, and localized AI models.",
    status: "Published",
  },
  {
    id: "traditional-photoshoots-vs-ai",
    title: "Traditional Photoshoots vs. AI Workflows: A Cost-Benefit Analysis",
    slug: "traditional-photoshoots-vs-ai",
    excerpt: "We break down the logistics, expenses, and turnaround differences between hiring agencies versus utilizing state-of-the-art AI design pipelines.",
    category: "Fashion Strategy",
    readTime: "8 min read",
    publishedAt: "2026-06-28T09:15:00Z",
    image: "/images/after-window.webp",
    body: `### Navigating the Content Engine Bottleneck

As social media ads and catalogs require fresh visual content almost weekly, the traditional studio pipeline is becoming an operational bottleneck. Let's analyze how standard photography compares to custom AI workflows.

| Metric | Traditional Photoshoot | AI Fashion Workflow |
|---|---|---|
| **Average Cost** | $3,000 - $12,000 / project | $299 - $1,999 / project |
| **Delivery Time** | 3 - 6 Weeks | 3 - 7 Days |
| **Model Options** | Limited by agency rosters & travel | Virtually limitless choice (any ethnicity, age, setting) |
| **Reshoots** | Requires booking full studio again | Instant re-generation with adjusted prompts |
| **Garment Requirements**| Physical shipping of full size run | Single flat photo or flat lay sample |

### The Verdict
For flagship brand campaigns, high-end traditional photography still holds space. However, for continuous eCommerce catalog updates, social media ads, A/B testing, and rapid line launches, AI workflows offer a 10x cost advantage and speed that traditional photography simply cannot match.`,
    metaTitle: "Traditional Photoshoots vs. AI Workflows | SetlesStudio",
    metaDescription: "A direct cost-benefit analysis between traditional fashion photography and hyper-realistic AI workflows. Compare price, turnaround, and adaptability.",
    status: "Published",
  },
  {
    id: "15-ecommerce-product-photography-tips-to-increase-sales-in-2026",
    title: "15 eCommerce Product Photography Tips to Increase Sales in 2026",
    slug: "15-ecommerce-product-photography-tips-to-increase-sales-in-2026",
    excerpt: "Discover 15 proven eCommerce product photography tips to elevate your fashion brand, optimize PDP conversion rates, and drive massive sales growth in 2026.",
    category: "eCommerce Tips",
    readTime: "9 min read",
    publishedAt: "2026-07-24T10:00:00Z",
    image: "https://res.cloudinary.com/dlfb8yn1x/image/upload/f_auto,q_auto/v1782022576/luxury-stairs-wide_pj21rk.jpg",
    body: `### Mastering Visual Merchandising for High-Converting Online Stores

In modern fashion e-commerce, your product imagery IS your storefront. Customers cannot feel the fabric, test the fit, or try on garments in person. High-resolution, realistic product photography bridges this gap and directly influences add-to-cart decisions.

Below are 15 actionable eCommerce product photography tips designed to help fashion brands maximize conversion, build trust, and scale sales.

---

### 1. Leverage Hyper-Realistic AI Studio & Lifestyle Models
Instead of spending thousands on traditional photoshoots, leading fashion brands utilize <a href="/services">AI Fashion Photography Services</a> to create on-model imagery in days. You can showcase garments on diverse models across multiple ethnicities and sizes without re-booking studio time.

### 2. Standardize High-Resolution PDP Images
Ensure every Product Detail Page (PDP) includes at least 5–7 high-res shots: front, back, side profile, fabric close-up, and lifestyle context. Check out our <a href="/portfolio">Portfolio Showcase</a> for examples of high-converting image ratios.

### 3. Maintain Consistent Color Accuracy & White Balance
Color discrepancies are a leading cause of e-commerce returns. Use calibrated lighting and sRGB color profiles to ensure the apparel color on screen matches the physical product in hand.

### 4. Provide Extreme Fabric Close-Ups & Texture Detail
Zoom-in capability allows shoppers to examine stitch patterns, seams, and fabric texture. Transparent texture photography builds immense buyer confidence.

### 5. Incorporate Contextual Outdoor & Urban Backgrounds
While clean white backgrounds are ideal for catalog browsing, contextual lifestyle photos—such as urban street scenes or luxury interiors—tell a compelling brand story.

### 6. Optimize Image Compression & Page Load Speeds
Slow-loading product photos destroy conversion rates. Compress images using WebP formats and responsive image attributes without sacrificing visual crispness.

### 7. Showcase Apparel Movement & Natural Draping
Static flat-lays can fail to convey fit. On-model imagery displays how fabric drapes, stretches, and moves naturally on the body.

### 8. Use Structured Internal Linking Across Content
Enhance SEO authority by interlinking related blog guides, service pages, and pricing plans. For instance, compare options in our <a href="/pricing">Pricing Packages</a> to find the best production tier for your catalog size.

### 9. Highlight Unique Selling Angles & Features
If a jacket features custom brass zippers or a dress has hidden pockets, dedicate a specific close-up shot to highlight those premium details.

### 10. Implement A/B Testing on Main Hero Images
Test different hero image styles (e.g., studio white vs. lifestyle outdoor) on high-traffic PDPs to measure impact on Click-Through Rates (CTR).

### 11. Maintain Consistent Aspect Ratios & Framing
Use uniform 4:5 or 2:3 image crop ratios across your entire store grid to give your site a clean, high-end editorial feel.

### 12. Utilize Soft, Diffusion-Controlled Studio Lighting
Avoid harsh shadows that obscure clothing details. Soft, diffused lighting ensures even exposure across all garment colors.

### 13. Enable Mobile-First Pinch-to-Zoom Capabilities
Over 70% of e-commerce traffic occurs on mobile devices. Ensure your image gallery supports smooth pinch-to-zoom gestures on iOS and Android.

### 14. Add Search Engine Optimized Alt Tags & File Names
Name image files descriptively (e.g., \`navy-activewear-set-on-model.jpg\`) and include targeted alt text to improve Google Image Search rankings.

### 15. Request Custom AI Samples Before Scaling Production
Want to test how your apparel looks with realistic AI models? You can <a href="/contact">Book a Free Consultation</a> and receive a free sample using your own product images.

---

### Conclusion
By implementing these 15 product photography strategies, your online store will deliver a world-class shopping experience that turns casual browsers into loyal customers. Explore our <a href="/services">Full Range of Services</a> or <a href="/contact">Get in Touch</a> to transform your brand content today.`,
    metaTitle: "15 eCommerce Product Photography Tips to Increase Sales in 2026",
    metaDescription: "Discover 15 proven eCommerce product photography tips to elevate your fashion brand, optimize PDP conversion rates, and drive massive sales growth in 2026.",
    status: "Published",
  }
];

// Initial page defaults
const DEFAULT_PAGES: PageSEO[] = [
  {
    pageId: "home",
    title: "Home Page",
    metaTitle: "SetlesStudio | Premium Hyper Realistic AI Fashion Content",
    metaDescription: "Hyper realistic AI fashion photography for ecommerce brands. Studio, lifestyle, and editorial content in days instead of weeks, 10x more affordable.",
    heroTitle: "Realistic [AI Fashion] Photography \n for Ecommerce Brands",
    heroText: "Create studio, lifestyle, and editorial content for your brand in days instead of weeks, 10x more affordable than traditional photoshoots.",
    heroImage: "/images/luxury-stairs-wide.jpeg",
  },
  {
    pageId: "about",
    title: "About Us Page",
    metaTitle: "About Us | SetlesStudio AI Fashion Photography",
    metaDescription: "Meet the creative team behind SetlesStudio. We combine custom generative AI control systems with high-end digital retouching.",
    heroTitle: "Pioneering the Future of Fashion Content",
    heroText: "We combine state of the art generative AI control systems with professional fashion photography background to deliver premium eCommerce imagery.",
    heroImage: "https://res.cloudinary.com/dlfb8yn1x/image/upload/q_auto/f_auto/v1782022435/blog-page-banner-picture_thkuwm.jpg",
  },
  {
    pageId: "services",
    title: "Services Page",
    metaTitle: "Our Services | Realistic AI Fashion Photography Solutions",
    metaDescription: "From realistic studio models and lifestyle campaigns to footwear shoots and video ads, explore our premium fashion content services.",
    heroTitle: "Hyper Realistic AI Fashion Content Services",
    heroText: "From studio product model photography to fully retouched outdoor campaigns and video ads, we provide complete visual solutions.",
    heroImage: "/images/campaign-desert-knit-dress-2.jpeg",
  },
  {
    pageId: "pricing",
    title: "Pricing Page",
    metaTitle: "Simple Pricing Packages | SetlesStudio AI Photography",
    metaDescription: "Clear pricing tiers for fashion brands of all sizes. Choose Starter, Growth, or Premium packages with fast turnaround and high resolution.",
    heroTitle: "AI fashion photography [pricing and packages]",
    heroText: "From product launches to global campaigns, choose the level of content production your brand needs.",
    heroImage: "/images/pricing-hero.jpeg",
  },
  {
    pageId: "contact",
    title: "Contact Page",
    metaTitle: "Contact Us | Get Your Free AI Fashion Sample",
    metaDescription: "Contact the SetlesStudio team to request a consultation or get a free sample using your apparel images.",
    heroTitle: "Let's Scale Your Brand Content Together",
    heroText: "Ready to get started? Send us a message, book a free consultation, or request a free sample to see the realism on your own products.",
    heroImage: "/images/lifestyle-men.png",
  }
];

// LocalStorage helpers
function isClient() {
  return typeof window !== "undefined";
}

export function getStoredBlogs(): BlogPost[] {
  if (!isClient()) return DEFAULT_BLOGS;
  const data = localStorage.getItem("setles_blogs");
  if (!data) {
    localStorage.setItem("setles_blogs", JSON.stringify(DEFAULT_BLOGS));
    return DEFAULT_BLOGS;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return DEFAULT_BLOGS;
  }
}

export function saveBlogs(blogs: BlogPost[]) {
  if (!isClient()) return;
  localStorage.setItem("setles_blogs", JSON.stringify(blogs));
  window.dispatchEvent(new Event("setles_db_update"));
}

export function getStoredPages(): PageSEO[] {
  if (!isClient()) return DEFAULT_PAGES;
  const data = localStorage.getItem("setles_pages");
  if (!data) {
    localStorage.setItem("setles_pages", JSON.stringify(DEFAULT_PAGES));
    return DEFAULT_PAGES;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return DEFAULT_PAGES;
  }
}

export function savePages(pages: PageSEO[]) {
  if (!isClient()) return;
  localStorage.setItem("setles_pages", JSON.stringify(pages));
  window.dispatchEvent(new Event("setles_db_update"));
}

export function getStoredServices(): ServiceTile[] {
  if (!isClient()) return services as unknown as ServiceTile[];
  const data = localStorage.getItem("setles_services");
  if (!data) {
    localStorage.setItem("setles_services", JSON.stringify(services));
    return services as unknown as ServiceTile[];
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return services as unknown as ServiceTile[];
  }
}

export function saveServices(items: ServiceTile[]) {
  if (!isClient()) return;
  localStorage.setItem("setles_services", JSON.stringify(items));
  window.dispatchEvent(new Event("setles_db_update"));
}

export function getStoredPricing(): PricingTile[] {
  if (!isClient()) return pricingTiers as PricingTile[];
  const data = localStorage.getItem("setles_pricing");
  if (!data) {
    localStorage.setItem("setles_pricing", JSON.stringify(pricingTiers));
    return pricingTiers as PricingTile[];
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return pricingTiers as PricingTile[];
  }
}

export function savePricing(items: PricingTile[]) {
  if (!isClient()) return;
  localStorage.setItem("setles_pricing", JSON.stringify(items));
  window.dispatchEvent(new Event("setles_db_update"));
}

export function getStoredTestimonials(): TestimonialTile[] {
  if (!isClient()) return testimonials as TestimonialTile[];
  const data = localStorage.getItem("setles_testimonials");
  if (!data) {
    localStorage.setItem("setles_testimonials", JSON.stringify(testimonials));
    return testimonials as TestimonialTile[];
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return testimonials as TestimonialTile[];
  }
}

export function saveTestimonials(items: TestimonialTile[]) {
  if (!isClient()) return;
  localStorage.setItem("setles_testimonials", JSON.stringify(items));
  window.dispatchEvent(new Event("setles_db_update"));
}

export function getStoredValueProps(): ValuePropTile[] {
  if (!isClient()) return valueProps as ValuePropTile[];
  const data = localStorage.getItem("setles_value_props");
  if (!data) {
    localStorage.setItem("setles_value_props", JSON.stringify(valueProps));
    return valueProps as ValuePropTile[];
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return valueProps as ValuePropTile[];
  }
}

export function saveValueProps(items: ValuePropTile[]) {
  if (!isClient()) return;
  localStorage.setItem("setles_value_props", JSON.stringify(items));
  window.dispatchEvent(new Event("setles_db_update"));
}

export function getStoredSiteConfig() {
  if (!isClient()) return site;
  const data = localStorage.getItem("setles_site_config");
  if (!data) {
    localStorage.setItem("setles_site_config", JSON.stringify(site));
    return site;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return site;
  }
}

export function saveSiteConfig(config: typeof site) {
  if (!isClient()) return;
  localStorage.setItem("setles_site_config", JSON.stringify(config));
  window.dispatchEvent(new Event("setles_db_update"));
}

export function checkIsLoggedIn(): boolean {
  if (!isClient()) return false;
  return localStorage.getItem("setles_logged_in") === "true";
}

export function setLoginStatus(status: boolean) {
  if (!isClient()) return;
  if (status) {
    localStorage.setItem("setles_logged_in", "true");
  } else {
    localStorage.removeItem("setles_logged_in");
  }
}

const DEFAULT_SALT = "8f9a2e3b1c4d5e6f7a8b9c0d1e2f3a4b";
const DEFAULT_HASH = "bf63cf06b289ad5ce36596f7e949db1624c69b9a04a3919bd8b90370ec8fe5dc";

export function getStoredCredentials(): { salt: string; hash: string } {
  if (!isClient()) return { salt: DEFAULT_SALT, hash: DEFAULT_HASH };
  
  let salt = localStorage.getItem("setles_admin_salt");
  let hash = localStorage.getItem("setles_admin_hash");
  
  if (!salt || !hash) {
    localStorage.setItem("setles_admin_salt", DEFAULT_SALT);
    localStorage.setItem("setles_admin_hash", DEFAULT_HASH);
    return { salt: DEFAULT_SALT, hash: DEFAULT_HASH };
  }
  
  return { salt, hash };
}

export function saveStoredCredentials(hash: string, salt: string) {
  if (!isClient()) return;
  localStorage.setItem("setles_admin_salt", salt);
  localStorage.setItem("setles_admin_hash", hash);
}

export async function verifyCredentials(email: string, entered: string): Promise<boolean> {
  if (email !== "admin@setlesstudio.com") return false;
  const { salt, hash } = getStoredCredentials();
  const computedHash = await hashPassword(entered, salt);
  return computedHash === hash;
}

export async function updateStoredPassword(enteredNew: string) {
  const newSalt = generateSalt();
  const newHash = await hashPassword(enteredNew, newSalt);
  saveStoredCredentials(newHash, newSalt);
}
