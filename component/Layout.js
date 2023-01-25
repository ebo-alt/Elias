import Header from './Header';
import Left from './Left';
import styles from './Layout.module.css';
function Layout(props) {
  const { children } = props;
  return (
    <section>
      <Header />
      <section className={styles.gurav}>
        <Left />
        <main>{children}</main>
      </section>
    </section>
  );
}

export default Layout;
