import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    marginTop: theme.spacing(10),
  }
}))

const ContainerBox = (props) => {
  const {children} = props
  const classes = useStyles()
  return (
    <Box width="100%" borderRadius={16} height={'60vh'} className={classes.root}>
      {children}
    </Box>
  )
}

export default ContainerBox
