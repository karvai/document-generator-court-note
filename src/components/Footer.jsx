import React from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'

export default function Footer() {
	return (
		<div className='footerWrapper'>
			<Container>
				<Grid container direction='row-reverse' justify='space-evenly' alignItems='center'>
					<Box style={{ margin: 5 }}>
						<Grid container wrap='nowrap' spacing={1}>
							<Grid item className='hideMobile'>
								<MailOutlineIcon style={{ color: '#BFBFBF', fontSize: '250%' }} />
							</Grid>
							<Grid item xs>
								<Typography variant='caption' display='block'>
									General enquiries: estatesservicedesk@lsbu.ac.uk
								</Typography>
								<Typography variant='caption' display='block'>
									Law enquiries: course.enquiry@lsbu.ac.uk
								</Typography>
							</Grid>
						</Grid>
					</Box>

					<Box style={{ margin: 5 }}>
						<Grid container wrap='nowrap' spacing={1}>
							<Grid item className='hideMobile'>
								<RoomOutlinedIcon style={{ color: '#BFBFBF', fontSize: '250%' }} />
							</Grid>
							<Grid item xs>
								<Typography variant='caption' display='block'>
									103 Borough Road,
								</Typography>
								<Typography variant='caption' display='block'>
									London SE1 0AA
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Container>
		</div>
	)
}
