import type { ReactElement } from "react"

function Card() {
  return (
    <div className="group relative flex h-80 w-64 flex-col items-center justify-center border border-white/5 bg-[#091520]/40 backdrop-blur-xs transition-all hover:bg-[#0c1c2b]/60">
      {/* Corner Brackets */}
      <div
        className="pointer-events-none absolute -inset-px"
        style={{
          background: `
            linear-gradient(to right, #f97316 1.5px, transparent 1.5px) 0 0,
            linear-gradient(to bottom, #f97316 1.5px, transparent 1.5px) 0 0,
            linear-gradient(to left, #f97316 1.5px, transparent 1.5px) 100% 100%,
            linear-gradient(to top, #f97316 1.5px, transparent 1.5px) 100% 100%
          `,
          backgroundSize: "12px 12px",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Optional: Tiny Index Numbers like the '01' in your image */}
      <span className="absolute top-3 left-4 font-mono text-[10px] text-slate-600">
        01
      </span>

      {/* Icon Area */}
      <div className="mb-6 text-orange-400/90">
        {/* {Icon && <Icon size={48} strokeWidth={1.2} />} */}
      </div>

      {/* Text Content */}
      <div className="text-center">
        <h3 className="text-xs font-bold tracking-[0.25em] text-white uppercase">
          THOEM SONGHENG
        </h3>
        <div className="mx-auto my-3 h-px w-4 bg-slate-700" />
        <p className="text-[9px] font-medium tracking-[0.2em] text-slate-500 uppercase">
          {/* <img src={profile} /> */}
        </p>
      </div>
    </div>
  )
}

export { Card }

const Test = ({ children }: { children: ReactElement }) => {
  const gridStyle = {
    backgroundImage: `
      linear-gradient(rgba(51, 65, 85, 0.1) 1px, transparent 1px), 
      linear-gradient(90deg, rgba(51, 65, 85, 0.1) 1px, transparent 1px),
      linear-gradient(rgba(71, 85, 105, 0.25) 2px, transparent 2px),
      linear-gradient(90deg, rgba(71, 85, 105, 0.25) 2px, transparent 2px)
    `,
    backgroundSize: "50px 50px, 50px 50px, 200px 200px, 200px 200px",
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#040a0f]">
      {/* 1. The Grid Layer (Minor 1px lines, Major 2px lines every 4x4) */}
      <div className="absolute inset-0" style={gridStyle} />
      {/* 2. Primary Orange Glow (Top Center) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(251,146,60,0.1)_0%,_transparent_70%)]"
        aria-hidden="true"
      />
      {/* 3. Subtle Bottom Orange Accent
      <div
        className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(circle_at_50%_120%,_rgba(251,146,60,0.08)_0%,_transparent_70%)]"
        aria-hidden="true"
      /> */}
      {/* Content Container */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  )
}
