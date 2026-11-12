import type { ReactNode } from "react";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { breadcrumbData } from "@/lib/seo";
import { site } from "@/lib/data";

const videos = [
  {
    filename: "ai-leather-jacket-fashion-video",
    title: "AI Leather Jacket Fashion Video",
    caption: "A black leather jacket brought to life with natural hair movement and fashion-focused lighting.",
    alt: "Fashion model wearing a black leather biker jacket against a warm studio backdrop",
  },
  {
    filename: "ai-blazer-fashion-video",
    title: "AI Blazer Fashion Video",
    caption: "A brown tailored blazer styled with denim in a dynamic indoor fashion scene.",
    alt: "Fashion model wearing a brown tailored blazer and light blue jeans indoors",
  },
  {
    filename: "ai-streetwear-handbag-video",
    title: "AI Streetwear & Handbag Video",
    caption: "An outdoor fashion look featuring a black leather jacket, white skirt, boots, and a white bag.",
    alt: "Red-haired fashion model outdoors with black leather jacket, white skirt and handbag",
  },
  {
    filename: "ai-luxury-handbag-video",
    title: "AI Lifestyle Handbag Video",
    caption: "A city-style accessories video featuring a black handbag and elegant monochrome outfit.",
    alt: "Fashion model in black top and grey skirt walking with a black handbag on a city street",
  },
] as const;

const contact = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi SetlesStudio, I'd like to discuss realistic AI fashion video ads for my brand.")}`;

export default function VideoAdsPage() {
  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "AI Fashion Video Ads and Product Videos",
        description: "Realistic AI fashion video ads, product videos and UGC-style creative for clothing and accessories brands.",
        url: "https://www.setlesstudio.com/services/realistic-ai-video-ads-ugc",
        provider: { "@id": `${site.url}/#organization` },
      }} />
      <StructuredData data={breadcrumbData([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "AI Fashion Video Ads", path: "/services/realistic-ai-video-ads-ugc" },
      ])} />

      <section className="relative overflow-hidden bg-[#101014] text-white">
        <div className="container-site py-20 sm:py-28 lg:py-32">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">SetlesStudio · Fashion Motion Studio</p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-7xl">
            AI Video Ads <span className="text-[#d7c4b1]">for Fashion Brands</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Realistic AI fashion video ads for clothing and accessories brands. Turn product photography into expressive model motion, lifestyle stories and short-form campaigns—without organizing a traditional shoot.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={contact} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition-colors hover:bg-[#e7d7c8]">Discuss Your Video Project</a>
            <a href="#fashion-video-portfolio" className="inline-flex rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Watch Our Work</a>
          </div>
        </div>
      </section>

      <section id="fashion-video-portfolio" className="container-site py-16 sm:py-24" aria-labelledby="video-portfolio-heading">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">Selected Work · Four Videos</p>
        <h2 id="video-portfolio-heading" className="mx-auto mt-3 max-w-3xl text-center font-display text-3xl font-bold sm:text-5xl">Realistic AI Fashion Video Portfolio</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-ink-soft">
          Explore four short fashion video concepts featuring models, garments and accessories in studio and lifestyle settings.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {videos.map((video) => (
            <figure key={video.filename} className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="overflow-hidden bg-[#19191c]">
                <video
                  className="mx-auto block aspect-[9/16] max-h-[660px] w-full object-contain"
                  controls
                  playsInline
                  preload="none"
                  poster={`/images/video-ads/${video.filename}.webp`}
                  aria-label={video.title}
                >
                  <source src={`/videos/${video.filename}.mp4`} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <figcaption className="px-5 py-5 sm:px-7 sm:py-6">
                <h3 className="font-display text-xl font-semibold">{video.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{video.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">What We Create</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">AI Video Production for Ecommerce</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">From fashion model videos to accessories storytelling, we create tailored short-form content for online stores, launches and social platforms.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              ["AI Fashion Video Ads", "Model-led clothing videos with movement, styling and garment detail."],
              ["AI Product & Accessories Videos", "Lifestyle motion for handbags, footwear and ecommerce products."],
              ["UGC-Style & Social Video Ads", "Brief-led, short-form video concepts for Reels, TikTok and paid social."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl bg-white p-7">
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">AI Fashion Video Ads: FAQs</h2>
          <div className="mt-8 divide-y divide-black/10">
            {[
              ["What are AI video ads for fashion brands?", "They are short promotional fashion videos created with AI-assisted workflows, often using existing garment or campaign photos as references."],
              ["Can you create AI videos from product photos?", "Yes. Share clear clothing or product photographs, plus examples of the model movement, setting and style you want."],
              ["Do you create AI UGC-style videos?", "Yes. We can discuss creator-style concepts for social media; the exact format, messaging and voiceover depend on your brief."],
              ["Where can I use these videos?", "Video deliverables can be tailored for Shopify websites, Instagram Reels, TikTok, brand campaigns and digital advertising."],
            ].map(([q, a]) => (
              <div key={q} className="py-5">
                <h3 className="font-semibold">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101014] py-16 text-white sm:py-20">
        <div className="container-site text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Turn Your Product Photos Into Fashion Video Ads</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/70">Send us your garment or product references and the creative style you want to achieve.</p>
          <a href={contact} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-black hover:bg-[#e7d7c8]">Start Your Video Project</a>
          <p className="mt-5 text-sm text-white/50">Or <Link className="underline underline-offset-4" href="/portfolio">explore our fashion portfolio</Link>.</p>
        </div>
      </section>
    </>
  );
}
