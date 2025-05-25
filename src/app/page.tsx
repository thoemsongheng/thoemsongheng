import Badge from "@/components/badge";
import styles from "./page.module.css";
import Card from "@/components/card";
import Spotlight from "@/components/spotlight";

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

        <nav>
          <ul className={styles.navigation_container}>
            <li>
              <a
                className={styles.link}
                href="#about"
                aria-describedby="link navigate to about's section."
                data-active="true"
              >
                <span className={styles.decoration_bar}></span>
                <span>About</span>
              </a>
            </li>

            <li>
              <a
                className={styles.link}
                href="#experience"
                aria-describedby="link navigate to about's section."
                data-active="true"
              >
                <span className={styles.decoration_bar}></span>
                <span>Experience</span>
              </a>
            </li>

            <li>
              <a
                className={styles.link}
                href="#project"
                aria-describedby="link navigate to about's section."
                data-active="true"
              >
                <span className={styles.decoration_bar}></span>
                <span>Project</span>
              </a>
            </li>
          </ul>
        </nav>

        <ul className={styles.contact_container}>
          <li>
            <a
              className={styles.contact_link}
              href="www.github.com"
              aria-label="github link"
            >
              <img
                className={styles.icon}
                src="/src/assets/icons/github-logo.svg"
                alt="github link icon"
              />
            </a>
          </li>

          <li>
            <a
              className={styles.contact_link}
              href="www.github.com"
              aria-label="github link"
            >
              <img
                className={styles.icon}
                src="/src/assets/icons/github-logo.svg"
                alt="github link icon"
              />
            </a>
          </li>

          <li>
            <a
              className={styles.contact_link}
              href="www.github.com"
              aria-label="github link"
            >
              <img
                className={styles.icon}
                src="/src/assets/icons/github-logo.svg"
                alt="github link icon"
              />
            </a>
          </li>
        </ul>
      </header>

      <main>
        <section id="about">
          <div className={styles.section_title}>
            <h3>About</h3>
          </div>

          <div className={styles.about_content}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptate aut, nemo facilis et aperiam doloribus
              perspiciatis? Magnam harum explicabo eveniet iste doloribus
              dignissimos omnis saepe vero ipsum voluptas animi laborum
              consequatur vitae odit recusandae praesentium itaque laboriosam
              fugiat porro, at quisquam! Fugit eveniet, nam soluta placeat
              numquam neque ullam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              molestiae aut vero suscipit earum, laudantium quo! Illum eos
              officia eveniet quia distinctio explicabo, possimus iure aut
              voluptatibus. Incidunt, vero accusantium?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              corporis deleniti ipsum itaque repellendus quia!
            </p>
          </div>
        </section>

        <section id="experience">
          <div className={styles.section_title}>
            <h3>About</h3>
          </div>

          <div className={styles.experience_content}>
            <ol>
              <li>
                <Card />
              </li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
