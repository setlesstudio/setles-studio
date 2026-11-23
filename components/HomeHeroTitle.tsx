"use client";

import { useEffect, useState } from "react";

const defaultHeroTitle = "[AI Fashion & Product Photography] for Ecommerce Brands";

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
  const [title, setTitle] = useState(defaultHeroTitle);

  useEffect(() => {
    const readTitle = () => {
      try {
        const pages = JSON.parse(localStorage.getItem("setles_pages") || "[]");
        const home = Array.isArray(pages) ? pages.find((page: { pageId?: string }) => page.pageId === "home") : null;
        const value = typeof home?.heroTitle === "string" ? home.heroTitle : defaultHeroTitle;
        const legacy = [
          "[AI Fashion] Photography for Clothing Brands",
          "[AI Fashion] Photography for Ecommerce Brands",
          "Realistic [AI Fashion] Photography \n for Ecommerce Brands",
        ];
        setTitle(legacy.includes(value) ? defaultHeroTitle : value);
      } catch {
        setTitle(defaultHeroTitle);
      }
    };

    readTitle();
    window.addEventListener("setles_db_update", readTitle);
    return () => window.removeEventListener("setles_db_update", readTitle);
  }, []);

  return <>{formatTitle(title)}</>;
}
