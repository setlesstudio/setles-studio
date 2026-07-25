import Image from "next/image";
import { site } from "@/lib/data";

const MESSAGE = encodeURIComponent(
  "Hi SetlesStudio! I'm interested in your AI fashion content services. Can you tell me more?"
);

export default function WhatsAppButton() {
  if (!site.whatsapp) return null;

  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 block h-14 w-14"
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25"
        aria-hidden
      />

      {/* Tooltip */}
      <span
        className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-xl bg-ink px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100"
        aria-hidden
      >
        Chat with us
        {/* Tooltip arrow */}
        <span className="absolute -bottom-1 right-5 h-2 w-2 rotate-45 bg-ink" />
      </span>

      {/* Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition-transform duration-200 group-hover:scale-110">
        <Image
          src="/images/Whatsapp-icon.png"
          alt="WhatsApp"
          width={30}
          height={30}
          className="object-contain brightness-0 invert"
        />
      </span>
    </a>
  );
}
