import Image from "next/image";

export default function Logo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt="SetlesStudio"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
