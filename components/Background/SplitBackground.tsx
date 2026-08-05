import Image from "next/image";
import NoiseOverlay from "./NoiseOverlay";
const threads = [
  {
    src: "/redefine-2026/Vector 31.svg",
    className: "-left-[1%] -top-[2%] w-[280px] z-30",
  },
  {
    src: "/redefine-2026/Vector 32.svg",
    className: "left-[18%] top-[12%] w-[320px] z-30",
  },
  {
    src: "/redefine-2026/Vector 33.svg",
    className: "left-[20%] top-[60%] w-[300px] z-10",
  },
  {
    src: "/redefine-2026/Vector 34.svg",
    className: "right-[83%] top-[60%] w-[250px] z-30",
  },
  {
    src: "/redefine-2026/Vector 35.svg",
    className: "top-[0%] -right-[2%] w-[500px] z-30 rotate-[25deg]",
  },
];
export default function SplitBackground() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-black" />
        <div className="w-1/2 bg-[#C1325F]" />
      </div>

      <NoiseOverlay />

      {threads.map((thread, index) => (
      <div
        key={index}
        className={`pointer-events-none absolute ${thread.className}`}
      >
        <Image
          src={thread.src}
          alt=""
          width={600}
          height={600}
          className="w-full h-auto select-none"
        />
      </div>
    ))}
      <div className="absolute bottom-0 left-7 z-20 w-screen">
        <Image
          src="/redefine-2026/Homepage (4).svg"
          alt="Homepage"
          width={1920}
          height={980}
          priority
          className="w-screen h-screen"
        />
      </div>

      {/* REDEFINE Filled */}
      <div className="pointer-events-none absolute left-1/2 top-[25%] z-10 -translate-x-1/2">
        <div className="relative h-[130px] w-[650px]">
          <Image
            src="/redefine-2026/REDEFINE.png"
            alt=""
            fill
            priority
            className="object-contain -translate-x-[4px] -translate-y-[80%] select-none"
          />
        </div>
      </div>

    
      <div className="absolute inset-x-0 bottom-0 z-30 flex justify-center">
        <div className="relative h-[120vh] w-[70vw]">

          {/* REDEFINE Outline */}
          <div className="pointer-events-none absolute left-1/2 top-[25%] z-40 -translate-x-1/2">
            <div className="relative h-[130px] w-[650px]">
              <Image
                src="/redefine-2026/REDEFINE.svg"
                alt="REDEFINE"
                fill
                priority
                className="object-contain select-none"
              />
            </div>
          </div>


          {/* Reimagine */}
          <div className="absolute left-[50%] top-[55%] z-[60] -translate-x-1/2">
            <Image
              src="/redefine-2026/image.png"
              alt="Reimagine"
              width={200}
              height={55}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
