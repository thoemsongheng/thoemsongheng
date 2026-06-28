import { FaGraduationCap, FaLocationPin, FaReact } from "react-icons/fa6"
import { Fragment, useEffect, useRef } from "react"
import { createFileRoute } from "@tanstack/react-router"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import TechStackBlock from "@/components/tech-stack-block"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <Fragment>
      <Navigation />

      <main className="overflow-x-hidden bg-background">
        {/* Hero section */}
        <HeroSection />

        {/* About section */}
        {/*<AboutSection />*/}
      </main>
    </Fragment>
  )
}

function AboutSection() {
  return (
    <section className="flex w-full flex-col px-4 text-white/90 *:max-w-5xl">
      <div>
        <div className="w-full">
          <h3>About</h3>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            maxime sequi facere consequuntur, quaerat quidem similique molestiae
            tenetur commodi provident cum magnam, quas fugiat nemo dolorem
            praesentium eligendi, corrupti ex iure enim distinctio autem
            recusandae eum! Ullam veritatis neque repellat blanditiis cupiditate
            veniam explicabo quasi aliquid, cumque nesciunt recusandae mollitia
            totam nemo reiciendis quis eveniet iste sint nihil. Ut itaque maxime
            recusandae! Eveniet perferendis maxime temporibus sapiente, nulla
            excepturi vel at id consequatur nisi, cum fugit. Nostrum eos sequi
            veritatis, consequatur fugiat omnis a eligendi quidem ex aperiam?
            Laborum optio commodi dolorum rem excepturi ducimus consequatur
            veniam totam asperiores hic.
          </p>
        </div>
      </div>

      <TechStackBlock />

      <div>
        <h3>Education</h3>

        <div className="relative flex flex-wrap gap-6 border-l pl-6">
          <EducationCard />
          <EducationCard />
          <EducationCard />
        </div>
      </div>
    </section>
  )
}

function EducationCard() {
  return (
    <div className="befor:content-[''] relative h-fit w-full rounded-lg border p-6 before:absolute before:top-[50%] before:-left-6 before:h-0.5 before:w-6 before:translate-y-[-50%] before:bg-white after:absolute after:top-[50%] after:-left-8 after:h-3 after:w-3 after:translate-y-[-50%] after:rounded-full after:bg-white after:content-['']">
      <div>
        <p className="font-thin">2015-2017</p>
      </div>

      <div>
        <h4 className="text-2xl font-bold">Phnom thom Highschool</h4>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 text-sm font-thin text-white/80">
          <FaGraduationCap />
          <span>-</span>
          <p>General knowlegde</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-thin text-white/80">
          <FaLocationPin />
          <span>-</span>
          <p>Phnomthom, Banteay Mean Chey</p>
        </div>
      </div>
    </div>
  )
}
