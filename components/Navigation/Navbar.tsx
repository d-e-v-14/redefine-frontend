import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-3 py-10 md:px-10">
      <Image
        src="/redefine-2026/logo.svg"
        alt="Redefine"
        width={100}
        height={40}
        unoptimized
        className="h-20 w-auto"
        priority
      />
    </header>
  );
}
