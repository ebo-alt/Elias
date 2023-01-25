import Neg from '../image/Neg.js';
import styles from './Check.module.css';

function Check() {
  return (
    <section>
      <div className={styles.first}>
        <Neg />
      </div>
      <div className={styles.code}>
        <h2>HTML</h2>
        <h2>SCSS</h2>
        <h2>Python</h2>
        <h2>Flask</h2>
      </div>
      <div className={styles.two}>
        <h1 className={styles.notes}>ChertNodes</h1>
        <h1 className={styles.Mine}>Minecraft servers hosting</h1>
        <div className={styles.gadna}>
          <div className={styles.live}>
            <h1 className={styles.lives}>Live ~~</h1>
          </div>
          <div className={styles.cache}>
            <h1 className={styles.cached}>Cached </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Check;
