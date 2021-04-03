import { Fragment } from 'react';
import { getAllContributors } from '../../dummy';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Contributors = () => {
  const contributors = getAllContributors();
  return (
    <Fragment>
      <Typography variant='h6' component='bold'>
        Contributors
      </Typography>
      {contributors.map((contributor) => (
        <Box component='span' m={0} id={contributor._id}>
          <Typography component='p'>{contributor.name}</Typography>
          <Link href={contributor.link}>see more...</Link>
        </Box>
      ))}
    </Fragment>
  );
};

export default Contributors;
