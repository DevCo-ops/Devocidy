import GroupHead from '../components/GroupPage/group-head';
import GroupBody from '../components/GroupPage/group-body';
import Content from '@/components/GroupSlugs/content';
import { useRouter } from 'next/router';
import { getGroupById } from '../dummy';
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

const Group = ({ children }) => {
  const router = useRouter();
  const group = getGroupById(router.query.id);
  const classes = useStyles();
  if (group) {
    return (
      <div className={classes.div}>
        <GroupHead props={group} />
        <div>
          <GroupBody id={group._id}>
            <Content />
            {children}
          </GroupBody>
        </div>
      </div>
    );
  } else {
    return <h1>Loading..</h1>;
  }
};

export default Group;
