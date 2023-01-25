import Header from './Header';
import Left from './Left';
import styles from './Layout.module.css';
function Layout(props) {
  const { children } = props;
  return (
    <section
      style={{
        maxWidth: 1600,
        margin: 'auto',
      }}
    >
      <Header />
      <section className={styles.gurav}>
        <Left />
        <main>{children}</main>
      </section>
    </section>
  );
}

export default Layout;
