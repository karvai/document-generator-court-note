import React, { useState, useRef, useEffect } from 'react'
import { Container } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import Slider from 'react-slick'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PersonalDetails from './form/steps/PersonalDetails'
import AgreedIssues from './form/steps/AgreedIssues'
import Abuse from './form/steps/Abuse'
import RelationshipChildren from './form/steps/RelationshipChildren'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
	button: {
		margin: 5,
		[theme.breakpoints.down('xs')]: {
			height: '2.5rem',
			width: '5rem',
		},
	},
	stepper: {
		paddingLeft: 0,
		paddingRight: 0,
	},
}))

const steps = [
	{ component: PersonalDetails, label: 'Personal details' },
	{ component: Abuse, label: 'Abuse' },
	{ component: RelationshipChildren, label: 'Relationship & Children' },
	{ component: AgreedIssues, label: 'Agreed facts & Issues' },
]

export default function FormWizard({ history, setState }) {
	const classes = useStyles()
	const [activeStep, setActiveStep] = useState(0)
	const myRef = useRef()

	const slickSettings = {
		arrows: true,
		infinite: false,
		adaptiveHeight: true,
		swipe: false,
		beforeChange: (current, next) => setActiveStep(next),
	}

	useEffect(() => {
		myRef.current.slickGoTo(activeStep)
	})

	const isLastStep = () => {
		return activeStep === steps.length - 1
	}
	const handlePrev = () => setActiveStep(Math.max(activeStep - 1, 0))
	const handleNext = () => setActiveStep(Math.min(activeStep + 1, steps.length - 1))

	const onSubmit = (values, { setSubmitting }) => {
		if (!isLastStep()) {
			setSubmitting(false)
			handleNext()
			return
		}
		console.log(values)

		setState(values)
		setSubmitting(false)
		history.push('/generated-document')
	}

	return (
		<>
			<Container maxWidth='md'>
				<Typography variant='h4' style={{ marginTop: '40px' }}>
					Form generator
				</Typography>
				<Formik
					initialValues={{ isBritish: false, numChildren: 0, agreeWithParty: 'I agree with the other party that ', disagreeWithParty: 'I do not agree with the other party that ' }}
					onSubmit={onSubmit}
					validationSchema={steps[activeStep].component.validationSchema}
					validateOnChange={false}
					validateOnBlur={false} //
				>
					{(props) => (
						<Form>
							<Stepper alternativeLabel activeStep={activeStep} className={classes.stepper}>
								{steps.map((step, index) => (
									<Step key={index}>
										<StepLabel>{step.label}</StepLabel>
									</Step>
								))}
							</Stepper>

							<Slider ref={(ref) => (myRef.current = ref)} {...slickSettings}>
								{steps.map((step, index) => {
									const Component = step.component
									return <Component key={index} {...props} />
								})}
							</Slider>

							<Grid container direction='row' justify='center' alignItems='center' style={{ marginTop: 20, marginBottom: 40 }}>
								<Button className={classes.button} disabled={activeStep === 0 || props.isSubmitting} onClick={handlePrev}>
									Previous
								</Button>
								<Button className={classes.button} disabled={props.isSubmitting} type='submit' variant='contained' color='primary'>
									{isLastStep() ? 'Submit' : 'Next'}
								</Button>
							</Grid>

							{/* <pre>{JSON.stringify(props.values, null, 2)}</pre>
							<pre>{JSON.stringify(props.errors, null, 2)}</pre> */}
						</Form>
					)}
				</Formik>
			</Container>
		</>
	)
}
