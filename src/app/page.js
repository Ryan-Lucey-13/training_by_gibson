import styles from "./page.module.css";
import RootLayout from './layout';
import Link from 'next/link';
import SignUpButton from './components/SignUpButton/SignUpButton.js'
import ResultsCarouselClient from './components/ResultsCarouselClient/ResultsCarouselClient.js';
import TwoPanelFooter from './components/TwoPanelFooter/TwoPanelFooter.js';
import Head from "next/head";
import { attributes, react as HomeContent } from '../content/home.md';

export default function Home() {
  
  return (
      <div>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <div className={styles.TBGHomeHeader}>
          <div className={styles.TBGHomeLeftHeader}>
            <h1>{attributes.title}</h1>
            <p>{attributes.description}</p>
            <SignUpButton />
          </div>
          <div className={styles.TBGHomeRightHeader}>
            <img className={styles.TBGHomeHeaderImage} src={attributes.image}/>
          </div>
        </div>
        <div className={styles.TBGHomeAboutSection}>
          <div className={styles.TBGHomeAboutLeftPanel}>
            <img className={styles.TBGHomeAboutImage} src={attributes.aboutImage}/>
          </div>
          <div className={styles.TBGHomeAboutRightPanel}>
            <h1>{attributes.aboutTitle}</h1>
            <p>{attributes.aboutText}</p>
            <Link href='/about'>
              <button className={styles.TBGLearnMoreButton}>Learn More</button>
            </Link>
          </div>
        </div>
        <div className={styles.TBGHomeServicesSection}>
        <h1 className={styles.TBGHomeServicesHeader}>{attributes.servicesHeader}</h1>
          <div className={styles.TBGHomeServicesTopRow}>
            {attributes.services.slice(0, 2).map((service, idx) => (
              <div key={idx} className={idx === 0 ? styles.TBGServicesTopRowLeftPanel : styles.TBGServicesTopRowRightPanel}>
                <img src={service.image} />
                <h2>{service.title}</h2>
                <p className={styles.TBGHomeServicesText}>{service.text}</p>
                <Link href={service.link}>
                  <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.TBGHomeServicesBottomRow}>
            {attributes.services.slice(2, 4).map((service, idx) => (
              <div key={idx} className={idx === 0 ? styles.TBGServicesBottomRowLeftPanel : styles.TBGServicesBottomRowRightPanel}>
                <img src={service.image} />
                <h2>{service.title}</h2>
                <p className={styles.TBGHomeServicesText}>{service.text}</p>
                <Link href={service.link}>
                  <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <ResultsCarouselClient />
        <TwoPanelFooter/>
      </div>
  );
}
