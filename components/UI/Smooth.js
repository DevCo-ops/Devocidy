import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	active   : {
		backgroundColor : 'grey',
		height          : '3px',
		textDecoration: 'none',
	},
	inactive : {
		backgroundColor : 'transparent',
		height          : '2px',
	},
}));

const Smooth = (props) => {
	const classes = useStyles();
	const { children, style } = props;
	return (
		<div>
			{children}
			<div
				className={style ? classes.active:classes.inactive}
			/>
		</div>
	);
};

export default Smooth;
