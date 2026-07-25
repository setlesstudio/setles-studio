import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Camera, Gem, Globe, Package, ShoppingBag, ShoppingCart,
  Zap, Play, Crown, Aperture, Tag, Infinity,
  ChevronDown, Users, MapPin, TrendingUp, Layers, Star, Lightbulb, Coins, MonitorCheck,
  MessageSquare, Image as ImageIcon, ClipboardList, Download, Rocket,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceBeforeAfter from "@/components/ServiceBeforeAfter";
import ServiceFeatures, { type FeatureItem } from "@/components/ServiceFeatures";
import ServiceProcess, { type ProcessStep } from "@/components/ServiceProcess";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";
import FAQ from "@/components/FAQ";
import SectionHeading from "@/components/SectionHeading";

type ServiceData = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    image?: string;
    mobileImage?: string;
    imageAlt: string;
    video?: string;
    waText: string;
    primaryLabel: string;
    secondary: { href: string; label: string };
  };
  beforeAfter: {
    before: string;
    beforeAlt: string;
    after?: string;
    afterAlt: string;
    afterVideo?: string;
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
    title: string;
    text: string;
    waText: string;
  };
  faqs: Array<{ q: string; a: string }>;
  process?: {
    heading: string;
    steps: ProcessStep[];
  };
};

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
      image: "/images/studio-service-banner.png",
      mobileImage: "/images/studio-service-banner-mobile.png",
      imageAlt: "AI studio on-model fashion photography",
      waText: "Hi, I'd like to start a studio product photography project.",
      primaryLabel: "Start My Studio Project",
      secondary: { href: "/portfolio", label: "View Our Work" },
    },
    beforeAfter: {
      before: "/images/white-dress-product-image.jpg",
      beforeAlt: "Flat lay product photo of white dress before AI studio processing",
      after: "/images/studio-white-cutout-maxi.jpg",
      afterAlt: "AI studio photo — white cutout maxi dress on model, clean studio background",
      after2: "/images/studio-white-cutout-maxi-1.jpg",
      after2Alt: "AI studio photo — white cutout maxi dress on model, second studio look",
    },
    description: {
      titleHighlight: "Realistic AI Studio Photography",
      titleSuffix: "for Apparel Brands",
      paragraphs: [
        "Transform your apparel products into professional, studio quality fashion images without expensive photoshoots. Our realistic AI models create photorealistic fashion visuals of models wearing your apparel while maintaining accurate garment details, fabric textures, logos, colors, and fit.",
        "Every image is carefully refined to achieve a realistic commercial look suitable for Ecommerce stores, advertising campaigns, social media marketing, and fashion.",
      ],
    },
    features: {
      heading: "Why Choose Our AI Fashion Photography Services?",
      subheading: "Realistic AI Studio Photography",
      items: [
        { number: "01", icon: Star,         title: "Highly Realistic",       description: "Our AI technology creates photorealistic images that look 100% real and natural." },
        { number: "02", icon: Users,        title: "Consistent Models",      description: "Use the same AI model across your entire collection for consistency." },
        { number: "03", icon: Lightbulb,    title: "Professional Lighting",  description: "Studio-quality lighting setups for premium fashion presentation." },
        { number: "04", icon: Rocket,       title: "Fast Turnaround",        description: "Get your images delivered quickly and launch your products faster." },
        { number: "05", icon: Coins,        title: "Cost Effective",         description: "Save up to 70% compared to traditional photoshoots without compromising quality." },
        { number: "06", icon: MonitorCheck, title: "High Resolution",        description: "High-resolution images perfect for web, print, and advertising." },
      ],
    },
    ctaBanner: {
      image: "/images/studio-service-cta.jpg",
      imageAlt: "AI studio fashion photography banner",
      title: "Create stunning, photorealistic fashion imagery that sells your apparel instantly.",
      text: "Showcase your apparel with commercial quality studio imagery designed to attract customers, build trust, and increase conversions.",
      waText: "Hi, I'd like to start a studio product photography project.",
    },
    faqs: [
      { q: "Can you create AI studio photos from my apparel images?", a: "Yes, we transform flat lays, ghost mannequin photos, and product images into realistic AI studio photography while preserving garment details and colors." },
      { q: "Are your AI fashion models realistic?", a: "Yes, we create hyper realistic AI fashion models designed for apparel brands, Ecommerce stores, and fashion marketing campaigns." },
      { q: "Are the images suitable for Shopify and online stores?", a: "Absolutely. Our AI studio photography is optimized for Shopify, Amazon, Etsy, WooCommerce, and apparel brand websites." },
    ],
  },

  "lifestyle-realistic-ai-photography": {
    meta: {
      title: "Realistic AI Lifestyle Photography for Fashion Brands | SetlesStudio",
      description: "Real life lifestyle scenes for your fashion brand. We transform flat product photos into realistic on model lifestyle imagery for social media, ads, and Ecommerce.",
    },
    hero: {
      eyebrow: "AI Lifestyle Photography",
      titlePrefix: "Realistic AI Lifestyle Photography for",
      titleHighlight: "Fashion Brands",
      subtitle: "Premium AI Fashion Lifestyle Photography That Looks 100% Real",
      image: "/images/lifestyle-service-banner.jpg",
      imageAlt: "Realistic AI lifestyle fashion photography on model in city",
      waText: "Hi, I'd like to start a lifestyle photography project.",
      primaryLabel: "Start My Lifestyle Shoot",
      secondary: { href: "/portfolio", label: "View Portfolio" },
    },
    beforeAfter: {
      before: "/images/lifestyle-before-rose-dress-product.png",
      beforeAlt: "Flat lay product photo of red rose dress before AI processing",
      after: "/images/lifestyle-red-dress-nyc-1-service.jpg",
      afterAlt: "AI lifestyle photo — red rose dress on model in NYC street",
      after2: "/images/lifestyle-red-dress-nyc-2.jpg",
      after2Alt: "AI lifestyle photo — red rose dress on model in NYC street second look",
    },
    description: {
      titleHighlight: "Realistic AI Lifestyle Photography",
      titleSuffix: "for Apparel Brands",
      paragraphs: [
        "Transform your apparel products into photorealistic lifestyle fashion images without expensive photoshoots. Our realistic AI models showcase your clothing in natural environments such as city streets, cafes, beaches, and modern interiors while preserving accurate garment details, fabric textures, colors, logos, and fit.",
        "Create high converting AI lifestyle photography for Ecommerce, social media marketing, fashion advertising, and apparel brand campaigns.",
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
        { number: "05", icon: Camera,     title: "High Resolution Images for Ecommerce & Ads",           description: "Delivered in all formats for web, social media, and paid advertising campaigns." },
        { number: "06", icon: TrendingUp, title: "Commercial Quality Results That Increase Conversions", description: "Images designed to perform in product listings, ads, and brand content that drives sales." },
      ],
    },
    ctaBanner: {
      image: "/images/lifestyle-service-cta-banner.jpg",
      imageAlt: "Lifestyle fashion AI photography CTA",
      title: "Ready to bring your clothing to life with AI lifestyle photography?",
      text: "Showcase your apparel with commercial quality lifestyle imagery designed to attract customers, build trust, and increase conversions.",
      waText: "Hi, I'd like to start a lifestyle photography project.",
    },
    faqs: [
      { q: "Can you create AI fashion photos from my clothing images?", a: "Yes. We can transform flat lays, mannequin photos, ghost mannequin images, or existing product photos into realistic AI fashion photography." },
      { q: "Can you use the same AI model for my entire collection?", a: "Yes. We can maintain a consistent AI model across all products to create a professional and cohesive brand identity." },
      { q: "Are the images suitable for Shopify and Ecommerce stores?", a: "Absolutely. Our images are optimized for Shopify, Amazon, Etsy, WooCommerce, and fashion brand websites." },
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
      titlePrefix: "Luxury AI Fashion Campaign",
      titleHighlight: "Photography that looks 100% real",
      subtitle: "Luxury AI Fashion Campaign Photography for Premium Apparel Brands",
      image: "https://res.cloudinary.com/dlfb8yn1x/image/upload/q_auto/f_auto/v1782022435/blog-page-banner-picture_thkuwm.jpg",
      mobileImage: "https://res.cloudinary.com/dlfb8yn1x/image/upload/q_auto/f_auto/v1782022435/blog-page-banner-picture-mobile_aatqie.jpg",
      imageAlt: "Luxury fashion AI campaign editorial photography",
      waText: "Hi, I'd like to discuss a luxury fashion campaign project.",
      primaryLabel: "Get a Campaign Quote",
      secondary: { href: "/portfolio", label: "View Portfolio" },
    },
    beforeAfter: {
      before: "/images/campaign-desert-knit-dress-product.jpg",
      beforeAlt: "Flat lay product photo of desert knit dress before AI processing",
      after: "/images/campaign-desert-knit-dress-1.jpeg",
      afterAlt: "AI luxury campaign photo — desert knit dress on model in editorial setting",
      after2: "/images/campaign-desert-knit-dress-2.jpeg",
      after2Alt: "AI luxury campaign photo — desert knit dress on model, second editorial look",
    },
    description: {
      titleHighlight: "Luxury Fashion AI Campaign Photography",
      titleSuffix: "for Premium Brands",
      paragraphs: [
        "Transform your apparel products into high end luxury fashion campaign imagery without the cost of traditional photoshoots. Our hyper realistic AI models showcase your clothing in premium locations, luxury interiors, upscale city environments, resorts, and editorial style settings while preserving accurate garment details, fabric textures, colors, logos, and fit.",
        "Create luxury fashion campaign photography for Ecommerce brands, fashion advertising, social media marketing, lookbooks, product launches, and premium brand campaigns.",
      ],
    },
    features: {
      heading: "Why Apparel Brands choose our luxury AI Fashion Campaign Photography",
      subheading: "Luxury AI Fashion Campaigns",
      items: [
        { number: "01", icon: Crown,       title: "Luxury Campaign Quality",       description: "Premium fashion imagery that matches luxury brand standards." },
        { number: "02", icon: Users,      title: "Hyper Realistic AI Models",     description: "Natural looking AI models with authentic poses, expressions, and styling." },
        { number: "03", icon: MapPin,     title: "Premium Locations",             description: "Luxury hotels, designer interiors, resorts, and exclusive urban settings." },
        { number: "04", icon: Layers,     title: "Consistent Brand Identity",     description: "Same AI model, style, and aesthetic across your entire collection." },
        { number: "05", icon: Zap,        title: "Fast & Cost Effective",         description: "Launch campaigns faster without expensive photoshoots." },
        { number: "06", icon: TrendingUp, title: "Boost Conversions",             description: "High converting visuals that build trust and increase sales." },
      ],
    },
    ctaBanner: {
      image: "/images/black-dress-model-luxury-service-cta.jpg",
      imageAlt: "Luxury fashion campaign banner",
      title: "Ready to create your luxury fashion campaign",
      text: "Transform your apparel collection into premium fashion advertising imagery without expensive photoshoots, models or production teams. Get luxury AI Fashion Campaign Image Today",
      waText: "Hi, I'd like to discuss a luxury fashion campaign project.",
    },
    faqs: [
      { q: "Can you create AI fashion images from my product photos?", a: "Yes, we can transform product photos, flat lays, or ghost mannequin images into luxury fashion campaign visuals." },
      { q: "Are the AI models realistic?", a: "Yes, we create hyper realistic AI fashion models that look natural and professional." },
      { q: "Can you use the same model across my collection?", a: "Yes, we can maintain a consistent AI model and style for your entire campaign." },
      { q: "Are the images suitable for Shopify and Ecommerce?", a: "Absolutely. Our images are optimized for Shopify, Amazon, Etsy, and fashion websites." },
      { q: "What types of clothing can you work with?", a: "We create AI fashion photography for luxury fashion, streetwear, activewear, swimwear, dresses, and more." },
    ],
  },

  "footwear-realistic-ai-photography": {
    meta: {
      title: "Footwear Realistic AI Photography | SetlesStudio",
      description: "Hyper realistic AI footwear photography with accurate sole, material, stitching, and on foot fit. Perfect for Ecommerce, marketplaces, and brand campaigns.",
    },
    hero: {
      eyebrow: "AI Footwear Photography",
      titlePrefix: "Footwear Realistic",
      titleHighlight: "AI Photography for Ecommerce Brands",
      subtitle: "Perfect for Ecommerce, Shopify, Amazon, fashion brands, lookbooks, social media, advertising campaigns, catalogs, and online stores.",
      image: "/images/footwear-ai-photography-service-banner.jpg",
      mobileImage: "/images/footwear-ai-photography-service-banner-mobile.jpg",
      imageAlt: "Realistic AI footwear photography on model",
      waText: "Hi, I'd like to start a footwear photography project.",
      primaryLabel: "Start My Footwear Project",
      secondary: { href: "/portfolio", label: "View Portfolio" },
    },
    beforeAfter: {
      before: "/images/heels-product.jpg",
      beforeAlt: "Flat lay product photo of heels before AI processing",
      after: "/images/heels-image-model.jpeg",
      afterAlt: "AI footwear photo, heels on model in lifestyle setting",
      after2: "/images/heels-image-model-1.jpg",
      after2Alt: "AI footwear photo, heels on model, second lifestyle look",
    },  
    description: {
      titleHighlight: "Footwear Realistic AI Photography",
      titleSuffix: "for Ecommerce Brands",
      paragraphs: [
        "Transform your footwear products into luxury fashion campaign imagery that elevates your brand and drives sales. Our Luxury AI Footwear Campaign Photography service creates premium advertising visuals for sneakers, designer shoes, luxury footwear, boots, and fashion collections using hyperrealistic AI models, editorial styling, and luxury locations. ",
        "Whether you're launching a new collection, creating a lookbook, or running advertising campaigns, we deliver high end fashion imagery designed to increase brand value,engagement, and conversions.",
      ],
    },
    features: {
      heading: "Why Choose Setlesstudio?",
      subheading: "Realistic AI Footwear Photography",
      items: [
        { number: "01", icon: Camera,       title: "Hyper Realistic AI Photography",   description: "Hyper realistic AI models and custom models for your footwear." },
        { number: "02", icon: Aperture,    title: "Perfect Lighting & Angles",        description: "Premium lighting and perfect angles for every shot." },
        { number: "03", icon: Tag,         title: "Consistent Branding & Style",      description: "Maintain a consistent brand look and feel across all images." },
        { number: "04", icon: Infinity,    title: "Unlimited Revisions",              description: "We work until you are 100% satisfied with the results." },
        { number: "05", icon: ShoppingCart, title: "Optimized for Ecommerce",         description: "High quality images optimized to boost your online store." },
        { number: "06", icon: TrendingUp,  title: "Boost Sales & Conversions",        description: "Stunning visuals that build trust and increase conversions." },
      ],
    },
    ctaBanner: {
      image: "/images/footwear-cta-image.jpg",
      imageAlt: "Footwear AI photography CTA",
      title: "Ready to Showcase Your Footwear Professionally?",
      text: "that helps your brand stand out and sell more online. Transform your footwear collection into realistic AI product photography",
      waText: "Hi, I'd like to start a footwear photography project.",
    },
    faqs: [
      { q: "Can you create AI footwear photos from my product images?", a: "Yes, we can transform product photos, catalog images, and footwear references into realistic AI footwear photography." },
      { q: "Are the shoe details and logos preserved?", a: "Yes, we carefully maintain colors, textures, logos, branding, and key footwear details." },
      { q: "Are the images suitable for Shopify and Amazon?", a: "Absolutely. Our footwear images are optimized for Shopify, Amazon, Etsy, WooCommerce, and Ecommerce stores." },
    ],
  },

  "realistic-ai-video-ads-ugc": {
    meta: {
      title: "Realistic AI Video Ads & UGC Content | SetlesStudio",
      description: "Hyper realistic AI video ads, authentic UGC style videos, and high converting social content for Shopify, TikTok, Instagram, Facebook, and YouTube.",
    },
    hero: {
      eyebrow: "AI Video Ads & UGC",
      titlePrefix: "Realistic AI Video & Advertising for",
      titleHighlight: "Ecommerce Brands",
      subtitle: "High Converting Realistic AI Video Ads That Drive More Sales",
      imageAlt: "AI video ads and UGC content creation",
      video: "https://res.cloudinary.com/dlfb8yn1x/video/upload/q_auto/v1782991084/video-ad_bvo5xc.mp4",
      waText: "Hi, I'd like to discuss an AI video ads project.",
      primaryLabel: "Create My Video Ad",
      secondary: { href: "/pricing", label: "See Our Pricing" },
    },
    beforeAfter: {
      before: "/images/female-shirt-trousers-image.webp",
      beforeAlt: "Flat product photo of female shirt and trouser set",
      afterVideo: "https://res.cloudinary.com/dlfb8yn1x/video/upload/q_auto/v1783056218/video-ad-2_xcibfp.mp4",
      afterAlt: "AI video ad showing the female outfit in action",
    },
    description: {
      titleHighlight: "Realistic AI Video and Advertising",
      titleSuffix: "for Ecommerce Brands",
      paragraphs: [
        "Bring your products to life with Realistic AI Video & Advertising services designed for modern Ecommerce brands. We create premium AI powered video ads, realistic AI UGC videos, product demonstrations, social media commercials, and brand storytelling videos that capture attention and increase conversions.",
        "Whether you sell apparel, footwear, jewelry, beauty products, or accessories, our realistic AI videos help you market your products faster without expensive production teams, actors, or studio shoots.",
      ],
    },
    features: {
      heading: "Why Choose Our Realistic AI Video & Advertising Services?",
      subheading: "Realistic AI Video Ads & UGC Content",
      items: [
        { number: "01", icon: Play,       title: "Realistic AI Video Production", description: "Create natural looking AI videos that showcase your products with professional quality and authentic movement." },
        { number: "02", icon: Users,      title: "High Converting AI UGC Ads", description: "Generate user generated content style videos that build trust and increase sales." },
        { number: "03", icon: Globe,      title: "Premium AI Product Videos",     description: "Turn product photos into engaging marketing videos for your website and social media." },
        { number: "04", icon: TrendingUp, title: "Optimized for paid Advertising", description: "Perfect for facebook Ads, Instagram Reels, Tiktok Ads, Youtube Shorts, Pinterest, and Google Ads." },
        { number: "05", icon: Camera,     title: "Fast and Cost Effective", description: "Launch Professional advertising campaigns without hiring influencers, videographers or production crews." },
        { number: "06", icon: Zap,        title: "Commercial Ready", description: "Videos are optimized for websites, product launches, paid advertising, email marketing and social media." },
      ],
    },
    ctaBanner: {
      image: "/images/female-long-green-dress.jpeg",
      imageAlt: "AI video ads production banner",
      title: "Ready to Launch High Converting AI Video Ads & UGC Content?",
      text: "Create realistic AI video ads, authentic UGC videos, and engaging social media content that helps your brand increase visibility, build trust, and drive more sales across TikTok, Instagram, Facebook, YouTube, and Shopify.",
      waText: "Hi, I'd like to discuss an AI video ads project.",
    },
    faqs: [
      { q: "What is Realistic AI Video & Advertising?", a: "Realistic AI Video & Advertising uses advanced AI to create professional product videos, video ads, and marketing content for brands and Ecommerce businesses." },
      { q: "Can you create Realistic AI UGC videos for my brand?", a: "Yes, we create realistic AI UGC videos that look authentic and are perfect for TikTok, Instagram Reels, Facebook Ads, and YouTube Shorts." },
      { q: "Can you turn product photos into AI video ads?", a: "Yes, we transform product images into high converting AI video ads for Shopify, Amazon, Ecommerce stores, and social media campaigns." },
      { q: "Are your AI video ads suitable for paid advertising?", a: "Absolutely. Our realistic AI video ads are optimized for Meta Ads, TikTok Ads, Google Ads, Instagram, and YouTube advertising" },
      { q: "Which businesses can benefit from Realistic AI Video & Advertising?", a: "We create AI video ads and UGC content for fashion brands, footwear companies, beauty brands, jewelry businesses, and Ecommerce stores" },
    ],
  },

  "bags-accessories-realistic-ai-photography": {
    meta: {
      title: "Women's Handbag Realistic AI Photography | SetlesStudio",
      description: "Create hyper realistic AI handbag photography that showcases every detail with premium quality. Perfect for Shopify, Amazon, Ecommerce, and luxury brands.",
    },
    hero: {
      eyebrow: "Handbag AI Photography",
      titlePrefix: "Women's Handbag",
      titleHighlight: "Realistic AI Photography",
      subtitle: "Create Stunning, High Converting Handbag Images with AI Realistic Photography",
      image: "/images/handbag-service-banner.jpg",
      mobileImage: "/images/handbag-service-banner-mobile.jpg",
      imageAlt: "Women's handbag realistic AI photography on model",
      waText: "Hi, I'd like to start a handbag and accessories photography project.",
      primaryLabel: "Start My Handbag Shoot",
      secondary: { href: "/portfolio", label: "View Portfolio" },
    },
    beforeAfter: {
      before: "/images/bag-image-product.png",
      beforeAlt: "Flat lay product photo of women's handbag before AI processing",
      after: "/images/environment-handbag-image-1.jpg",
      afterAlt: "AI handbag photo — women's luxury bag styled on model in editorial environment",
      after2: "/images/environment-handbag-image.jpg",
      after2Alt: "AI handbag photo — women's luxury bag on model, second editorial look",
    },  
    description: {
      titleHighlight: "Women's Handbag Realistic AI Photography",
      titleSuffix: "for Ecommerce & Luxury Brands",
      paragraphs: [
        "Showcase your women's handbags with premium, hyper realistic AI photography that looks indistinguishable from a professional studio photoshoot. Using advanced AI-generated fashion models, we create luxury quality images with natural lighting, authentic poses, and flawless details.",
        "The examples below demonstrate the realistic quality we deliver for fashion brands, Ecommerce businesses, and luxury retailers worldwide.",
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
        { number: "05", icon: Camera,      title: "High Resolution Images for Shopify, Amazon & Ecommerce",      description: "Delivered at the specifications required by major Ecommerce platforms and marketplaces." },
        { number: "06", icon: TrendingUp,  title: "Premium Campaign & Catalog Photography With Consistent Branding", description: "Maintain visual consistency across your full range for a polished, professional catalog." },
      ],
    },
    ctaBanner: {
      image: "/images/handbag-service-cta.jpg",
      imageAlt: "Handbag AI photography CTA banner",
      title: "Ready to elevate your handbag brand?",
      text: "Get stunning, realistic AI handbag images that help you sell more.",
      waText: "Hi, I'd like to start a handbag and accessories photography project.",
    },
    faqs: [
      { q: "What is Women's Handbags AI Photography?", a: "Women's Handbags AI Photography uses advanced AI to create realistic handbag images with AI-generated models, professional lighting, and premium backgrounds for Ecommerce, marketing, and fashion brands." },
      { q: "Can you create Women's Handbags AI Photography from my product photos?", a: "Yes. We can transform your handbag product photos into premium Women's Handbags AI Photography using realistic AI models while preserving every product detail." },
      { q: " Is Women's Handbags AI Photography suitable for Ecommerce?", a: "Absolutely. Our Women's Handbags AI Photography is perfect for Shopify, Amazon, Etsy, websites, social media, online stores, advertising, and luxury fashion lookbooks" },
      { q: "Can you match my brand style in Women's Handbags AI Photography?", a: "Yes. We customize every Women's Handbags AI Photography project to match your brand's colors, style, lighting, backgrounds, and overall visual identity." },
      { q: "Why choose Women's Handbags AI Photography instead of a traditional photoshoot?", a: "Women's Handbags AI Photography provides realistic, high quality commercial images at a lower cost and faster turnaround than traditional photography, making it ideal for fashion and Ecommerce brands." },
    ],
    process: {
      heading: "Our Simple Process",
      steps: [
        { number: "01", icon: MessageSquare, title: "Share Your Requirements",  description: "Send us product images & details" },
        { number: "02", icon: ImageIcon,     title: "AI Image Creation",        description: "We create realistic AI handbag images" },
        { number: "03", icon: ClipboardList, title: "Review & Request Changes", description: "Review images & request any changes" },
        { number: "04", icon: Download,      title: "Final Delivery",           description: "Receive high-resolution images ready to use" },
        { number: "05", icon: Rocket,        title: "Boost Your Sales",         description: "Use stunning images to attract more customers" },
      ],
    },
  },

};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const svc = services[params.slug];
  if (!svc) return {};
  return { title: svc.meta.title, description: svc.meta.description };
}

