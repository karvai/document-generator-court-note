import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'

const useStyles = makeStyles((theme) => ({
	textField: {
		minWidth: 140,
	},
}))

export default function CustomTextInput({ label, name, type = 'text', multiline = false, initialValue = '', commonValues, xs = 12, sm = true, md = true }) {
	const classes = useStyles()

	return (
		<Grid item xs={xs} sm={sm} md={md}>
			<TextField
				label={label}
				name={name}
				value={commonValues.values[name] ? commonValues.values[name] : initialValue}
				onChange={commonValues.handleChange}
				onBlur={commonValues.handleBlur}
				error={!!commonValues.errors[name]}
				type={type}
				multiline={multiline}
				fullWidth
				variant='outlined'
				className={classes.textField}
				//
			/>
			<Zoom in={!!commonValues.errors[name]}>
				<FormHelperText error>{commonValues.errors[name]}</FormHelperText>
			</Zoom>
		</Grid>
	)
}
