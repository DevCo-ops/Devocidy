import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import GroupMedia from './group-media';
import GroupHead from './group-head';
import GroupDescription from './group-description';

const useStyles = makeStyles((theme) => ({
  main: {
    width: 550,
    minWidth: 100,
    margin: theme.spacing(2),
    postion: 'absolute',
    backgroundColor: theme.palette.primary.main,
  },
  media: {
    width: 'cover',
    height: 400,
  },
}));

const GroupCard = (props) => {
  const classes = useStyles();
  const { _id, name, img, projectDescription } = props.group;
  return (
    <React.Fragment>
      <Card _id={_id} className={classes.main}>
        <GroupHead name={name} _id={_id} />
        <GroupMedia img={img} styles={classes.media} />
        <GroupDescription description={projectDescription} />
      </Card>
    </React.Fragment>
  );
};

export default GroupCard;
