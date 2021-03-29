import Container from '@material-ui/core/Container';
import NavBar from './NavBar';
import Footer from './Footer';
import Contributors from './Contributors'
import styles from '../../styles/app.module.css'

const Layout = (props) => {
	const { children } = props;
	return (
		<div className={styles.container}>
			<NavBar />
			<Container maxWidth='lg' className={styles.main}>
				{children}
			</Container>
			<Footer className={styles.footer}>
				<Contributors />
			</Footer>
		</div>
	);
};

export default Layout;
