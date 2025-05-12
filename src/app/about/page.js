import styles from "./about.module.css";
import Link from 'next/link';
import RootLayout from '../layout';
import TwoPanelFooter from '../components/TwoPanelFooter/TwoPanelFooter.js';
import { attributes as attributes } from '../../content/home.md';
import { attributes as aboutAttributes, react as AboutContent } from '../../content/about.md';

export default function About() {
  return (
    <div>
      <div className={styles.TBGAboutHeader}>
        <div className={styles.TBGAboutHeaderLeft}>
          <h1>{aboutAttributes.title}</h1>
          <p>{aboutAttributes.subtitle}</p>
        </div>
        <div className={styles.TBGAboutHeaderRight}>
          <img className={styles.TBGAboutHeaderImage} src={aboutAttributes.headerImage}/>
        </div>
      </div>
      <div className={styles.TBGAboutBio}>
        <AboutContent />
      </div>
      <div className={styles.TBGHomeServicesSection}>
        <h1 className={styles.TBGHomeServicesHeader}>{aboutAttributes.sectionTitle}</h1>
          <div className={styles.TBGHomeServicesTopRow}>
            {attributes.services.slice(0, 2).map((item, i) => (
              <div key={i} className={styles.TBGServicesTopRowLeftPanel}>
                <img src={item.image} />
                <h2>{item.title}</h2>
                <Link href={item.link}>
                  <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.TBGHomeServicesBottomRow}>
            {attributes.services.slice(2).map((item, i) => (
              <div key={i} className={styles.TBGServicesBottomRowLeftPanel}>
                <img src={item.image} />
                <h2>{item.title}</h2>
                <Link href={item.link}>
                  <p className={styles.TBGLearnHowLink}>Learn How {'>'}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      <TwoPanelFooter/>
    </div>
  );
}

