import styles from "./results.module.css";
import RootLayout from '../layout';
import TwoPanelFooter from '../components/TwoPanelFooter/TwoPanelFooter.js';

export default function Results() {
  const reviews = [
    {
      name: 'Gibson',
      location: 'New York',
      review: 'I had almost given up hope that I would ever return to pre-pregnancy body... luckily I did not give up. Gibson helped me get back to my pre-pregnancy weight and put on more strength and muscle than I ever had. I feel great and have so much energy to spend with my 2 little ones. Gibson made exercise fun and enjoyable, which really helped me stay consistent.',
    },
    {
      name: 'Jane Smith',
      location: 'Manhattan',
      review: 'I love the personalized approach to training. Great experience!',
    },
    {
      name: 'Alice Johnson',
      location: 'Brooklyn',
      review: 'Amazing results! The workouts were challenging but effective.',
    },
    {
      name: 'Bob Brown',
      location: 'Chicago',
      review: 'I feel stronger and more confident thanks to this program!',
    },
  ];
  return (
    <div>
      <div className={styles.TBGResultsHeader}>
        <div className={styles.TBGResultsHeaderLeft}>
          <h1>Acheiving Results you've only ever dreamed of</h1>
          <p>Real results from real clients.</p>
        </div>
        <div className={styles.TBGResultsHeaderRight}>
          <img className={styles.TBGResultsHeaderImage} src='/images/gibsonflex.jpg'/>
        </div>
      </div>
      {reviews.map((review, index) => (
        <div className={`${styles.TBGResultsSection} ${index % 2 === 0 ? styles.leftAlign : styles.rightAlign} ${styles.panel}`} key={index}>
          <div className={styles.TBGResultsSectionLeft}>
              <img className={styles.TBGResultsSectionImage} src='/images/Results.jpg'/>
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