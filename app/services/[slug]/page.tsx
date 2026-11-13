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
      image: "/images/pink-outfit-lifestyle-banner.webp",
      mobileImage: "/images/pink-outfit-seated-model.webp",
      imageAlt: "AI model in a pink hoodie and trousers seated in a brown armchair",
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
      image: "/images/pink-outfit-lifestyle-cta.webp",
      imageAlt: "Seated AI model wearing a pink sleeveless top and matching trousers",
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
  "meta": {
    "title": "AI Fashion Campaign Photography for Apparel Brands | SetlesStudio",
    "description": "Create realistic AI fashion campaign photography for apparel brands. Get professional model images, campaign visuals and fashion advertising content with SetlesStudio."
  },
  "hero": {
    "eyebrow": "AI Fashion Campaign Photography",
    "titlePrefix": "AI Fashion Campaign Photography",
    "titleHighlight": "for Apparel Brands",
    "subtitle": "Create professional AI fashion campaign images for clothing brands without the complexity of traditional photoshoots. SetlesStudio transforms your apparel product photos into realistic fashion model imagery, creative campaign visuals and advertising content.",
    "image": "/images/ai-fashion-campaign-photography.webp",
    "mobileImage": "/images/ai-fashion-model-photography.webp",
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
    "after": "/images/ai-fashion-model-photography.webp",
    "afterAlt": "AI model wearing a white halter knit maxi dress and sunglasses in the desert",
    "afterCaption": "SetlesStudio presents the white knit dress on an AI model in a desert campaign scene.",
    "after2": "/images/ai-apparel-lifestyle-campaign.webp",
    "after2Alt": "AI model in a white knit dress posing beside a rock in the desert",
    "after2Caption": "A second campaign pose shows the dress from the side beside a desert rock."
  },
  "description": {
    "titleHighlight": "AI Fashion Campaign Photography",
    "titleSuffix": "for Clothing Brands",
    "paragraphs": [
      "From fashion startups to established clothing labels, we help brands create consistent, high-quality visuals for product launches, websites and social media marketing.",
      "SetlesStudio provides AI fashion campaign photography for apparel brands looking to create professional marketing visuals without arranging traditional photoshoots.",
      "We create realistic fashion model images and campaign scenes from your existing clothing product photographs, helping you showcase your collections across different marketing platforms."
    ]
  },
  "features": {
    "heading": "Why Choose SetlesStudio for AI Fashion Campaigns?",
    "subheading": "AI Fashion Campaign Photography",
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
    "text": "Ready to create professional fashion campaign images for your clothing brand? Share your product photos, creative references and campaign requirements. SetlesStudio will help you develop realistic AI fashion photography tailored to your brand.",
    "waText": "Hi, I'd like a fashion campaign quote.",
    "buttonLabel": "Get Your Fashion Campaign Quote"
  },
  "faqTitle": "Frequently Asked Questions About AI Fashion Campaign Photography",
  "faqs": [
    {
      "q": "What is AI fashion campaign photography?",
      "a": "AI fashion campaign photography uses artificial intelligence to create fashion model images, editorial visuals and advertising campaigns from clothing product references."
    },
    {
      "q": "Can you create AI fashion campaigns from my clothing product photos?",
      "a": "Yes. We use your existing product photos, flat lays or ghost mannequin images to create realistic fashion campaign visuals featuring AI-generated models and creative backgrounds."
    },
    {
      "q": "How much does AI fashion campaign photography cost?",
      "a": "Pricing depends on the number of outfits, images, model requirements and campaign complexity. Contact SetlesStudio for a customized quote."
    },
    {
      "q": "Can you create consistent AI models for my clothing brand?",
      "a": "Yes. We can create coordinated campaign images featuring consistent model appearances, styling and visual direction across multiple clothing products."
    },
    {
      "q": "What types of apparel brands do you work with?",
      "a": "We work with fashion startups, clothing labels, streetwear brands, activewear businesses, swimwear companies and ecommerce apparel brands."
    },
    {
      "q": "Where can I use AI fashion campaign images?",
      "a": "You can use campaign images for ecommerce websites, Shopify stores, fashion lookbooks, collection launches, Instagram, Facebook, Pinterest and digital advertising, subject to your agreed usage rights."
    }
  ]
},

  "footwear-realistic-ai-photography": {
    meta: {
      title: "AI Footwear Photography for Ecommerce Brands | SetlesStudio",
      description: "Create realistic AI footwear photography for sneakers, shoes, boots and heels. Get professional product, on foot and lifestyle images for ecommerce brands.",
    },
    hero: {
      eyebrow: "AI FOOTWEAR PHOTOGRAPHY",
      titlePrefix: "AI Footwear Photography",
      titleHighlight: "for Ecommerce Brands",
      subtitle: <><span className="lg:block lg:whitespace-nowrap">Turn your shoe photos into realistic AI footwear images. </span><span className="lg:block lg:whitespace-nowrap">Create studio, on foot, and lifestyle visuals for ecommerce. </span><span className="lg:block lg:whitespace-nowrap">Professional results without traditional photoshoots.</span></>,
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
      titleHighlight: "How It Works",
      titleSuffix: "",
      paragraphs: [
        "Get professional footwear photography for your online store, product listings, and marketing campaigns.",
        <><strong>01. Share Your Products:</strong> Send your original footwear images and visual references.</>,
        <><strong>02. Choose Your Style:</strong> Select studio, on foot, lifestyle, or campaign photography.</>,
        <><strong>03. Image Creation:</strong> We create realistic footwear visuals following your product details and brand direction.</>,
        <><strong>04. Review and Delivery:</strong> Review the images, request agreed refinements, and receive your final high-quality files.</>,
      ],
    },
    features: {
      heading: "Why Choose SetlesStudio?",
      subheading: "AI footwear photography for ecommerce brands",
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
      text: "Ready to upgrade your footwear product images? Share your products and creative references with SetlesStudio. Let's create realistic footwear photography that presents your collection professionally.",
      buttonLabel: "Contact SetlesStudio",
      waText: "Hi, I'd like to start an AI footwear photography project.",
    },
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "What is AI footwear photography?", a: "AI footwear photography uses artificial intelligence and creative editing to produce professional shoe product images, model photography, lifestyle visuals, and advertising content from existing product photos." },
      { q: "Can you create realistic shoe photography from my product images?", a: "Yes. We use your original footwear images and references to create realistic product, studio, on foot, and lifestyle photography." },
      { q: "Can you create AI shoe photography with models?", a: "Yes. We create realistic AI-generated models wearing your footwear in different poses, outfits, and environments." },
      { q: "Can you maintain the original shoe design and logo?", a: "We carefully work to preserve the original shoe shape, colors, materials, stitching, logos, and other important product details." },
      { q: "What types of footwear do you photograph?", a: "We create visuals for sneakers, running shoes, boots, heels, sandals, formal shoes, casual footwear, and designer collections." },
      { q: "Are your footwear images suitable for ecommerce websites?", a: "Yes. Our images can be prepared for Shopify, WooCommerce, and other ecommerce platforms according to your image requirements." },
      { q: "How much does AI footwear photography cost?", a: "Pricing depends on the number of products, images, creative direction, and complexity. Contact us for a customized quote." },
      { q: "Can I get a free sample before starting?", a: "Yes. Share your footwear product image and preferred reference. We can create a free sample for you to review." },
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
  "meta": {
    "title": "AI Product Photography for Bags | SetlesStudio",
    "description": "Realistic AI product photography for bags and handbags. Create premium studio, lifestyle and model photos for Shopify, ecommerce and fashion brands."
  },
  "hero": {
    "eyebrow": "AI Handbag Photography",
    "titlePrefix": "AI Product Photography",
    "titleHighlight": "for Bags & Handbags",
    "subtitle": "Transform your handbag product photos into premium, photorealistic AI photography. SetlesStudio creates realistic studio, lifestyle, and on-model bag images for ecommerce brands, Shopify stores, and advertising campaigns. We focus on accurate leather textures, stitching, logos, colors, and product details.",
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
    "titleHighlight": "Professional AI Handbag Photography",
    "titleSuffix": "",
    "paragraphs": [
      "Create beautiful, realistic bag product images without expensive traditional photoshoots. From luxury handbags to tote bags, shoulder bags, and crossbody bags, we deliver professional visuals with consistent styling and natural photographic details."
    ]
  },
  "features": {
    "heading": "Why Choose SetlesStudio?",
    "subheading": "AI product photography for bags, tailored to your collection.",
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
    "title": "Ready to Elevate Your Handbag Photography?",
    "text": "Create premium, realistic bag product images for your ecommerce brand.",
    "waText": "Hi, I'd like to request a free sample of AI handbag photography.",
    "buttonLabel": "Request a Free Sample"
  },
  "faqTitle": "Frequently Asked Questions",
  "faqs": [
    {
      "q": "What is AI product photography for bags?",
      "a": "AI product photography for bags creates realistic handbag images using artificial intelligence and existing product references, including studio, lifestyle, and model photography."
    },
    {
      "q": "Can AI create realistic photos of my handbags?",
      "a": "Yes. SetlesStudio creates photorealistic handbag images while focusing on accurate product colors, shapes, leather textures, stitching, and hardware."
    },
    {
      "q": "Can you create AI models holding my handbags?",
      "a": "Yes. We create realistic fashion models holding, carrying, or wearing your handbags in customized studio and lifestyle environments."
    },
    {
      "q": "Is AI bag photography suitable for Shopify?",
      "a": "Yes. Our handbag product images can be prepared for Shopify, ecommerce websites, social media, and advertising campaigns."
    },
    {
      "q": "How much does AI handbag photography cost?",
      "a": "Pricing depends on the number of bags, images, styles, and custom requirements. Contact SetlesStudio for a personalized quote."
    },
    {
      "q": "Can I get a free sample?",
      "a": "Yes. Contact SetlesStudio to request a free sample for a suitable handbag photography project."
    },
{
  "q": "What product photos should I send for an AI bag photoshoot?",
  "a": "Send clear front, back, and side views of the bag, plus close-ups of its logo, stitching, handles, straps, and hardware. Include a size reference and your preferred visual style so the team can understand the product before creating images."
},
{
  "q": "Can you keep my handbag logo, color, and stitching consistent?",
  "a": "We use your product references to guide the bag shape, color, logo, materials, and hardware. Clear detail photos help the review process. Check the finished images against your original product before publishing them."
},
{
  "q": "Can you create both white-background product images and lifestyle photos?",
  "a": "Yes. You can request clean studio images for product listings and styled lifestyle or model images for campaigns. Share the backgrounds, poses, and settings you want when requesting a quote."
},
{
  "q": "Which types of bags can be used for AI product photography?",
  "a": "Projects can include tote bags, shoulder bags, crossbody bags, clutches, and luxury handbags. Send your product photos so we can review the design and the images you need."
},
{
  "q": "Do I need to ship my handbag for the photoshoot?",
  "a": "The AI photography process starts with your existing product photos and visual references. Contact SetlesStudio with those files to confirm whether they provide enough detail for your project."
},
{
  "q": "Can I use the same AI model across a handbag collection?",
  "a": "Consistent models and styling can be included in your project brief. Share the full collection and preferred model references before work begins so the team can plan a consistent set of images."
},
{
  "q": "What image sizes should I request for my online store?",
  "a": "Share the image dimensions, aspect ratios, file formats, and background requirements of your store or advertising platform. Product listings, website banners, and social ads often need different versions."
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
          width: params.slug === "bags-accessories-realistic-ai-photography" ? 2752 : 1200,
          height: params.slug === "bags-accessories-realistic-ai-photography" ? 1536 : 630,
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

export default function ServiceSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const svc = services[params.slug];
  if (!svc) notFound();

  const waCtaHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(svc.ctaBanner.waText)}`;
  const waHeroHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(svc.hero.waText)}`;
  const handbagPhotos = params.slug === "bags-accessories-realistic-ai-photography";
  const footwearPhotos = params.slug === "footwear-realistic-ai-photography";
  const campaignPhotos = params.slug === "luxury-fashion-ai-campaign";
  const lifestylePhotos = params.slug === "lifestyle-realistic-ai-photography";
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
      <PageHero handbagPhotos={handbagPhotos} footwearPhotos={footwearPhotos} preserveImageQuality={footwearPhotos || handbagPhotos}
        campaignPhotos={campaignPhotos}
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
          className={footwearPhotos ? "btn-outline" : campaignPhotos || handbagPhotos ? "rounded-full border border-ink/30 px-6 py-3 text-sm font-semibold text-ink lg:border-white/40 lg:text-white" : lightStudio ? "btn-outline" : "rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"}
        >
          {svc.hero.secondary.label}
        </a>
      </PageHero>

      {hasBeforeAfter && <ServiceBeforeAfter compactProduct={handbagPhotos} preserveImageQuality={footwearPhotos || handbagPhotos} campaignFrames={campaignPhotos} containedPhotos={lifestylePhotos || campaignPhotos || footwearPhotos || handbagPhotos} lightStudio={lightStudio} {...svc.beforeAfter} />}
      
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


