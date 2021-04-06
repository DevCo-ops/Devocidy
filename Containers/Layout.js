import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Contributors from '@/components/layout/Contributors';
import styles from '@/styles/app.module.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.main}>{children}</div>
      <Footer className={styles.footer}>
        <Contributors />
      </Footer>
    </div>
  );
};

export default Layout;
