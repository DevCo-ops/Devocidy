import GroupImg from '../components/GroupPage/group-img';
import Grid from '@material-ui/core/Grid';
import GroupHead from '../components/GroupPage/group-head';
import GroupBody from '../components/GroupPage/group-body';
import {getGroupById} from '../dummy'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	div: {
		padding: theme.spacing(1),
		height: '100vh',
		backgroundColor: theme.palette.primary.light,
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing(0),
		},
	},
}));

const Group = ({id}) => {
	const classes = useStyles();
	const group = getGroupById(id)
	return (
		<div className={classes.div}>
			<GroupHead props={group} />
			<div>
				<GroupBody />
			</div>
		</div>
	);
};

export default Group;
