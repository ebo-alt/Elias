import Skill from '../image/Skill.js';
import styles from './Skills.module.css';
import RightText from '../component/RightText.js';

function Skills() {
  return (
    <section>
      <div className={styles.gadn}>
        <div className={styles.ehniih}>
          <h1 className={styles.ygaan}>#</h1>{' '}
          <h1 className={styles.tsagaan}>projects</h1>
          <div className={styles.hr}></div>
        </div>
        <Skill />
        <div>
          <RightText />
        </div>
      </div>
    </section>
  );
}

export default Skills;
