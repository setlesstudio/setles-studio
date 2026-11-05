import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { breadcrumbData } from "@/lib/seo";
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
    subtitle: React.ReactNode;
    image?: string;
    mobileImage?: string;
    imageAlt: string;
    video?: string;
    waText: string;
    primaryLabel: string;
    secondary: { href: string; label: string };
  };
  beforeAfter: {
    heading?: string;
    introduction?: string;
    beforeLabel?: string;
    afterLabel?: string;
    portfolioLabel?: string;
    before: string;
    beforeAlt: string;
    beforeCaption: string;
    afterCaption: string;
    after2Caption?: string;
    after?: string;
    afterAlt: string;
    afterVideo?: string;
    after2?: string;
    after2Alt?: string;
  };
  description: {
    titleHighlight: string;
    titleSuffix: string;
    paragraphs: React.ReactNode[];
  };
  features: {
    heading: string;
    subheading: string;
    items: FeatureItem[];
  };
  details?: Array<{ title: string; intro?: string; items?: string[]; paragraphs: string[] }>;
  ctaBanner: {
    buttonLabel?: string;
    image: string;
    imageAlt: string;
    title: string;
    text: string;
    waText: string;
  };
  faqTitle?: string;
  faqs: Array<{ q: string; a: string }>;
  process?: {
    heading: string;
    steps: ProcessStep[];
  };
};

