"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      autoplay={{ delay: 4500, disableOnInteraction: true }}
      pagination={{ clickable: true }}
      className="!pb-12"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.name} className="!h-auto">
          <figure className="card flex h-full flex-col p-7">
            <div className="flex gap-1 text-brand" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft font-display font-semibold text-brand">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-ink-soft/70">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
