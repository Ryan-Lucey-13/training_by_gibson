import styles from "./services.module.css";
import RootLayout from '../layout';
import TwoPanelFooter from '../components/TwoPanelFooter/TwoPanelFooter.js';
import { attributes as servicesAttributes } from '../../content/services.md';

export default function Services() {
  return (
    <div>
      <div className={styles.TBGServicesHeader}>
        <div className={styles.TBGServicesHeaderLeft}>
          <h1>{servicesAttributes.title}</h1>
          <p>{servicesAttributes.subtitle}</p>
        </div>
        <div className={styles.TBGServicesHeaderRight}>
          <img className={styles.TBGServicesHeaderImage} src={servicesAttributes.headerImage} />
        </div>
      </div>
      {servicesAttributes.sections.map((section, index) => (
        <div className={styles.TBGServicesSection} key={index}>
          <div className={styles.TBGServicesSectionLeft}>
            <h1>{section.title}</h1>
            <p>{section.text}</p>
          </div>
          <div className={styles.TBGServicesSectionRight}>
            <img
              className={styles.TBGServicesSectionImage}
              src={section.image}
              alt=""
            />
          </div>
        </div>
      ))}
      <TwoPanelFooter/>
    </div>
  );
}