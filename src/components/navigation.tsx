export default function Navigation() {
  return (
    <nav className="sticky top-0 w-full *:px-4">
      <div className="group inert-0 relative top-0 left-0 flex h-16 w-full flex-col items-center justify-center border border-white/5 bg-[#091520]/40 backdrop-blur-xs">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f97316_1.5px,transparent_1.5px),linear-gradient(to_bottom,#f97316_1.5px,transparent_1.5px),linear-gradient(to_left,#f97316_1.5px,transparent_1.5px),linear-gradient(to_top,#f97316_1.5px,transparent_1.5px)] bg-size-[12px_12px] bg-position-[0_0,0_0,100%_100%,100%_100%] bg-no-repeat" />
      </div>

      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-xs text-white/90">
        <div className="flex w-full max-w-5xl items-center justify-between">
          <div>Home</div>
          <ul className="flex items-center justify-around gap-4">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>

            <li>
              <a href="">Project</a>
            </li>

            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
