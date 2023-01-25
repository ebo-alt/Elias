import Hoyr from '../image/Hoyr.js';
import styles from './Checkk.module.css';

function Checkk() {
  return (
    <section className={styles.second}>
      <div className={styles}>
        <Hoyr />
      </div>
      <div className={styles.codes}>
        <h2>React</h2>
        <h2>Express</h2>
        <h2>Discord.js</h2>
        <h2>Node.js</h2>
      </div>
      <div className={styles.codess}>
        <h2>HTML</h2>
        <h2>SCSS</h2>
        <h2>Python</h2>
        <h2>Flask</h2>
      </div>
      <h1 className={styles.ProjectX}>ProtectX</h1>
      <h1 className={styles.Mine}>Discord anti-crash bot</h1>
      <div className={styles.live}>
        <h1 className={styles.lives}>Live ~~</h1>
      </div>
    </section>
  );
}

export default Checkk;
