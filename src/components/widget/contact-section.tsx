import styles from "./contact-section.module.css";

const contacts = [
  {
    id: 1,
    name: "github",
    description: "Github link icon",
    url: "https://github.com/thoemsongheng",
    src: "assets/icons/github.svg",
  },
  {
    id: 2,
    name: "gmail",
    description: "Email link icon",
    url: "mailto:thoemsongheng99@gmail.com",
    src: "assets/icons/gmail.svg",
  },
  // {
  //   id: 3,
  //   name: "linkedin",
  //   description: "Linkedin link icon",
  //   url: "https://www.github.com",
  //   src: "assets/icons/linkedin.svg",
  // },
  // {
  //   id: 4,
  //   name: "facebook",
  //   description: "Facebook link icon",
  //   url: "https://www.github.com",
  //   src: "assets/icons/facebook.svg",
  // },
];

export default function ContactSection() {
  return (
    <ul className={styles.contact_container}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <a
            className={styles.contact_link}
            href={contact.url}
            aria-label={contact.description}
          >
            <img src={contact.src} alt={contact.description} />
          </a>
        </li>
      ))}
    </ul>
  );
}
