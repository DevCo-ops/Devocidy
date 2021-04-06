import { default as MuiButton } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  btn: {
    textDecoration: 'none',
    fontSize: '30px',
  },
}));

const Button = (props) => {
  const classes = useStyles();
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return <MuiButton className={classes.btn}>{props.children}</MuiButton>;
};
export default Button;
