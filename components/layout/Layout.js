import Container from '@material-ui/core/Container';
import {Fragment} from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import Contributors from './Contributors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	main : {
		backgroundColor : theme.palette.primary,
    flex: 1,

	},
}));

const Layout = (props) => {
	const { children } = props;
	const classes = useStyles();
	return (
		<div>
			<NavBar />
			<Container maxWidth='lg' className={classes.main}>
				{children}
			</Container>
			<Footer discription={'This is our comunity website'}>
				<Contributors />
			</Footer>
		</div>
	);
};

export default Layout;
