import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Film,
  BookOpen,
  Gem,
  Globe,
  Package,
  LayoutGrid,
  ShoppingBag,
  FileCheck,
  Layers,
  Palette,
  Star,
  Zap,
  Play,
  Download,
  Check,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/data";

/* ─── Types ─────────────────────────────────────────────────── */

type Deliverable = { icon: LucideIcon; title: string; text: string };
type Step = { number: string; title: string; text: string };
type Audience = { title: string; text: string };
type Faq = { q: string; a: string };
type GalleryImg = { src: string; alt: string };

type ServiceData = {
  meta: { title: string; description: string };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    text: string;
    image: string;
    imageAlt: string;
    waText: string;
  };
  overview: {
    heading: string;
    para1: string;
    para2: string;
    tags: string[];
    img1: string;
    img2: string;
  };
  deliverables: Deliverable[];
  deliverablesTitle: string;
  steps: Step[];
  audiences: Audience[];
  audiencesTitle: string;
  faqs: Faq[];
  gallery: GalleryImg[];
  cta: { title: string; text: string };
};

/* ─── Shared process steps (default) ────────────────────────── */

const defaultSteps: Step[] = [
  {
    number: "01",
    title: "Send your product photos",
    text: "Share clear flat lay or packshot images of your garment. We work from what you already have.",
  },
  {
    number: "02",
    title: "Brief us on your brand",
    text: "Tell us the model look, background style, and any brand details you want emphasized.",
  },
  {
    number: "03",
    title: "We produce and refine",
    text: "We build the initial images, send you a preview for review, and refine based on your feedback.",
  },
  {
    number: "04",
    title: "Receive your files",
    text: "Final high resolution images arrive within the agreed timeline, organized and ready to publish.",
  },
];

/* ─── Service content ────────────────────────────────────────── */