const services: Record<string, ServiceData> = {

  "realistic-ai-studio-photography": {
    meta: {
      title: "AI Fashion Photography for Clothing Brands | SetlesStudio",
      description: "Turn flat lays into on-model apparel images with SetlesStudio. Explore AI fashion photography for clothing brands, from ecommerce product pages to collection catalogs.",
    },
    hero: {
      eyebrow: "AI CLOTHING & ON MODEL PHOTOGRAPHY",
      titlePrefix: "AI Fashion Photography",
      titleHighlight: "for Clothing Brands",
      subtitle: "Turn your flat lay product photos into realistic on model apparel images. We create consistent studio photography for ecommerce stores, clothing catalogs, and fashion campaigns.",
      image: "/images/plum-studio-original-banner.webp",
      mobileImage: "/images/plum-studio-original-model.webp",
      imageAlt: "AI model wearing a plum scalloped top and matching leggings",
      waText: "Hi, I'd like to start a studio product photography project.",
      primaryLabel: "Start My Studio Project",
      secondary: { href: "/portfolio", label: "View Our Work" },
    },
    beforeAfter: {
      before: "/images/plum-product-grey.webp",
      beforeCaption: "Send a product photo showing the scalloped neckline and the matching plum leggings.",
      afterCaption: "SetlesStudio shows the plum set on an AI model in a full-length studio shot.",
      after2Caption: "A closer studio view shows how the scalloped neckline sits across one shoulder.",
      beforeAlt: "Plum scalloped long-sleeve top and matching leggings on a light background",
      after: "/images/plum-studio-original-model.webp",
      afterAlt: "Full-length AI model in a plum top and leggings with white sneakers",
      after2: "/images/plum-studio-original-detail.webp",
      after2Alt: "Close-up of the plum top’s asymmetric scalloped neckline on an AI model",
    },
    description: {
      titleHighlight: "AI Fashion Photography",
      titleSuffix: "for Clothing Brands",
      paragraphs: [
        "Transform your apparel products into professional, studio quality fashion images without expensive photoshoots. Our realistic AI models create photorealistic fashion visuals of models wearing your apparel while maintaining accurate garment details, fabric textures, logos, colors, and fit.",
        "Every image is carefully refined to achieve a realistic commercial look suitable for Ecommerce stores, advertising campaigns, social media marketing, and fashion.",
      ],
    },
    features: {
      heading: "Why Choose Our AI Fashion Photography Services?",
      subheading: "Realistic AI Studio Photography",
      items: [
        { number: "01", icon: Star,         title: "Garment Detail Review",       description: "Compare the finished image with your original photo to check garment color, stitching, and logo placement." },
        { number: "02", icon: Users,        title: "Consistent Models",      description: "Use the same AI model across your entire collection for consistency." },
        { number: "03", icon: Lightbulb,    title: "Professional Lighting",  description: "Studio-quality lighting setups for premium fashion presentation." },
        { number: "04", icon: Rocket,       title: "Fast Turnaround",        description: "Get your images delivered quickly and launch your products faster." },
        { number: "05", icon: Coins,        title: "Product Photo Input",         description: "Start with a flat lay, mannequin photo, or product shot of the garment you want shown on a model." },
        { number: "06", icon: MonitorCheck, title: "High Resolution",        description: "High-resolution images perfect for web, print, and advertising." },
      ],
    },
    ctaBanner: {
      image: "/images/plum-ai-model-banner.webp",
      imageAlt: "AI model reclining in a plum scalloped top and matching leggings",
      title: "See your clothing on an AI model.",
      text: "Send a product photo and tell us which details you want to highlight in your catalog.",
      waText: "Hi, I'd like to start a studio product photography project.",
    },
    faqTitle: "AI clothing photography FAQs",
    faqs: [
      { q: "What is AI fashion photography for clothing brands?", a: "SetlesStudio uses your garment photo as a reference to create images of an AI model wearing that item. You choose the studio look and poses for your product pages, catalog, or campaign." },
      { q: "What product photos should I send?", a: "Start with a well-lit flat lay, mannequin photo, or clear product shot. Include a back view if you need the back shown and close-ups of details such as embroidery, prints, or logos." },
      { q: "What does a finished on-model apparel image look like?", a: "The plum outfit above starts with a product photo of the top and matching leggings. The full-length studio shot shows both pieces on an AI model. The closer view shows the scalloped neckline across one shoulder." },
      { q: "Can my collection use the same AI model and studio background?", a: "Yes. Specify the model, background, lighting, and views you want to repeat across the collection. A consistent setup helps shoppers compare garments and colorways." },
      { q: "How do you check that the finished image matches my garment?", a: "We compare the finished image with your reference photo for color, stitching, print placement, and visible details. If an important feature is hidden in the reference, send another angle so we can check it." },
      { q: "Can I use the images on Shopify product pages and in clothing catalogs?", a: "Yes. Tell us where the images will appear and which crops you need. A full-length view can show the silhouette in a catalog, while a closer crop can show a neckline or fabric detail on a product page." },
    ],
  },

  "lifestyle-realistic-ai-photography": {
    meta: {
      title: "AI Lifestyle Fashion Photography | SetlesStudio",
      description: "Turn clothing product photos into AI lifestyle fashion photography. Explore on model images for ecommerce, lookbooks and social media with SetlesStudio.",
    },
    hero: {
      eyebrow: "AI Lifestyle Photography",
      titlePrefix: "AI Lifestyle Fashion Photography",
      titleHighlight: "for Clothing Brands",
      subtitle: "SetlesStudio turns your clothing product photographs into lifestyle images for ecommerce, lookbooks and social media, using your garments and creative references to guide the result.",
      image: "/images/lifestyle-service-banner.jpg",
      imageAlt: "Realistic AI lifestyle fashion photography on model in city",
      waText: "Hi, I'd like to start a lifestyle photography project.",
      primaryLabel: "Get a Photoshoot Quote",
      secondary: { href: "/portfolio", label: "View Our Portfolio" },
    },
    beforeAfter: {
      heading: "From Product Photograph to Lifestyle Scene",
      introduction: "Compare the original clothing photograph with the finished AI-generated images. Look at how the garment is represented, how the model is styled and how the setting supports the collection.",
      beforeLabel: "Original Clothing Photograph",
      afterLabel: "AI Generated Lifestyle Image",
      portfolioLabel: "Explore Our Fashion Portfolio",
      before: "/images/lifestyle-before-rose-dress-product.png",
      beforeCaption: "Send a flat lay showing the red dress and its rose texture.",
      afterCaption: "SetlesStudio places the dress on an AI model for a front view on a city street.",
      after2Caption: "A side view shows how the textured skirt looks from another angle.",
      beforeAlt: "Flat lay product photo of red rose dress before AI processing",
      after: "/images/lifestyle-red-dress-nyc-1-service.jpg",
      afterAlt: "AI lifestyle photo — red rose dress on model in NYC street",
      after2: "/images/lifestyle-red-dress-nyc-2.jpg",
      after2Alt: "AI lifestyle photo — red rose dress on model in NYC street second look",
    },
    description: {
      titleHighlight: "Turn Your Clothing Photos",
      titleSuffix: "into Lifestyle Images",
      paragraphs: [
        "Starting with flat lays, mannequin photographs or existing on model images, SetlesStudio creates AI fashion photography around your collection’s style. Share your preferred model appearance, location, poses and lighting to guide the creative direction.",
        "Your original photographs provide the reference for garment shape, colors, fabric texture, prints and logo placement. Clear images from multiple angles help us represent these details more accurately.",
        "Use the finished imagery alongside your product photographs on ecommerce pages, in seasonal lookbooks, across website banners or in social media campaigns."
],
    },
    features: {
      heading: "What You Can Customize",
      subheading: "AI Lifestyle Fashion Photography",
      items: [
        { number: "01", icon: Users, title: "Model Appearance and Styling", description: "Share references for the model’s appearance, hairstyle, pose and styling. These choices help shape images that suit your collection and intended audience." },
        { number: "02", icon: Package, title: "Garment Details", description: "Provide clear photographs of colors, prints, fastenings, logos and fabric textures. Your references guide how the clothing is represented in each image." },
        { number: "03", icon: MapPin, title: "Lifestyle Locations", description: "Choose a creative direction built around streets, cafés, beaches, gardens or interiors. Location references help communicate the atmosphere you want." },
        { number: "04", icon: Zap, title: "Lighting and Mood", description: "Guide the look with references for soft daylight, warm interiors or a more dramatic editorial style. Coordinated lighting helps connect images across a collection." },
        { number: "05", icon: Camera, title: "Image Dimensions and Crops", description: "Tell us where the images will appear. We can discuss compositions and formats for product listings, website banners, lookbooks, social posts and digital advertising." },
        { number: "06", icon: TrendingUp, title: "Collection Consistency", description: "Use shared model references, styling and backgrounds across multiple garments to support a cohesive visual identity." },
      ],
    },
    details: [
      {
            "title": "What to Send for Your Photoshoot",
            "intro": "To help us assess your collection and prepare a quote, share:",
            "items": [
                  "Clear front-and-back photographs of each garment.",
                  "Close-ups of prints, logos, embroidery and distinctive fabric details.",
                  "The number of products and images you need.",
                  "Model, pose and background references.",
                  "Your intended image placements and required dimensions.",
                  "Your preferred delivery date."
            ],
            "paragraphs": [
                  "If your available photographs are incomplete, send what you have so we can review whether additional references are needed."
            ]
      },
      {
            "title": "A Note on Product Accuracy",
            "paragraphs": [
                  "AI generated fashion images can closely represent clothing, but exact reproduction is not guaranteed. Fine lettering, intricate patterns, sheer fabrics and complex layering can be challenging.",
                  "Use detailed product references and compare the finished images with the actual garment before publishing. Lifestyle imagery works best alongside clear product and detail photographs that help customers understand what they are buying."
            ]
      }
],
    ctaBanner: {
      image: "/images/lifestyle-service-cta-banner.jpg",
      imageAlt: "Lifestyle fashion AI photography CTA",
      title: "Discuss Your Next Clothing Collection",
      text: "Share your product photographs and the look you want to create. We’ll review the garments and discuss suitable models, settings, image requirements and project scope.",
      waText: "Hi, I'd like to start a lifestyle photography project.",
      buttonLabel: "Get a Quote for Your Collection",
    },
    faqTitle: "AI Lifestyle Fashion Photography FAQs",
    faqs: [
      {
            "q": "What is AI lifestyle fashion photography?",
            "a": "AI lifestyle fashion photography creates images of clothing on AI generated models in styled environments, such as streets, cafés and interiors. At SetlesStudio, your product photographs guide the garment’s appearance, while creative references guide the model, lighting and setting."
      },
      {
            "q": "Can you create AI model photos from flat lay clothing images?",
            "a": "Yes. Flat lays, mannequin photographs, ghost mannequin images and existing on model photographs can serve as starting references. Send clear views of the complete garment so we can assess its construction and visible details before confirming the project."
      },
      {
            "q": "What photographs should I provide?",
            "a": "Provide well lit front and back photographs, plus close ups of logos, prints, embroidery, buttons and textures. Avoid filters that alter colors. Additional angles are useful for garments with unusual cuts, layered construction or details hidden in the main photographs."
      },
      {
            "q": "Will the images preserve my clothing’s colors, prints and logos?",
            "a": "Your references guide these details, but exact reproduction is not guaranteed. Results depend on garment complexity and reference quality. Fine text, detailed embroidery and intricate patterns may need additional refinement. Compare finished images with the product before using them in listings."
      },
      {
            "q": "Can you use the same AI model across my collection?",
            "a": "Yes. We can work with a shared model reference across multiple products. Agreeing on the model’s appearance, hairstyle, styling and lighting at the start helps maintain consistency, although some visual variation can occur between AI generated images."
      },
      {
            "q": "Can I choose the background and poses?",
            "a": "Yes. Share examples of your preferred locations, poses, lighting and styling. These references help us understand your direction and plan imagery that complements your clothing and brand."
      },
      {
            "q": "Are the images suitable for Shopify and ecommerce websites?",
            "a": "Yes. We can prepare images using your agreed dimensions and crops for Shopify and other ecommerce websites. Use lifestyle imagery alongside product and detail photographs, and check the finished garment representation before publishing."
      },
      {
            "q": "Can you create fashion lookbooks and social media images?",
            "a": "Yes. We can create coordinated imagery for collection launches, fashion lookbooks, website banners and social media. Share the intended placements before production so we can discuss suitable framing and aspect ratios."
      },
      {
            "q": "What is the difference between studio and lifestyle fashion photography?",
            "a": "Studio fashion photography typically uses a clean or controlled background to focus attention on the garment. Lifestyle fashion photography adds a styled environment and mood, helping show the collection in a context suited to the brand."
      },
      {
            "q": "What types of clothing can you work with?",
            "a": "We work with dresses, shirts, T shirts, streetwear, activewear, sportswear, modest fashion and other apparel categories. Send examples for assessment, particularly if your garments include sheer materials, complex layering or intricate embellishments."
      },
      {
            "q": "How much does an AI lifestyle photoshoot cost?",
            "a": "Pricing depends on the number of garments, images per garment, model variations, backgrounds and product complexity. Send your photographs, image requirements and creative references to request a quote based on your project."
      },
      {
            "q": "How long will my project take?",
            "a": "Turnaround depends on collection size, garment complexity, creative requirements and the review process. Include your preferred deadline when requesting a quote so we can assess the scope and confirm the schedule before production begins."
      }
],
  },

  "luxury-fashion-ai-campaign": {
    meta: {
      title: "AI Fashion Campaign Photography | SetlesStudio",
      description: "Create editorial-style AI fashion campaign imagery for collection launches, lookbooks, and advertising, with creative direction tailored to your brand.",
    },
    hero: {
      eyebrow: "AI Fashion Campaign",
      titlePrefix: "AI Fashion",
      titleHighlight: "Campaign Photography",
      subtitle: "Create a coordinated set of editorial images for your collection launch, lookbook, or campaign.",
      image: "https://res.cloudinary.com/dlfb8yn1x/image/upload/q_auto/f_auto/v1782022435/blog-page-banner-picture_thkuwm.jpg",
      mobileImage: "https://res.cloudinary.com/dlfb8yn1x/image/upload/q_auto/f_auto/v1782022435/blog-page-banner-picture-mobile_aatqie.jpg",
      imageAlt: "Luxury fashion AI campaign editorial photography",
      waText: "Hi, I'd like to discuss a luxury fashion campaign project.",
      primaryLabel: "Get a Campaign Quote",
      secondary: { href: "/portfolio", label: "View Portfolio" },
    },
    beforeAfter: {
      before: "/images/campaign-desert-knit-dress-product.jpg",
      beforeCaption: "Send a product photo that shows the halter neckline and length of the dress.",
      afterCaption: "SetlesStudio styles the dress on a seated AI model against desert rocks.",
      after2Caption: "A standing pose shows the full silhouette in the same desert setting.",
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
      title: "AI Footwear Product Photography for Ecommerce Brands | SetlesStudio",
      description: "Get realistic AI footwear product photography for ecommerce brands. Create premium shoe images, on-foot model shots, studio packshots and lifestyle campaigns without traditional photoshoots.",
    },
    hero: {
      eyebrow: "AI FOOTWEAR PRODUCT PHOTOGRAPHY",
      titlePrefix: "AI Footwear Product Photography",
      titleHighlight: "for Ecommerce Brands",
      subtitle: "Turn your product photos into realistic shoe images, on-foot model shots, studio packshots, and lifestyle campaigns for your footwear brand.",
      image: "/images/footwear-ai-photography-service-banner.jpg",
      mobileImage: "/images/footwear-ai-photography-service-banner-mobile.jpg",
      imageAlt: "AI model wearing black pointed pumps beside wood paneling",
      waText: "Hi, I'd like to start a footwear photography project.",
      primaryLabel: "Start My Footwear Project",
      secondary: { href: "/portfolio", label: "View Footwear Examples" },
    },
    beforeAfter: {
      before: "/images/heels-product.jpg",
      beforeCaption: "Send a clear product photo showing your shoes, including their shape, color, and visible details.",
      afterCaption: "SetlesStudio creates an on-foot image of the black pumps on a seated AI model.",
      after2Caption: "A second pose shows the pointed toe and red heel in the same lifestyle setting.",
      beforeAlt: "Top view of black pointed pumps with red lining on a white background",
      after: "/images/heels-image-model.jpeg",
      afterAlt: "Seated AI model wearing black pointed pumps on stone steps",
      after2: "/images/heels-image-model-1.jpg",
      after2Alt: "AI model crossing her legs to show black pumps with red heels",
    },
    description: {
      titleHighlight: "AI Footwear Photography",
      titleSuffix: "for Ecommerce Brands",
      paragraphs: [
        "Whether you are launching a new footwear collection or updating an existing online store, SetlesStudio helps you create consistent product imagery for your digital platforms.",
        <>Our footwear visuals can be prepared for Shopify, WooCommerce, Amazon, Etsy, ecommerce product pages, digital catalogs, and social media advertising. From clean studio product images to <Link href="/services/lifestyle-realistic-ai-photography">AI lifestyle photography</Link>, we help footwear brands build a consistent visual identity across their marketing channels. Explore our <Link href="/pricing">AI photography pricing</Link> for your next project.</>,
      ],
    },
    features: {
      heading: "Why Choose SetlesStudio for AI Footwear Photography?",
      subheading: "Product images, on-foot model shots, and lifestyle visuals",
      items: [
        { number: "01", icon: Camera, title: "Realistic On-Foot Images", description: "Show your shoes on AI models in poses and settings suited to your collection." },
        { number: "02", icon: Aperture, title: "Clear Lighting & Angles", description: "Choose views that highlight the shoe shape, materials, sole, and stitching." },
        { number: "03", icon: Tag, title: "Consistent Branding & Style", description: "Keep backgrounds, lighting, and styling consistent across your footwear range." },
        { number: "04", icon: Infinity, title: "Footwear Detail Review", description: "Compare final images with your references for logos, colors, materials, and sole shape." },
        { number: "05", icon: ShoppingCart, title: "Prepared for Ecommerce", description: "Request image sizes and crops for product pages, catalogs, and marketplace placements." },
        { number: "06", icon: TrendingUp, title: "Campaign-Ready Visuals", description: "Create coordinated shoe imagery for collection launches, social content, and advertising." },
      ],
    },
    ctaBanner: {
      image: "/images/footwear-cta-image.jpg",
      imageAlt: "AI footwear photography campaign example",
      title: "Ready to Showcase Your Footwear Professionally?",
      text: "Send your shoe product photos and tell us which studio, on-foot, or lifestyle images you need.",
      waText: "Hi, I'd like to start a footwear photography project.",
    },
    faqTitle: "AI Footwear Product Photography FAQs",
    faqs: [
      { q: "What is AI footwear product photography?", a: "AI footwear product photography uses artificial intelligence and professional editing techniques to create realistic shoe product images, studio packshots, on-foot model photography, and lifestyle visuals from existing product references." },
      { q: "Can you create AI shoe photography from existing product images?", a: "Yes. We can use your existing footwear product photos, catalog images, and design references to create new studio, lifestyle, and on-foot product visuals." },
      { q: "Can you create realistic AI footwear images with models?", a: "Yes. We create realistic footwear photography featuring custom AI-generated models wearing your shoes in different poses, outfits, and environments." },
      { q: "Do you offer AI sneaker and sports shoe photography?", a: "Yes. We create product and lifestyle photography for sneakers, trainers, running shoes, athletic footwear, boots, sandals, heels, and other footwear collections." },
      { q: "Can you preserve original shoe logos, colors, and details?", a: "We carefully work to maintain the original footwear design, including logos, stitching, materials, colors, sole shapes, and other important product details. Final images are checked against the supplied references." },
      { q: "Are AI footwear images suitable for Shopify and ecommerce websites?", a: "Yes. We create footwear product imagery for Shopify, WooCommerce, ecommerce websites, online catalogs, and marketing campaigns. Marketplace requirements should be checked for each image placement." },
      { q: "How much does AI footwear photography cost?", a: "Pricing depends on the number of footwear designs, image variations, model requirements, and creative direction. Contact SetlesStudio for a customized project quote." },
    ],
  },

  "realistic-ai-video-ads-ugc": {
    meta: {
      title: "AI Fashion Video Ads & UGC-Style Content | SetlesStudio",
      description: "Turn fashion product photos into AI video ads and UGC-style content for social campaigns. Discuss your creative brief, formats, and delivery needs.",
    },
    hero: {
      eyebrow: "AI Video Ads & UGC",
      titlePrefix: "AI Video Ads",
      titleHighlight: "for Fashion Brands",
      subtitle: "Turn product photos into short social ads, product demonstrations, and UGC-style videos.",
      imageAlt: "AI video ads and UGC content creation",
      video: "https://res.cloudinary.com/dlfb8yn1x/video/upload/q_auto/v1782991084/video-ad_bvo5xc.mp4",
      waText: "Hi, I'd like to discuss an AI video ads project.",
      primaryLabel: "Create My Video Ad",
      secondary: { href: "/pricing", label: "See Our Pricing" },
    },
    beforeAfter: {
      before: "/images/female-shirt-trousers-image.webp",
      beforeCaption: "Send a flat lay of the navy shirt and matching trousers together.",
      afterCaption: "SetlesStudio turns the outfit reference into a video ad showing the look in motion.",
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
      title: "AI Handbag Photography for Ecommerce | SetlesStudio",
      description: "Create AI handbag imagery for product pages, lifestyle campaigns, and social content, with attention to materials, hardware, color, and brand style.",
    },
    hero: {
      eyebrow: "Handbag AI Photography",
      titlePrefix: "AI Handbag Photography",
      titleHighlight: "for Ecommerce Brands",
      subtitle: "Show a bag’s shape, hardware, and materials in studio images and styled lifestyle scenes.",
      image: "/images/handbag-service-banner.jpg",
      mobileImage: "/images/handbag-service-banner-mobile.jpg",
      imageAlt: "Women's handbag realistic AI photography on model",
      waText: "Hi, I'd like to start a handbag and accessories photography project.",
      primaryLabel: "Start My Handbag Shoot",
      secondary: { href: "/portfolio", label: "View Portfolio" },
    },
    beforeAfter: {
      before: "/images/bag-image-product.png",
      beforeCaption: "Send a front-facing product photo showing the brown tote and both handles.",
      afterCaption: "SetlesStudio styles the tote with an AI model beside an arched doorway.",
      after2Caption: "A second shot places the tote beside a seated model on a terrace.",
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

  const canonicalUrl = `https://www.setlesstudio.com/services/${params.slug}`;
  const bannerImage = svc.hero.image
    ? svc.hero.image.startsWith("http")
      ? svc.hero.image
      : `https://www.setlesstudio.com${svc.hero.image}`
    : "https://www.setlesstudio.com/images/portfolio-page-banner.jpeg";

  return {
    title: svc.meta.title,
    description: svc.meta.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: svc.meta.title,
      description: svc.meta.description,
      url: canonicalUrl,
      siteName: "SetlesStudio",
      images: [
        {
          url: bannerImage,
          width: 1200,
          height: 630,
          alt: svc.hero.imageAlt || svc.meta.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: svc.meta.title,
      description: svc.meta.description,
      site: "@SetlesStudio",
      creator: "@SetlesStudio",
      images: [bannerImage],
    },
  };
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
  const lightStudio = params.slug === "realistic-ai-studio-photography";
  const hasBeforeAfter = Boolean(svc.beforeAfter.before && (svc.beforeAfter.after || svc.beforeAfter.afterVideo));

  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: svc.hero.eyebrow,
        description: svc.meta.description,
        url: `${site.url}/services/${params.slug}`,
        provider: { "@id": `${site.url}/#organization` },
      }} />
      <StructuredData data={breadcrumbData([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: svc.hero.eyebrow, path: `/services/${params.slug}` },
      ])} />
      <PageHero
        lightStudio={lightStudio}
        eyebrow={svc.hero.eyebrow}
        title={lightStudio ? <><span className="block md:inline">{svc.hero.titlePrefix}</span>{" "}<span className="block text-brand md:inline">{svc.hero.titleHighlight}</span></> : <>{svc.hero.titlePrefix} <span className="text-brand">{svc.hero.titleHighlight}</span></>}
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
          className={lightStudio ? "btn-outline" : "rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"}
        >
          {svc.hero.secondary.label}
        </a>
      </PageHero>

      {hasBeforeAfter && <ServiceBeforeAfter lightStudio={lightStudio} {...svc.beforeAfter} />}
      
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

      {svc.details?.map((section) => (
        <section key={section.title} className="container-site py-8">
          <Reveal>
            <div className="rounded-4xl bg-cream px-10 py-12 sm:px-16 sm:py-14">
              <h2 className="font-display text-3xl font-bold text-brand sm:text-4xl">{section.title}</h2>
              {section.intro && <p className="mt-5 leading-relaxed text-ink-soft">{section.intro}</p>}
              {section.items && <ul className="mt-4 list-disc space-y-2 pl-6 text-ink-soft">{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
              {section.paragraphs.map(paragraph => <p key={paragraph} className="mt-4 leading-relaxed text-ink-soft">{paragraph}</p>)}
            </div>
          </Reveal>
        </section>
      ))}

      <CTABand
        lightStudio={lightStudio}
        title={svc.ctaBanner.title}
        text={svc.ctaBanner.text}
        image={svc.ctaBanner.image}
        imageAlt={svc.ctaBanner.imageAlt}
        primary={{ href: waCtaHref, label: svc.ctaBanner.buttonLabel ?? "Get Started Today" }}
      />

      <section id="faq" className="scroll-mt-24 bg-cream py-14 rounded-3xl">
              <div className="container-site">
                <SectionHeading eyebrow="FAQ" title={svc.faqTitle ?? "Frequently Asked questions"} />
                <div className="mt-12">
                  <FAQ faqs={svc.faqs}/>
                </div>
              </div>
      </section>
    </>
  );
}
