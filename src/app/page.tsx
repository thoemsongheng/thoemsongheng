import Badge from "@/components/badge";
import styles from "./page.module.css";
import Card from "@/components/card";
import Spotlight from "@/components/spotlight";

import bongit from "@/assets/images/bognit.webp";
import Image from "next/image";

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

        <nav className={styles.navigation_container}>
          <ul>
            <li>
              <a
                className={styles.link}
                href="#about"
                aria-describedby="link navigate to about's section."
                data-active="true"
              >
                <span className={styles.decoration_bar} />
                <span>ABOUT</span>
              </a>
            </li>

            <li>
              <a
                className={styles.link}
                href="#experience"
                aria-describedby="link navigate to experience's section."
                data-active="true"
              >
                <span className={styles.decoration_bar} />
                <span>EXPERIENCE</span>
              </a>
            </li>

            <li>
              <a
                className={styles.link}
                href="#project"
                aria-describedby="link navigate to project's section."
                data-active="true"
              >
                <span className={styles.decoration_bar} />
                <span>PROJECT</span>
              </a>
            </li>
          </ul>
        </nav>

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
                width="44"
                height="44"
                viewBox="0 0 30 30"
                fill="white"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </header>

      <main>
        <section className={styles.about_section} id="about">
          <div className={styles.section_title}>
            <h3>About</h3>
          </div>

          <div className={styles.about_content}>
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
          </div>
        </section>

        <section className={styles.experience_section} id="experience">
          <div className={styles.section_title}>
            <h3>About</h3>
          </div>

          <div className={styles.experience_content}>
            <ol>
              <li>
                <Card
                  type="experience"
                  title="FEB, 2025 - PRESENT"
                  company="BONG-IT"
                  role="Full-stack Developer"
                  description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  molestiae aut vero suscipit earum, laudantium quo! Illum eos
                  officia eveniet quia distinctio explicabo, possimus iure aut
                  voluptatibus. Incidunt, vero accusantium?"
                  footer={
                    <>
                      <Badge label="NextJS" />
                      <Badge label="Apollo GraphQL" />
                      <Badge label="MSSQL" />
                      <Badge label="TypeScript" />
                    </>
                  }
                />
              </li>

              <li>
                <Card
                  type="experience"
                  title="2024 - 2025"
                  company="BONG-IT"
                  role="Front-end Developer"
                  description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  molestiae aut vero suscipit earum, laudantium quo! Illum eos
                  officia eveniet quia distinctio explicabo, possimus iure aut
                  voluptatibus. Incidunt, vero accusantium?"
                  footer={
                    <>
                      <Badge label="NextJS" />
                      <Badge label="TypeScript" />
                      <Badge label="GraphQL" />
                    </>
                  }
                />
              </li>

              <li>
                <Card
                  type="experience"
                  title="2021 - 2023"
                  company="L192, Mediaload and Little Digital"
                  role="IT ASSISTANT AND SUPPORT"
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  molestiae aut vero suscipit earum, laudantium quo! Illum eos
                  officia eveniet quia distinctio explicabo, possimus iure aut
                  voluptatibus. Incidunt, vero accusantium?`}
                  footer={
                    <>
                      <Badge label="Software" />
                      <Badge label="Hardware" />
                      <Badge label="Network" />
                    </>
                  }
                />
              </li>
            </ol>
          </div>
        </section>

        <section>
          <div className={styles.section_title}>
            <h3>About</h3>
          </div>

          <ul>
            <li>
              <li>
                <Card
                  type="project"
                  image={
                    <Image
                      width={160}
                      height={90}
                      alt="bong-it project image"
                      src={bongit}
                    />
                  }
                  company="BONG-IT Landing page"
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  molestiae aut vero suscipit earum, laudantium quo!`}
                  footer={
                    <>
                      <Badge label="Software" />
                      <Badge label="Hardware" />
                      <Badge label="Network" />
                    </>
                  }
                />
              </li>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
