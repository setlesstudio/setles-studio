import { ArrowUpRight, Clapperboard, Image as Photo, Layers, ShoppingBag, Shirt, Smartphone } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import AdGallery from "@/components/AdGallery";
import styles from "./FashionAds.module.css";

const questions = [
  ["What AI video ad services does SetlesStudio provide?", "SetlesStudio provides a professional AI video production service for fashion and ecommerce brands. Our team creates product videos, campaign films, demonstrations and UGC style advertising content from your product references and brief."],
  ["Do you create AI video ads for US fashion and ecommerce brands?", "Yes. We work remotely with fashion, beauty and ecommerce brands across the United States and worldwide. Share your product photos, target platforms and campaign brief online."],
  ["Can you turn product photos into short video ads?", "Yes. Product photos and creative references can be used to plan short videos, product demonstrations and campaign scenes. The brief should identify the product details and movements that matter most."],
  ["Are UGC style AI videos real customer testimonials?", "No. UGC style AI videos are brand produced creative that uses a casual, creator style presentation. They are not genuine customer testimonials or real customer experiences and should not be presented as such."],
  ["Which platforms and video formats can you prepare?", "We can discuss vertical videos for TikTok and Instagram Reels, square social videos and landscape formats for websites or other placements. Share the target platforms and specifications before production."],
  ["What product details do you need for an AI video project?", "Send clear product photos from useful angles, close ups of logos and materials, brand references, the intended message, target platforms and any scenes or actions you want the video to show."],
  ["How much do AI video ads cost and when are they delivered?", "Pricing and timing depend on video length, products, scenes, variations and output formats. We review the brief and confirm the deliverables, quote and schedule before production begins."]
];

const services = [
  { Icon: Clapperboard, title: "Campaign films", copy: "Introduce a collection with a hero look, a setting and a final detail shot that ties the story together." },
  { Icon: Shirt, title: "On-model styling", copy: "Turn a flat lay into a styled outfit. Show how the pieces pair and how the silhouette reads in motion." },
  { Icon: ShoppingBag, title: "Product demos", copy: "Show the clasp opening, the strap in hand or the drape of a sleeve. Give shoppers a closer look." },
  { Icon: Smartphone, title: "UGC style ads", copy: "Introduce a product through a try-on, a styling tip or a quick outfit reveal made for a social feed." },
  { Icon: Photo, title: "Storefront videos", copy: "Give a Shopify product page a short loop that complements its still photos and fits the gallery layout." },
  { Icon: Layers, title: "Ad variations", copy: "Test a detail-first opening against a full-look reveal. Tailor the crop and pacing to each placement." },
];

export default function FashionAds({quote, send}: {quote: string; send: string}) {
  return <div className={styles.page}>
    <StructuredData data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:questions.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))}} />
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <h1>AI Video Ads <br/><em>&amp; UGC Style Videos for Fashion Brands</em></h1>
        <p className={styles.intro}>Professional AI video production services for fashion and ecommerce brands across the United States and worldwide. Our team turns product photos and creative briefs into product videos, campaign films and UGC style ads for social media and ecommerce.</p>
        <div className={styles.actions}><a className={styles.primary} href={quote}>Get a video quote</a><a className={styles.watch} href="#video-examples">Watch the four films</a></div>
      </div>
    </section>
    <section id="video-examples" className={styles.section}>
      <div className={styles.head}><div><p className={styles.label}>Selected work</p><h2>Fashion in motion.</h2></div><p>Four portrait films, from street styling to studio close ups. Select a frame to play the edit.</p></div>
      <AdGallery />
    </section>
    <section className={styles.serviceBand}><div className={styles.section}>
      <div className={styles.head}><div><p className={styles.label}>Production services</p><h2>Choose your video format.</h2></div><p>Pick a format for your launch, your product page or your next round of ad testing.</p></div>
      <div className={styles.services}>{services.map(({Icon,title,copy})=><article key={title}><Icon size={28} strokeWidth={1.5}/><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <section className={styles.section}><div className={styles.brief}>
      <img src="/videos/fashion-ads/ad-1.webp" width="640" height="1138" loading="lazy" alt="Burgundy handbag with gold hardware styled on a doorstep"/>
      <div><p className={styles.label}>The creative brief</p><h2>From product photo<br/>to final cut.</h2>
      <dl><dt>Send the references</dt><dd>Share the product from the front and back, plus close ups of the details that need to read on camera.</dd>
      <dt>Choose the direction</dt><dd>Tell us who the ad is for, where it will run and whether the hero shot should feature the whole look or one product.</dd>
      <dt>Plan the deliverables</dt><dd>Agree on the length, crops and variations before production. A feed ad, a Reel and a product-page video can need different framing.</dd></dl>
      </div></div></section>
    <section className={styles.faq}><div className={styles.faqInner}>
      <div><p className={styles.label}>Before you book</p><h2>AI video ads and UGC style FAQs.</h2></div>
      <div>{questions.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
    </div></section>
    <section className={styles.end}><div><p className={styles.kicker}>Start a project</p><h2>What’s your next launch?</h2><p>Send your product photos, target platforms and creative brief. We work remotely with brands across the United States and worldwide.</p></div><a className={styles.primary} href={send}>Send my product photo <ArrowUpRight size={17}/></a></section>
  </div>;
}
