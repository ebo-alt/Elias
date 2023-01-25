import Check from '../component/Check.js';
import Checkk from '../component/Checkk.js';
import Cheeck from '../component/Cheeck.js';
import styles from './Gurav.module.css';
import Dots from '../image/Dots.js';
import Border from '../image/Border.js';

function Gurav() {
  return (
    <section>
      <div className={styles.dots}>
        <Dots />
      </div>
      <section className={styles.second}>
        <div className={styles.neg}>
          <Check />
        </div>
        <div className={styles.hoyr}>
          <Checkk />
        </div>
        <div className={styles.third}>
          <Cheeck />
        </div>
      </section>
      <div>
        <Border />
      </div>
    </section>
  );
}

export default Gurav;
