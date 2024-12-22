import React, { Component } from 'react';
import { MenuAppBar as AppBar } from '../components/Common/AppBar';
// import Box from '@mui/material/Box'
import { Box, Button, Grid, Typography } from '@mui/material';
import { UserAvatar } from '../components/Common/UserAvatar';
import { Input } from '../components/Common/Input';
class ProfilePage extends Component {
	render() {
		return (
			<div>
				<AppBar />
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={8} sx={{ padding: 20 }}>
						<Grid item xs={10} alignSelf='flex-end'>
							<Typography variant='h1' component='h4'>
								Edit Profile
							</Typography>
						</Grid>
						<Grid item xs={2}>
							<UserAvatar
								sx={{ width: 120, height: 120 }}
								alt='Person'
								src='https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							/>
						</Grid>
						<Grid item xs={6}>
							<Input
								// fullWidth
								// type='text'
								// variant='outlined'
								// color='primary'
								label={<h1>First Name</h1>}
								placeholder='your first name'
								name='firstName'
								error={false}
							/>
						</Grid>
						<Grid item xs={6}>
							<Input
								label={<h1>Last Name</h1>}
								placeholder='your last name'
								name='LastName'
								error={false}
							/>
						</Grid>
						<Grid item xs={12}>
							<Input
								label={<h1>Email</h1>}
								placeholder='example@mail.com'
								name='email'
								type='email'
								error={false}
							/>
						</Grid>
						<Grid item xs={12}>
							<Input name='date' type='date' error={false} />
						</Grid>
						<Grid item xs={6}>
							<Button
								fullWidth={true}
								variant='contained'
								sx={{ background: '#db4c3f', padding: 2 }}
							>
								<Typography variant='h5' component='span'>
									Edit Profile
								</Typography>
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button
								fullWidth={true}
								variant='contained'
								sx={{ backgroundColor: '#aaa', padding: 2 }}
							>
								<Typography variant='h5' component='span'>
									Cancel
								</Typography>
							</Button>
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
