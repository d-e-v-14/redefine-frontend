import Image from "next/image";

const threadStyles = [
  // 1. Thread curving from left neck, across chin, up to right ear
  "top-[38%] left-[20%] w-[55%] h-[40%] opacity-85 rotate-[-20deg]",
  // 2. Thread crossing the neck from left to right
  "top-[55%] left-[25%] w-[50%] h-[35%] opacity-80 rotate-[15deg] scale-y-[-1]",
  // 3. Thread going down through the brain, curving left
  "top-[10%] left-[28%] w-[38%] h-[55%] opacity-75 rotate-[5deg]",
  // 4. Thread crossing the forehead under REIMAGINE
  "top-[28%] left-[26%] w-[48%] h-[30%] opacity-85 rotate-[-8deg]",
  // 5. Thread from right ear area, curving down-left across chest
  "top-[48%] right-[22%] w-[45%] h-[40%] opacity-80 rotate-[25deg]",
  // 6. Additional thread looping in the head center
  "top-[22%] left-[34%] w-[32%] h-[45%] opacity-70 rotate-[-15deg]",
];

export default function HeroGraphic() {
  return (
    <div
      className="relative flex items-end justify-center select-none pointer-events-none"
      style={{ width: "min(64vw, 760px)", height: "min(70vw, 700px)" }}
    >
      <div className="absolute bottom-[4%] left-1/2 z-10 h-[18%] w-[72%] -translate-x-1/2 rounded-full bg-white/25 blur-[22px]" />

      {/* Main Silhouette & Glow Wrapper (matches silhouette aspect ratio) */}
      <div 
        className="absolute bottom-0 left-1/2 z-20 h-[95%] aspect-[755/833] -translate-x-1/2"
      >
        {/* Glow Head Outline */}
        <div
          className="absolute z-10"
          style={{
            width: "104.17%",
            height: "98.81%",
            left: "0.51%",
            bottom: "6.82%",
          }}
        >
          <Image
            src="/redefine-2026/image 3.png"
            alt="Glow Head Outline"
            fill
            className="object-cover filter blur-[1px]"
            priority
          />
        </div>

        {/* Glow Shoulder Base */}
        <div
          className="absolute z-15"
          style={{
            width: "108.78%",
            height: "24.01%",
            left: "-3.46%",
            bottom: "0%",
          }}
        >
          <Image
            src="/redefine-2026/image 4.png"
            alt="Glow Shoulder Base"
            fill
            className="object-cover"
          />
        </div>

        {/* Head Silhouette */}
        <Image
          src="/redefine-2026/image 1.png"
          alt="Head Silhouette"
          fill
          className="object-cover z-20"
          priority
        />

        {/* Brain Scribble */}
        <div
          className="absolute z-30 opacity-95"
          style={{
            width: "37.22%",
            height: "22.69%",
            left: "32.18%",
            top: "11.16%",
          }}
        >
          <Image
            src="/redefine-2026/Brain.png"
            alt="Brain Scribble"
            fill
            className="object-cover"
          />
        </div>

        {/* Brush Stroke */}
        <div
          className="absolute z-30"
          style={{
            width: "50%",
            height: "9.96%",
            left: "25%",
            top: "35%",
          }}
        >
          <Image
            src="/redefine-2026/Vector 18.png"
            alt="Brush Stroke"
            fill
            className="object-contain"
          />
        </div>

        {/* REIMAGINE Text */}
        <div
          className="absolute z-40"
          style={{
            width: "42.42%",
            height: "6.22%",
            left: "28.79%",
            top: "36.2%",
          }}
        >
          <Image
            src="/redefine-2026/REIMAGINE.png"
            alt="REIMAGINE"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {threadStyles.map((threadStyle, index) => (
        <div
          key={index}
          className={`absolute z-25 ${threadStyle}`}
        >
          <Image
            src="/redefine-2026/Thread 1.png"
            alt="Wire"
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

