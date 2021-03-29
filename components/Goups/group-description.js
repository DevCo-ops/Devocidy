import React from 'react';
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import InfoIcon from '@material-ui/icons/Info';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({

	spen: {
		transform: 'rotate(-360deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.standard,
		}),
	},
	close: {
		transform: 'rotate(360deg)'
	},
}));

const GroupDescription = ({ description }) => {
	const classes = useStyles();
  const [spin, setSpin] = React.useState(false)

	return (
		<React.Fragment>
    <IconButton
        onClick={() => setSpin(!spin)}
				className={clsx(classes.spen, {
          [classes.close] : spin,
        })}>
				<InfoIcon fontSize="large" />
			</IconButton>
        <Collapse in={spin}>
				<CardContent>
          <Typography paragraph>{description}</Typography>
				</CardContent>
        </Collapse>
		</React.Fragment>
	);
};

export default GroupDescription;
