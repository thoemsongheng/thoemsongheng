import {
  FaSquareEnvelope,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
} from "react-icons/fa6"
import profile_pic from "@/assets/profile.jpg"

export default function HeroSection() {
  return (
    <section className="relative top-0 flex h-screen w-screen flex-col items-center justify-center p-0">
      {/* Square background styles  */}
      <div
        className="bg-square-grid absolute h-full w-full"
        aria-hidden="true"
      />

      {/* Accent colored background*/}
      <div
        className="bg-gradient-accent-1 absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="bg-gradient-accent-2 absolute inset-0"
        aria-hidden="true"
      />

      {/* Hero section contents*/}
      <div className="flex max-w-5xl gap-4">
        <div className="border border-[#091520]/40">
          <div className="group relative border border-white/5 object-cover">
            {/* Accent colored corner*/}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f97316_1.5px,transparent_1.5px),linear-gradient(to_bottom,#f97316_1.5px,transparent_1.5px),linear-gradient(to_left,#f97316_1.5px,transparent_1.5px),linear-gradient(to_top,#f97316_1.5px,transparent_1.5px)] bg-size-[16px_16px] bg-position-[0_0,0_0,100%_100%,100%_100%] bg-no-repeat" />
            <div className="flex aspect-3/4 h-56 max-h-100 w-full items-center justify-center overflow-hidden">
              <img src={profile_pic} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col gap-3 text-white/90">
          <h1 className="text-3xl font-semibold">THOEM SONGHENG</h1>
          <div>
            <h2 className="text-xl">Full-stack web developer</h2>
            <p className="text-xl font-thin">I build thing for the web.</p>
          </div>
        </div>
      </div>

      {/* Social link */}
      <div className="absolute bottom-20 left-0 flex w-full items-center justify-evenly gap-4 px-10">
        <div className="text-white">
          <a href="">
            <FaSquareFacebook className="h-12 w-12" />
          </a>
        </div>

        <div className="text-white">
          <a href="">
            <FaSquareInstagram className="h-12 w-12" />
          </a>
        </div>

        <div className="text-white">
          <a href="">
            <FaSquareGithub className="h-12 w-12" />
          </a>
        </div>

        <div className="text-white">
          <a href="">
            <FaSquareEnvelope className="h-12 w-12" />
          </a>
        </div>
      </div>
    </section>
  )
}
