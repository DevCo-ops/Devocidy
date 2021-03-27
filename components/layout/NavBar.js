import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs'
import NavTab from '../UI/NavTab'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.primary.light
  }
}))

const NavBar = () => {
  const classes = useStyles()
  return (
   <AppBar position="static" color="primary" className={classes.main}>
     <Tabs>
       <NavTab name={"Home"} location={"/"} />
       <NavTab name={"Groups"} location={"/groups"} />
       <NavTab name={"Login"} location={"/login"} />
     </Tabs>
   </AppBar>
  )
}

export default NavBar
