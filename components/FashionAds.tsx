import { ArrowUpRight, Clapperboard, Image as Photo, Layers, ShoppingBag, Shirt, Smartphone } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import AdGallery from "@/components/AdGallery";
import styles from "./FashionAds.module.css";

const questions = [
  ["What is an AI fashion video ad?", "It’s a short brand film built from clothing or accessory references. A still product photo becomes a styled scene that can show a garment on a model, a handbag in use, or a complete outfit in motion."],
  ["Can you turn a flat lay into an on-model video?", "Yes. Send a clear front view of the garment. A back view and close-ups of prints, trims or embroidery give us better references when the model turns or the camera moves closer."],
  ["What do you need to keep my product recognizable?", "Send the exact colorway, close-ups of the logo and hardware, and an on-body reference if fit matters. Flag the details you want us to compare against the references during review."],
  ["What does UGC-style mean for an AI ad?", "UGC-style describes a casual, creator-led presentation. For example, a virtual presenter might show a jacket up close and style it two ways. The content is produced for the brand and should be presented as brand creative."],
  ["Which format should I choose for Instagram, TikTok or Shopify?", "A square 1:1 edit works for a feed or a square product gallery. Choose a vertical 9:16 edit for a full-screen Reel or TikTok. For a Shopify banner, share the desktop and mobile dimensions from your theme."],
  ["Can one product be used for several ad variations?", "Yes. One handbag can lead with a hardware close-up, an on-model shot or a full outfit reveal. Tell us which variations you want to test so we can plan the opening shots and exports together."],
  ["Can you make videos for footwear, handbags and accessories?", "Yes. For footwear, include side, sole and on-foot references. For a bag, show the closure, straps and scale in hand. These details guide the shot list and help the product read clearly on screen."],
  ["How much does an AI fashion video cost, and how long does it take?", "We quote from the brief. The number of products, scenes, versions and output formats affects price and timing. Send your references and launch date so we can confirm scope and delivery before production."],
  ["Where is SetlesStudio based, and how do I brief you remotely?", "SetlesStudio is based in Lahore, Pakistan. You can start remotely by sending product photos, the platform you plan to use and a sample of the visual style you like through WhatsApp."],
];

const services = [
  { Icon: Clapperboard, title: "Campaign films", copy: "Introduce a collection with a hero look, a setting and a final detail shot that ties the story together." },
  { Icon: Shirt, title: "On-model styling", copy: "Turn a flat lay into a styled outfit. Show how the pieces pair and how the silhouette reads in motion." },
  { Icon: ShoppingBag, title: "Product demos", copy: "Show the clasp opening, the strap in hand or the drape of a sleeve. Give shoppers a closer look." },
  { Icon: Smartphone, title: "UGC-style ads", copy: "Introduce a product through a try-on, a styling tip or a quick outfit reveal made for a social feed." },
  { Icon: Photo, title: "Storefront videos", copy: "Give a Shopify product page a short loop that complements its still photos and fits the gallery layout." },
  { Icon: Layers, title: "Ad variations", copy: "Test a detail-first opening against a full-look reveal. Tailor the crop and pacing to each placement." },
];

export default function FashionAds({quote, send}: {quote: string; send: string}) {
  return <div className={styles.page}>
    <StructuredData data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:questions.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))}} />
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <h1>AI video ads<br/><em>for fashion brands.</em></h1>
        <p className={styles.intro}>Turn your product photos into campaign films, on-model demos and UGC-style ads for social feeds and Shopify stores.</p>
        <div className={styles.actions}><a className={styles.primary} href={quote}>Get a video quote</a><a className={styles.watch} href="#video-examples">Watch the four films</a></div>
      </div>
    </section>
    <section id="video-examples" className={styles.section}>
      <div className={styles.head}><div><p className={styles.label}>Selected work</p><h2>Fashion in motion.</h2></div><p>Four square films, from street styling to studio close-ups. Select a frame to play the edit.</p></div>
      <AdGallery />
    </section>
    <section className={styles.serviceBand}><div className={styles.section}>
      <div className={styles.head}><div><p className={styles.label}>Production services</p><h2>Choose your video format.</h2></div><p>Pick a format for your launch, your product page or your next round of ad testing.</p></div>
      <div className={styles.services}>{services.map(({Icon,title,copy})=><article key={title}><Icon size={28} strokeWidth={1.5}/><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <section className={styles.section}><div className={styles.brief}>
      <img src="/videos/fashion-ads/ad-1.webp" width="640" height="1138" loading="lazy" alt="Burgundy handbag with gold hardware styled on a doorstep"/>
      <div><p className={styles.label}>The creative brief</p><h2>From product photo<br/>to final cut.</h2>
      <dl><dt>Send the references</dt><dd>Share the product from the front and back, plus close-ups of the details that need to read on camera.</dd>
      <dt>Choose the direction</dt><dd>Tell us who the ad is for, where it will run and whether the hero shot should feature the whole look or one product.</dd>
      <dt>Plan the deliverables</dt><dd>Agree on the length, crops and variations before production. A feed ad, a Reel and a product-page video can need different framing.</dd></dl>
      </div></div></section>
    <section className={styles.faq}><div className={styles.faqInner}>
      <div><p className={styles.label}>Before you book</p><h2>Fashion video<br/>ad FAQs.</h2></div>
      <div>{questions.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
    </div></section>
    <section className={styles.end}><div><p className={styles.kicker}>Start a project</p><h2>What’s your next launch?</h2><p>Send one product photo and tell us where the video will run.</p></div><a className={styles.primary} href={send}>Send my product photo <ArrowUpRight size={17}/></a></section>
  </div>;
}
