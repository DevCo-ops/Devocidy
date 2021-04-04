import GroupHead from '../components/GroupPage/group-head';
import GroupBody from '../components/GroupPage/group-body';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  div: {
    padding: theme.spacing(1),
    height: '100vh',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
    },
  },
}));

const Group = ({ group }) => {
  const classes = useStyles();
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
