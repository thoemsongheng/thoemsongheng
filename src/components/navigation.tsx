import { useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa6"

export default function Navigation() {
  type TRoute = {
    id: number
    name: string
    url: string
    description?: string
  }

  const routes: Array<TRoute> = [
    { id: 1, name: "About", url: "#about", description: "About's section" },
    {
      id: 2,
      name: "Experiences",
      url: "#experiences",
      description: "Experiences's sections",
    },
    {
      id: 3,
      name: "Projects",
      url: "#projects",
      description: "Projects's section",
    },
    {
      id: 4,
      name: "Contact",
      url: "#contact",
      description: "Contact's section",
    },
  ]

  return (
    <nav className="fixed top-0 z-20 h-16 w-full bg-muted/10 backdrop-blur-xs">
      <div className="relative h-full w-full">
        {/* Accent colored on corners*/}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f97316_1.5px,transparent_1.5px),linear-gradient(to_bottom,#f97316_1.5px,transparent_1.5px),linear-gradient(to_left,#f97316_1.5px,transparent_1.5px),linear-gradient(to_top,#f97316_1.5px,transparent_1.5px)] bg-size-[12px_12px] bg-position-[0_0,0_0,100%_100%,100%_100%] bg-no-repeat" />

        <div className="absolute inset-0 flex items-center justify-center p-4 text-sm font-semibold text-foreground">
          <div className="flex w-full items-center justify-between lg:w-4xl">
            <div className="">
              <a href="#">Home</a>
            </div>

            <ul className="flex items-center justify-around gap-4">
              {routes.map((route) => {
                return (
                  <li
                    key={route.id}
                    className="relative rounded-md px-1 py-2 after:invisible after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:duration-150 after:content-[''] hover:after:visible hover:after:w-full"
                  >
                    <a href={route.url}>{route.name}</a>
                  </li>
                )
              })}
            </ul>

            <div>
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Toggle() {
  const [checked, setChecked] = useState(false)

  return (
    <button
      data-state={checked ? "checked" : "unchecked"}
      onClick={() => setChecked((v) => !v)}
      className="group relative h-8 w-14 rounded-full bg-accent/20 shadow-inner transition-colors data-[state=checked]:bg-accent/60"
    >
      <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-slate-100 transition-transform duration-200 group-data-[state=checked]:translate-x-6">
        <FaMoon className="h-full w-full text-slate-600" />
      </span>
    </button>
  )
}
