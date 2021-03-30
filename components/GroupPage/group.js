import GroupImg from './group-img'
import Grid from '@material-ui/core/Grid'
import GroupHead from './group-head'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  div: {
    padding: theme.spacing(1),
    height: '100vh',
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down('xs')]:{
      padding: theme.spacing(0),
    },
  },
}))

const Group = ({group}) => {
  const classes = useStyles()
  console.log()
  return (
    <div className={classes.div}>
     <GroupHead props={group}/>
      <div>
        
      </div>
    </div>
  )
}

export default Group
