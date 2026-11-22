"use client";

import { useEffect, useState } from "react";
import { Rocket, Layers, CircleDollarSign, Clock } from "lucide-react";
import { valueProps } from "@/lib/data";

const icons = [Rocket, Layers, CircleDollarSign, Clock];

export default function HomeValueProps() {
  const [items, setItems] = useState(valueProps);

  useEffect(() => {
    const readItems = () => {
      try {
        const saved = JSON.parse(localStorage.getItem("setles_value_props") || "null");
        if (Array.isArray(saved) && saved.length) {
          setItems(saved.map((item) => ({
            ...item,
            title: item.title === "10x More Affordable" ? valueProps[0].title : item.title,
            text: item.text === "High end content without high end production costs." ? valueProps[0].text : item.text,
          })));
        } else {
          setItems(valueProps);
        }
      } catch {
        setItems(valueProps);
      }
    };

    readItems();
    window.addEventListener("setles_db_update", readItems);
    return () => window.removeEventListener("setles_db_update", readItems);
  }, []);

  return (
    <section className="container-site py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div key={item.title} className="card h-full p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
