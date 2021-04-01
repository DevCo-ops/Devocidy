import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '10px',
    '& > * + *': {
      height: 10,
    },
  },
}));

const Progress = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" />
    </div>
  );
}

export default Progress