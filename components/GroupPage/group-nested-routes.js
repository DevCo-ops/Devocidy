import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NavTab from '../UI/NavTab';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.primary.dark,
    '& button': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.dark,
    }
  }
}))

const GroupNestRoutes = ({id}) => {
  const classes = useStyles()
  return (
    <Fragment>
    <AppBar position='static' className={classes.root}>
      <Tabs
      variant="fullWidth"
      >
        <NavTab name={'About'} pathname={`/groups/${id}/`} bool={false} />
        <NavTab name={'Console'} pathname={`/groups/${id}/console`} bool={false} />
        <NavTab name={'users'} pathname={`/groups/${id}/users`} bool={false} />
      </Tabs>
    </AppBar>
  </Fragment>
  )
}

export default GroupNestRoutes
