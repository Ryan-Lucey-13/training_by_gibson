import styles from "./contact.module.css";
import RootLayout from '../layout';
import ContactForm from '../components/ContactForm/ContactForm.js';

export default function Contact() {
  return (
    <div>
      <div className={styles.TBGContactHeader}>
        <div className={styles.TBGContactHeaderLeft}>
          <h1>If you're ready to reach your goals, I'm ready to help.</h1>
          <p>Fill out the form below to get in touch and set up a consultation.</p>
        </div>
        <div className={styles.TBGContactHeaderRight}>
          <img className={styles.TBGContactHeaderImage} src='/images/gibsonflex.jpg'/>
        </div>
      </div>
      <ContactForm />
      <div className={styles.TBGContactResultsSection}>
        <div className={styles.TBGContactResultsSectionLeft}>
            <img className={styles.TBGContactResultsSectionImage} src='/images/Results.jpg'/>
        </div>
        <div className={styles.TBGContactResultsSectionRight}>
          <h4>'This service helped me transform my health and fitness! Highly recommend!'</h4>
          <p>John Doe</p>
          <p>Brooklyn</p>
        </div>
      </div>
      <div className={styles.TBGContactSocialsPanel}>
        <h2>Stay Updated</h2>
        <p>Follow Gibson on social media and gets and tricks on how to improve your well-being</p>
        <img className={styles.TBGInstagramIcon} src="/images/instagram.png" alt="instagram"/>
      </div>
    </div>
  );
}