export default function ServiceSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const svc = services[params.slug];
  if (!svc) notFound();

  const waCtaHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(svc.ctaBanner.waText)}`;
  const waHeroHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(svc.hero.waText)}`;
  const hasBeforeAfter = Boolean(svc.beforeAfter.before && (svc.beforeAfter.after || svc.beforeAfter.afterVideo));

  return (
    <>
      <PageHero
        eyebrow={svc.hero.eyebrow}
        title={<>{svc.hero.titlePrefix} <span className="text-brand">{svc.hero.titleHighlight}</span></>}
        text={svc.hero.subtitle}
        image={svc.hero.image}
        imageMobile={svc.hero.mobileImage}
        imageAlt={svc.hero.imageAlt}
        video={svc.hero.video}
      >
        <a href={waHeroHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
          {svc.hero.primaryLabel}
        </a>
        <a
          href={svc.hero.secondary.href}
          className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          {svc.hero.secondary.label}
        </a>
      </PageHero>

      {hasBeforeAfter && <ServiceBeforeAfter {...svc.beforeAfter} />}
      
      <section className="container-site py-8">
        <Reveal>
          <div className="rounded-4xl bg-cream px-10 py-12 sm:px-16 sm:py-14">
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
              <span className="text-brand">{svc.description.titleHighlight}</span>{" "}
              <span className="text-ink">{svc.description.titleSuffix}</span>
            </h2>
            {svc.description.paragraphs.map((p, i) => (
              <p key={i} className={`text-justify leading-relaxed text-ink-soft ${i === 0 ? "mt-5" : "mt-4"}`}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {!svc.process && <ServiceFeatures {...svc.features} />}

      {svc.process && <ServiceProcess {...svc.process} />}

      <CTABand
        title={svc.ctaBanner.title}
        text={svc.ctaBanner.text}
        image={svc.ctaBanner.image}
        primary={{ href: waCtaHref, label: "Get Started Today" }}
      />

      <section id="faq" className="scroll-mt-24 bg-cream py-14 rounded-3xl">
              <div className="container-site">
                <SectionHeading eyebrow="FAQ" title="Frequently Asked questions" />
                <div className="mt-12">
                  <FAQ faqs={svc.faqs}/>
                </div>
              </div>
      </section>
    </>
  );
}
