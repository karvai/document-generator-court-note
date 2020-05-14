import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

export default function Glossary() {
	return (
		<Container maxWidth='md'>
			<Typography variant='h4' style={{ marginTop: '40px' }}>
				Glossary
			</Typography>

			<Typography variant='body2' style={{ marginTop: '2.5%' }}>
				<strong>Applicant</strong> - You are an applicant, if you are the person who has submitted a court application to start legal proceedings.
			</Typography>
			<Typography variant='body2' style={{ marginTop: '2.5%' }}>
				<strong>Agreed Facts</strong> - Where the parties involved in a case can agree on what has happened.
			</Typography>
			<Typography variant='body2' style={{ marginTop: '2.5%' }}>
				<strong>Adjourn the case</strong> - This is when a judge makes a decision to pause the legal case and reschedule another hearing at a later date. This is usually used when one party cannot attend the court date or during the court case, it is demonstrated more legal evidence or expert advice is needed before a decision can be made.
			</Typography>
			<Typography variant='body2' style={{ marginTop: '2.5%' }}>
				<strong>Case Note</strong> - is a brief summary of the case which identifies and examines the key elements of the case.
			</Typography>
			<Typography variant='body2' style={{ marginTop: '2.5%' }}>
				<strong>Cafcass</strong> - is an abbreviation for ‘Children and Family Court Advisory and Support Service’. It is an organisation, which work with both the courts and the parties to provide the best solution for the children involved where there is no agreement between parties; where social services have serious concerns for the child’s safety; and where the is concerns over adoption.
			</Typography>
			<Typography variant='body2' style={{ marginTop: '2.5%' }}>
				<strong>Civil Partnership</strong> - is a registered legal relationship between two people who are either of the same-sex or opposite-sex
			</Typography>
			<Typography variant='body2' style={{ marginTop: '2.5%' }}>
				<strong>Dismissal of a case</strong> - when a case is brought to an end by the court
			</Typography>
			<Typography variant='body2' style={{ marginTop: '2.5%' }}>
				<strong>Court orders</strong> - is a judgement on the case. It is legally binding on the parties involved, to which if one party does not follow the order, you can ask the court to enforce it
			</Typography>
			<Typography variant='body2' style={{ marginTop: '2.5%', marginBottom: 40 }}>
				<strong>Respondent</strong> - you’re a respondent in the case if you are responding to the court application against you
			</Typography>
		</Container>
	)
}
