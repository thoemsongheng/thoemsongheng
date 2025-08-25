import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.page}>
      {/* <Link /> */}
      {/* <Spotlight /> */}
      {/* <header className={styles.navigation_section}>
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
      </header> */}

      {/* <main>
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
          <StackCard />
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
      </main> */}
    </div>
  );
};

export default Home;
