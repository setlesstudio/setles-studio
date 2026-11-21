"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import styles from "./FashionAds.module.css";

const films = [
  { title: "The burgundy bag", category: "Accessory campaign", description: "A doorstep setting puts the structured bag, gold hardware and playful charm in focus." },
  { title: "The city edit", category: "Street style", description: "A graphic tee meets a gold-print skirt, with a yellow cab giving the street scene its color." },
  { title: "Burgundy in motion", category: "Collection styling", description: "A tonal coat, handbag and tall boots bring a coordinated look to the crosswalk." },
  { title: "The biker jacket", category: "Studio editorial", description: "A warm studio backdrop sets off black leather, silver zips and the sweep of the model’s hair." },
];

export default function AdGallery() {
  const [active, setActive] = useState<number | null>(null);
  return <div className={styles.gallery}>
    {films.map(({title, category, description}, index) => {
      const base = "/videos/fashion-ads/square/ad-" + (index + 1);
      return <figure className={styles.film} key={base}>
        <div className={styles.frame}>
          {active === index ? <video src={base + ".mp4"} poster={base + ".webp"} controls autoPlay playsInline aria-label={title} /> :
            <button className={styles.poster} aria-label={"Play " + title} onClick={() => setActive(index)}>
              <img loading="lazy" src={base + ".webp"} alt="" width="640" height="640" />
              <span className={styles.play}><Play size={20} fill="currentColor" aria-hidden="true" /></span>
            </button>}
        </div>
        <figcaption><span className={styles.label}>{category}</span><h3>{title}</h3><p>{description}</p></figcaption>
      </figure>;
    })}
  </div>;
}
