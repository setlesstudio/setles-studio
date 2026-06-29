import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Camera, Gem, Globe, Package, LayoutGrid, ShoppingBag,
  FileCheck, Palette, Zap, Play, BookOpen,
  ChevronDown, Users, MapPin, TrendingUp, Layers,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceBeforeAfter from "@/components/ServiceBeforeAfter";
import ServiceFeatures, { type FeatureItem } from "@/components/ServiceFeatures";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

type ServiceData = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    waText: string;
  };
  beforeAfter: {
    before: string;
    beforeAlt: string;
    after: string;
    afterAlt: string;
    after2?: string;
    after2Alt?: string;
  };
  description: {
    titleHighlight: string;
    titleSuffix: string;
    paragraphs: string[];
  };
  features: {
    heading: string;
    subheading: string;
    items: FeatureItem[];
  };
  ctaBanner: {
    image: string;
    imageAlt: string;
    text: string;
    waText: string;
  };
  faqs: Array<{ q: string; a: string }>;
};

/* ─── Service data ───────────────────────────────────────────── */

const services: Record<string, ServiceData> = {

  "realistic-ai-studio-photography": {
    meta: {
      title: "Realistic AI Studio Photography for Apparel Brands | SetlesStudio",
      description: "Clean, consistent studio imagery built for conversion. We transform flat product photos into realistic on model studio images with accurate fabric texture, stitching, and fit.",
    },
    hero: {
      eyebrow: "AI Studio Photography",
      titlePrefix: "Realistic AI Studio Photography for",
      titleHighlight: "Apparel Brands",
      subtitle: "Premium AI Studio Photography That Looks 100% Real",
      image: "/images/service-page-banner.jpeg",
      imageAlt: "AI studio on-model fashion photography",
      waText: "Hi, I'd like to start a studio product photography project.",
    },
    beforeAfter: { before: "", beforeAlt: "", after: "", afterAlt: "" },
    description: {
      titleHighlight: "Realistic AI Studio Photography",
      titleSuffix: "for Apparel Brands",
      paragraphs: [
        "Transform your flat product photos into hyper realistic on-model studio images without expensive photoshoots. Our AI models showcase your clothing with accurate fabric textures, stitching details, and natural fit — ready for product pages, catalogs, Shopify stores, Amazon, and eCommerce websites.",
        "Create high converting AI studio photography for eCommerce product listings, social media marketing, fashion advertising, and apparel brand campaigns.",
      ],
    },
    features: {
      heading: "Why Apparel Brands Choose Our AI Studio Photography",
      subheading: "Realistic AI Studio Photography",
      items: [
        { number: "01", icon: Users,       title: "100% Realistic AI Fashion Models or Custom Models",    description: "We create custom AI models tailored to your brand or choose from our library of diverse, realistic models." },
        { number: "02", icon: Package,     title: "Accurate Fabric Texture, Stitching & Garment Details", description: "Every stitch, print, and fabric texture is accurately preserved to match your exact product." },
        { number: "03", icon: LayoutGrid,  title: "Consistent Backgrounds Across Your Full Catalog",      description: "Keep a unified look across all product images with matching studio backgrounds and lighting." },
        { number: "04", icon: ShoppingBag, title: "Marketplace Ready Formats for Amazon, Shopify & More", description: "Images delivered in the exact sizes and specs required by major eCommerce platforms." },
        { number: "05", icon: Camera,      title: "High Resolution, Professionally Retouched Files",      description: "Full resolution images ready for print, web, and digital advertising without further editing." },
        { number: "06", icon: Zap,         title: "Fast Delivery — No Studio, No Shoot Day Required",     description: "Receive your complete catalog imagery in days, not weeks, without booking a studio." },
      ],
    },
    ctaBanner: {
      image: "/images/services-page-last-section-image.jpeg",
      imageAlt: "AI studio fashion photography banner",
      text: "Showcase your apparel with commercial quality studio imagery designed to attract customers, build trust, and increase conversions.",
      waText: "Hi, I'd like to start a studio product photography project.",
    },
    faqs: [
      { q: "How accurate are the fabric details?", a: "Fabric accuracy is the core of what we do. Stitching, texture, print placement, logo positioning, and silhouette are all preserved. Flag any specific detail in your brief and we make sure it is represented correctly." },
      { q: "What do I need to send?", a: "A clear flat lay or packshot of your product is enough to begin. If you have brand guidelines or a model preference, include those in your brief. The more context you provide, the better the result." },
      { q: "Can I use these images on Amazon or other platforms?", a: "Yes. We deliver images that meet the technical requirements for major ecommerce platforms. If you need additional crops or ratios for specific platforms, we can produce those on request." },
      { q: "How many images and how long does delivery take?", a: "The Starter plan covers 20 images in 3 business days. Growth covers 50 images in 5 to 7 business days. For larger volumes contact us for a custom quote and timeline." },
    ],
  },

  "lifestyle-realistic-ai-photography": {
    meta: {
      title: "Realistic AI Lifestyle Photography for Fashion Brands | SetlesStudio",
      description: "Real life lifestyle scenes for your fashion brand. We transform flat product photos into realistic on model lifestyle imagery for social media, ads, and eCommerce.",
    },
    hero: {
      eyebrow: "AI Lifestyle Photography",
      titlePrefix: "Realistic AI Lifestyle Photography for",
      titleHighlight: "Fashion Brands",
      subtitle: "Premium AI Fashion Lifestyle Photography That Looks 100% Real",
      image: "/images/lifestyle-service-banner.jpg",
      imageAlt: "Realistic AI lifestyle fashion photography on model in city",
      waText: "Hi, I'd like to start a lifestyle photography project.",
    },
    beforeAfter: {
      before: "/images/lifestyle-before-rose-dress.jpg",
      beforeAlt: "Flat lay product photo of red rose dress before AI processing",
      after: "/images/lifestyle-red-dress-nyc-1-service.jpg",
      afterAlt: "AI lifestyle photo — red rose dress on model in NYC street",
      after2: "/images/lifestyle-red-dress-nyc-2.jpeg",
      after2Alt: "AI lifestyle photo — red rose dress on model in NYC street second look",
    },
    description: {
      titleHighlight: "Realistic AI Lifestyle Photography",
      titleSuffix: "for Apparel Brands",
      paragraphs: [
        "Transform your apparel products into photorealistic lifestyle fashion images without expensive photoshoots. Our realistic AI models showcase your clothing in natural environments such as city streets, cafes, beaches, and modern interiors while preserving accurate garment details, fabric textures, colors, logos, and fit.",
        "Create high converting AI lifestyle photography for eCommerce, social media marketing, fashion advertising, and apparel brand campaigns.",
      ],
    },
    features: {
      heading: "Why Apparel Brands Choose Our AI Fashion Photography",
      subheading: "Lifestyle AI Fashion Photography",
      items: [
        { number: "01", icon: Users,      title: "100% Realistic AI Fashion Models or Custom Models",    description: "Diverse, natural looking AI models styled to match your brand's target audience and aesthetic." },
        { number: "02", icon: Package,    title: "Accurate Garment Details, Colors & Fit",               description: "Colors, patterns, logos, and garment fit are preserved accurately in every lifestyle image." },
        { number: "03", icon: MapPin,     title: "Real Lifestyle Locations, Not Fake AI Places",         description: "We use real world photographs as location references, not computer-generated environments." },
        { number: "04", icon: Zap,        title: "Faster & More Affordable Than Traditional Shoots",     description: "Get lifestyle imagery at a fraction of traditional production costs with no shoot day required." },
        { number: "05", icon: Camera,     title: "High Resolution Images for eCommerce & Ads",           description: "Delivered in all formats for web, social media, and paid advertising campaigns." },
        { number: "06", icon: TrendingUp, title: "Commercial Quality Results That Increase Conversions", description: "Images designed to perform in product listings, ads, and brand content that drives sales." },
      ],
    },
    ctaBanner: {
      image: "/images/lifestyle-service-cta-banner.jpg",
      imageAlt: "Lifestyle fashion AI photography CTA",
      text: "Showcase your apparel with commercial quality lifestyle imagery designed to attract customers, build trust, and increase conversions.",
      waText: "Hi, I'd like to start a lifestyle photography project.",
    },
    faqs: [
      { q: "Can you create AI fashion photos from my clothing images?", a: "Yes. We can transform flat lays, mannequin photos, ghost mannequin images, or existing product photos into realistic AI fashion photography." },
      { q: "Can you use the same AI model for my entire collection?", a: "Yes. We can maintain a consistent AI model across all products to create a professional and cohesive brand identity." },
      { q: "Are the images suitable for Shopify and eCommerce stores?", a: "Absolutely. Our images are optimized for Shopify, Amazon, Etsy, WooCommerce, and fashion brand websites." },
      { q: "What types of clothing can you work with?", a: "We can create AI fashion photography for activewear, sportswear, casual wear, streetwear, luxury fashion, swimwear, dresses, and more." },
    ],
  },

  "luxury-fashion-ai-campaign": {
    meta: {
      title: "Luxury Fashion Hyper Realistic AI Campaign | SetlesStudio",
      description: "Create hyper realistic AI fashion campaign photography inspired by luxury fashion houses and premium editorial magazines.",
    },
    hero: {
      eyebrow: "AI Fashion Campaign",
      titlePrefix: "Luxury Fashion Hyper Realistic",
      titleHighlight: "AI Campaign Photography",
      subtitle: "Editorial Grade AI Campaign Visuals Inspired by the World's Top Fashion Houses",
      image: "/images/blog-page-banner-picture.jpeg",
      imageAlt: "Luxury fashion AI campaign editorial photography",
      waText: "Hi, I'd like to discuss a luxury fashion campaign project.",
    },
    beforeAfter: { before: "", beforeAlt: "", after: "", afterAlt: "" },
    description: {
      titleHighlight: "Luxury Fashion AI Campaign Photography",
      titleSuffix: "for Premium Brands",
      paragraphs: [
        "Create hyper realistic AI fashion campaign photography inspired by luxury fashion houses and premium editorial magazines. Perfect for collection launches, fashion advertising, eCommerce campaigns, social media, and seasonal brand storytelling with a high end luxury look.",
        "Our AI campaign visuals deliver the art direction, composition, and finish that premium brands expect — without the cost of a full production crew.",
      ],
    },
    features: {
      heading: "Why Fashion Brands Choose Our AI Campaign Photography",
      subheading: "Luxury AI Fashion Campaigns",
      items: [
        { number: "01", icon: Camera,     title: "Hyper Realistic Editorial AI Fashion Photography",      description: "Campaign grade images that meet the visual standards of top fashion publications and luxury houses." },
        { number: "02", icon: Palette,    title: "Luxury Art Direction & Creative Campaign Concepts",     description: "Custom art direction that communicates your brand identity and campaign narrative." },
        { number: "03", icon: Gem,        title: "Magazine Quality Lighting & Premium Composition",       description: "Precise lighting setups and compositional choices matched to luxury editorial standards." },
        { number: "04", icon: LayoutGrid, title: "Cohesive Multi Image Campaign Collections",             description: "Consistent visual language across your full campaign set for maximum brand impact." },
        { number: "05", icon: FileCheck,  title: "Print Ready, Billboard Quality High Resolution Images", description: "Delivered at resolutions suitable for large format print, outdoor, and premium media." },
        { number: "06", icon: TrendingUp, title: "Commercial Quality Results Matched to Luxury Standards", description: "Every image is retouched and finished to the exacting standards of luxury fashion brands." },
      ],
    },
    ctaBanner: {
      image: "/images/luxury-stairs-wide.jpg",
      imageAlt: "Luxury fashion campaign banner",
      text: "Elevate your brand with campaign grade AI imagery that positions you alongside the world's leading fashion houses.",
      waText: "Hi, I'd like to discuss a luxury fashion campaign project.",
    },
    faqs: [
      { q: "How does luxury campaign imagery differ from standard product photography?", a: "Campaign imagery is led by narrative and art direction rather than simply showcasing the product. It communicates your brand's identity, values, and positioning at an editorial standard." },
      { q: "Can you match our existing brand look?", a: "Yes. Share your current campaign imagery, brand guidelines, and any references that represent the aesthetic you want to maintain or evolve." },
      { q: "How long does a full campaign set take to produce?", a: "A standard collection set of 10 to 20 images typically takes 5 to 10 business days. Contact us with your brief for a specific timeline." },
      { q: "Do you produce menswear campaigns as well as womenswear?", a: "Yes, we produce campaigns for both menswear and womenswear, as well as unisex and gender neutral brands." },
    ],
  },

  "footwear-realistic-ai-photography": {
    meta: {
      title: "Footwear Realistic AI Photography | SetlesStudio",
      description: "Hyper realistic AI footwear photography with accurate sole, material, stitching, and on foot fit. Perfect for eCommerce, marketplaces, and brand campaigns.",
    },
    hero: {
      eyebrow: "AI Footwear Photography",
      titlePrefix: "Footwear Realistic",
      titleHighlight: "AI Photography",
      subtitle: "Hyper Realistic AI Footwear Photography That Looks 100% Real",
      image: "/images/footwear-heels.png",
      imageAlt: "Realistic AI footwear photography on model",
      waText: "Hi, I'd like to start a footwear photography project.",
    },
    beforeAfter: { before: "", beforeAlt: "", after: "", afterAlt: "" },
    description: {
      titleHighlight: "Footwear Realistic AI Photography",
      titleSuffix: "for eCommerce Brands",
      paragraphs: [
        "Create hyper realistic AI footwear photography with AI models wearing your shoes in studio or lifestyle environments. We accurately showcase sneakers, heels, boots, sandals, and all types of footwear with perfect angles, natural poses, realistic reflections, and an accurate on foot fit.",
        "Every image preserves the sole, material, stitching, texture, and product details with a 100% realistic look — ready for Shopify, Amazon, and brand campaigns.",
      ],
    },
    features: {
      heading: "Why Footwear Brands Choose Our AI Photography",
      subheading: "Realistic AI Footwear Photography",
      items: [
        { number: "01", icon: Users,       title: "Hyper Realistic AI Models Wearing Your Footwear",       description: "Natural looking AI models wearing your shoes with accurate on foot positioning and fit." },
        { number: "02", icon: Package,     title: "Accurate Sole, Material, Texture & Stitching Details",  description: "Sole construction, leather texture, hardware, and stitching are rendered with precision." },
        { number: "03", icon: Camera,      title: "On Model & Still Life Photography Options",              description: "Choose lifestyle on model shots, clean still life, or a combination of both styles." },
        { number: "04", icon: LayoutGrid,  title: "Consistent Catalog Angles for eCommerce & Marketplaces", description: "Standard catalog angles applied consistently across your full footwear range." },
        { number: "05", icon: ShoppingBag, title: "High Resolution Images for Shopify, Amazon & Ads",      description: "Delivered in all required formats for major footwear marketplaces and advertising." },
        { number: "06", icon: Zap,         title: "Fast Delivery Without Traditional Studio Costs",         description: "Full catalog delivered in days without the expense of a traditional product shoot." },
      ],
    },
    ctaBanner: {
      image: "/images/footwear-heels-2.jpeg",
      imageAlt: "Footwear AI photography CTA",
      text: "Showcase every detail of your footwear with commercial quality AI photography designed to drive conversions.",
      waText: "Hi, I'd like to start a footwear photography project.",
    },
    faqs: [
      { q: "Can you shoot all types of footwear?", a: "Yes. We produce AI photography for sneakers, heels, boots, sandals, loafers, and all footwear types. Each category has specific angle and detail requirements that we apply automatically." },
      { q: "How accurate are the shoe details in the final image?", a: "We preserve sole construction, material texture, hardware, colour, and stitching detail accurately in every image. Flag any critical detail in your brief and we make sure it reads clearly." },
      { q: "Can I get both on model and still life versions?", a: "Yes. We produce both on model shots and clean still life imagery. You can request both styles in a single order." },
      { q: "Are the images suitable for major footwear marketplaces?", a: "Yes. We deliver images that meet the technical requirements for Amazon, Zalando, ASOS, and other major footwear marketplaces." },
    ],
  },

  "realistic-ai-video-ads-ugc": {
    meta: {
      title: "Realistic AI Video Ads & UGC Content | SetlesStudio",
      description: "Hyper realistic AI video ads, authentic UGC style videos, and high converting social content for Shopify, TikTok, Instagram, Facebook, and YouTube.",
    },
    hero: {
      eyebrow: "AI Video Ads & UGC",
      titlePrefix: "Realistic AI Video Ads &",
      titleHighlight: "UGC Content",
      subtitle: "High Converting AI Video Ads That Look 100% Real",
      image: "/images/service-page-banner.jpeg",
      imageAlt: "AI video ads and UGC content creation",
      waText: "Hi, I'd like to discuss an AI video ads project.",
    },
    beforeAfter: { before: "", beforeAlt: "", after: "", afterAlt: "" },
    description: {
      titleHighlight: "Realistic AI Video Ads & UGC Content",
      titleSuffix: "for eCommerce Brands",
      paragraphs: [
        "Create hyper realistic AI video ads, authentic UGC style videos, and high converting social media content that showcases your products with natural AI models, realistic motion, and professional storytelling.",
        "Perfect for Shopify stores, eCommerce brands, product launches, and paid advertising across TikTok, Instagram, Facebook, YouTube, and other digital platforms.",
      ],
    },
    features: {
      heading: "Why eCommerce Brands Choose Our AI Video Production",
      subheading: "Realistic AI Video Ads & UGC Content",
      items: [
        { number: "01", icon: Play,       title: "Hyper Realistic AI Video Ads With Natural Model Movement", description: "AI models move naturally in your product videos, creating authentic and engaging content." },
        { number: "02", icon: Users,      title: "Authentic UGC Style Videos That Build Trust",             description: "Creator style content designed to feel genuine and perform in paid and organic feeds." },
        { number: "03", icon: Globe,      title: "Optimized for TikTok, Instagram, Facebook & YouTube",     description: "Every video is cut and formatted to the exact specs of each major social platform." },
        { number: "04", icon: TrendingUp, title: "High Converting Videos for Paid Ads & Launches",          description: "Video content engineered around direct response principles to maximize ad performance." },
        { number: "05", icon: Camera,     title: "Commercial Ready HD & 4K in All Format Options",          description: "Delivered in vertical, square, and landscape formats in HD and 4K resolution." },
        { number: "06", icon: Zap,        title: "Faster & More Affordable Than Traditional Production",     description: "Professional video content produced at a fraction of traditional studio production costs." },
      ],
    },
    ctaBanner: {
      image: "/images/home-page-last-section-image.jpeg",
      imageAlt: "AI video ads production banner",
      text: "Launch high converting AI video ads and UGC content that stops the scroll and drives real results for your brand.",
      waText: "Hi, I'd like to discuss an AI video ads project.",
    },
    faqs: [
      { q: "What video lengths and formats do you produce?", a: "We produce 6 to 30 second cuts for paid social platforms and longer formats up to 60 seconds for YouTube and website use. We deliver vertical, square, and landscape exports in every order." },
      { q: "Can you create UGC style videos that look authentic?", a: "Yes. Our UGC content is designed to match the organic feel of real creator content. It builds trust with audiences and performs well in paid campaigns." },
      { q: "Which platforms are the videos optimised for?", a: "We optimise for TikTok, Instagram Reels, Facebook, YouTube Shorts, and Shopify product pages. Each platform has specific aspect ratios and pacing requirements that we apply." },
      { q: "How long does video production take?", a: "Standard video projects are delivered within 5 to 7 business days. Rush delivery is available for product launches and time sensitive campaigns." },
    ],
  },

  "fashion-ai-content-course": {
    meta: {
      title: "Fashion AI Content Course | SetlesStudio",
      description: "Our real time process, prompts, and creative ideas. Learn how we achieve 100% accurate outfit details and textures with AI fashion photography.",
    },
    hero: {
      eyebrow: "Fashion AI Course",
      titlePrefix: "Fashion AI Content",
      titleHighlight: "Course",
      subtitle: "Learn Our Exact Process for Creating 100% Realistic AI Fashion Photography",
      image: "/images/course-team.png",
      imageAlt: "Fashion AI content course by SetlesStudio team",
      waText: "Hi, I'd like to learn more about the Fashion AI Content Course.",
    },
    beforeAfter: { before: "", beforeAlt: "", after: "", afterAlt: "" },
    description: {
      titleHighlight: "Fashion AI Content Course",
      titleSuffix: "by SetlesStudio",
      paragraphs: [
        "We open up our real time process, prompts, and creative ideas: how we achieve accurate outfit details and textures, create realistic images with natural looking models, use real life scenes for authentic content, and apply the techniques that set our team apart.",
        "Whether you are a brand owner, content creator, or fashion photographer, this course gives you the exact workflows and prompts to produce commercial quality AI fashion images independently.",
      ],
    },
    features: {
      heading: "What You Get Inside the Course",
      subheading: "Fashion AI Content Course",
      items: [
        { number: "01", icon: BookOpen,   title: "Step by Step AI Fashion Photography Workflows",          description: "Follow our exact production process from brief to final image, step by step." },
        { number: "02", icon: FileCheck,  title: "100+ Production Tested Prompts & Techniques",           description: "Every prompt has been tested and refined on real client projects across multiple services." },
        { number: "03", icon: Layers,     title: "Real Project Examples & Practice Files",                description: "Learn directly from actual client work with downloadable assets to practice with." },
        { number: "04", icon: Package,    title: "How to Achieve Accurate Outfit Details & Textures",     description: "The specific techniques we use to maintain garment accuracy across every image." },
        { number: "05", icon: Camera,     title: "Create Realistic Images With Natural Looking Models",   description: "Our methods for producing AI models that look indistinguishable from real photography." },
        { number: "06", icon: TrendingUp, title: "Lifetime Access With Free Updates & New Content",       description: "Your purchase includes all future updates as AI tools and techniques evolve." },
      ],
    },
    ctaBanner: {
      image: "/images/laern-page-last-section-full.jpeg",
      imageAlt: "Fashion AI Content Course CTA",
      text: "Master the exact AI workflows, prompts, and techniques our studio uses to produce commercial quality fashion imagery at scale.",
      waText: "Hi, I'd like to learn more about the Fashion AI Content Course.",
    },
    faqs: [
      { q: "Who is this course for?", a: "This course is for brand owners, content creators, fashion photographers, and marketing teams who want to produce professional AI fashion imagery independently without outsourcing every project." },
      { q: "What software or tools do I need?", a: "We cover the specific tools and platforms used in our production workflow. No advanced technical experience is required to follow the course." },
      { q: "Do I get access to all the prompts?", a: "Yes. The course includes our complete prompt library of 100+ production tested prompts used in real client projects." },
      { q: "Is this a one time purchase or a subscription?", a: "This is a one time purchase with lifetime access. All future updates to the course are included at no additional cost." },
    ],
  },

  "bags-accessories-realistic-ai-photography": {
    meta: {
      title: "Women's Handbag Realistic AI Photography | SetlesStudio",
      description: "Create hyper realistic AI handbag photography that showcases every detail with premium quality. Perfect for Shopify, Amazon, eCommerce, and luxury brands.",
    },
    hero: {
      eyebrow: "AI Bags & Accessories",
      titlePrefix: "Women's Handbag",
      titleHighlight: "Realistic AI Photography",
      subtitle: "Hyper Realistic AI Handbag Photography That Showcases Every Detail",
      image: "/images/bags-shoot-with-model.jpeg",
      imageAlt: "Women's handbag realistic AI photography on model",
      waText: "Hi, I'd like to start a handbag and accessories photography project.",
    },
    beforeAfter: { before: "", beforeAlt: "", after: "", afterAlt: "" },
    description: {
      titleHighlight: "Women's Handbag Realistic AI Photography",
      titleSuffix: "for eCommerce & Luxury Brands",
      paragraphs: [
        "Create hyper realistic AI handbag photography that showcases every detail with premium quality. Our AI models and studio setups accurately render leather textures, hardware finishes, stitching, and proportions for all types of bags and accessories.",
        "Perfect for Shopify, Amazon, eCommerce stores, luxury brands, catalogs, and social media marketing.",
      ],
    },
    features: {
      heading: "Why Handbag Brands Choose Our AI Photography",
      subheading: "Women's Handbag Realistic AI Photography",
      items: [
        { number: "01", icon: Users,       title: "Hyper Realistic AI Models Showcasing Women's Handbags",       description: "Natural looking AI models carry and style your bags with realistic weight and positioning." },
        { number: "02", icon: Package,     title: "Accurate Leather Texture, Stitching, Hardware & Colors",      description: "Every material detail including grain, zipper, clasp, and stitching is accurately rendered." },
        { number: "03", icon: Gem,         title: "Luxury Lifestyle & Professional Studio AI Photography",        description: "Both editorial lifestyle and clean studio options available for every bag style." },
        { number: "04", icon: ShoppingBag, title: "Perfect for All Types of Bags, Wallets & Accessories",        description: "From totes and crossbodies to wallets, clutches, and all fashion accessories." },
        { number: "05", icon: Camera,      title: "High Resolution Images for Shopify, Amazon & eCommerce",      description: "Delivered at the specifications required by major eCommerce platforms and marketplaces." },
        { number: "06", icon: TrendingUp,  title: "Premium Campaign & Catalog Photography With Consistent Branding", description: "Maintain visual consistency across your full range for a polished, professional catalog." },
      ],
    },
    ctaBanner: {
      image: "/images/contact-page-last-section.jpeg",
      imageAlt: "Handbag AI photography CTA banner",
      text: "Showcase every detail of your handbags and accessories with premium AI photography designed to attract customers and drive sales.",
      waText: "Hi, I'd like to start a handbag and accessories photography project.",
    },
    faqs: [
      { q: "Can you shoot all types of bags and accessories?", a: "Yes. We produce AI photography for handbags, backpacks, wallets, clutches, jewelry, watches, sunglasses, and all fashion accessories. Each product type has specific angle and detail requirements." },
      { q: "How accurate are the material details in the final images?", a: "We preserve leather grain, hardware finish, stitching, colour, and proportions accurately. Flag any critical detail and we ensure it reads clearly in the final output." },
      { q: "Can I get both lifestyle and studio versions?", a: "Yes. We produce both o -model lifestyle shots and clean studio still life imagery. You can request both styles in a single order." },
      { q: "Are the images suitable for luxury brand campaigns?", a: "Yes. Our retouching and post production standards match the expectations of premium fashion brands and luxury eCommerce platforms." },
    ],
  },

};

