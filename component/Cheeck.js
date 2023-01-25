import Three from '../image/Three.js';
import styles from './Cheeck.module.css';

function Cheeck() {
  return (
    <section className={styles.second}>
      <div className={styles}>
        <Three />
      </div>
      <div className={styles.codes}>
        <h2>CSS</h2>
        <h2>Express</h2>
        <h2>Node.js</h2>
      </div>
      <h1 className={styles.ProjectX}>
        Kahoot Answers
        <br />
        Viewers
      </h1>
      <h1 className={styles.Mine}>Get answers to your kahoot quiz</h1>
      <div className={styles.live}>
        <h1 className={styles.lives}>Live ~~</h1>
      </div>
    </section>
  );
}

export default Cheeck;
