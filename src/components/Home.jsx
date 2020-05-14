import React from 'react'
import Container from '@material-ui/core/Container'
import homePhoto from '../assets/img/smiling-woman-in-checkered-jacket.jpg'
import { Typography, Link } from '@material-ui/core'

export default function Home() {
	return (
		<div className='home'>
			<img className='homePhoto' src={homePhoto} alt='HomePhoto' style={{ marginTop: 15 }} />
			<Container>
				<div className='welcomeBlock'>
					<Typography variant='h4' style={{ marginTop: '2%' }}>
						Family Law Hub
					</Typography>
					<Typography className='supportedText' variant='body1' style={{ marginTop: '1.5%' }}>
						Do you have a problems with the arrangements for the childcare?
					</Typography>
					<Typography className='supportedText' variant='body1' style={{ marginTop: '1.5%' }}>
						We may be able to help…
					</Typography>
				</div>
				<Typography variant='h5' style={{ marginTop: '2%' }}>
					About
				</Typography>
				<Typography variant='body2' style={{ marginTop: '1.5%' }}>
					The legal system is designed to assist families to reach safe and child-focused agreements for their child, where possible away from the court setting. If parents or families are unable to reach agreement, and a court application is made, the court encourages swift resolution of the dispute.
				</Typography>
				<Typography variant='body2' style={{ marginTop: '1.5%' }}>
					If you are already involved in a court case, it is important to set out relevant information to help the court to manage your case properly. To help you to do this, we have created software which invites you to answer questions to then create for you a written note to set out the type of information that is important to your case. Once the note is created you may download it and edit it as you wish before sharing it with the court.
				</Typography>
				<Typography variant='body2' style={{ marginTop: '1.5%' }}>
					If the note is shared with the court a copy should usually be shared with all other people involved in the case.
				</Typography>
				<Typography variant='h5' style={{ marginTop: '2%' }}>
					Useful links
				</Typography>
				<ul>
					<li>
						<Typography variant='body2' style={{ marginTop: '1%' }}>
							<Link target='_blank' href='https://helpwithchildarrangements.service.justice.gov.uk/'>
								Get help with child arrangements
							</Link>
						</Typography>
					</li>
					<li>
						<Typography variant='body2' style={{ marginTop: '1%', marginBottom: 40 }}>
							<Link target='_blank' href='https://helpwithchildarrangements.service.justice.gov.uk/'>
								Making a child maintenance arrangement
							</Link>
						</Typography>
					</li>
				</ul>
			</Container>
		</div>
	)
}
