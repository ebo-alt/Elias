import styles from './Main.module.css';
import MainZurag from '../image/MainZurag.js';
import Zuraas from '../image/Zuraas.js';
import Dood from '../component/Dood.js';

function Main() {
  return (
    <section>
      <section className={styles.Zurag}>
        <MainZurag />
        <Dood />
      </section>
    </section>
  );
}

export default Main;