const services: Record<string, ServiceData> = {

  "studio-product-photography": {
    meta: {
      title: "Studio Product Photography | SetlesStudio",
      description:
        "Turn flat product photos into professional on model studio imagery. Realistic, marketplace ready fashion photography for ecommerce brands.",
    },
    hero: {
      titlePrefix: "Flat product photos turned into",
      titleHighlight: "studio quality on model imagery",
      text: "Realistic, marketplace ready fashion photography from your product photos. No shoots, no studios, no logistics.",
      image: "/images/studio-pink.png",
      imageAlt: "Studio on model fashion photography example",
      waText: "Hi, I'd like to start a studio product photography project.",
    },
    overview: {
      heading: "Professional imagery built around your product",
      para1:
        "A flat lay shows the garment. An on model shot sells it. Customers want to see how clothes fit and how fabric moves. SetlesStudio produces realistic on model imagery directly from flat product photos, without a single photoshoot.",
      para2:
        "Fabric texture, stitching detail, print placement, and garment silhouette are preserved throughout. Brands use this service to launch collections faster, scale catalogs without scaling budget, and maintain consistent imagery across every product and season.",
      tags: ["Amazon Ready", "Shopify Ready", "Zalando Compliant", "ASOS Compatible"],
      img1: "/images/studio-pink-2.jpeg",
      img2: "/images/studio-black-bodysuit-front.png",
    },
    deliverablesTitle: "Everything your catalog needs, delivered",
    deliverables: [
      { icon: Camera,     title: "On Model Studio Shots",       text: "Products on realistic AI models with accurate fit, proportion, and natural poses. Clean backgrounds matched to your brand aesthetic." },
      { icon: LayoutGrid, title: "Full Catalog Consistency",    text: "Same framing, lighting, and visual language across every image in your order. 5 products or 50, the result looks like one coordinated shoot." },
      { icon: ShoppingBag, title: "Marketplace Ready Formats", text: "Images in the crops, ratios, and resolutions required by Amazon, Zalando, Shopify, and other platforms. No reformatting needed." },
      { icon: FileCheck,  title: "Retouched Final Files",       text: "Every file is professionally retouched before delivery. Clean, high resolution images ready to upload directly to your store." },
    ],
    steps: defaultSteps,
    audiencesTitle: "Built for fashion brands that need professional imagery",
    audiences: [
      { title: "Ecommerce brands",          text: "Launching or refreshing product pages who need a consistent image set across their full catalog without a traditional photoshoot." },
      { title: "Marketplace sellers",       text: "Selling on Amazon, Zalando, ASOS, and Shopify where image quality directly influences conversion rates and search placement." },
      { title: "Growing brands",            text: "That cannot justify traditional studio photography costs for every new product, seasonal drop, or catalog update." },
      { title: "Established labels",        text: "Looking to scale content production across more SKUs without adding budget overhead or increasing photography logistics." },
    ],
    faqs: [
      { q: "How accurate are the fabric details?", a: "Fabric accuracy is the core of what we do. Stitching, texture, print placement, logo positioning, and silhouette are all preserved. Flag any specific detail in your brief and we make sure it is represented correctly." },
      { q: "What do I need to send?", a: "A clear flat lay or packshot of your product is enough to begin. If you have brand guidelines or a model preference, include those in your brief. The more context you provide, the better the result." },
      { q: "Can I use these images on Amazon or other platforms?", a: "Yes. We deliver images that meet the technical requirements for major ecommerce platforms. If you need additional crops or ratios for specific platforms, we can produce those on request." },
      { q: "How many images and how long does delivery take?", a: "The Starter plan covers 20 images in 3 business days. Growth covers 50 images in 5 to 7 business days. For larger volumes contact us for a custom quote and timeline." },
    ],
    gallery: [
      { src: "/images/studio-pink.png",                alt: "Pink studio on model fashion shot" },
      { src: "/images/studio-black-bodysuit-front.png", alt: "Black bodysuit studio shot" },
      { src: "/images/studio-white-cutout-maxi-1.png",  alt: "White cutout maxi studio shot" },
      { src: "/images/studio-long-coat-man.png",         alt: "Men long coat studio product image" },
    ],
    cta: {
      title: "Ready to build your studio product catalog?",
      text: "Send us your product photos and we will return professional on model studio imagery within days.",
    },
  },

  "lifestyle-photography": {
    meta: {
      title: "Lifestyle Fashion Photography | SetlesStudio",
      description:
        "On model lifestyle shots that show your garments in the real world. City streets, cafes, and natural scenes content that converts.",
    },
    hero: {
      titlePrefix: "Fashion imagery that shows your brand",
      titleHighlight: "living in the real world",
      text: "On model lifestyle shots set in cities, cafes, and real spaces. The context that makes people click.",
      image: "/images/lifestyle-plaid-shirt-indoor-1.png",
      imageAlt: "Lifestyle fashion photography in an urban setting",
      waText: "Hi, I'd like to start a lifestyle photography project.",
    },
    overview: {
      heading: "Imagery that puts your product in context",
      para1:
        "White background studio shots communicate the product. Lifestyle imagery communicates the brand. SetlesStudio produces on model lifestyle content that places your garments in the real world cities, cafes, outdoor spaces, and the environments your customers actually live in.",
      para2:
        "Content produced this way works harder across every channel. It performs in paid social, builds brand identity on your website, and gives customers the context they need to picture themselves wearing your product.",
      tags: ["Instagram Ready", "Paid Social", "Brand Campaigns", "DTC Brands"],
      img1: "/images/lifestyle-red-dress-nyc-1-service.jpg",
      img2: "/images/lifestyle-beach-pink-dress.jpg",
    },
    deliverablesTitle: "Content built to perform across every channel",
    deliverables: [
      { icon: Globe,      title: "Real World Scene Placement",   text: "Your garments shown in natural environments. Cities, cafes, outdoor spaces, and lifestyle settings that make your brand feel authentic." },
      { icon: Camera,     title: "Diverse Model Options",         text: "Choose from a range of AI model looks to match your brand's target audience and the aesthetic direction of your campaign." },
      { icon: LayoutGrid, title: "Social Media Ready Content",   text: "Content formatted for Instagram, TikTok, and paid social. Vertical, square, and landscape crops available in one order." },
      { icon: Zap,        title: "Fast Turnaround",               text: "Lifestyle content delivered in days, not weeks. No location scouting, no shoot day logistics, no weather delays." },
    ],
    steps: defaultSteps,
    audiencesTitle: "Built for brands that want imagery beyond a white background",
    audiences: [
      { title: "DTC fashion labels",    text: "Running paid social campaigns and needing consistent content volume without a photographer on retainer." },
      { title: "Social media brands",   text: "Building a content calendar and needing lifestyle imagery that matches their visual identity across all platforms." },
      { title: "Brands refreshing",     text: "Moving away from plain studio shots and wanting imagery that reflects a real lifestyle and brand personality." },
      { title: "Marketplace sellers",   text: "Adding lifestyle context to product listings to improve conversion rates on Amazon, ASOS, and similar platforms." },
    ],
    faqs: [
      { q: "Can we choose the location or scene?", a: "Yes. In your brief, describe the environment, setting, and mood you want. We produce imagery that matches your specified context. If you have visual references, share those too." },
      { q: "What formats are included in the delivery?", a: "We deliver standard full resolution files. If you need specific crops for Instagram stories, feed posts, or paid social dimensions, let us know in your brief and we will include those." },
      { q: "Can the lifestyle imagery match our existing brand aesthetic?", a: "Yes. Share your existing imagery, brand guidelines, or mood board as references. We align the color tone, lighting style, and overall feel of the output to match your established brand look." },
      { q: "How is this different from studio photography?", a: "Lifestyle photography shows your product in a real world context rather than a clean studio environment. It is designed to communicate brand identity and connect emotionally with your audience rather than simply showcase the product." },
    ],
    gallery: [
      { src: "/images/lifestyle-robe-balcony.png",   alt: "Lifestyle fashion photography NYC street" },
      { src: "/images/lifestyle-red-dress-nyc-2.jpeg",   alt: "Lifestyle fashion photography urban" },
      { src: "/images/lifestyle-pink-lounge-set.png",  alt: "Lifestyle fashion photography cafe" },
      { src: "/images/lifestyle-plaid-shirt-indoor.jpg", alt: "Lifestyle activewear fashion photography" },
    ],
    cta: {
      title: "Ready to show your brand in the real world?",
      text: "Tell us the scene and we will produce the lifestyle content your brand needs to grow.",
    },
  },

  "luxury-fashion-campaigns": {
    meta: {
      title: "Luxury Fashion Campaign Photography | SetlesStudio",
      description:
        "Magazine grade campaign imagery for fashion brands that demand the premium look. Editorial quality without the production cost.",
    },
    hero: {
      titlePrefix: "Editorial campaign imagery for brands",
      titleHighlight: "that demand the premium look",
      text: "Magazine grade campaign visuals without the crew, the set, or the production budget.",
      image: "/images/blog-page-banner-picture.jpeg",
      imageAlt: "Luxury fashion campaign editorial photography",
      waText: "Hi, I'd like to discuss a luxury fashion campaign project.",
    },
    overview: {
      heading: "Campaign imagery at the level your brand deserves",
      para1:
        "The difference between a product shot and a campaign image is the story it tells. SetlesStudio produces editorial grade campaign imagery that positions your brand at the level of luxury fashion houses with the art direction, composition, and finish that premium brands expect.",
      para2:
        "Whether you are launching a collection, refreshing your brand identity, or building a lookbook, our campaign service delivers visuals that communicate prestige, attract your ideal customer, and perform across every premium channel.",
      tags: ["Luxury Brands", "Editorial Grade", "Campaign Launches", "Lookbooks"],
      img1: "/images/luxury-stairs.jpg",
      img2: "/images/campaign-desert-knit-dress-1.jpeg",
    },
    deliverablesTitle: "Premium campaign output from concept to delivery",
    deliverables: [
      { icon: Gem,     title: "Editorial Grade Imagery",   text: "Magazine quality visuals with sophisticated lighting, composition, and art direction. The level of finish expected by premium fashion brands and publications." },
      { icon: Palette, title: "Art Direction",             text: "We work with your brief to produce visuals that match the tone, color palette, and narrative of your brand. Bring references and we will bring the vision to life." },
      { icon: Star,    title: "Campaign Series",            text: "Multi image campaign sets that work together as a visual narrative. Consistent look across your collection, your season, or your brand story." },
      { icon: FileCheck, title: "Luxury Retouching",       text: "Every image is retouched to the standard expected by premium fashion brands. Clean, refined, and ready for press, publication, or paid media." },
    ],
    steps: [
      { number: "01", title: "Share your brief and references", text: "Tell us your brand direction, target aesthetic, and campaign theme. Share mood boards, existing imagery, and any inspiration references you have." },
      { number: "02", title: "Art direction session", text: "We review your brief and propose a visual direction for the campaign. We align on models, settings, color grading, and the overall narrative before production begins." },
      { number: "03", title: "Campaign production", text: "We produce the full campaign image set to the agreed direction. You receive a preview round for review and revision before final delivery." },
      { number: "04", title: "Final campaign delivery", text: "Your complete campaign imagery is delivered retouched and organized. Ready for your website, lookbook, press kit, and paid media." },
    ],
    audiencesTitle: "For fashion brands that lead with visual identity",
    audiences: [
      { title: "Premium fashion labels",   text: "Building a brand identity that commands luxury pricing and attracts high value customers through every visual touchpoint." },
      { title: "Collection launches",      text: "Brands releasing a new collection, seasonal line, or capsule drop that needs campaign imagery to match the quality of the product." },
      { title: "Lookbook production",      text: "Labels creating press ready visual content for media, wholesale buyers, and brand storytelling across digital channels." },
      { title: "High end ecommerce",       text: "Brands where the visual presentation on the product page is as important as the product itself in building trust and justifying the price point." },
    ],
    faqs: [
      { q: "How does luxury campaign imagery differ from standard product photography?", a: "Campaign imagery is led by narrative and art direction rather than simply showcasing the product. It communicates your brand's identity, values, and positioning. The composition, lighting, model direction, and post processing are all elevated to editorial standards." },
      { q: "Can you match our existing brand look?", a: "Yes. Share your current campaign imagery, brand guidelines, and any references that represent the aesthetic you want to maintain or evolve. We use these to align every output to your established visual identity." },
      { q: "How long does a full campaign set take to produce?", a: "Timelines depend on the scope of the campaign. A standard collection set of 10 to 20 images typically takes 5 to 10 business days. Contact us with your brief for a specific timeline." },
      { q: "Do you produce menswear campaigns as well as womenswear?", a: "Yes, we produce campaigns for both menswear and womenswear. We also work across unisex and gender neutral brands. Let us know the full scope of your catalog in your brief." },
    ],
    gallery: [
      { src: "/images/campaign-men-bomber-outdoor.jpg",                alt: "Luxury fashion campaign editorial" },
      { src: "/images/campaign-men-bomber-outdoor-2.jpeg", alt: "Men campaign outdoor fashion editorial" },
      { src: "/images/campaign-desert-knit-dress-3.jpeg", alt: "Desert campaign knit dress editorial" },
      { src: "/images/luxury-two-piece.jpeg",             alt: "Luxury two piece fashion campaign" },
    ],
    cta: {
      title: "Ready to produce your next campaign?",
      text: "Share your brief and we will show you what editorial grade campaign imagery looks like at SetlesStudio.",
    },
  },

  "footwear-photography": {
    meta: {
      title: "Footwear Photography | SetlesStudio",
      description:
        "On model and still life footwear photography built for ecommerce, brand campaigns, and marketplace listings. Every detail, every angle.",
    },
    hero: {
      titlePrefix: "Footwear imagery that captures",
      titleHighlight: "every detail and every angle",
      text: "On model and still life footwear shots built for ecommerce listings, brand campaigns, and marketplace requirements.",
      image: "/images/footwear-heels.png",
      imageAlt: "Professional footwear photography on model",
      waText: "Hi, I'd like to start a footwear photography project.",
    },
    overview: {
      heading: "Footwear imagery that sells the product",
      para1:
        "Footwear photography requires precision. Sole construction, material texture, hardware detail, and silhouette all need to read clearly in the final image. SetlesStudio produces on model and still life footwear shots that communicate the quality and craftsmanship of your product at every angle.",
      para2:
        "From everyday trainers to luxury heels, we produce imagery that meets the technical requirements of major footwear marketplaces while delivering the visual quality your brand deserves.",
      tags: ["Heels", "Trainers", "Boots", "Sandals", "Luxury Footwear"],
      img1: "/images/footwear-heels.png",
      img2: "/images/footwear-heels-2.jpeg",
    },
    deliverablesTitle: "Footwear imagery built for ecommerce and brand use",
    deliverables: [
      { icon: Camera,     title: "On Model Footwear Shots",  text: "Shoes and boots shown on realistic AI models with natural stance, correct proportion, and accurate shoe to foot fit." },
      { icon: Package,    title: "Still Life Styling",        text: "Clean, studio styled product shots that highlight design detail, material, sole construction, and overall craftsmanship." },
      { icon: LayoutGrid, title: "Multiple Angles",           text: "Front, side, back, and detail angles delivered in one consistent set. Everything a marketplace listing or brand page needs." },
      { icon: ShoppingBag, title: "Marketplace Ready",       text: "Images formatted to meet the requirements of Amazon, Zalando, and other footwear platforms. Correct crops, ratios, and resolutions." },
    ],
    steps: [
      { number: "01", title: "Send photos of your footwear", text: "Share clear photographs of your shoes from the front, side, back, and top. Include the sole if construction detail matters to your listing." },
      { number: "02", title: "Tell us what angles you need", text: "Let us know the required angles, whether you want on model or still life shots, and any platform requirements we should meet." },
      { number: "03", title: "We produce and refine", text: "We produce the full set and send you a preview for review. We refine based on your feedback before final delivery." },
      { number: "04", title: "Receive your footwear catalog", text: "Final retouched images delivered organized and ready for your store, marketplace listings, and brand campaigns." },
    ],
    audiencesTitle: "Built for footwear brands and retailers",
    audiences: [
      { title: "Footwear brands",           text: "Needing consistent ecommerce imagery across a full catalog of styles, colorways, and seasonal collections." },
      { title: "New footwear launches",     text: "Wanting professional imagery before committing to a full production run or prior to pre order launch." },
      { title: "Marketplace sellers",       text: "Needing clean, standard compliant footwear shots at volume across multiple platforms and listing requirements." },
      { title: "Fashion brands",            text: "Expanding into footwear and building imagery for a new product category alongside their existing apparel catalog." },
    ],
    faqs: [
      { q: "Can you show the sole and construction detail?", a: "Yes. We include sole shots and construction detail angles on request. Let us know in your brief which specific details are important for your listing or brand presentation." },
      { q: "What photos do I need to provide?", a: "Clear photographs of the shoe from the front, side, and back are enough to begin. Include a top down view and a sole shot if those angles matter to your listing. The clearer your reference photos, the more accurate the final images will be." },
      { q: "Can you do trainers and sneakers as well as heels?", a: "Yes. We cover all footwear categories including trainers, sneakers, heels, boots, sandals, loafers, and luxury footwear. The process is the same regardless of category." },
      { q: "How many angles are included per pair?", a: "Angle count depends on your plan and brief. Standard listings include the key ecommerce angles. Contact us for a quote based on your specific catalog and per pair requirements." },
    ],
    gallery: [
      { src: "/images/footwear-heels.png",  alt: "Luxury heels footwear photography" },
      { src: "/images/heels-product.jpeg",  alt: "Heels product still life shot" },
      { src: "/images/footwear-heels-2.jpeg", alt: "Footwear on model photography" },
      { src: "/images/footwear-heels-3.jpeg", alt: "Footwear detail photography" },
    ],
    cta: {
      title: "Ready to build your footwear catalog?",
      text: "Send us your shoe photos and we will return professional on model and still life imagery that sells.",
    },
  },

  "ai-video-and-advertising": {
    meta: {
      title: "AI Video & Advertising | SetlesStudio",
      description:
        "AI produced short form video ads for paid social, hero banners, and brand campaigns. Fashion video content without a film crew.",
    },
    hero: {
      titlePrefix: "Short form video content",
      titleHighlight: "that stops the scroll and drives clicks",
      text: "AI produced video ads for paid social, hero banners, and brand campaigns. Delivered fast.",
      image: "/images/contact-page-banner-image-mobile.jpeg",
      imageAlt: "Fashion video ad content for paid social",
      waText: "Hi, I'd like to discuss video ad creation for my brand.",
    },
    overview: {
      heading: "Fashion video content without the film crew",
      para1:
        "Video drives more engagement, more clicks, and more conversions than static imagery across every major platform. SetlesStudio produces short form fashion video ads that give your brand the motion content it needs to compete in video first feeds without a set, a crew, or a film shoot.",
      para2:
        "We work from your product photos and brand brief to produce video content formatted for Instagram, TikTok, Facebook, and YouTube. Each video is produced to your visual direction and delivered ready to run as a paid ad or brand campaign.",
      tags: ["Instagram Reels", "TikTok Ads", "Facebook Ads", "YouTube"],
      img1: "/images/multiple-models-environment.jpg",
      img2: "/images/lifestyle-orange-activewear.jpeg",
    },
    deliverablesTitle: "Video content built for performance",
    deliverables: [
      { icon: Film,       title: "Short Form Video Ads",      text: "15 to 60 second video ads formatted for Instagram, TikTok, Facebook, and YouTube paid placements." },
      { icon: Play,       title: "Product Showcase Motion",   text: "Dynamic motion content that shows your garment, its movement, and its wearability in a way static images cannot." },
      { icon: LayoutGrid, title: "Multi Format Delivery",     text: "Vertical, square, and landscape aspect ratios optimized for feed, story, and reel placements. All in one delivery." },
      { icon: Palette,    title: "Brand Matched Editing",     text: "Custom text overlays, logo placement, and color grading matched to your brand guidelines and campaign brief." },
    ],
    steps: [
      { number: "01", title: "Send your product photos", text: "Share your product imagery and any brand assets you want included in the video. The more reference material you provide, the better." },
      { number: "02", title: "Brief us on your campaign", text: "Tell us the platform, the target audience, the message, and the tone. Share any video references that represent the style you want." },
      { number: "03", title: "We produce and refine", text: "We produce the initial video and share a preview for your review. We refine based on your feedback before final delivery." },
      { number: "04", title: "Receive your video files", text: "Final video files are delivered in all required formats and aspect ratios, ready to upload and run as paid ads." },
    ],
    audiencesTitle: "For fashion brands competing in a video first world",
    audiences: [
      { title: "Paid social advertisers",  text: "Running Meta and TikTok campaigns and needing video creative that performs alongside or better than static image ads." },
      { title: "DTC fashion brands",       text: "Looking to increase conversion rates with video content on product pages, landing pages, and hero banner placements." },
      { title: "Scaling content teams",    text: "Wanting video output at volume without the logistics and cost of organizing a film production for every new product or campaign." },
      { title: "Ecommerce brands",         text: "Replacing static hero images with motion content to improve time on page, engagement, and purchase intent." },
    ],
    faqs: [
      { q: "What do I need to provide to get started?", a: "Send your product photos and your brand brief. The clearer your reference for the visual style, platform, and target audience, the better the output. Video examples or mood board references are helpful but not required." },
      { q: "What platforms are the videos formatted for?", a: "We format for Instagram, TikTok, Facebook, and YouTube by default. If you need specific aspect ratios or technical specs for other platforms, let us know in your brief." },
      { q: "Can I request specific music or sound design?", a: "We produce visual content. Audio licensing and music selection can be handled separately. If you have a specific track or audio direction, discuss this with us before production begins." },
      { q: "How long are the videos?", a: "Standard video ads run between 15 and 60 seconds depending on the platform and brief. Longer format content is available on request. Contact us to discuss requirements for your specific campaign." },
    ],
    gallery: [
      { src: "/images/studio-white-shirt-gray-shorts-man-1.png",   alt: "Lifestyle fashion video content example" },
      { src: "/images/lifestyle-orange-activewear.jpeg", alt: "Activewear video ad content" },
      { src: "/images/studio-black-mini-dress-1.png",  alt: "Multi model campaign video content" },
      { src: "/images/campaign-men-bomber-outdoor-2.jpeg", alt: "Campaign video ad outdoor" },
    ],
    cta: {
      title: "Ready to produce your first video ad?",
      text: "Share your product photos and brief and we will produce video content that gets your brand in motion.",
    },
  },

  "fashion-ai-content-course": {
    meta: {
      title: "Fashion AI Content Course | SetlesStudio",
      description:
        "Learn the AI workflow our studio uses to produce professional fashion photography. Tools, prompts, and process from working practitioners.",
    },
    hero: {
      titlePrefix: "Learn the AI workflow behind",
      titleHighlight: "professional fashion content production",
      text: "The exact tools, process, and prompts our studio uses to produce ecommerce grade fashion imagery at scale.",
      image: "/images/learn-page-banner.jpeg",
      imageAlt: "Fashion AI content course guide",
      waText: "Hi, I'd like to learn more about the Fashion AI Content Course.",
    },
    overview: {
      heading: "Built by practitioners, not theorists",
      para1:
        "The Fashion AI Content Course is the complete workflow our studio uses every day for client projects. It covers the tools, the process, and the production tested prompts that produce consistent, ecommerce grade fashion imagery not generic AI art, but real photography quality output.",
      para2:
        "Whether you are a photographer expanding into AI production, a brand owner wanting to produce content in house, or a freelancer building a new service offering, this course gives you a working process from day one.",
      tags: ["PDF Guide", "Prompt Packs", "Tool Selection", "Practical Examples"],
      img1: "/images/course-team.png",
      img2: "/images/campaign-floral-blue-dress-1.jpeg",
    },
    deliverablesTitle: "What is inside the course",
    deliverables: [
      { icon: BookOpen, title: "Full Workflow Guide",     text: "The complete AI fashion photography workflow our studio uses for client projects. Step by step, from product reference to final retouched image." },
      { icon: Layers,   title: "Tested Prompt Packs",    text: "Production tested prompts for on model imagery, lifestyle scenes, luxury campaigns, and footwear shots. Prompts that actually work in a professional context." },
      { icon: Camera,   title: "Tool Selection Guide",   text: "Which AI tools to use for which outputs, how to combine them for best results, and which tools to avoid for commercial fashion work." },
      { icon: Download, title: "Practical Examples",     text: "Real before and after examples with detailed notes. What worked, what did not, and how to diagnose and fix common production problems." },
    ],
    steps: [
      { number: "01", title: "Purchase the guide", text: "Complete your order and receive instant access to the full guide and prompt packs as a downloadable PDF." },
      { number: "02", title: "Follow the workflow", text: "Work through the step by step production process using the tools and prompts included in the course." },
      { number: "03", title: "Build your first output", text: "Apply the workflow to your own product or client brief. The course includes troubleshooting guidance for common issues." },
      { number: "04", title: "Scale your production", text: "Use the systems in the course to build a repeatable production workflow for your own brand or client projects." },
    ],
    audiencesTitle: "Who should take this course",
    audiences: [
      { title: "Photographers",         text: "Looking to integrate AI into their workflow and offer AI fashion content as a service to existing and new clients." },
      { title: "Brand owners",          text: "Wanting to produce content in house without hiring a photographer or outsourcing every project to a studio." },
      { title: "Freelance creators",    text: "Expanding into AI fashion photography as a new service and needing a professional workflow to produce commercial quality work." },
      { title: "Agencies",              text: "Building an AI content capability for fashion clients and needing a proven production process rather than an experimental one." },
    ],
    faqs: [
      { q: "Is this a video course or a written guide?", a: "It is a comprehensive PDF guide with visual examples throughout. You download it once and have it permanently. There are no video lessons, no platform login, and no subscription." },
      { q: "Do I need any prior AI experience?", a: "No. The guide starts from the fundamental workflow and builds from there. If you have never used an AI image generation tool before, you will still be able to follow the process from day one." },
      { q: "Which AI tools does the course cover?", a: "The course covers the primary tools our studio uses in commercial fashion content production. We focus on tools that produce consistent, professional quality results rather than every available option on the market." },
      { q: "Does the course cover menswear and womenswear?", a: "Yes. The workflow, tools, and prompts in the course apply equally to womenswear, menswear, and unisex fashion content production. Examples from both categories are included throughout." },
    ],
    gallery: [
      { src: "/images/campaign-floral-blue-dress-2.jpeg",  alt: "Fashion AI content course team" },
      { src: "/images/blue-lines-dress-female.jpeg",  alt: "Fashion AI content course guide" },
      { src: "/images/studio-white-cutout-maxi.jpg",  alt: "Studio photography produced using AI workflow" },
      { src: "/images/lifestyle-men.png", alt: "Lifestyle photography produced using AI workflow" },
    ],
    cta: {
      title: "Ready to learn the AI fashion content workflow?",
      text: "Get the complete guide, prompt packs, and tool selection resources used by our studio team.",
    },
  },

  "bags-and-accessories-photography": {
    meta: {
      title: "Premium Bags Photography | SetlesStudio",
      description:
        "On model and still life bag photography for luxury brands, ecommerce stores, and campaign use. Every detail, captured precisely.",
    },
    hero: {
      titlePrefix: "Luxury bag photography that",
      titleHighlight: "captures detail and commands attention",
      text: "On model and still life bag imagery for luxury brands, ecommerce stores, and campaign use.",
      image: "/images/bags-dress.png",
      imageAlt: "Luxury bag on model photography",
      waText: "Hi, I'd like to start a premium bags photography project.",
    },
    overview: {
      heading: "Bag imagery built for luxury brands",
      para1:
        "Premium bags sell on detail. Stitching quality, hardware finish, material texture, and silhouette all communicate the value of the product. SetlesStudio produces on model and still life bag imagery that captures these details precisely, giving customers the confidence to purchase at premium price points.",
      para2:
        "From tote bags and crossbody styles to structured luxury pieces, we produce imagery that meets the standards of platforms like Farfetch and NET A PORTER while working for your own ecommerce store and brand campaigns.",
      tags: ["Luxury Bags", "Leather Goods", "Accessories", "Ecommerce"],
      img1: "/images/bags-shoot-with-model.jpeg",
      img2: "/images/bags-shoot.jpeg",
    },
    deliverablesTitle: "Everything your bag catalog needs",
    deliverables: [
      { icon: Camera,     title: "On Model Bag Shots",        text: "Bags shown held, worn, and carried by realistic AI models in natural on model compositions that show scale and wearability." },
      { icon: Gem,        title: "Still Life Luxury Styling", text: "Editorial still life shots that highlight hardware, material texture, stitching quality, and structural details." },
      { icon: ShoppingBag, title: "Detail and Close Up Shots", text: "Stitching, zip pulls, buckles, clasps, and lining details captured at high resolution. The details that justify the price." },
      { icon: FileCheck,  title: "Marketplace Ready Formats", text: "Formatted for major accessories platforms with the correct crops, ratios, and background requirements for each channel." },
    ],
    steps: [
      { number: "01", title: "Send photos of your bags", text: "Share clear photographs of the bag from multiple angles. Include close ups of hardware, stitching, and any detail that defines the product." },
      { number: "02", title: "Tell us what shots you need", text: "Let us know whether you want on model shots, still life styling, or both, and any platform specific requirements for your catalog." },
      { number: "03", title: "We produce and refine", text: "We produce the full image set and send you a preview for review. We refine based on your feedback before final delivery." },
      { number: "04", title: "Receive your bag catalog", text: "Final retouched imagery delivered organized and ready for your ecommerce store, marketplace listings, and brand campaigns." },
    ],
    audiencesTitle: "Built for luxury accessories brands",
    audiences: [
      { title: "Luxury bag brands",      text: "Needing editorial quality imagery without a studio shoot to match the premium positioning of their product and price point." },
      { title: "Leather goods retailers", text: "Wanting consistent catalog imagery across a full range of bags, wallets, and accessories in multiple styles and colorways." },
      { title: "Expanding brands",       text: "Adding bags or accessories to their product range and needing imagery that matches the quality of their existing apparel catalog." },
      { title: "Marketplace sellers",    text: "Competing with branded imagery on Farfetch, NET A PORTER, SSENSE, and similar platforms where visual quality defines the listing." },
    ],
    faqs: [
      { q: "Can you capture hardware and material detail accurately?", a: "Yes. Hardware finish, stitching, material texture, and structural detail are all preserved in the final images. If there is a specific detail that defines the value of your product, flag it in your brief and we make sure it reads clearly." },
      { q: "What photos do I need to provide?", a: "Clear photographs of the bag from multiple angles front, back, side, and top. Include close up shots of hardware and any interior lining if those details matter to your listing. The better your reference photos, the more accurate the final images." },
      { q: "Can you do both on model and still life in one order?", a: "Yes. We can include both on model and still life shots in your deliverable set. Let us know the mix you need in your brief and we will produce both types within the same project." },
      { q: "How does pricing work for bag photography?", a: "Bag photography is priced similarly to other product categories based on the number of images and styles in your order. Contact us with your catalog size and brief for a custom quote." },
    ],
    gallery: [
      { src: "/images/bags-shoot.jpeg",            alt: "Premium bag photography still life" },
      { src: "/images/bags-shoot-1.jpeg",           alt: "Luxury bag product photography" },
      { src: "/images/bags-shoot-2.jpeg",           alt: "Bag photography detail shot" },
      { src: "/images/bags-shoot-with-model.jpeg",  alt: "On model bag photography" },
    ],
    cta: {
      title: "Ready to build your bag photography catalog?",
      text: "Send us your product photos and brief and we will return imagery that justifies every price point.",
    },
  },
};

