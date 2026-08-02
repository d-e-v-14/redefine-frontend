import Image from "next/image";
import HeroGraphic from "@/components/HeroGraphic";

export default function Home() {
  return (
    <main className="relative h-screen min-h-screen w-full overflow-hidden bg-[#000000] text-white">
      <div className="absolute inset-0 bg-[#000000]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#c1325f]" />

      {/* Background artwork */}
      <div className="absolute left-[-8%] top-[-10%] w-[50vw] h-[110vh] opacity-40 z-10 pointer-events-none">
        <Image
          src="/redefine-2026/Vector 32.png"
          alt="Curve"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-[12%] top-[5%] w-[30vw] h-[90vh] opacity-35 z-10 pointer-events-none">
        <Image
          src="/redefine-2026/Vector 26.png"
          alt="Curve"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-[2%] bottom-[12%] w-[280px] h-[400px] opacity-45 z-10 pointer-events-none">
        <Image
          src="/redefine-2026/Thread 1.png"
          alt="Curve"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-[-5%] top-[2%] w-[45vw] h-[100vh] opacity-45 z-10 pointer-events-none filter brightness-0">
        <Image
          src="/redefine-2026/Vector 28.png"
          alt="Curve"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute right-[10%] bottom-[-10%] w-[35vw] h-[90vh] opacity-40 z-10 pointer-events-none filter brightness-0">
        <Image
          src="/redefine-2026/Vector 32.png"
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
        <div className="absolute right-[110px] top-[40px] z-40 w-[220px] h-[200px] pointer-events-none">
          <Image
            src="/redefine-2026/image 5.png"
            alt="Pointer Arrow"
            fill
            className="object-contain"
          />
        </div>
        {/* Register Button Image */}
        <a href="#register" className="relative block hover:scale-[1.02] transition-transform duration-200">
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

      <div className="pointer-events-none absolute right-[2.6%] top-[18%] z-30 h-[180px] w-[180px] rounded-full border-[3px] border-[#000000] border-dashed opacity-80" />
      <div className="pointer-events-none absolute right-[11%] top-[12%] z-30 h-[26px] w-[26px] rotate-45 border-[3px] border-[#000000] opacity-80" />
      <div className="pointer-events-none absolute right-[14%] top-[18%] z-30 h-[22px] w-[22px] rotate-[40deg] border-[3px] border-[#000000] opacity-80" />
      <div className="pointer-events-none absolute right-[17%] top-[8.8%] z-30 h-[20px] w-[20px] rounded-full border-[3px] border-[#000000] opacity-80" />
      <div className="pointer-events-none absolute right-[20%] top-[18.6%] z-30 h-[46px] w-[46px] rotate-[58deg] border-[3px] border-[#000000] opacity-80" />

      <div className="absolute left-1/2 top-[6%] z-30 -translate-x-1/2 w-[90%] max-w-[620px]">
        <Image
          src="/redefine-2026/REDEFINE-1.png"
          alt="REDEFINE"
          width={781}
          height={120}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="absolute left-[8%] top-[38%] z-40 w-[220px] h-[66px]">
        <Image
          src="/redefine-2026/Group 28.png"
          alt="Timeline"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute left-[16%] top-[58%] z-40 flex items-center gap-[4px]">
        <div className="relative w-[34px] h-[58px] rotate-[-5deg] translate-y-[2px]">
          <Image src="/redefine-2026/F.png" alt="F" fill className="object-contain" />
        </div>
        <div className="relative w-[36px] h-[58px] rotate-[6deg] -translate-y-[1px]">
          <Image src="/redefine-2026/A.png" alt="A" fill className="object-contain" />
        </div>
        <div className="relative w-[40px] h-[58px] rotate-[-3deg] translate-y-[3px]">
          <Image src="/redefine-2026/Q.png" alt="Q" fill className="object-contain" />
        </div>
      </div>

      <div className="absolute right-[18%] top-[32%] z-40 flex items-center gap-[4px]">
        <div className="relative w-[34px] h-[58px] rotate-[4deg] -translate-y-[1px]">
          <Image src="/redefine-2026/T.png" alt="T" fill className="object-contain" />
        </div>
        <div className="relative w-[35px] h-[58px] rotate-[-6deg] translate-y-[3px]">
          <Image src="/redefine-2026/R.png" alt="R" fill className="object-contain" />
        </div>
        <div className="relative w-[35px] h-[58px] rotate-[3deg] -translate-y-[2px]">
          <Image src="/redefine-2026/A-1.png" alt="A" fill className="object-contain" />
        </div>
        <div className="relative w-[36px] h-[58px] rotate-[-5deg] translate-y-[1px]">
          <Image src="/redefine-2026/C.png" alt="C" fill className="object-contain" />
        </div>
        <div className="relative w-[36px] h-[58px] rotate-[6deg] -translate-y-[3px]">
          <Image src="/redefine-2026/K.png" alt="K" fill className="object-contain" />
        </div>
        <div className="relative w-[32px] h-[58px] rotate-[-2deg] translate-y-[2px]">
          <Image src="/redefine-2026/S.png" alt="S" fill className="object-contain" />
        </div>
      </div>

      <div className="absolute right-[8%] top-[52%] z-40 flex items-center gap-[4px]">
        <div className="relative w-[34px] h-[58px] rotate-[-4deg] translate-y-[2px]">
          <Image src="/redefine-2026/T-1.png" alt="T" fill className="object-contain" />
        </div>
        <div className="relative w-[34px] h-[58px] rotate-[5deg] -translate-y-[2px]">
          <Image src="/redefine-2026/E.png" alt="E" fill className="object-contain" />
        </div>
        <div className="relative w-[35px] h-[58px] rotate-[-3deg] translate-y-[1px]">
          <Image src="/redefine-2026/A-2.png" alt="A" fill className="object-contain" />
        </div>
        <div className="relative w-[48px] h-[58px] rotate-[6deg] -translate-y-[1px] mr-[10px]">
          <Image src="/redefine-2026/M.png" alt="M" fill className="object-contain" />
        </div>
        <div className="relative w-[50px] h-[65px] rotate-[-6deg] translate-y-[3px]">
          <Image src="/redefine-2026/U.png" alt="U" fill className="object-contain" />
        </div>
        <div className="relative w-[34px] h-[58px] rotate-[4deg] -translate-y-[2px]">
          <Image src="/redefine-2026/P.png" alt="P" fill className="object-contain" />
        </div>
      </div>

      <div className="absolute left-1/2 bottom-[45px] z-30 -translate-x-1/2">
        <HeroGraphic />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-50 flex h-[92px] items-center justify-between px-[2.8%] pb-4 bg-black border-t border-white/5">
        <div className="flex items-center gap-4">
          <Image
            src="/redefine-2026/image 2.png"
            alt="Redefine Logo"
            width={64}
            height={62}
            className="h-auto w-[64px]"
          />
        </div>

        <div className="flex items-center gap-14 text-white">
          <span className="relative text-[0.9rem] font-black uppercase tracking-[0.3em] cursor-pointer">
            TIMELINE
            {/* Custom hand-drawn style underline loop */}
            <svg className="absolute bottom-[-12px] left-[-10px] w-[120%] h-[15px] text-white" viewBox="0 0 100 15" fill="none" stroke="currentColor">
              <path
                d="M 5 6 L 85 6 C 92 6, 96 2, 94 9 C 92 13, 88 13, 88 9 C 88 5, 94 5, 98 9"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[0.9rem] font-black uppercase tracking-[0.3em] opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            TRACKS
          </span>
          <span className="text-[0.9rem] font-black uppercase tracking-[0.3em] opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            TEAM UP
          </span>
          <span className="text-[0.9rem] font-black uppercase tracking-[0.3em] opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            FAQ
          </span>
        </div>

        <a href="#register" className="rounded-full border-[2px] border-white/80 bg-black px-7 py-3 text-[0.9rem] font-black uppercase tracking-[0.24em] text-white hover:bg-white hover:text-black transition-colors duration-200 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          REGISTER
        </a>
      </div>
    </main>
  );
}
