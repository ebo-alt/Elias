import styles from './RightText.module.css';

function RightText() {
  return (
    <section className={styles.container}>
      <div className={styles.first}>
        <div className={styles.gadna}>
          <div className={styles.hr}>
            <h1 className={styles.Lang}>Languages</h1>
          </div>
          <h1 className={styles.Code}>TypeScript Lua</h1>
          <h1 className={styles.Codes}>Python JavaScript</h1>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.gadnaa}>
          <div className={styles.hr}>
            <h1 className={styles.Lang}>Databases</h1>
          </div>
          <h1 className={styles.Code}>SQLite PostgreSQL</h1>
          <h1 className={styles.Codes}>Mongo</h1>
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.Three}>
          <div className={styles.hr}>
            <h1 className={styles.Lang}>Tools</h1>
          </div>
          <h1 className={styles.Code}>VSCode Neovim Linux</h1>
          <h1 className={styles.Codes}>Figma XFCE Arch</h1>
          <h1 className={styles.Codess}>Git Font Awesome</h1>
        </div>
      </div>
      <div className={styles.gadan}>
        <div className={styles.hr}>
          <h1 className={styles.Lang}>Other</h1>
        </div>
        <h1 className={styles.Code}>HTML CSS EJS SCSS</h1>
        <h1 className={styles.Codes}>REST Jinja</h1>
      </div>
      <div className={styles.gadnas}>
        <div className={styles.hr}>
          <h1 className={styles.Lang}>Other</h1>
        </div>
        <h1 className={styles.Code}>HTML CSS EJS SCSS</h1>
        <h1 className={styles.Codes}>REST Jinja</h1>
      </div>
    </section>
  );
}

export default RightText;
