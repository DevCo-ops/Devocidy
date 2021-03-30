import GroupTitle from './group-title'
import GroupImg from './group-img'
import Description from './description'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  head: {
    padding: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('xs')]:{
      padding: theme.spacing(0),
    }

  },
  card: {
    width: 400,
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  },
  title: {
    

  },
  description: {
    alignSelf: 'center'
  }
}))

const GroupHead = ({props}) => {
  const {name, img, projectDescription} = props
  console.log(props)
  const classes = useStyles()
  return (
    <div className={classes.head}>
      <GroupImg img={img} styles={classes.card} />
      <Box>
        <GroupTitle title={name} styles={classes.title} /> <br />
        <Description description={projectDescription} styles={classes.description} />
      </Box>
    </div>
  )
}

export default GroupHead
