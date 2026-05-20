import { useEffect, useRef } from "react"
import { FaReact } from "react-icons/fa6"

export default function TechStackBlock() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const cards = container.children

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event

      for (const card of cards) {
        const rect = (card as HTMLElement).getBoundingClientRect()
        const x = clientX - rect.left
        const y = clientY - rect.top

        ;(card as HTMLElement).style.setProperty("--mouse-x", `${x}px`)
        ;(card as HTMLElement).style.setProperty("--mouse-y", `${y}px`)
      }
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div>
      <h3>My tech stack</h3>

      <div
        className="group/container flex flex-wrap items-center gap-4 py-8"
        ref={ref}
      >
        <TechStackItem />
        <TechStackItem />
        <TechStackItem />
        <TechStackItem />
        <TechStackItem />
        <TechStackItem />
        <TechStackItem />
        <TechStackItem />
        <TechStackItem />
      </div>
    </div>
  )
}

function TechStackItem() {
  return (
    <div className="group relative aspect-square w-36 overflow-hidden rounded-lg bg-white/2">
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.3),transparent_40%)] opacity-0 transition-opacity duration-150 group-hover/container:opacity-100" />
      <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
      <div className="relative z-20 m-px h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[inherit] bg-[rgb(20,20,20)] p-8">
        <FaReact className="h-full w-full" />
      </div>
    </div>
  )
}
