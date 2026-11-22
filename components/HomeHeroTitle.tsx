"use client";

import { useEffect, useState } from "react";
import { homeHero } from "@/lib/data";

function formatTitle(value: string) {
  return value.split(/(\[[^\]]+\])/g).map((part, index) => {
    if (part.startsWith("[") && part.endsWith("]")) {
      return <span key={index} className="text-brand">{part.slice(1, -1)}</span>;
    }
    if (part.includes("\n")) {
      return part.split("\n").map((line, lineIndex) => (
        <span key={lineIndex}>{lineIndex > 0 && <br />}{line}</span>
      ));
    }
    return part;
  });
}

export default function HomeHeroTitle() {
  const [title, setTitle] = useState(homeHero.heroTitle);

  useEffect(() => {
    const readTitle = () => {
      try {
        const pages = JSON.parse(localStorage.getItem("setles_pages") || "[]");
        const home = Array.isArray(pages) ? pages.find((page: { pageId?: string }) => page.pageId === "home") : null;
        const value = typeof home?.heroTitle === "string" ? home.heroTitle : homeHero.heroTitle;
        const legacy = [
          "[AI Fashion] Photography for Ecommerce Brands",
          "Realistic [AI Fashion] Photography \n for Ecommerce Brands",
        ];
        setTitle(legacy.includes(value) ? homeHero.heroTitle : value);
      } catch {
        setTitle(homeHero.heroTitle);
      }
    };

    readTitle();
    window.addEventListener("setles_db_update", readTitle);
    return () => window.removeEventListener("setles_db_update", readTitle);
  }, []);

  return <>{formatTitle(title)}</>;
}
