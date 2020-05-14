import React from 'react'
import { object, string, date, number } from 'yup'
import CustomDatePicker from '../inputs/CustomDatePicker'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { makeStyles } from '@material-ui/core/styles'
import CustomSeparateButton from '../inputs/CustomSeparateButton'
import CustomTextInput from '../inputs/CustomTextInput'
import CustomSelector from '../inputs/CustomSelector'
import FormHelperText from '@material-ui/core/FormHelperText'
import Zoom from '@material-ui/core/Zoom'

const useStyles = makeStyles((theme) => ({
	marginTop: {
		marginTop: 15,
	},
}))

const relationshipArr = ['Not formalized', 'Civil partnership', 'Married']
const yesOrNoArr = ['Yes', 'No']
const childNeedsArr = ['None', 'Thinking, understanding and learning', 'Emotional and behavioural', 'Speech, language and communication', 'Physical or sensory']
const childLiveWithArr = ['Me', 'Partner', 'Both of us']

export default function RelationshipChildren({ values, setFieldValue, errors, handleChange, handleBlur, validateField }) {
	let commonValues = { values, setFieldValue, errors, handleChange, handleBlur, validateField }
	const classes = useStyles()

	const handleChildChange = (event) => {
		if (event.target.value >= 0 && event.target.value <= 50 && event.target.value !== '') {
			handleChange(event)
		}
	}

	return (
		<section>
			<Grid item className={classes.marginTop}>
				<FormControl fullWidth>
					<FormLabel error={!!errors.relationshipBegun}>The date your relationship has begun *</FormLabel>
				</FormControl>
			</Grid>
			<Grid container>
				<CustomDatePicker label='Date *' name='relationshipBegun' maxDate={Date()} commonValues={commonValues} sm={4} md={3} />
			</Grid>

			<CustomSeparateButton
				name='relationship'
				question='The formalization level of your relationship *'
				optionsArray={relationshipArr}
				commonValues={commonValues} //
			/>

			<CustomSeparateButton
				name='isTogether'
				question='Are you still living together? *'
				optionsArray={yesOrNoArr}
				commonValues={commonValues} //
			/>

			{values.isTogether === 'No' && (
				<>
					<Grid item className={classes.marginTop}>
						<FormControl fullWidth>
							<FormLabel error={!!errors.relationshipEnded}>When your relationship ended? *</FormLabel>
						</FormControl>
					</Grid>

					<Grid container>
						<CustomDatePicker label='Date *' name='relationshipEnded' maxDate={Date()} commonValues={commonValues} sm={4} md={3} />
					</Grid>
				</>
			)}

			<Grid item className={classes.marginTop}>
				<FormControl fullWidth>
					<FormLabel error={!!errors.numChildren}>How many children do you have? *</FormLabel>
				</FormControl>
			</Grid>
			<Grid container>
				<Grid item xs={12} sm={4} md={2}>
					<TextField
						label='Child(ren)'
						name='numChildren'
						type='number'
						value={values.numChildren}
						onChange={(e) => handleChildChange(e)}
						onBlur={handleBlur}
						error={!!commonValues.errors.numChildren}
						fullWidth
						variant='outlined'
						//
					/>
					<Zoom in={!!commonValues.errors.numChildren}>
						<FormHelperText error>{commonValues.errors.numChildren}</FormHelperText>
					</Zoom>
				</Grid>
			</Grid>

			{[...Array(values.numChildren)].map((number, index) => (
				<Grid container key={index}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel>Child {index + 1}</FormLabel>
						</FormControl>
					</Grid>
					<CustomTextInput label='Initials' name={`childInitials${index + 1}`} commonValues={commonValues} sm={6} md={2} />
					<CustomDatePicker label='Date of birth' name={`childDoB${index + 1}`} maxDate={Date()} commonValues={commonValues} md={3} />
					<CustomSelector label='Educational needs' name={`childNeeds${index + 1}`} optionsArray={childNeedsArr} commonValues={commonValues} sm={6} md={4} />
					<CustomSelector label='Child lives with' name={`childLiveWith${index + 1}`} optionsArray={childLiveWithArr} commonValues={commonValues} />
				</Grid>
			))}
		</section>
	)
}

// YUP Validation
RelationshipChildren.validationSchema = object().shape({
	relationshipBegun: date().nullable().required('Required').max(new Date(), 'It cannot be in the future'),
	relationship: string().required('Required'),
	isTogether: string().required('Required'),
	relationshipEnded: date()
		.nullable()
		.when('isTogether', {
			is: 'No',
			then: date().nullable().required('Required').max(new Date(), 'It cannot be in the future'),
		}),
	numChildren: number().integer('Must be a whole number').min(1, 'Must be at least 1 child').required('Required'),
})
