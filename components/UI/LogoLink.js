import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	img: {
		cursor: 'pointer',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(40),
    marginRight: theme.spacing(5)
	},
}));

const LogoLink = () => {
	const classess = useStyles();
	return (
		<Link href='/'>
			<a className={classess.img}>
				<Image
					className={classess.img}
					src='/images/IMGLINK2.jpg'
					height={'60vw'}
					width={'200vw'}
          alt={'Home'}
				/>
			</a>
		</Link>
	);
};

export default LogoLink;
