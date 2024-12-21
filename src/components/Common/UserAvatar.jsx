import React from 'react';
import { Avatar } from '@mui/material';
import defaultPhotos from '../../assets/user.jpeg';

export function UserAvatar(props) {
	// props = {sx: {width: 80, height: 80}, alt: 'Person'}
	// props.sx = {width: 80, height: 80}
	return (
		<Avatar
			{...props} // alt='Person'
			src={props.src || defaultPhotos}
			sx={{ width: 40, height: 40, cursor: 'pointer', ...props.sx }}
		/>
	);
}

// export default UserAvatar;
