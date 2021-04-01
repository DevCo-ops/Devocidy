import React from 'react';
import Link from 'next/link';
import Button from '../UI/Button'
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const GroupHead = (props) => {
	const explore = `groups/${props._id}`
	return (
		<React.Fragment>
			<CardHeader
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={props.name}
			/>
			<Button link={explore}>
				{"See more..."}
			</Button>
		</React.Fragment>
	);
};

export default GroupHead;
