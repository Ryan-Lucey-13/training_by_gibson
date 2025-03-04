import styles from "./about.module.css";
import Link from 'next/link';
import RootLayout from '../layout';
import TwoPanelFooter from '../components/TwoPanelFooter/TwoPanelFooter.js';

export default function About() {
  return (
    <div>
      <div className={styles.TBGAboutHeader}>
        <div className={styles.TBGAboutHeaderLeft}>
          <h1>From Chef to Trainer</h1>
          <p>I had a strange path to get here, but it all makes sense.</p>
        </div>
        <div className={styles.TBGAboutHeaderRight}>
          <img className={styles.TBGAboutHeaderImage} src='/images/chef (3).jpg'/>
        </div>
      </div>
      <div className={styles.TBGAboutBio}>
        <p>
          Hey, I'm Gibson Ho, a passionate ACE-certified personal trainer based in New York City, ready to help you transform your life through fitness! For over a decade, I've been immersed in the world of strength training, mobility and calisthenics, and I love sharing my knowledge to help others reach their full potential. My journey has been a little unconventional - with degrees from both NYU and the French Culinary Institute - I bring a unique understanding of how food and fitness work together to fuel your body and mind.
        </p>
        <p>
          I believe in a personalized approach to training. Every body is different, and that’s why I work with you to create a customized plan that fits your unique needs and abilities. My clients love the combination of <strong>motivation</strong>, <strong>expert knowledge</strong>, and the commitment I bring to each session.
        </p>
        <p>
          My specialties include strength training, mobility exercises, and functional fitness. No matter where you’re starting from, I’ll help you push past your limits and achieve results you can be proud of. I'm here to guide you every step of the way. Let's connect and start building a healthier, happier you!
        </p>
      </div>
      <div className={styles.TBGHomeServicesSection}>
        <h1 className={styles.TBGHomeServicesHeader}>How I Work</h1>
          <div className={styles.TBGHomeServicesTopRow}>
            <div className={styles.TBGServicesTopRowLeftPanel}>
              <img src='/images/calendar.png'/>
              <h2>Custom Programs</h2>
              <Link href='/services'>
                <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
              </Link>
            </div>
            <div className={styles.TBGServicesTopRowRightPanel}>
              <img src='/images/dumbell.png'/>
              <h2>Private Training Sessions</h2>
              <Link href='/services'>
                <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
              </Link>
            </div>
          </div>
          <div className={styles.TBGHomeServicesBottomRow}>
            <div className={styles.TBGServicesBottomRowLeftPanel}>
              <img src='/images/laptop.png'/>
              <h2>Virtual Training</h2>
              <Link href='/services'>
                <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
              </Link>
            </div>
            <div className={styles.TBGServicesBottomRowRightPanel}>
              <img src='/images/nutrition.png'/>
              <h2>Nutrition and Meal Plans</h2>
              <Link href='/services'>
                <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
              </Link>
            </div>
          </div>
        </div>
      <TwoPanelFooter/>
    </div>
  );
}

