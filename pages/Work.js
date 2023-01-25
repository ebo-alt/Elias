import styles from './Work.module.css';
import Gurav from '../component/Gurav.js';
import Skills from '../component/Skills.js';

function Work() {
  return (
    <section className={styles.container}>
      <section className={styles.gadn}>
        <div className={styles.ehniih}>
          <h1 className={styles.ygaan}>#</h1>{' '}
          <h1 className={styles.tsagaan}>projects</h1>
          <div className={styles.hr}></div>
        </div>
        <div>
          <h1 className={styles.view}>View all ~~> </h1>
        </div>
      </section>
      <div className={styles.first}>
        <Gurav />
      </div>
      <div className={styles.second}>
        <Skills />
      </div>
    </section>
  );
}

export default Work;
