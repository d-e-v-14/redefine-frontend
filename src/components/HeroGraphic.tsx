import Image from "next/image";

export default function HeroGraphic() {
  return (
    <div className="relative h-[580px] w-[640px] flex items-end justify-center select-none pointer-events-none">
      {/* Layer 1: Pink Glowing Head Silhouette (Background Glow) */}
      <div className="absolute bottom-0 left-1/2 z-10 w-[570px] h-[596px] -translate-x-1/2 opacity-95">
        <Image
          src="/redefine-2026/image 3.png"
          alt="Glow Head Outline"
          fill
          className="object-contain filter blur-[1px]"
          priority
        />
      </div>

      {/* Layer 2: Pink Shoulder/Collar Base */}
      <div className="absolute bottom-[-10px] left-1/2 z-15 w-[600px] h-[146px] -translate-x-1/2 opacity-90">
        <Image
          src="/redefine-2026/image 4.png"
          alt="Glow Shoulder Base"
          fill
          className="object-contain"
        />
      </div>

      {/* Layer 3: Black Foreground Head Silhouette */}
      <div className="absolute bottom-0 left-1/2 z-20 w-[490px] h-[540px] -translate-x-1/2">
        <Image
          src="/redefine-2026/image 1.png"
          alt="Head Silhouette"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Layer 4: Brain Scribble inside the upper head (moved higher and scaled up) */}
      <div className="absolute top-[48px] left-1/2 z-30 w-[215px] h-[145px] -translate-x-1/2 opacity-95">
        <Image
          src="/redefine-2026/Brain.png"
          alt="Brain Scribble"
          fill
          className="object-contain"
        />
      </div>

      {/* Layer 5: Pink Brush Stroke over eyes (moved higher to align with eye level) */}
      <div className="absolute top-[204px] left-1/2 z-30 w-[210px] h-[46px] -translate-x-1/2">
        <Image
          src="/redefine-2026/Vector 18.png"
          alt="Brush Stroke"
          fill
          className="object-contain"
        />
      </div>

      {/* Layer 6: REIMAGINE text centered on the Brush Stroke */}
      <div className="absolute top-[213px] left-1/2 z-40 w-[180px] h-[25px] -translate-x-1/2">
        <Image
          src="/redefine-2026/REIMAGINE.png"
          alt="REIMAGINE"
          fill
          className="object-contain"
        />
      </div>

      {/* Overlay decorative wires/scribbles crossing the head */}
      <div className="absolute top-[180px] left-[15%] z-25 w-[140px] h-[280px] opacity-75 rotate-[15deg]">
        <Image
          src="/redefine-2026/Thread 1.png"
          alt="Wire"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-[40px] right-[18%] z-25 w-[120px] h-[220px] opacity-65 -rotate-[25deg]">
        <Image
          src="/redefine-2026/Thread 1.png"
          alt="Wire"
          fill
          className="object-contain filter invert"
        />
      </div>
    </div>
  );
}
