import GroupTitle from './group-title';
import GroupImg from './group-img';
import Description from './description';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	head: {
		padding: theme.spacing(1),
		display: 'flex',
		flexWrap: 'wrap',
		[theme.breakpoints.up('xs')]: {
			padding: theme.spacing(0),
		},
	},
	card: {
		width: 400,
		height: 300,
		[theme.breakpoints.down('xs')]: {
			width: '100%',
		},
	},
	title: {},
	description: {
		alignSelf: 'center',
	},
}));

const GroupHead = (group) => {
	const classes = useStyles();
	let props = group.props
	return (
		<div className={classes.head}>
			<GroupImg img={props.img} styles={classes.card} />
			<Box variant="div">
				<GroupTitle title={props.name} styles={classes.title} /> 
				<Description description={props.projectDescription} styles={classes.description} />
			</Box>
		</div>
	);
};

export default GroupHead;
