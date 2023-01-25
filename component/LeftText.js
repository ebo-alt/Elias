import styles from './LeftText.module.css';

function LeftText() {
  return (
    <section className={styles.sec}>
      <div className={styles.neg}>
        <h1 className={styles.tsagaan}>Elias is a</h1>{' '}
        <h1 className={styles.ygaan}>web designer</h1>{' '}
        <h1 className={styles.tsagaan}>and</h1>
        <h1 className={styles.doodygaan}>front-end developer</h1>
      </div>
      <div>
        <p className={styles.hoyr}>
          He crafts responsive websites where technologies
          <br /> meet creativity
        </p>
      </div>
      <div className={styles.gurav}>
        <h2 className={styles.me}>Contact me!!</h2>
      </div>
    </section>
  );
}

export default LeftText;
