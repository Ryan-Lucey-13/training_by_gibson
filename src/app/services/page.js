import styles from "./services.module.css";
import RootLayout from '../layout';
import TwoPanelFooter from '../components/TwoPanelFooter/TwoPanelFooter.js';

export default function Services() {
  return (
    <div>
      <div className={styles.TBGServicesHeader}>
        <div className={styles.TBGServicesHeaderLeft}>
          <h1>Wellness isn't one thing. It's everything.</h1>
          <p>Helping make your health a priority.</p>
        </div>
        <div className={styles.TBGServicesHeaderRight}>
          <img className={styles.TBGServicesHeaderImage} src='/images/gibsonflex2.jpg' />
        </div>
      </div>
      <div className={styles.TBGServicesSection}>
        <div className={styles.TBGServicesSectionLeft}>
          <h1>Custom Programs</h1>
          <p>For each client, I build an individualized training program that helps build your functional strength and mobility to help you look good and feel even better.</p>
        </div>
        <div className={styles.TBGServicesSectionRight}>
          <img className={styles.TBGServicesSectionImage} src='/images/gibsonflex2.jpg' />
        </div>
      </div>
      <div className={styles.TBGServicesSection}>
        <div className={styles.TBGServicesSectionLeft}>
          <h1>Private Training Sessions</h1>
          <p>One on One training sessions so I can teach you to train confidently, while I help maximize your results.</p>
        </div>
        <div className={styles.TBGServicesSectionRight}>
          <img className={styles.TBGServicesSectionImage} src='/images/gibsonflex2.jpg' />
        </div>
      </div>
      <div className={styles.TBGServicesSection}>
        <div className={styles.TBGServicesSectionLeft}>
          <h1>Virtual Training</h1>
          <p>Train with me from anywhere in the world. I can help you reach your goals at any time and from any place.</p>
        </div>
        <div className={styles.TBGServicesSectionRight}>
          <img className={styles.TBGServicesSectionImage} src='/images/gibsonflex2.jpg' />
        </div>
      </div>
      <div className={styles.TBGServicesSection}>
        <div className={styles.TBGServicesSectionLeft}>
          <h1>Nutrition and Meal Plans</h1>
          <p>With science-based nutrition programs designed to fuel your workouts, I'll help you eat to train and train to eat.</p>
        </div>
        <div className={styles.TBGServicesSectionRight}>
          <img className={styles.TBGServicesSectionImage} src='/images/chef (2).jpg' />
        </div>
      </div>
      <TwoPanelFooter/>
    </div>
  );
}