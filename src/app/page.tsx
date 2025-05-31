import bongit from "@/assets/images/bognit.webp";
import Badge from "@/components/badge";
import Card from "@/components/card";
import Section from "@/components/section";
import Spotlight from "@/components/spotlight";
import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/components/navigation";

const Home = () => {
  return (
    <div className={styles.page}>
      <Spotlight />
      <header className={styles.navigation_section}>
        <div className={styles.hero_container}>
          <h1>Thoem Songheng</h1>
          <h2>Front-end Developer</h2>
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

        <Contact />
      </header>

      <main>
        <Section id="about" title="About">
          <Section.Content padding="medium">
            <p>
              Hi, I'm Songheng, or you can call me Heng. I am a junior
              full-stack web developer from <span>Cambodia</span>.
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
              the future. In my free time, I enjoy watching movies, listening to
              music, gaming, and trying to recreate cool things I see on the
              internet.
            </p>
          </Section.Content>
          <div className={styles.about_content}></div>
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
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                        molestiae aut vero suscipit earum, laudantium quo! Illum eos
                        officia eveniet quia distinctio explicabo, possimus iure aut
                        voluptatibus. Incidunt, vero accusantium?`}
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
                <p>2024 - FEB, 2025</p>
              </Card.Header>
              <Card.Content>
                <Card.Title
                  title="Front-End Developer"
                  subTitles={["BONG-IT", "MEDIALOAD"]}
                />

                <Card.Description
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                        molestiae aut vero suscipit earum, laudantium quo! Illum eos
                        officia eveniet quia distinctio explicabo, possimus iure aut
                        voluptatibus. Incidunt, vero accusantium?`}
                />

                <Card.Footer>
                  <Badge label="NextJS" />
                  <Badge label="Apollo GraphQL" />
                  <Badge label="TypeScript" />
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
                  src="/assets/images/bognit.webp"
                  fill
                  objectFit="cover"
                  alt="bong-it landing page site."
                />
              </Card.Header>
              <Card.Content>
                <Card.Title title="BONG-IT.net" />

                <Card.Description
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                        molestiae aut vero suscipit earum.`}
                />

                <Card.Footer>
                  <Badge label="NextJS" />
                  <Badge label="SASS" />
                  <Badge label="TypeScript" />
                </Card.Footer>
              </Card.Content>
            </Card>
          </Section.Content>
        </Section>

        <footer className={styles.footer_container}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            earum dolores aliquid numquam minus blanditiis non inventore
            obcaecati. Sit dignissimos excepturi tempora repellendus possimus?
            Nihil voluptatibus quis similique unde vel vero perspiciatis ratione
            pariatur enim!
            <span>
              <a href="https://icons8.com/">icons8</a>
            </span>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Home;

const Contact = () => {
  return (
    <ul className={styles.contact_container}>
      <li>
        <a
          className={styles.contact_link}
          href="https://www.github.com"
          aria-label="github link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
        </a>
      </li>

      <li>
        <a
          className={styles.contact_link}
          href="https://www.github.com"
          aria-label="g-mail link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M2 9.64V18c0 1.657 1.343 3 3 3h2v-8.043L2 9.64zM17 12.98V21h2c1.657 0 3-1.343 3-3V9.689L17 12.98zM7 5.065L6.061 4.442C5.277 3.92 4.32 3.855 3.479 4.262 2.64 4.668 2.001 5.852 2.001 6.784V8.44L7 11.757zm9 .656l-4 2.66-4-2.653v6.693l4 2.63 4-2.611zm4.52-1.47C19.68 3.844 18.723 3.909 17.941 4.431L17 5.057v6.726l4.999-3.29V6.777c0-.932-.64-2.119-1.479-2.526z"></path>
          </svg>
        </a>
      </li>

      <li>
        <a
          className={styles.contact_link}
          href="https://www.github.com"
          aria-label="linkedin link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 50 50"
          >
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
        </a>
      </li>

      <li>
        <a
          className={styles.contact_link}
          href="https://www.github.com"
          aria-label="facebook link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 50 50"
          >
            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
          </svg>
        </a>
      </li>
    </ul>
  );
};
