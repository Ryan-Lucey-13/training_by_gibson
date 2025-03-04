import styles from "./page.module.css";
import RootLayout from './layout';
import Link from 'next/link';
import SignUpButton from './components/SignUpButton/SignUpButton.js'
import ResultsCarouselClient from './components/ResultsCarouselClient/ResultsCarouselClient.js';
import TwoPanelFooter from './components/TwoPanelFooter/TwoPanelFooter.js';
import Lightbox from './components/Lightbox/Lightbox.js'


export default function Home() {
  return (
      <div>
        <div className={styles.TBGHomeHeader}>
          <div className={styles.TBGHomeLeftHeader}>
            <h1>Personalized Training to Feel Better</h1>
            <p>Custom programs with a personal touch in New York City.</p>
            <SignUpButton />
          </div>
          <div className={styles.TBGHomeRightHeader}>
            <img className={styles.TBGHomeHeaderImage} src='/images/gibsonflex.jpg'/>
          </div>
        </div>
        <div className={styles.TBGHomeAboutSection}>
          <div className={styles.TBGHomeAboutLeftPanel}>
            <img className={styles.TBGHomeAboutImage} src='/images/gibsonflex2.jpg'/>
          </div>
          <div className={styles.TBGHomeAboutRightPanel}>
            <h1>Meet Gibson</h1>
            <p>I'm an ACE-certified personal trainer in New York City. My passion is helping people to feel stronger, improve their confidence, and achieve sustainable health goals.</p>
            <Link href='/about'>
              <button className={styles.TBGLearnMoreButton}>Learn More</button>
            </Link>
          </div>
        </div>
        <div className={styles.TBGHomeServicesSection}>
        <h1 className={styles.TBGHomeServicesHeader}>A Holistic Approach</h1>
          <div className={styles.TBGHomeServicesTopRow}>
            <div className={styles.TBGServicesTopRowLeftPanel}>
              <img src='/images/calendar.png'/>
              <h2>Custom Programs</h2>
              <p className={styles.TBGHomeServicesText}>For each client, I build an individualized training program that helps build your functional strenghth and mobility to help you look good and feel even better.</p>
              <Link href='/services'>
                <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
              </Link>
            </div>
            <div className={styles.TBGServicesTopRowRightPanel}>
              <img src='/images/dumbell.png'/>
              <h2>Private Training Sessions</h2>
              <p className={styles.TBGHomeServicesText}>One on One training sessions so I can teach you to train confidently, while I help maximize your results.</p>
              <Link href='/services'>
                <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
              </Link>
            </div>
          </div>
          <div className={styles.TBGHomeServicesBottomRow}>
            <div className={styles.TBGServicesBottomRowLeftPanel}>
              <img src='/images/laptop.png'/>
              <h2>Virtual Training</h2>
              <p className={styles.TBGHomeServicesText}>Train with me from anywhere in the world. I can help you reach your goals at any time and from any place.</p>
              <Link href='/services'>
                <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
              </Link>
            </div>
            <div className={styles.TBGServicesBottomRowRightPanel}>
              <img src='/images/nutrition.png'/>
              <h2>Nutrition and Meal Plans</h2>
              <p className={styles.TBGHomeServicesText}>With science-based nutrition programs designed to fuel your workouts, I'll help you eat to train and train to eat.</p>
              <Link href='/services'>
                <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
              </Link>
            </div>
          </div>
        </div>
        <ResultsCarouselClient />
        <TwoPanelFooter/>
      </div>
  );
}
