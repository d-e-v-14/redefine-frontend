import Image from "next/image";
import HeroGraphic from "@/components/HeroGraphic";

export default function Home() {
  return (
    <main className="relative h-screen min-h-screen w-full overflow-hidden bg-[#000000] text-white">
      <div className="absolute inset-0 bg-[#000000]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#c1325f]" />

      <div className="absolute left-[-2%] top-[-10%] z-10 h-[800px] w-[800px] opacity-40 pointer-events-none">
        <Image
          src="/redefine-2026/Vector 32.png"
          alt="Curve"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-[10%] top-[5%] z-10 h-[650px] w-[450px] opacity-35 pointer-events-none">
        <Image
          src="/redefine-2026/Vector 26.png"
          alt="Curve"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-[12%] left-[6%] z-10 h-[400px] w-[280px] opacity-45 pointer-events-none">
        <Image
          src="/redefine-2026/Thread 1.png"
          alt="Curve"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-[8%] top-[2%] z-10 h-[730px] w-[680px] opacity-45 pointer-events-none">
        <Image
          src="/redefine-2026/Vector 28.png"
          alt="Curve"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-[-10%] right-[12%] z-10 h-[660px] w-[540px] opacity-40 pointer-events-none">
        <Image
          src="/redefine-2026/Vector 32.png"
          alt="Curve"
          fill
          className="object-contain"
        />
      </div>

      {/* Right side background threads passing through TRACKS and TEAM UP */}
      <div className="absolute right-[12%] top-[18%] z-10 h-[680px] w-[440px] opacity-80 pointer-events-none scale-x-[-1] rotate-[22deg]">
        <Image
          src="/redefine-2026/Thread 1.png"
          alt="Curve"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute right-[2%] top-[25%] z-10 h-[580px] w-[360px] opacity-70 pointer-events-none rotate-[-12deg]">
        <Image
          src="/redefine-2026/Thread 1.png"
          alt="Curve"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute left-[2.2%] top-[2.1%] z-50">
        <Image
          src="/redefine-2026/image 2.png"
          alt="Redefine Logo"
          width={90}
          height={87}
          className="h-auto w-[90px]"
          priority
        />
      </div>

      <div className="absolute right-[2.2%] top-[2.7%] z-50 flex items-center gap-3">
        <div className="absolute right-[110px] top-[40px] z-40 h-[200px] w-[220px] pointer-events-none animate-arrow">
          <Image
            src="/redefine-2026/image 5.png"
            alt="Pointer Arrow"
            fill
            className="object-contain"
          />
        </div>
        <a href="#register" className="relative block transition-transform duration-200 hover:scale-[1.02]">
          <Image
            src="/redefine-2026/Group 12.png"
            alt="Register Now"
            width={160}
            height={76}
            className="h-auto w-[160px]"
            priority
          />
        </a>
      </div>

      <div className="absolute left-1/2 top-[6%] z-40 w-[90%] max-w-[620px] -translate-x-1/2">
        <Image
          src="/redefine-2026/REDEFINE.png"
          alt="REDEFINE"
          width={781}
          height={120}
          className="h-auto w-full"
          priority
        />
      </div>

      <a
        href="#timeline"
        className="absolute top-[36%] z-40 block h-[66px] w-[220px] transition-all duration-300 hover:scale-105 hover:rotate-1"
        style={{ left: "50%", marginLeft: "-34vw" }}
      >
        <Image
          src="/redefine-2026/Group 28.png"
          alt="Timeline"
          fill
          className="object-contain"
        />
      </a>

      <a
        href="#faq"
        className="absolute top-[56%] z-40 flex items-center gap-[4px] transition-all duration-300 hover:scale-105 hover:-rotate-1"
        style={{ left: "50%", marginLeft: "-34vw" }}
      >
        <div className="relative h-[58px] w-[34px] rotate-[-5deg] translate-y-[2px]">
          <Image src="/redefine-2026/F.png" alt="F" fill className="object-contain" />
        </div>
        <div className="relative h-[58px] w-[36px] rotate-[6deg] -translate-y-[1px]">
          <Image src="/redefine-2026/A.png" alt="A" fill className="object-contain" />
        </div>
        <div className="relative h-[58px] w-[40px] rotate-[-3deg] translate-y-[3px]">
          <Image src="/redefine-2026/Q.png" alt="Q" fill className="object-contain" />
        </div>
      </a>

      <a
        href="#tracks"
        className="absolute top-[36%] z-40 flex items-center gap-[4px] transition-all duration-300 hover:scale-105 hover:rotate-1"
        style={{ left: "50%", marginLeft: "12vw" }}
      >
        <div className="relative h-[58px] w-[34px] rotate-[4deg] -translate-y-[1px]">
          <Image src="/redefine-2026/T.png" alt="T" fill className="object-contain" />
        </div>
        <div className="relative h-[58px] w-[35px] rotate-[-6deg] translate-y-[3px]">
          <Image src="/redefine-2026/R.png" alt="R" fill className="object-contain" />
        </div>
        <div className="relative h-[58px] w-[35px] rotate-[3deg] -translate-y-[2px]">
          <Image src="/redefine-2026/A-1.png" alt="A" fill className="object-contain" />
        </div>
        <div className="relative h-[58px] w-[36px] rotate-[-5deg] translate-y-[1px]">
          <Image src="/redefine-2026/C.png" alt="C" fill className="object-contain" />
        </div>
        <div className="relative h-[58px] w-[36px] rotate-[6deg] -translate-y-[3px]">
          <Image src="/redefine-2026/K.png" alt="K" fill className="object-contain" />
        </div>
        <div className="relative h-[58px] w-[32px] rotate-[-2deg] translate-y-[2px]">
          <Image src="/redefine-2026/S.png" alt="S" fill className="object-contain" />
        </div>
      </a>

      <a
        href="#team-up"
        className="absolute top-[56%] z-40 flex items-center gap-[4px] transition-all duration-300 hover:scale-105 hover:-rotate-1"
        style={{ left: "50%", marginLeft: "12vw" }}
      >
        <div className="relative h-[58px] w-[34px] rotate-[-4deg] translate-y-[2px]">
          <Image src="/redefine-2026/T-1.png" alt="T" fill className="object-contain" />
        </div>
        <div className="relative h-[58px] w-[34px] rotate-[5deg] -translate-y-[2px]">
          <Image src="/redefine-2026/E.png" alt="E" fill className="object-contain" />
        </div>
        <div className="relative h-[58px] w-[35px] rotate-[-3deg] translate-y-[1px]">
          <Image src="/redefine-2026/A-2.png" alt="A" fill className="object-contain" />
        </div>
        <div className="relative mr-[10px] h-[58px] w-[48px] rotate-[6deg] -translate-y-[1px]">
          <Image src="/redefine-2026/M.png" alt="M" fill className="object-contain" />
        </div>
        <div className="relative h-[65px] w-[50px] rotate-[-6deg] translate-y-[3px]">
          <Image src="/redefine-2026/U.png" alt="U" fill className="object-contain" />
        </div>
        <div className="relative h-[58px] w-[34px] rotate-[4deg] -translate-y-[2px]">
          <Image src="/redefine-2026/P.png" alt="P" fill className="object-contain" />
        </div>
      </a>

      <div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2">
        <HeroGraphic />
      </div>

      {/* Polygon 22-1 at the end of the shoulder */}
      <div className="absolute right-0 bottom-0 z-35 left-[50vw] h-[12.5vw] pointer-events-none">
        <Image
          src="/redefine-2026/Polygon 22-1.png"
          alt="Shoulder end polygon"
          fill
          className="object-fill"
        />
      </div>
    </main>
  );
}
