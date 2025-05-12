import styles from "./contact.module.css";
import RootLayout from '../layout';
import ContactForm from '../components/ContactForm/ContactForm.js';
import { attributes as contactAttributes } from '../../content/contact.md';

export default function Contact() {
  return (
    <div>
      <div className={styles.TBGContactHeader}>
        <div className={styles.TBGContactHeaderLeft}>
          <h1>{contactAttributes.title}</h1>
          <p>{contactAttributes.subtitle}</p>
        </div>
        <div className={styles.TBGContactHeaderRight}>
          <img className={styles.TBGContactHeaderImage} src={contactAttributes.headerImage}/>
        </div>
      </div>
      <ContactForm />
      <div className={styles.TBGContactResultsSection}>
        <div className={styles.TBGContactResultsSectionLeft}>
          <img
            className={styles.TBGContactResultsSectionImage}
            src={contactAttributes.testimonial.image}
            alt="Testimonial"
          />
        </div>
        <div className={styles.TBGContactResultsSectionRight}>
          <h4>'{contactAttributes.testimonial.review}'</h4>
          <p>{contactAttributes.testimonial.name}</p>
          <p>{contactAttributes.testimonial.location}</p>
        </div>
      </div>
      <div className={styles.TBGContactSocialsPanel}>
        <h2>{contactAttributes.socials.title}</h2>
        <p>{contactAttributes.socials.subtitle}</p>
        {contactAttributes.socials.links?.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.TBGSocialsLinks}
          >
            <img
              className={styles.TBGSocialsIcon}
              src={social.icon}
              alt={`${social.platform} link`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}