/* ─── Static params ──────────────────────────────────────────── */

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

/* ─── Metadata ───────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const svc = services[params.slug];
  if (!svc) return {};
  return { title: svc.meta.title, description: svc.meta.description };
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function ServiceSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const svc = services[params.slug];
  if (!svc) notFound();

  const waCtaHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(svc.ctaBanner.waText)}`;
  const hasBeforeAfter = Boolean(svc.beforeAfter.before && svc.beforeAfter.after);

  return (
    <>
      <PageHero
        eyebrow={svc.hero.eyebrow}
        title={<>{svc.hero.titlePrefix} <span className="text-brand">{svc.hero.titleHighlight}</span></>}
        text={svc.hero.subtitle}
        image={svc.hero.image}
        imageAlt={svc.hero.imageAlt}
      />

      {hasBeforeAfter && <ServiceBeforeAfter {...svc.beforeAfter} />}
      

      <section className="bg-brand-soft py-14 md:py-20">
        <Reveal>
          <div className="container-site text-center">
            <h2 className="font-display text-2xl font-bold leading-snug md:text-3xl">
              <span className="text-brand">{svc.description.titleHighlight}</span>{" "}
              <span className="text-ink">{svc.description.titleSuffix}</span>
            </h2>
            {svc.description.paragraphs.map((p, i) => (
              <p key={i} className={`leading-relaxed text-ink-soft ${i === 0 ? "mt-5" : "mt-4"}`}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <ServiceFeatures {...svc.features} />

      <CTABand
        title={svc.ctaBanner.text}
        image={svc.ctaBanner.image}
        primary={{ href: waCtaHref, label: "Get Started Today" }}
      />

      <section className="container-site py-16 md:py-24">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
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
    </>
  );
}
