import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Tab from '@material-ui/core/Tab';
import Smooth from './Smooth';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
	tab : {
		color  : theme.palette.primary,
		height : 70,
	},
}));

const NavTab = (props) => {
	const classes = useStyles();
	const router = useRouter();
	const { name, pathname, bool } = props;
	return (
		<Fragment>
			<Smooth style={router.pathname === pathname}>
				<Link href={pathname}>
					<Tab
						variant='outlined'
						label={name}
						className={classes.tab}
						disabled={bool}
					/>
				</Link>
			</Smooth>
		</Fragment>
	);
};

export default NavTab;
