import styles from './DrWho.module.css';
import Hug from '../image/Hug.js';

function DrWho() {
  return (
    <div>
      <section className={styles.Drs}>
        <div className={styles.Hug1}>
          <Hug />
        </div>
        <h1 className={styles.power}>
          With great power comes great electricity bill
        </h1>
      </section>
      <div className={styles.hooson}></div>
      <section className={styles.Who}>
        <div className={styles.Hug2}>
          <Hug />
        </div>
        <h1 className={styles.super}>- Dr. Who</h1>
      </section>
    </div>
  );
}
export default DrWho;