/* ─── Static params ─────────────────────────────────────────── */

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

/* ─── Metadata ──────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const svc = services[params.slug];
  if (!svc) return {};
  return {
    title: svc.meta.title,
    description: svc.meta.description,
  };
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function ServiceSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const svc = services[params.slug];
  if (!svc) notFound();

  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(svc.hero.waText)}`;

  return (
    <>
      <PageHero
        eyebrow={svc.meta.title.split("|")[0].trim()}
        title={
          <>
            {svc.hero.titlePrefix}{" "}
            <span className="text-brand">{svc.hero.titleHighlight}</span>
          </>
        }
        text={svc.hero.text}
        image={svc.hero.image}
        imageAlt={svc.hero.imageAlt}
        animateReveal
      >
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Start a Project <ArrowRight size={16} />
        </a>
        <Link href="/portfolio" className="btn-ghost-light">
          View Our Work
        </Link>
      </PageHero>

      {/* Overview */}
      <section className="container-site py-20">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">What this service is</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-snug sm:text-4xl">
              {svc.overview.heading}
            </h2>
            <p className="mt-6 leading-relaxed text-ink-soft">{svc.overview.para1}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">{svc.overview.para2}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {svc.overview.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand/25 bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:h-full lg:h-auto">
            <div className="grid grid-cols-1 gap-4 min-[450px]:grid-cols-2 md:grid-cols-1 md:h-full md:grid-rows-2 lg:h-auto lg:grid-rows-none lg:grid-cols-2">

              {/* Flip card 1 */}
              <div className="group [perspective:1200px]">
                <div className="relative aspect-[3/4] md:aspect-auto md:h-full lg:aspect-[3/4] lg:h-auto w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-lg [backface-visibility:hidden]">
                    <Image
                      src={svc.overview.img1}
                      alt={svc.overview.heading}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col gap-5 overflow-hidden rounded-3xl bg-brand p-6 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] min-[450px]:gap-2 min-[450px]:p-3 sm:gap-3 sm:p-4 md:gap-5 md:p-6 lg:gap-3 lg:p-4 xl:gap-4 xl:p-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55 min-[450px]:text-[8px] sm:text-[9px] md:text-[10px]">SetlesStudio</p>
                      <p className="mt-2 font-display font-bold leading-tight text-white
                        text-2xl min-[450px]:text-sm sm:text-base md:text-2xl lg:text-xs xl:text-sm">
                        {svc.meta.title.split(" | ")[0]}
                      </p>
                      <div className="mt-3 h-0.5 w-10 rounded-full bg-white/40 min-[450px]:mt-1.5 min-[450px]:w-6 sm:w-8 md:mt-3 md:w-10" />
                    </div>
                    <ul className="space-y-3 min-[450px]:space-y-1 sm:space-y-1.5 md:space-y-3">
                      {svc.deliverables.slice(0, 4).map((d) => (
                        <li key={d.title} className="flex items-start gap-2.5 leading-snug text-white/90
                          text-sm min-[450px]:text-[10px] sm:text-[11px] md:text-sm lg:text-[10px] xl:text-xs">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/25 min-[450px]:h-3.5 min-[450px]:w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5">
                            <Check size={10} strokeWidth={3} className="text-white min-[450px]:hidden md:block" />
                            <Check size={7} strokeWidth={3} className="text-white hidden min-[450px]:block md:hidden" />
                          </span>
                          {d.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Flip card 2 */}
              <div className="group min-[450px]:mt-6 md:mt-0 lg:mt-6 [perspective:1200px]">
                <div className="relative aspect-[3/4] md:aspect-auto md:h-full lg:aspect-[3/4] lg:h-auto w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-lg [backface-visibility:hidden]">
                    <Image
                      src={svc.overview.img2}
                      alt={svc.overview.heading}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col gap-5 overflow-hidden rounded-3xl bg-ink p-6 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] min-[450px]:gap-2 min-[450px]:p-3 sm:gap-3 sm:p-4 md:gap-5 md:p-6 lg:gap-3 lg:p-4 xl:gap-4 xl:p-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 min-[450px]:text-[8px] sm:text-[9px] md:text-[10px]">Our results</p>
                      <p className="mt-2 font-display font-semibold leading-snug text-white
                        text-base min-[450px]:text-[10px] sm:text-xs md:text-lg lg:text-[10px] xl:text-sm">
                        {svc.overview.heading}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 min-[450px]:gap-1.5 sm:gap-2 md:gap-3">
                      {[
                        { value: "1100+", label: "Projects" },
                        { value: "98%",   label: "Satisfaction" },
                        { value: "7 Days", label: "Avg Delivery" },
                        { value: "30+",   label: "Countries" },
                      ].map((s) => (
                        <div key={s.label} className="rounded-2xl bg-white/[0.07] p-3 text-center min-[450px]:rounded-lg min-[450px]:p-1.5 sm:rounded-xl sm:p-2 md:rounded-2xl md:p-3 xl:p-4">
                          <p className="font-display font-semibold text-brand
                            text-2xl min-[450px]:text-sm sm:text-base md:text-2xl lg:text-sm xl:text-xl">{s.value}</p>
                          <p className="font-semibold uppercase tracking-wider text-white/40
                            text-[10px] min-[450px]:text-[7px] sm:text-[8px] md:text-[10px] lg:text-[8px] xl:text-[9px]">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-cream rounded-3xl py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="What you get"
            title={svc.deliverablesTitle}
            text="Every project is produced to a commercial standard with consistent quality across every deliverable."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {svc.deliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <div className="card group h-full cursor-default p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/25 hover:shadow-xl hover:shadow-brand/10">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                    <d.icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold transition-colors duration-200 group-hover:text-brand">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink py-20 text-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our process"
            title="How we work"
            text="A clear, straightforward process from your brief to final delivery."
            dark
          />
          <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block"
              aria-hidden
            />
            {svc.steps.map((s, i) => (
              <Reveal key={s.number} delay={i * 0.1} className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand font-display font-bold text-brand">
                  {s.number}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-site py-20">
        <SectionHeading
          eyebrow="Sample work"
          title="Example outputs from this service"
          text="A selection of imagery produced for fashion brands using this service."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {svc.gallery.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.07}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-cream">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link href="/portfolio" className="btn-outline">
            View full portfolio <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* Who it's for */}
      <section className="bg-cream rounded-3xl py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Who it's for"
            title={svc.audiencesTitle}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {svc.audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-3xl border border-ink/8 bg-white p-7">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{a.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand py-12 text-white">
        <div className="container-site grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {[
            { value: "1100+", label: "Projects Completed" },
            { value: "98%",   label: "Client Satisfaction" },
            { value: "7 Days", label: "Average Delivery" },
            { value: "30+",   label: "Countries Served" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-semibold sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site py-20">
        <SectionHeading
          eyebrow="Common questions"
          title="Frequently asked questions"
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {svc.faqs.map((f) => (
            <Reveal key={f.q}>
              <details className="group card overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABand
        title={svc.cta.title}
        text={svc.cta.text}
        primary={{ href: waHref, label: "Start a Project" }}
        secondary={{ href: "/pricing", label: "View Pricing" }}
        image="/images/services-page-last-section-image.jpeg"
      />
    </>
  );
}
