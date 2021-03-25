import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LinkButton from '../UI/LinkButton'

const NavBar = () => {
  return (
   <AppBar position="static" color="primary">
     <Toolbar>
      <LinkButton name={"ButtonTest"} location={"/"}/>
     </Toolbar>
     <Toolbar>
       <LinkButton name={"anoutherButtonTest"} location={"/"} />
     </Toolbar>
   </AppBar>
  )
}

export default NavBar
