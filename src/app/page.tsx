import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";
import Spotlight from "@/components/ui/sportlight";
import ContactSection from "@/components/widget/contact-section";
import Navigation from "@/components/widget/navigation";
import Section from "@/components/widget/section";
import { TechStack, TechStackItem } from "@/components/widget/stack-card";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <Link /> */}
      <Spotlight />
      <header className={styles.navigation_section}>
        <div className={styles.hero_container}>
          <h1>Thoem Songheng</h1>
          <h2>I build things for the web.</h2>
          <p>
            A passionate, motivated <span>front-end</span> and a fresh{" "}
            <span>full-stack</span> developer.
          </p>
        </div>

        <Navigation
          items={[
            { label: "ABOUT", url: "#about" },
            { label: "EXPERIENCE", url: "#experience" },
            { label: "PROJECT", url: "#project" },
          ]}
        />

        <ContactSection />
      </header>

      <main>
        <Section id="about" title="About">
          <Section.Content padding="medium">
            <p>
              Hi, I'm Songheng, or you can call me Heng. I am a junior
              full-stack web developer from{" "}
              <span className={styles.contry}>Cambodia</span>.
            </p>

            <p>
              I graduated with a degree in Computer Science from{" "}
              <span>Norton University</span> in 2021 and have been pursuing my
              coding career ever since. I didn't start programming right away,
              but after some struggles, I made it—
              <span>{`and you can too. :)`}</span>
            </p>

            <p>
              Currently, I work at <span>BONG-IT.net</span> as a full-stack
              developer. I look forward to improving my skills even further in
              the future.
            </p>
            <p>Got an idea? I might be able to make it happen.</p>
          </Section.Content>
        </Section>

        <Section>
          <Section.Content>
            <TechStack>
              <TechStackItem>
                <img src="assets/icons/react-js.svg" alt="react js logo" />
              </TechStackItem>

              <TechStackItem>
                <img src="assets/icons/next-js.svg" alt="next js logo" />
              </TechStackItem>

              <TechStackItem>
                <img src="assets/icons/graphql.svg" alt="apollo client logo" />
              </TechStackItem>

              <TechStackItem>
                <img src="assets/icons/apollo.svg" alt="apollo client logo" />
              </TechStackItem>

              <TechStackItem>
                <img src="assets/icons/node-js.svg" alt="apollo client logo" />
              </TechStackItem>

              <TechStackItem>
                <img
                  src="assets/icons/typescript.svg"
                  alt="apollo client logo"
                />
              </TechStackItem>

              <TechStackItem>
                <img
                  src="assets/icons/tailwind-css.svg"
                  alt="apollo client logo"
                />
              </TechStackItem>
            </TechStack>
          </Section.Content>
        </Section>

        <Section id="experience" title="Experience">
          <Section.Content padding="small">
            <Card>
              <Card.Header>
                <p>FEB, 2025 - PRESENT</p>
              </Card.Header>
              <Card.Content>
                <Card.Title
                  title="Full-Stack Developer"
                  subTitles={["BONG-IT"]}
                />
                <Card.Description
                  description={`I work across the full stack to deliver complete web solutions — creating modern UIs, integrating APIs, and managing server-side logic and databases. My focus is on building clean, efficient, and maintainable systems that provide seamless user experiences.`}
                />

                <Card.Footer>
                  <Badge label="NextJS" />
                  <Badge label="GraphQL" />
                  <Badge label="MSSQL" />
                  <Badge label="TypeScript" />
                </Card.Footer>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <p>FEB, 2023 - FEB, 2025</p>
              </Card.Header>
              <Card.Content>
                <Card.Title
                  title="Front-End Developer"
                  subTitles={["BONG-IT", "MEDIALOAD"]}
                />

                <Card.Description
                  description={`I develop dynamic and accessible front-end applications, turning design concepts into functional user interfaces. My work involves optimizing performance, managing state, and ensuring consistent UI behavior across devices and browsers.`}
                />

                <Card.Footer>
                  <Badge label="NextJS" />
                  <Badge label="ReactJS" />
                  <Badge label="Apollo GraphQL" />
                  <Badge label="TypeScript" />
                </Card.Footer>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <p>JAN 2021 - FEB, 2023</p>
              </Card.Header>
              <Card.Content>
                <Card.Title
                  title="Front-End Developer"
                  subTitles={["LITTLE DIGITAL", "L192", "MEDIALOAD"]}
                />

                <Card.Description
                  description={`I diagnose and resolve system, software, and network issues while assisting users with technical challenges. My focus is on delivering reliable support, maintaining system stability, and ensuring minimal downtime across IT environments.`}
                />

                <Card.Footer>
                  <Badge label="Software" />
                  <Badge label="Hardware" />
                  <Badge label="Network" />
                </Card.Footer>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <p>2019 - 3 MONTH</p>
              </Card.Header>
              <Card.Content>
                <Card.Title
                  title="CCTV Technician"
                  subTitles={["PSC Computer"]}
                />

                <Card.Description
                  description={`I specialize in installing and configuring CCTV systems, setting up DVR/NVR units, and managing network integrations. My work focuses on ensuring clear video coverage, stable connections, and long-term system reliability.`}
                />

                <Card.Footer>
                  <Badge label="CCTV" />
                </Card.Footer>
              </Card.Content>
            </Card>
          </Section.Content>
        </Section>

        <Section id="project" title="Project">
          <Section.Content padding="small">
            <Card inline>
              <Card.Header>
                <Image
                  src="/assets/images/fallback.svg"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  alt="nano sound inventory management system"
                  style={{ objectFit: "contain" }}
                />
              </Card.Header>
              <Card.Content>
                <Card.Title title="NANO INVENTORY (Private)" />

                <Card.Description
                  description={`Full-stack inventory management system with real-time stock tracking, sales management, and reporting. Built with NextJS, Node.js, and MSSQL for a fast and reliable workflow.`}
                />

                <Card.Footer>
                  <Badge label="NextJS" />
                  <Badge label="Apollo" />
                  <Badge label="Polaris" />
                  <Badge label="TypeScript" />
                </Card.Footer>
              </Card.Content>
            </Card>

            <Card inline>
              <Card.Header>
                <Image
                  src="/assets/images/fallback.svg"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  alt="Klahan HR admin panel"
                  style={{ objectFit: "contain" }}
                />
              </Card.Header>
              <Card.Content>
                <Card.Title title="Klahan HR (Private)" />

                <Card.Description
                  description={`A web-based HR management admin panel built to support an external mobile app. I developed and optimized the front-end interface to manage employee data, attendance, and user permissions efficiently.`}
                />

                <Card.Footer>
                  <Badge label="NextJS" />
                  <Badge label="Apollo" />
                  <Badge label="TypeScript" />
                </Card.Footer>
              </Card.Content>
            </Card>

            <Card inline>
              <Card.Header>
                <Image
                  src="/assets/images/bognit.webp"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  alt="nano sound inventory management system"
                  style={{ objectFit: "contain" }}
                />
              </Card.Header>
              <Card.Content>
                <Card.Title title="BONG-IT.net" />

                <Card.Description
                  description={`Fully responsive business landing page built with React and Tailwind. Optimized for SEO, fast loading, and clear brand presentation.`}
                />

                <Card.Footer>
                  <Badge label="NextJS" />
                  <Badge label="SCSS" />
                  <Badge label="TypeScript" />
                </Card.Footer>
              </Card.Content>
            </Card>

            <Card inline>
              <Card.Header>
                <Image
                  src="/assets/images/fallback.svg"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  alt="simple typing game"
                  style={{ objectFit: "contain" }}
                />
              </Card.Header>
              <Card.Content>
                <Card.Title title="TypeMeter (Coming soon)" />

                <Card.Description description={`Speed typing game`} />

                <Card.Footer>
                  <Badge label="NextJS" />
                  <Badge label="TailWind" />
                  <Badge label="Shadcn" />
                  <Badge label="Framer Motion" />
                  <Badge label="TypeScript" />
                </Card.Footer>
              </Card.Content>
            </Card>
          </Section.Content>
        </Section>

        <footer className={styles.footer_container}>
          <p>
            Thanks for stopping by! Let’s build something awesome together — ©
            2025 Songheng Thoem
            <span>
              <a href="https://icons8.com/"> icons8</a>
            </span>
          </p>
        </footer>
      </main>
    </div>
  );
}
