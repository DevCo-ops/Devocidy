import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	active   : {
		backgroundColor : theme.palette.primary.dark,
		height          : '2px',
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
			<li
				className={style ? classes.active:classes.inactive}
			/>
		</div>
	);
};

export default Smooth;
