import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Group from './group';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'start',
		flexWrap: 'wrap',
	},
  main: {
    margin: theme.spacing(2)
  }
}));

const GroupList = ({groups}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{groups.map((group) => <Group id={group._id} group={group} /> )}
		</div>
	);
};

export default GroupList;
