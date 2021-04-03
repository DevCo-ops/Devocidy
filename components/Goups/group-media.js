import React, { Fragment } from 'react';
import CardMedia from '@material-ui/core/CardMedia';

const GroupMedia = ({ img, styles }) => {
  return (
    <Fragment>
      <CardMedia className={styles} image={img} />
    </Fragment>
  );
};

export default GroupMedia;
