import React from 'react';
import Link from 'next/link';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const GroupHead = (props) => {
	return (
		<React.Fragment>
			<CardHeader
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={
					<Link
						href={{
							pathname: `groups/[id]`,
							query: { id: props._id },
						}}>
						{props.name}
					</Link>
				}
			/>
		</React.Fragment>
	);
};

export default GroupHead;
