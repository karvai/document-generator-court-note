import React from 'react'
import { object, boolean } from 'yup'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CustomTextInput from '../inputs/CustomTextInput'
import CustomSelector from '../inputs/CustomSelector'
import Zoom from '@material-ui/core/Zoom'
import FormHelperText from '@material-ui/core/FormHelperText'

const useStyles = makeStyles((theme) => ({
	marginTop: {
		marginTop: 15,
	},
}))

const childToLiveWithArr = ['Me', 'Partner', 'Both of us']
const childToSeeArr = ['Every day', 'Once a week', 'Once a month', 'Never']

export default function AgreedIssues({ values, setFieldValue, errors, handleChange, handleBlur, validateField }) {
	let commonValues = { values, setFieldValue, errors, handleChange, handleBlur, validateField }
	const classes = useStyles()

	return (
		<section>
			<Grid item className={classes.marginTop}>
				<FormControl fullWidth>
					<FormLabel error={!!errors.agreeWithParty}>Agreed facts with other party *</FormLabel>
				</FormControl>
			</Grid>
			<Grid container>
				<CustomTextInput
					rows={5}
					multiline
					name='agreeWithParty'
					commonValues={commonValues}
					sm={12} //
				/>
			</Grid>
			<Grid item className={classes.marginTop}>
				<FormControl fullWidth>
					<FormLabel error={!!errors.disagreeWithParty}>Disagreed facts with other party *</FormLabel>
				</FormControl>
			</Grid>
			<Grid container>
				<CustomTextInput
					rows={5}
					multiline
					name='disagreeWithParty'
					commonValues={commonValues}
					sm={12} //
				/>
			</Grid>
			<Grid item className={classes.marginTop}>
				<FormControl fullWidth>
					<FormLabel error={!!errors.disagreeWithParty}>I make this application for the following arrangements</FormLabel>
				</FormControl>
			</Grid>
			{[...Array(values.numChildren)].map((number, index) => (
				<Grid container key={index}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel>
								Child {index + 1} - {values[`childInitials${index + 1}`]} ({new Date(values[`childDoB${index + 1}`]).toLocaleString('en-GB').slice(0, 10)})
							</FormLabel>
						</FormControl>
					</Grid>
					<Grid container>
						<CustomSelector label='To live with' name={`childToLiveWith${index + 1}`} optionsArray={childToLiveWithArr} commonValues={commonValues} sm={3} />
						{values[`childToLiveWith${index + 1}`] === 'Partner' && <CustomSelector label='and see' name={`childToSee${index + 1}`} optionsArray={childToSeeArr} commonValues={commonValues} sm={3} />}
					</Grid>
				</Grid>
			))}
			<Grid item className={classes.marginTop}>
				<FormControl fullWidth>
					<FormLabel>I would like the court to</FormLabel>
				</FormControl>
			</Grid>
			<Grid item xs={12}>
				<FormControlLabel name='referMediaton' value={values['referMediaton']} onChange={handleChange} control={<Checkbox color='primary' />} label='Refer to mediation and return to court at a later date' labelPlacement='end' />
			</Grid>
			<Grid item xs={12}>
				<FormControlLabel name='negotiateResolution' value={values['negotiateResolution']} onChange={handleChange} control={<Checkbox color='primary' />} label='Negotiate a resolution at the first court hearing' labelPlacement='end' />
			</Grid>
			<Grid item xs={12}>
				<FormControlLabel name='emergencyOrders' value={values['emergencyOrders']} onChange={handleChange} control={<Checkbox color='primary' />} label='Make emergency orders to protect the child(ren)' labelPlacement='end' />
			</Grid>
			<Grid item xs={12}>
				<FormControlLabel name='dismissCase' value={values['dismissCase']} onChange={handleChange} control={<Checkbox color='primary' />} label='Dismiss the case and make no orders' labelPlacement='end' />
			</Grid>

			<Grid item style={{ marginTop: 20 }}>
				<FormControl fullWidth error={!!errors.agreeTC}>
					<FormLabel>This note has been prepared using software provided by the students and staff at London South Bank University. I have made it without any legal advice at court today. I have made it so that the court and the other party to this case might understand what my position is. *</FormLabel>
				</FormControl>
			</Grid>
			<Grid item xs={12}>
				<FormControlLabel name='agreeTC' value={values['agreeTC']} onChange={handleChange} control={<Checkbox color='primary' />} label='I understand and agree' labelPlacement='end' />
				<Zoom in={!!commonValues.errors.agreeTC}>
					<FormHelperText error>{commonValues.errors.agreeTC}</FormHelperText>
				</Zoom>
			</Grid>
		</section>
	)
}

// YUP Validation
AgreedIssues.validationSchema = object().shape({
	agreeTC: boolean().oneOf([true], 'The terms and conditions must be accepted.').required('The terms and conditions must be accepted.'),
})
