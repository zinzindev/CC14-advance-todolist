import React, { Component } from 'react';
import { MenuAppBar as AppBar } from '../components/Common/AppBar';
// import Box from '@mui/material/Box'
import { Box, Grid, Typography } from '@mui/material';
import { UserAvatar } from '../components/Common/UserAvatar';
class ProfilePage extends Component {
	render() {
		return (
			<div>
				<AppBar />
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={8} sx={{ padding: 12 }}>
						<Grid item xs={10}>
							<Typography variant='h1' component='h4'>
								Edit Profile
							</Typography>
						</Grid>
						<Grid item xs={2}>
							<UserAvatar
								sx={{ width: 120, height: 120 }}
								alt='Person'
								src='https://plus.unsplash.com/-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							/>
						</Grid>
						<Grid item xs={6}>
							FirstName
						</Grid>
						<Grid item xs={6}>
							LastName
						</Grid>
						<Grid item xs={12}>
							Email
						</Grid>
						<Grid item xs={12}>
							BirthDate
						</Grid>
						<Grid item xs={6}>
							BTN-Update
						</Grid>
						<Grid item xs={6}>
							BTN-Cancel
						</Grid>
						<Grid item xs={12}>
							BTN-Logout
						</Grid>
					</Grid>
				</Box>
			</div>
		);
	}
}

export default ProfilePage;
