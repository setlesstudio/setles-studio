// Approved copy for existing articles. Later CMS edits take precedence.
export const articleSeo: Record<string, {title: string; description: string; oldTitle: string; oldDescription: string; heading: string; oldHeading: string}> = {
  "ai-video-ads-for-fashion-brands": {
    "heading": "AI Video Ads for Fashion Brands: A Practical Guide",
    "oldHeading": "AI Video Ads for Fashion Brands: Turn Photos Into Ads",
    "title": "AI Fashion Video Ads: A Practical Guide | SetlesStudio",
    "description": "Learn how fashion brands turn product photos into AI video ads, from creative briefs and production workflows to testing and platform considerations.",
    "oldTitle": "AI Video Ads for Fashion Brands: Turn Photos Into",
    "oldDescription": "How fashion brands turn product photos into AI video ads — workflow, use cases, testing framework, costs, and disclosure rules for Meta, TikTok, and YouTube."
  },
  "ai-fashion-fabric-texture-fix-guide": {
    "heading": "How to Fix Unrealistic Fabric Texture in AI Fashion Images",
    "oldHeading": "AI Fashion Fabric Texture: Why It Looks Fake and How to Actually Fix It",
    "title": "How to Fix AI Fabric Texture | SetlesStudio",
    "description": "Learn why fabric textures look unrealistic in AI fashion images and how reference photos, lighting, and material-specific checks can improve results.",
    "oldTitle": "AI Fashion Fabric Texture: Why It Looks Fake and H",
    "oldDescription": "Why AI-generated fabric texture looks fake and how to fix it — fabric-specific prompt fixes, reference image workflow, and lighting tips for realistic AI fashion renders."
  },
  "ai-fashion-photography-cuts-ecommerce-content-costs": {
    "heading": "AI Fashion Photography Costs: A Practical Breakdown",
    "oldHeading": "How AI Fashion Photography Cuts Ecommerce Content Costs",
    "title": "AI Fashion Photography Costs Explained | SetlesStudio",
    "description": "Compare AI fashion photography costs with traditional production and learn how image quantities, revisions, and garment complexity affect your budget.",
    "oldTitle": "How AI Fashion Photography Cuts Ecommerce Content Costs",
    "oldDescription": "A cost breakdown of AI fashion photography vs traditional photoshoots — real per-SKU math, budget framework, and where a hybrid approach makes sense."
  },
  "ai-fashion-photography-vs-traditional-photoshoot-which-one-actually-fits-your-brand": {
    "heading": "AI Fashion Photography vs Traditional Photoshoots",
    "oldHeading": "AI Fashion Photography vs Traditional Photoshoot: Which One Actually Fits Your Brand?",
    "title": "AI vs Traditional Fashion Photography | SetlesStudio",
    "description": "Compare AI fashion photography and traditional shoots by cost, garment accuracy, creative control, and use case to choose the right approach for your brand.",
    "oldTitle": "AI Fashion Photography vs Traditional Photoshoot:",
    "oldDescription": "For standard garments on clean backgrounds, results are often strong."
  },
  "ai-fashion-photography-for-clothing-brands-2026-guide": {
    "heading": "AI Fashion Photography for Clothing Brands: A Practical Guide",
    "oldHeading": "AI Fashion Photography for Clothing Brands: 2026 Guide",
    "title": "AI Fashion Photography Guide for Brands | SetlesStudio",
    "description": "Learn the AI fashion photography workflow, garment accuracy checks, and practical considerations for building a clothing catalog with generated imagery.",
    "oldTitle": "AI Fashion Photography for Clothing Brands: 2026 G",
    "oldDescription": "Complete guide to AI fashion photography for clothing brands — workflow, garment accuracy checklist, AI vs traditional comparison, and how to know if it fits your catalog."
  },
  "clothing-photography-guide-shoot-like-a-pro-studio": {
    "heading": "Clothing Photography: Preparation, Lighting and Formats",
    "oldHeading": "Clothing Photography Guide: Shoot Like a Pro Studio",
    "title": "Clothing Photography Guide | SetlesStudio",
    "description": "Learn how to prepare clothing for photography, compare flat lay, mannequin, and model formats, and plan lighting and image requirements for ecommerce.",
    "oldTitle": "Clothing Photography Guide: Shoot Like a Pro Studi",
    "oldDescription": "Learn professional clothing photography — equipment, flat lay vs ghost mannequin vs model shots, lighting setup, workflow, and ecommerce image requirements"
  },
  "apparel-photography-stop-losing-sales-to-bad-photos-": {
    "heading": "Apparel Product Photography: A Catalog Quality Guide",
    "oldHeading": "Apparel Photography: Stop Losing Sales to Bad Photos",
    "title": "Apparel Product Photography Guide | SetlesStudio",
    "description": "Plan apparel product photography with guidance on shot selection, product detail, consistency, and quality checks for ecommerce catalogs.",
    "oldTitle": "Apparel Photography: Stop Losing Sales to Bad Phot",
    "oldDescription": "Learn how apparel product photography reduces returns and boosts conversions — flat lay vs ghost mannequin vs model shots, marketplace compliance, and QC workflow."
  },
  "ecommerce-product-photography-tips-2026-increase-sales": {
    "heading": "Ecommerce Product Photography Tips for Better Product Pages",
    "oldHeading": "Ecommerce Product Photography Tips 2026 | Increase Sales",
    "title": "Ecommerce Product Photography Tips | SetlesStudio",
    "description": "Improve ecommerce product imagery with practical tips on lighting, backgrounds, angles, consistency, and details that help shoppers evaluate products.",
    "oldTitle": "Ecommerce Product Photography Tips 2026 | Increase",
    "oldDescription": "Discover 15 proven ecommerce product photography tips for 2026 — from lighting and backgrounds to AI tools and returns reduction. Boost sales, cut refunds."
  }
};

export function articleHeading(slug: string, title: string) {
  const approved = articleSeo[slug];
  return approved && title.trim() === approved.oldHeading ? approved.heading : title;
}
