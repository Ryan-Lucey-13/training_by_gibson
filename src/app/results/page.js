import styles from "./results.module.css";
import RootLayout from '../layout';
import TwoPanelFooter from '../components/TwoPanelFooter/TwoPanelFooter.js';
import { attributes as resultsAttributes } from '../../content/results.md';

export default function Results() {
  return (
    <div>
      <div className={styles.TBGResultsHeader}>
        <div className={styles.TBGResultsHeaderLeft}>
          <h1>{resultsAttributes.title}</h1>
          <p>{resultsAttributes.subtitle}</p>
        </div>
        <div className={styles.TBGResultsHeaderRight}>
          <img className={styles.TBGResultsHeaderImage} src={resultsAttributes.headerImage}/>
        </div>
      </div>
      {resultsAttributes.reviews.map((review, index) => (
        <div className={`${styles.TBGResultsSection} ${index % 2 === 0 ? styles.leftAlign : styles.rightAlign} ${styles.panel}`} key={index}>
          <div className={styles.TBGResultsSectionLeft}>
              <img className={styles.TBGResultsSectionImage} src={review.image}/>
          </div>
          <div className={styles.TBGResultsSectionRight}>
            <h4>'{review.review}'</h4>
            <p>{review.name}</p>
            <p>{review.location}</p>
          </div>
        </div>
      ))}
      <TwoPanelFooter/>
    </div>
  );
}