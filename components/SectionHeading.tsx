import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <Reveal
      className={`max-w-6xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`mt-2 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-2 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/65" : "text-ink-soft"
          }`}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}
