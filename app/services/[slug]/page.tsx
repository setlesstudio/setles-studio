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
import FashionAds from "@/components/FashionAds";
import PageHero from "@/components/PageHero";
import ServiceBeforeAfter from "@/components/ServiceBeforeAfter";
import ServiceFeatures, { type FeatureItem } from "@/components/ServiceFeatures";
import ServiceProcess, { type ProcessStep } from "@/components/ServiceProcess";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";
import FAQ from "@/components/FAQ";
import SectionHeading from "@/components/SectionHeading";
import ImageSlot from "@/components/ImageSlot";

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
      title: "AI Fashion Photography for US Clothing Brands | SetlesStudio",
      description: "Professional AI fashion photography for US clothing brands. Turn garment photos into realistic model images for ecommerce pages, catalogs and campaigns.",
    },
    hero: {
      eyebrow: "AI CLOTHING PHOTOGRAPHY SERVICES",
      titlePrefix: "AI Fashion Photography",
      titleHighlight: "for Clothing Brands",
      subtitle: "Professional AI fashion photography for clothing brands across the United States and worldwide. We create realistic model images from your garment photos for ecommerce product pages, catalogs and campaigns.",
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
      afterCaption: "SetlesStudio shows the plum set on an AI model in a full length studio shot.",
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
  "SetlesStudio provides AI fashion photography services for clothing and apparel brands. Our team uses your flat lay, mannequin and product photos to create realistic model images for ecommerce product pages, catalogs and fashion campaigns.",
  "We work remotely with clothing brands across the United States and worldwide. Share clear garment references and your creative brief so we can plan model styling, studio direction and image requirements around your collection."
],
    },
    features: {
      heading: "AI Fashion Photography Services for Clothing Brands",
      subheading: "Studio and model imagery planned around your apparel collection",
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
      title: "Create Professional Fashion Images for Your Clothing Brand",
      text: "Share your garment photos and creative brief. Our team will review the references and discuss a suitable studio photography plan for your collection.",
      waText: "Hi, I'd like to start a studio product photography project.",
    },
    faqTitle: "AI Fashion Photography FAQs for Clothing Brands",
    faqs: [
  {
    "q": "What AI fashion photography services does SetlesStudio provide for clothing brands?",
    "a": "SetlesStudio is a professional AI fashion photography service provider. Our team creates realistic model images from your garment photos for ecommerce product pages, catalogs, lookbooks and advertising campaigns."
  },
  {
    "q": "Do you provide AI fashion photography for clothing brands in the United States?",
    "a": "Yes. We work remotely with clothing and apparel brands across the United States and worldwide. Share your product photos, brand references and creative brief online to discuss your project."
  },
  {
    "q": "Can you create AI model images from flat lay or mannequin photos?",
    "a": "Yes. Clear flat lay, mannequin and existing model photographs can be used as references. Front, back and close up views help us understand the garment shape, construction and details."
  },
  {
    "q": "How do you review garment colours, fabric and logos?",
    "a": "We compare the created images with the product references you provide, paying attention to visible colours, fabric texture, print, stitching and logo placement. Exact reproduction is not guaranteed, so detailed references and your final review are important."
  },
  {
    "q": "Can you keep the same model and studio style across a clothing collection?",
    "a": "Yes. We can plan a consistent model reference, background, lighting and styling across a collection. Some variation can occur between AI images, so we review the set together for visual consistency."
  },
  {
    "q": "What should I send to start a clothing photography project?",
    "a": "Send clear front and back garment photos, close ups of prints or embroidery, logos or artwork files, your image quantity, preferred model direction and where you plan to use the images."
  },
  {
    "q": "How much does AI fashion photography for clothing brands cost?",
    "a": "Pricing depends on the number of products and final images, model requirements, styling, backgrounds and review scope. Share your brief to receive a quote with the proposed deliverables and schedule."
  }
],
  },

  "lifestyle-realistic-ai-photography": {
    meta: {
      title: "AI Lifestyle Photography for US Fashion Brands | SetlesStudio",
      description: "Remote AI lifestyle photography for US fashion brands. Create model images for ecommerce, lookbooks, social media and clothing campaigns.",
    },
    hero: {
      eyebrow: "AI LIFESTYLE PHOTOGRAPHY SERVICES",
      titlePrefix: "AI Lifestyle Photography",
      titleHighlight: "for Fashion Brands",
      subtitle: "Professional AI lifestyle photography for fashion brands across the United States and worldwide. We create model images in selected settings from your original clothing photos and creative references.",
      image: "/images/pink-outfit-lifestyle-banner.webp",
      mobileImage: "/images/pink-outfit-seated-model.webp",
      imageAlt: "AI model in a pink hoodie and trousers seated in a brown armchair",
      waText: "Hi, I'd like to start a lifestyle photography project.",
      primaryLabel: "Get a Photoshoot Quote",
      secondary: { href: "/portfolio", label: "View Our Portfolio" },
    },
    beforeAfter: {
      heading: "From Product Photograph to Lifestyle Scene",
      introduction: "Compare the original clothing photograph with the finished AI generated images. Look at how the garment is represented, how the model is styled and how the setting supports the collection.",
      beforeLabel: "Original Clothing Photograph",
      afterLabel: "AI Generated Lifestyle Image",
      portfolioLabel: "Explore Our Fashion Portfolio",
      before: "/images/pink-outfit-product.webp",
      beforeCaption: "Original product photograph of the pink cropped hoodie, matching top and trousers.",
      afterCaption: "SetlesStudio shows the pink outfit on an AI model standing beside a brown armchair.",
      after2Caption: "A second lifestyle image shows the AI model seated in the same outfit with white sneakers.",
      beforeAlt: "Pink cropped hoodie, matching top and wide-leg trousers on a white background",
      after: "/images/pink-outfit-standing-model.webp",
      afterAlt: "AI model in a pink outfit leaning against a brown armchair",
      after2: "/images/pink-outfit-seated-model.webp",
      after2Alt: "AI model wearing a pink outfit and white sneakers in an armchair",
    },
    description: {
      titleHighlight: "AI Lifestyle Photography",
      titleSuffix: "for Fashion Brands",
      paragraphs: [
  "SetlesStudio provides AI lifestyle photography services for fashion brands, creating model images in selected indoor and outdoor settings from your original clothing photos and creative references.",
  "We work remotely with fashion brands across the United States and worldwide. Share your preferred locations, model direction, poses and intended image placements so our team can plan a cohesive set for ecommerce, lookbooks and social campaigns."
],
    },
    features: {
      heading: "Lifestyle Photography for Fashion Brands",
      subheading: "Model styling, settings and visual direction built around your collection",
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
      image: "/images/pink-outfit-lifestyle-cta.webp",
      imageAlt: "Seated AI model wearing a pink sleeveless top and matching trousers",
      title: "Plan Lifestyle Photography for Your Next Collection",
      text: "Share your clothing photos and preferred creative direction. We will review your references and discuss suitable models, settings and image requirements.",
      waText: "Hi, I'd like to start a lifestyle photography project.",
      buttonLabel: "Get a Quote for Your Collection",
    },
    faqTitle: "AI Lifestyle Photography FAQs",
    faqs: [
  {
    "q": "What does an AI lifestyle photography service include?",
    "a": "SetlesStudio creates fashion model images in selected lifestyle settings using your product photos and creative references. The project can include model styling, poses, backgrounds and coordinated images for ecommerce, lookbooks and social campaigns."
  },
  {
    "q": "Do you work with US fashion brands remotely?",
    "a": "Yes. We provide remote AI lifestyle photography services to fashion brands across the United States and worldwide. Product photos and creative briefs can be shared online."
  },
  {
    "q": "Can you create lifestyle images from flat lay clothing photos?",
    "a": "Yes. Flat lay, mannequin and existing model photographs can guide the garment appearance. Clear front, back and detail views help us assess the product before planning the lifestyle scene."
  },
  {
    "q": "Can I choose the model, location, pose and lighting?",
    "a": "Yes. Share model references and examples of the locations, poses, lighting and mood you prefer. Our team uses the brief to plan a visual direction that suits your clothing and brand."
  },
  {
    "q": "How do you keep clothing details consistent in lifestyle images?",
    "a": "We use your product photos and detail references to guide garment shape, colour, prints, fabric texture and logos. Fine details may vary in AI images, so we review the results against your references before delivery."
  },
  {
    "q": "Can I use lifestyle images for Shopify, lookbooks and social media?",
    "a": "Yes. We can plan image crops and formats for ecommerce product pages, website banners, lookbooks, Instagram, TikTok and other marketing placements. Share the intended platforms and dimensions in your brief."
  },
  {
    "q": "How much does an AI lifestyle photography project cost?",
    "a": "Pricing depends on the number of garments and images, model requirements, scene complexity and creative direction. Send your references and preferred image quantity for a project quote."
  }
],
  },

  "luxury-fashion-ai-campaign": {
  "meta": {
    "title": "AI Fashion Campaign Photography for US Apparel Brands | SetlesStudio",
    "description": "Professional AI fashion campaign photography for US apparel brands. Create coordinated model images for launches, lookbooks, ecommerce and advertising."
  },
  "hero": {
    "eyebrow": "AI FASHION CAMPAIGN PHOTOGRAPHY",
    "titlePrefix": "AI Fashion Campaign Photography",
    "titleHighlight": "for Apparel Brands",
    "subtitle": "Professional AI fashion campaign photography for apparel brands across the United States and worldwide. We create coordinated model imagery for collection launches, lookbooks and advertising using your product photos and campaign brief.",
    "image": "/images/ai-fashion-campaign-photography.webp",
    "mobileImage": "/images/ai-fashimodel-photography.webp",
    "imageAlt": "AI model wearing a white halter knit dress seated on a desert rock",
    "waText": "Hi, I'd like a fashion campaign quote.",
    "primaryLabel": "Get a Campaign Quote",
    "secondary": {
      "href": "/portfolio",
      "label": "View Our Portfolio"
    }
  },
  "beforeAfter": {
    "heading": "Turn Apparel Product Photos into Fashion Campaign Images",
    "introduction": "Transform simple clothing product images into professional fashion campaign photography. We use your original product references to create realistic AI fashion models, natural poses and carefully selected campaign backgrounds while focusing on accurate garment colors, fit, fabric textures and design details.",
    "before": "/images/campaign-desert-knit-dress-product.jpg",
    "beforeCaption": "Original product photograph of the white halter knit dress with black trim.",
    "beforeAlt": "White halter knit dress with black trim shown as a product reference",
    "after": "/images/ai-fashimodel-photography.webp",
    "afterAlt": "AI model wearing a white halter knit maxi dress and sunglasses in the desert",
    "afterCaption": "SetlesStudio presents the white knit dress on an AI model in a desert campaign scene.",
    "after2": "/images/ai-apparel-lifestyle-campaign.webp",
    "after2Alt": "AI model in a white knit dress posing beside a rock in the desert",
    "after2Caption": "A second campaign pose shows the dress from the side beside a desert rock."
  },
  "description": {
    "titleHighlight": "AI Fashion Campaign Photography",
    "titleSuffix": "for Apparel Brands",
    "paragraphs": [
  "SetlesStudio creates AI fashion campaign photography for apparel brands, including model imagery, editorial scenes and coordinated visuals for collection launches, lookbooks and advertising.",
  "Our team works remotely with clothing brands across the United States and worldwide. Share your product references, brand guidelines and campaign brief so we can plan the visual direction, image list and deliverables."
]
  },
  "features": {
    "heading": "AI Fashion Campaign Photography Services",
    "subheading": "Coordinated campaign visuals for apparel collections and launches",
    "items": [
      {
        "number": "01",
        "icon": Users,
        "title": "Realistic Fashion Models",
        "description": "Create natural-looking AI fashion models with realistic skin textures, expressions and professional poses."
      },
      {
        "number": "02",
        "icon": Package,
        "title": "Accurate Clothing Details",
        "description": "Focus on original garment colors, fabric textures, patterns, stitching, logos and clothing proportions."
      },
      {
        "number": "03",
        "icon": MapPin,
        "title": "Creative Campaign Backgrounds",
        "description": "Showcase apparel in studio settings, lifestyle locations, outdoor environments and editorial-inspired scenes."
      },
      {
        "number": "04",
        "icon": Layers,
        "title": "Consistent Campaign Visuals",
        "description": "Maintain coordinated styling, model appearance and visual direction across your collection."
      },
      {
        "number": "05",
        "icon": Zap,
        "title": "Flexible Content Production",
        "description": "Create campaign images without organizing a traditional photoshoot for every collection."
      },
      {
        "number": "06",
        "icon": TrendingUp,
        "title": "Ready for Marketing",
        "description": "Prepare fashion visuals for ecommerce websites, collection launches, social media and digital advertising."
      }
    ]
  },
  "details": [
    {
      "title": "Our AI Fashion Campaign Services Include:",
      "items": [
        "AI fashion model photography",
        "Apparel lifestyle campaign images",
        "Fashion editorial photography",
        "AI clothing advertising creatives",
        "Fashion lookbook photography",
        "Seasonal collection campaign visuals",
        "Social media fashion campaign images"
      ],
      "paragraphs": [
        "Every project is developed around your brand's creative direction, product references and visual identity."
      ]
    },
    {
      "title": "AI Fashion Campaign Photography for Different Apparel Brands",
      "intro": "We work with:",
      "items": [
        "Clothing and apparel brands",
        "Fashion startups and emerging designers",
        "DTC fashion and ecommerce businesses",
        "Streetwear and casualwear brands",
        "Activewear and sportswear brands",
        "Women's and men's fashion labels",
        "Swimwear and lifestyle apparel brands"
      ],
      "paragraphs": [
        "Our goal is to help apparel businesses present their collections through professional, consistent and engaging campaign imagery."
      ]
    }
  ],
  "ctaBanner": {
    "image": "/images/ai-fashion-editorial-photography.webp",
    "imageAlt": "AI fashion campaign model in a white knit dress against desert mountains",
    "title": "Create Your Next Fashion Campaign with SetlesStudio",
    "text": "Share your product photos, brand guidelines and campaign brief. Our team will review the scope and discuss model styling, creative direction and the images your launch needs.",
    "waText": "Hi, I'd like a fashion campaign quote.",
    "buttonLabel": "Get Your Fashion Campaign Quote"
  },
  "faqTitle": "Frequently Asked Questions About AI Fashion Campaign Photography",
  "faqs": [
  {
    "q": "What is included in AI fashion campaign photography?",
    "a": "A campaign project can include AI model photography, editorial style scenes, collection launch images, lookbook visuals and advertising creatives. The exact image list and creative direction are agreed in the project brief."
  },
  {
    "q": "Do you provide fashion campaign photography for US apparel brands?",
    "a": "Yes. SetlesStudio works remotely with apparel brands across the United States and worldwide. Share your product references, campaign goals and intended platforms to discuss a suitable scope."
  },
  {
    "q": "Can you build a fashion campaign from my existing product photos?",
    "a": "Yes. Clear garment photographs, flat lays and mannequin images can guide the clothing shown in the campaign. Additional angles and detail photos help us review the product design and visible features."
  },
  {
    "q": "What campaign visuals can you create for a clothing collection?",
    "a": "Depending on the brief, we can create model portraits, full outfit scenes, editorial images, lookbook visuals, website banners and social advertising creatives."
  },
  {
    "q": "Can you keep model styling and visual direction consistent across a collection?",
    "a": "Yes. We can plan shared model references, styling, lighting and backgrounds across the campaign. Some variation can occur in AI images, so we review the collection as a set."
  },
  {
    "q": "How do you check garment details in campaign images?",
    "a": "We compare visible garment details with your supplied references, including colours, fabric, prints, stitching and logos. Detailed reference photos help, but exact reproduction is not guaranteed."
  },
  {
    "q": "How is fashion campaign photography priced and scheduled?",
    "a": "Pricing and timing depend on the number of products, final images, scenes, model requirements and review stages. We confirm the project scope, quote and schedule before production begins."
  }
]
},

  "footwear-realistic-ai-photography": {
    meta: {
      title: "AI Footwear Photography for US Ecommerce Brands | SetlesStudio",
      description: "AI footwear photography services for US shoe brands. Create studio, model and lifestyle images for sneakers, heels, boots and ecommerce listings.",
    },
    hero: {
      eyebrow: "AI FOOTWEAR PHOTOGRAPHY SERVICES",
      titlePrefix: "AI Footwear Photography",
      titleHighlight: "for Ecommerce Brands",
      subtitle: "Professional AI footwear photography for shoe brands across the United States and worldwide. We create studio, model and lifestyle images from your original shoe photos for ecommerce listings and campaigns.",
      image: "/images/ai-footwear-photography.webp",
      mobileImage: "/images/ai-footwear-photography.webp",
      imageAlt: "AI model wearing lime-green pointed heels with an orange top and green shorts",
      waText: "Hi, I'd like a free AI footwear photography sample. I can share my product image and preferred reference.",
      primaryLabel: "Get a Free Sample",
      secondary: { href: "/portfolio", label: "View Our Portfolio" },
    },
    beforeAfter: {
      before: "/images/green-heels-product.webp",
      beforeCaption: "Send your original footwear photos, showing the shoe shape, color, materials, and heel details.",
      afterCaption: "SetlesStudio creates an AI model wearing the lime-green heels in a kneeling studio pose.",
      after2Caption: "A seated studio pose presents the same green pointed heels with coordinated styling.",
      beforeAlt: "Front and back views of lime-green pointed-toe stiletto heels on a white background",
      after: "/images/ai-green-heels-kneeling.webp",
      afterAlt: "Kneeling AI model wearing lime-green stiletto heels and an orange cropped top",
      after2: "/images/ai-green-heels-seated.webp",
      after2Alt: "Seated AI model showing lime-green pointed heels with matching shorts",
    },
    description: {
      titleHighlight: "AI Footwear Photography",
      titleSuffix: "for Ecommerce Brands",
      paragraphs: [
  "SetlesStudio provides AI footwear photography services for shoe and ecommerce brands. We create studio, model and lifestyle images from your original shoe photographs, with attention to shape, sole, material, stitching and other visible details.",
  "We work remotely with footwear brands across the United States and worldwide. Share clear views of each shoe and your preferred image style so our team can plan product and campaign visuals for your store."
],
    },
    features: {
      heading: "AI Footwear Photography Services",
      subheading: "Studio, model and lifestyle images for shoe collections",
      items: [
        { number: "01", icon: Camera, title: "Fashion-Focused Expertise", description: "Fashion-focused creative expertise for your footwear collection." },
        { number: "02", icon: Aperture, title: "Realistic Footwear Photography", description: "Realistic AI footwear photography for product, on foot, and lifestyle images." },
        { number: "03", icon: Tag, title: "Original Product Details", description: "Attention to original shoe shape, colors, materials, stitching, and logos." },
        { number: "04", icon: Infinity, title: "Consistent Collection Visuals", description: "Consistent visuals across collections, with coordinated lighting and styling." },
        { number: "05", icon: ShoppingCart, title: "Flexible Creative Direction", description: "Flexible creative direction for ecommerce brands." },
        { number: "06", icon: TrendingUp, title: "Website and Advertising Images", description: "Professional images for websites, product listings, and advertising." },
      ],
    },
    ctaBanner: {
      image: "/images/ai-footwear-studio-banner.webp",
      imageAlt: "AI model sitting on a chair and adjusting lime-green pointed heels in a white studio",
      title: "Get Professional AI Footwear Photography for Your Brand",
      text: "Share your shoe photos and preferred visual references. Our team will review the product details and discuss suitable studio, model or lifestyle images.",
      buttonLabel: "Contact SetlesStudio",
      waText: "Hi, I'd like to start an AI footwear photography project.",
    },
    faqTitle: "AI Footwear Photography FAQs",
    faqs: [
  {
    "q": "What does your AI footwear photography service include?",
    "a": "SetlesStudio creates product focused studio images, AI model photography and lifestyle visuals for footwear brands. The image plan is based on your shoe photos, creative brief and intended use."
  },
  {
    "q": "Do you work with US shoe brands remotely?",
    "a": "Yes. We provide remote AI footwear photography services to shoe and ecommerce brands across the United States and worldwide. You can send product photos and references online."
  },
  {
    "q": "Can you create footwear images from my existing product photos?",
    "a": "Yes. Share clear front, side, back and sole views where possible. These references help us understand the shoe shape, materials and construction before creating the images."
  },
  {
    "q": "How do you preserve shoe shape, colour, material and logo?",
    "a": "We compare the finished visuals with your supplied product photos and close ups. Clear references help us review shape, colour, sole details, stitching and logos, but exact reproduction is not guaranteed."
  },
  {
    "q": "What types of footwear can you photograph?",
    "a": "Projects can include sneakers, running shoes, boots, heels, sandals, flats, formal shoes and other footwear. Send your product examples so we can assess the image requirements."
  },
  {
    "q": "Can footwear images be prepared for ecommerce listings and advertising?",
    "a": "Yes. We can plan image dimensions and compositions for ecommerce product pages, catalogs, website banners and social advertising. Tell us the platforms and file requirements before production."
  },
  {
    "q": "How much does AI footwear photography cost?",
    "a": "Pricing depends on the number of shoe styles and final images, model requirements, scenes and creative complexity. Share your product photos and image list for a project quote."
  }
],
  },

  "realistic-ai-video-ads-ugc": {
    meta: {
      title: "AI Video Ads for US Fashion Brands | SetlesStudio",
      description: "Professional AI video ad production for US fashion and ecommerce brands. Create product videos and UGC style content for TikTok, Instagram and campaigns.",
    },
    hero: {
      eyebrow: "AI VIDEO ADS AND UGC STYLE PRODUCTION",
      titlePrefix: "AI Video Ads",
      titleHighlight: "for Fashion Brands",
      subtitle: "Professional AI video production services for fashion and ecommerce brands across the United States and worldwide. Our team turns product photos and creative briefs into product videos, campaign films and UGC style ads for social media and ecommerce.",
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
      titleHighlight: "AI Video Ads and UGC Style Production",
      titleSuffix: "for Ecommerce Brands",
      paragraphs: [
  "SetlesStudio provides AI video ad production services for fashion, beauty and ecommerce brands. Our team turns product photos and creative briefs into short product videos, campaign films, demonstrations and UGC style advertising content.",
  "We work remotely with brands across the United States and worldwide. Tell us which platforms you plan to use, the video formats you need and the product details that must remain clear."
],
    },
    features: {
      heading: "AI Video Advertising Services for Fashion and Ecommerce",
      subheading: "Product videos, campaign films and UGC style creative",
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
      title: "Plan AI Video Ads for Your Next Product Campaign",
      text: "Share your product images, target platforms and creative brief. We will discuss video formats, scenes, deliverables and the project schedule before production.",
      waText: "Hi, I'd like to discuss an AI video ads project.",
    },
    faqs: [
  {
    "q": "What AI video ad services does SetlesStudio provide?",
    "a": "SetlesStudio provides a professional AI video production service for fashion and ecommerce brands. Our team creates product videos, campaign films, demonstrations and UGC style advertising content from your product references and brief."
  },
  {
    "q": "Do you create AI video ads for US fashion and ecommerce brands?",
    "a": "Yes. We work remotely with fashion, beauty and ecommerce brands across the United States and worldwide. Share your product photos, target platforms and campaign brief online."
  },
  {
    "q": "Can you turn product photos into short video ads?",
    "a": "Yes. Product photos and creative references can be used to plan short videos, product demonstrations and campaign scenes. The brief should identify the product details and movements that matter most."
  },
  {
    "q": "Are UGC style AI videos real customer testimonials?",
    "a": "No. UGC style AI videos are brand produced creative that uses a casual, creator style presentation. They are not genuine customer testimonials or real customer experiences and should not be presented as such."
  },
  {
    "q": "Which platforms and video formats can you prepare?",
    "a": "We can discuss vertical videos for TikTok and Instagram Reels, square social videos and landscape formats for websites or other placements. Share the target platforms and specifications before production."
  },
  {
    "q": "What product details do you need for an AI video project?",
    "a": "Send clear product photos from useful angles, close ups of logos and materials, brand references, the intended message, target platforms and any scenes or actions you want the video to show."
  },
  {
    "q": "How much do AI video ads cost and when are they delivered?",
    "a": "Pricing and timing depend on video length, products, scenes, variations and output formats. We review the brief and confirm the deliverables, quote and schedule before production begins."
  }
],
  },

  "bags-accessories-realistic-ai-photography": {
  "meta": {
    "title": "AI Handbag Photography for US Ecommerce Brands | SetlesStudio",
    "description": "AI handbag photography services for US fashion brands. Create studio, model and lifestyle images for bags, accessories, ecommerce and campaigns."
  },
  "hero": {
    "eyebrow": "AI HANDBAG AND ACCESSORIES PHOTOGRAPHY",
    "titlePrefix": "AI Handbag Photography",
    "titleHighlight": "for Ecommerce Brands",
    "subtitle": "Professional AI handbag photography for fashion and ecommerce brands across the United States and worldwide. We create studio, model and lifestyle images from your product photos, with attention to bag shape, materials, stitching, hardware and logos.",
    "image": "/images/ai-handbag-photography-banner.webp",
    "imageAlt": "AI model carrying a coral tote bag among tropical leaves and red flowers",
    "waText": "Hi, I'd like to request a free sample of AI handbag photography.",
    "primaryLabel": "Get a Free Sample",
    "secondary": {
      "href": "/portfolio",
      "label": "View Portfolio"
    }
  },
  "beforeAfter": {
    "heading": "From Product Photo to AI Handbag Photography",
    "introduction": "An original coral tote product photo transformed into two studio images with an AI model.",
    "before": "/images/coral-tote-product.webp",
    "beforeAlt": "Coral tote bag with two handles and a round silver badge on a white background",
    "beforeCaption": "Original product photo: a coral tote showing its handles, trim, and front badge.",
    "after": "/images/ai-handbag-seated-model.webp",
    "afterAlt": "Seated AI model in a green cardigan with a coral tote bag in front of her",
    "afterCaption": "SetlesStudio result: an AI model seated with the coral tote in a white studio.",
    "after2": "/images/ai-handbag-standing-model.webp",
    "after2Alt": "Standing AI model in a green cardigan carrying a coral tote on her arm",
    "after2Caption": "SetlesStudio result: a standing AI model carrying the tote to show its scale and styling."
  },
  "description": {
    "titleHighlight": "AI Handbag and Accessories Photography",
    "titleSuffix": "for Ecommerce Brands",
    "paragraphs": [
  "SetlesStudio provides AI handbag and accessories photography services for ecommerce and fashion brands. We create studio, model and lifestyle images from your product photos, focusing on bag shape, materials, stitching, hardware, logos and colour.",
  "We work remotely with brands across the United States and worldwide. Share front, back and side views, close ups and your creative brief so we can plan a consistent image set for product pages and campaigns."
]
  },
  "features": {
    "heading": "AI Handbag Photography Services",
    "subheading": "Studio, model and lifestyle images for bags and accessories",
    "items": [
      {
        "number": "01",
        "icon": Camera,
        "title": "Photorealistic Images",
        "description": "Realistic AI handbag images for your collection."
      },
      {
        "number": "02",
        "icon": Package,
        "title": "Product Detail Review",
        "description": "Attention to bag shapes, leather textures, stitching, hardware, and colors."
      },
      {
        "number": "03",
        "icon": Users,
        "title": "Consistent Styling",
        "description": "Consistent models and backgrounds across your images."
      },
      {
        "number": "04",
        "icon": MonitorCheck,
        "title": "High Resolution",
        "description": "Ecommerce-ready images prepared for your requirements."
      },
      {
        "number": "05",
        "icon": Lightbulb,
        "title": "Custom Concepts",
        "description": "Studio, lifestyle, and campaign concepts for your brand."
      },
      {
        "number": "06",
        "icon": Aperture,
        "title": "No Photoshoot Required",
        "description": "Start with your existing handbag product photos."
      }
    ]
  },
  "process": {
    "heading": "Our AI Bag Photography Services",
    "steps": [
      {
        "number": "01",
        "icon": Camera,
        "title": "AI Studio Photography",
        "description": "Clean white, neutral, and luxury studio backgrounds for ecommerce product listings."
      },
      {
        "number": "02",
        "icon": Globe,
        "title": "AI Lifestyle Photography",
        "description": "Realistic handbag photography in cafés, streets, hotels, and premium lifestyle settings."
      },
      {
        "number": "03",
        "icon": Users,
        "title": "AI Model Photography",
        "description": "Natural-looking fashion models holding or wearing your actual handbag designs."
      },
      {
        "number": "04",
        "icon": Gem,
        "title": "Luxury Bag Campaigns",
        "description": "Premium editorial and advertising photography for fashion and accessories brands."
      }
    ]
  },
  "ctaBanner": {
    "image": "/images/ai-handbag-lifestyle-banner.webp",
    "imageAlt": "AI model holding a coral tote bag in a tropical garden",
    "title": "Plan Professional Handbag Photography for Your Brand",
    "text": "Share your handbag photos and creative references. Our team will review the bag details and discuss studio, model and lifestyle images for your collection.",
    "waText": "Hi, I'd like to request a free sample of AI handbag photography.",
    "buttonLabel": "Request a Free Sample"
  },
  "faqTitle": "Frequently Asked Questions",
  "faqs": [
  {
    "q": "What AI handbag photography services does SetlesStudio provide?",
    "a": "SetlesStudio creates professional handbag and accessories images using your product photos and creative brief. Services can include studio product views, model images, lifestyle scenes and campaign visuals."
  },
  {
    "q": "Do you provide handbag photography for US fashion and ecommerce brands?",
    "a": "Yes. We work remotely with fashion and ecommerce brands across the United States and worldwide. You can share handbag photos, brand references and image requirements online."
  },
  {
    "q": "Can you create model and lifestyle images from my handbag photos?",
    "a": "Yes. Clear front, back and side views can guide model images, studio compositions and lifestyle scenes. Include a size reference when scale is important."
  },
  {
    "q": "How do you preserve bag shape, logo, stitching and hardware?",
    "a": "We use your product references and close ups to guide shape, colour, material, logos, stitching, straps and hardware. Fine details can vary in AI images, so we review the results against your original product before delivery."
  },
  {
    "q": "Do I need to ship my handbag to SetlesStudio?",
    "a": "Projects can start with digital product photos and creative references. Send the available images first so we can assess whether they show enough detail or whether additional photographs are needed."
  },
  {
    "q": "Can you create studio and lifestyle images for Shopify?",
    "a": "Yes. We can plan clean product images for ecommerce listings and styled model or lifestyle visuals for banners, social media and campaigns. Share the required dimensions and placements in your brief."
  },
  {
    "q": "How much does AI handbag photography cost?",
    "a": "Pricing depends on the number of bag styles and final images, model requirements, scene complexity and detail review. Share your product photos and image list for a project quote."
  }
]
},


  "ai-beauty-skincare-photography": {
  "meta": {
    "title": "AI Product Photography for US Beauty Brands | SetlesStudio",
    "description": "AI product photography services for US beauty and skincare brands. Create product, model and lifestyle images for cosmetics, skincare and ecommerce campaigns."
  },
  "hero": {
    "eyebrow": "AI BEAUTY AND SKINCARE PHOTOGRAPHY",
    "titlePrefix": "AI Product Photography",
    "titleHighlight": "for Beauty and Skincare Brands",
    "subtitle": "Professional AI product photography for beauty and skincare brands across the United States and worldwide. We create product images, model portraits and lifestyle campaigns from your existing product photos and brand references.",
    "image": "/images/ai-skincare-sunscreen-banner.webp",
    "imageAlt": "AI beauty model holding a yellow Solaris sunscreen tube among tropical palm leaves",
    "waText": "Hi, I'd like a quote for AI product photography for my beauty or skincare brand.",
    "primaryLabel": "Get My Skincare Photography Quote",
    "secondary": {
      "href": "/pricing",
      "label": "View Pricing"
    }
  },
  "beforeAfter": {
    "heading": "From Product Reference to Skincare Campaign",
    "introduction": "Explore a sunscreen product reference alongside an AI model presentation. The yellow tube and tropical styling connect the examples across this page.",
    "beforeLabel": "Product reference",
    "afterLabel": "AI model example",
    "portfolioLabel": "View More Photography",
    "before": "/images/skincare-sunscreen-product-reference.webp",
    "beforeAlt": "Yellow Solaris Sun Expert sunscreen tube on a white background",
    "beforeCaption": "Product reference: the yellow tube, front label and cap shown on white.",
    "after": "/images/ai-skincare-sunscreen-model.webp",
    "afterAlt": "AI model in an orange floral dress holding a yellow sunscreen tube beside her face",
    "afterCaption": "Model example: sunscreen presented by an AI model against green palm leaves."
  },
  "description": {
    "titleHighlight": "AI Product Photography",
    "titleSuffix": "for Beauty and Skincare Brands",
    "paragraphs": [
  "SetlesStudio provides AI product photography services for beauty and skincare brands. Our team creates product focused studio images, model portraits and lifestyle campaigns from your existing product photos and brand references.",
  "We work remotely with beauty brands across the United States and worldwide. Share clear packaging views, label artwork and your creative brief so we can plan ecommerce images, product launches and advertising visuals."
]
  },
  "features": {
    "heading": "AI Product Photography for Beauty and Skincare Brands",
    "subheading": "Product images, model portraits and lifestyle campaigns",
    "items": [
      {
        "number": "01",
        "icon": Package,
        "title": "Studio Product Images",
        "description": "Clean compositions that keep bottles, jars, tubes and packaging clearly visible."
      },
      {
        "number": "02",
        "icon": Users,
        "title": "On-Model Photography",
        "description": "Show your product in hand with model styling and poses chosen for your brand."
      },
      {
        "number": "03",
        "icon": Camera,
        "title": "Lifestyle Campaigns",
        "description": "Build a setting around your product, from tropical sun care to floral perfume campaigns and everyday skincare routines."
      },
      {
        "number": "04",
        "icon": Layers,
        "title": "Consistent Collections",
        "description": "Coordinate lighting, backgrounds and colours across your product range."
      },
      {
        "number": "05",
        "icon": Star,
        "title": "Packaging Detail Review",
        "description": "Compare product shape, label placement and visible details with your supplied references."
      },
      {
        "number": "06",
        "icon": MonitorCheck,
        "title": "Formats for Your Store",
        "description": "Plan square, portrait and landscape images for product pages, banners and social placements."
      }
    ]
  },
  "details": [
    {
      "title": "How Your AI Skincare Photoshoot Works",
      "items": [
        "Send your product photos, brand guidelines and intended image placements.",
        "Agree on the model, setting, image count and creative direction.",
        "Review the proposed visuals and check packaging details against your references.",
        "Receive the agreed final images in the sizes and formats planned for your campaign."
      ],
      "paragraphs": [
        "Start with a focused brief for one product or plan a coordinated collection. Your quote confirms the deliverables, revision scope and delivery schedule before work begins."
      ]
    },
    {
      "title": "What to Send for an Accurate Product Brief",
      "items": [
        "Clear front, back and side views of each product.",
        "Close-ups or artwork for labels, logos, caps and applicators.",
        "A size reference and accurate product colours.",
        "Examples of your preferred backgrounds, models and lighting.",
        "Your image count, required dimensions and launch date."
      ],
      "paragraphs": [
        "Fine print, reflective packaging and intricate logos need particular attention. We review these details against your references; your final approval should include a packaging and label check."
      ]
    },
    {
      "title": "Plan Images for Ecommerce, Launches and Ads",
      "paragraphs": [
        "A product page needs clear packaging views. A launch campaign may need model portraits, lifestyle scenes and a wide website banner. Sharing the intended use helps us plan useful compositions from the start.",
        "The sunscreen and perfume examples show how product references can inform coordinated model portraits, packaging close ups and styled campaign scenes. They illustrate creative presentation, rather than measured product performance or skincare results."
      ]
    }
  ],
  "ctaBanner": {
    "image": "",
    "imageAlt": "",
    "title": "Give Your Beauty and Skincare Collection a Consistent Look",
    "text": "Send your product photos, packaging details and the images you need. Our team will review your brief and prepare a quote for your beauty or skincare campaign.",
    "waText": "Hi, I'd like a quote for AI beauty and skincare product photography.",
    "buttonLabel": "Request My Project Quote"
  },
  "faqTitle": "AI Beauty & Skincare Product Photography FAQs",
  "faqs": [
  {
    "q": "What AI product photography services do you provide for beauty and skincare brands?",
    "a": "SetlesStudio creates product focused studio images, AI model portraits and lifestyle campaign visuals for skincare, cosmetics, sunscreen, fragrance and other beauty products."
  },
  {
    "q": "Do you provide AI product photography for US beauty brands remotely?",
    "a": "Yes. We work remotely with beauty and skincare brands across the United States and worldwide. You can share product photos, packaging references and your creative brief online."
  },
  {
    "q": "Which beauty and skincare products can you photograph?",
    "a": "Projects can include serums, moisturisers, cleansers, sunscreen, face creams, cosmetics, fragrance and other packaged beauty products. Send your product range so we can assess the required images."
  },
  {
    "q": "Can you create AI model images holding my beauty product?",
    "a": "Yes. We can create model images showing a product held in hand, beside the face or within a styled setting. Your brief can guide the model direction, pose, product scale and background."
  },
  {
    "q": "How do you keep packaging, labels and logos accurate?",
    "a": "Your reference photos guide the packaging shape, colour, logo and label placement. Small lettering and intricate artwork may need additional refinement. Provide clear label files where available and review the finished images against the actual product."
  },
  {
    "q": "Do I need to ship my skincare products?",
    "a": "Projects can begin with digital product photos and creative references. Send clear front, back and side views first so we can confirm whether more photographs or detail references are needed."
  },
  {
    "q": "Can I use the images on Shopify, ecommerce stores and social ads?",
    "a": "Yes. We can plan images for product pages, website banners, social posts and digital advertising. Share the required dimensions and intended placements before production."
  },
  {
    "q": "How much does AI beauty and skincare product photography cost?",
    "a": "Pricing depends on the number of products and final images, packaging complexity, model requirements and scene direction. Send your product photos and brief for a project quote."
  }
]
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
  const shareImage = params.slug === "bags-accessories-realistic-ai-photography" ? "/images/ai-handbag-studio-chair.webp" : svc.hero.image;
  const bannerImage = shareImage
    ? shareImage.startsWith("http")
      ? shareImage
      : `https://www.setlesstudio.com${shareImage}`
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
          width: params.slug === "ai-beauty-skincare-photography" ? 1600 : params.slug === "bags-accessories-realistic-ai-photography" ? 2752 : 1200,
          height: params.slug === "ai-beauty-skincare-photography" ? 893 : params.slug === "bags-accessories-realistic-ai-photography" ? 1536 : 630,
          alt: params.slug === "bags-accessories-realistic-ai-photography" ? "AI model seated on a chair holding a coral tote bag in a white studio" : svc.hero.imageAlt || svc.meta.title,
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

const beautyGallery = [
  {
    "src": "/images/skincare-sunscreen-product-reference.webp",
    "alt": "Solaris sunscreen tube on a clean white background",
    "caption": "Sunscreen product reference"
  },
  {
    "src": "/images/ai-skincare-sunscreen-model.webp",
    "alt": "AI model in an orange floral dress holding Solaris sunscreen beside her face among palm leaves",
    "caption": "Sunscreen with model"
  },
  {
    "src": "/images/ai-skincare-sunscreen-sunlit.webp",
    "alt": "AI model with orange flower earrings holding a yellow sunscreen tube at her shoulder in sunlight",
    "caption": "Sunlit skincare campaign"
  },
  {
    "src": "/images/ai-skincare-sunscreen-portrait.webp",
    "alt": "AI model holding sunscreen with her face tilted toward the sun against tropical greenery",
    "caption": "Sunscreen lifestyle portrait"
  },
  {
    "src": "/images/beauty-perfume-product-reference.webp",
    "alt": "Aetherea Mystic Amber perfume bottle with a black cap on a white background",
    "caption": "Perfume product reference"
  },
  {
    "src": "/images/ai-beauty-perfume-model-cheek.webp",
    "alt": "AI model in a burgundy coat holding Mystic Amber perfume beside her cheek",
    "caption": "Perfume beauty portrait"
  },
  {
    "src": "/images/ai-beauty-perfume-model-front.webp",
    "alt": "Front-facing AI model holding an amber perfume bottle against a white studio background",
    "caption": "Studio fragrance portrait"
  },
  {
    "src": "/images/ai-perfume-amber-shadow-campaign.webp",
    "alt": "Mystic Amber perfume bottle surrounded by dark botanical shadows on an amber background",
    "caption": "Amber shadow campaign"
  },
  {
    "src": "/images/ai-beauty-perfume-model-studio.webp",
    "alt": "AI model in a burgundy jacket presenting a perfume bottle with both hands",
    "caption": "On-model perfume photography"
  },
  {
    "src": "/images/ai-beauty-perfume-model-profile.webp",
    "alt": "Side profile of an AI beauty model holding Mystic Amber perfume near her face",
    "caption": "Fragrance profile portrait"
  },
  {
    "src": "/images/ai-perfume-lily-product-campaign.webp",
    "alt": "Amber perfume bottle on a pedestal surrounded by white lilies and golden mist",
    "caption": "Floral perfume campaign"
  },
  {
    "src": "/images/ai-perfume-fashion-campaign.webp",
    "alt": "AI model wearing sunglasses behind an oversized perfume bottle in an orange studio set",
    "caption": "Creative fragrance campaign"
  },
  {
    "src": "/images/ai-perfume-bottle-hands-detail.webp",
    "alt": "Hands with burgundy nails holding an amber perfume bottle against a white background",
    "caption": "Perfume packaging detail"
  }
];

export default function ServiceSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const svc = services[params.slug];
  if (!svc) notFound();

  const waCtaHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(svc.ctaBanner.waText)}`;
  const waHeroHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(svc.hero.waText)}`;
  if (params.slug === "realistic-ai-video-ads-ugc") {
    return <>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "Service", name: "AI Fashion Ads and UGC Videos", description: svc.meta.description, url: site.url + "/services/" + params.slug, provider: { "@id": site.url + "/#organization" } }} />
      <StructuredData data={breadcrumbData([{name: "Home", path: "/"}, {name: "Services", path: "/services"}, {name: "AI Fashion Ads and UGC Videos", path: "/services/" + params.slug}])} />
      <FashionAds quote={waHeroHref} send={waCtaHref} />
      <div className="container-site pb-10">
        <p className="leading-relaxed text-ink-soft">
          Planning a campaign? Our{" "}
          <Link href="/blog/ai-video-ads-for-fashion-brands" className="font-medium text-brand underline">
            guide to AI video ads for fashion brands
          </Link>{" "}
          covers production costs, creative testing, and platform disclosure.
        </p>
      </div>
    </>;
  }
  const handbagPhotos = params.slug === "bags-accessories-realistic-ai-photography";
  const footwearPhotos = params.slug === "footwear-realistic-ai-photography";
  const campaignPhotos = params.slug === "luxury-fashion-ai-campaign";
  const lifestylePhotos = params.slug === "lifestyle-realistic-ai-photography";
  const lightStudio = params.slug === "realistic-ai-studio-photography";
  const beautyPhotos = params.slug === "ai-beauty-skincare-photography";
  const hasBeforeAfter = Boolean(svc.beforeAfter.before && (svc.beforeAfter.after || svc.beforeAfter.afterVideo));

  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: svc.hero.eyebrow,
        serviceType: beautyPhotos ? "AI Product Photography for Beauty and Skincare Brands" : svc.hero.eyebrow,
        description: svc.meta.description,
        url: `${site.url}/services/${params.slug}`,
        provider: { "@id": `${site.url}/#organization` },
      }} />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: svc.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }} />
      <StructuredData data={breadcrumbData([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: svc.hero.eyebrow, path: `/services/${params.slug}` },
      ])} />
      <PageHero handbagPhotos={handbagPhotos} footwearPhotos={footwearPhotos} productPhotography={false} preserveImageQuality={footwearPhotos || handbagPhotos}
        campaignPhotos={campaignPhotos || beautyPhotos}
        lifestylePhotos={lifestylePhotos}
        lightStudio={lightStudio}
        eyebrow={svc.hero.eyebrow}
        title={handbagPhotos ? <><span className="block lg:whitespace-nowrap">{svc.hero.titlePrefix}</span><span className="block text-brand lg:whitespace-nowrap">{svc.hero.titleHighlight}</span></> : footwearPhotos ? <><span className="block">{svc.hero.titlePrefix}</span><span className="block text-brand">{svc.hero.titleHighlight}</span></> : lightStudio ? <><span className="block md:inline">{svc.hero.titlePrefix}</span>{" "}<span className="block text-brand md:inline">{svc.hero.titleHighlight}</span></> : <>{svc.hero.titlePrefix} <span className="text-brand">{svc.hero.titleHighlight}</span></>}
        text={handbagPhotos ? <><span className="lg:block">Turn your bag photos into realistic AI images.</span>{" "}<span className="lg:block">Create studio, lifestyle, and model photography.</span>{" "}<span className="lg:block">Made for ecommerce stores and fashion brands.</span></> : svc.hero.subtitle}
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
          className={footwearPhotos ? "btn-outline" : campaignPhotos || handbagPhotos || beautyPhotos ? "rounded-full border border-ink/30 px-6 py-3 text-sm font-semibold text-ink lg:border-white/40 lg:text-white" : lightStudio ? "btn-outline" : "rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"}
        >
          {svc.hero.secondary.label}
        </a>
      </PageHero>

      {beautyPhotos && (
        <section id="beauty-gallery" className="container-site py-10">
          <div>
            <div className="mb-6 max-w-3xl">
              <p className="eyebrow">Beauty, skincare and fragrance</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink">From product photos to brand campaigns</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">Explore sunscreen product photography, AI model portraits and perfume campaign images. Start with a clear product reference, then build a coordinated collection of studio and lifestyle visuals.</p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {beautyGallery.map((photo) => (
                <figure key={photo.src}>
                  <ImageSlot src={photo.src} alt={photo.alt} label={photo.caption}
                    className="aspect-[3/4] rounded-xl bg-[#f7f7f5] ring-1 ring-ink/10"
                    imageClassName="object-contain" sizes="(min-width: 768px) 250px, 46vw" quality={80} />
                  <figcaption className="mt-2 text-xs leading-relaxed text-ink-soft">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasBeforeAfter && !beautyPhotos && <ServiceBeforeAfter compactProduct={handbagPhotos} preserveImageQuality={footwearPhotos || handbagPhotos} campaignFrames={campaignPhotos} containedPhotos={lifestylePhotos || campaignPhotos || footwearPhotos || handbagPhotos || beautyPhotos} lightStudio={lightStudio} {...svc.beforeAfter} />}
      
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
            {lightStudio && (
              <>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Working on a skincare collection? See our{" "}
                  <Link href="/services/ai-beauty-skincare-photography" className="font-medium text-brand underline">
                    beauty and skincare product photography examples
                  </Link>.
                </p>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Prepping a catalog shoot? Read our{" "}
                  <Link href="/blog/clothing-photography-guide-shoot-like-a-pro-studio" className="font-medium text-brand underline">
                    clothing photography guide
                  </Link>{" "}
                  and{" "}
                  <Link href="/blog/ecommerce-product-photography-tips-2026-increase-sales" className="font-medium text-brand underline">
                    ecommerce product photography tips
                  </Link>.
                </p>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Considering AI for your next collection? See how to{" "}
                  <Link href="/blog/ai-fashion-fabric-texture-fix-guide" className="font-medium text-brand underline">
                    improve AI fabric texture
                  </Link>{" "}
                  and{" "}
                  <Link href="/blog/ai-fashion-photography-cuts-ecommerce-content-costs" className="font-medium text-brand underline">
                    compare AI and traditional photography costs
                  </Link>.
                </p>
              </>
            )}
          </div>
        </Reveal>
      </section>

      {(!svc.process || handbagPhotos) && <ServiceFeatures {...svc.features} />}

      {svc.process && <ServiceProcess centeredFour={handbagPhotos} {...svc.process} />}

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

      <CTABand footwearPhotos={footwearPhotos} preserveImageQuality={footwearPhotos}
        campaignBanner={campaignPhotos || handbagPhotos}
        fullImage={lifestylePhotos || campaignPhotos}
        lightStudio={lightStudio}
        title={svc.ctaBanner.title}
        text={svc.ctaBanner.text}
        image={svc.ctaBanner.image}
        imageAlt={svc.ctaBanner.imageAlt}
        primary={{ href: waCtaHref, label: svc.ctaBanner.buttonLabel ?? "Get Started Today" }}
      />

      <section id="faq" className="scroll-mt-24 bg-cream py-14 rounded-3xl">
              <div className="container-site">
                {campaignPhotos || handbagPhotos ? <div className="mx-auto max-w-4xl text-center"><p className="eyebrow">FAQ</p><h2 className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-[28px]">{svc.faqTitle}</h2></div> : <SectionHeading eyebrow="FAQ" title={svc.faqTitle ?? "Frequently Asked questions"} />}
                <div className="mt-12">
                  <FAQ faqs={svc.faqs}/>
                </div>
              </div>
      </section>
    </>
  );
}




