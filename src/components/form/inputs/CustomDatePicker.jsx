import React from 'react'
import DateFns from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
import FormHelperText from '@material-ui/core/FormHelperText'
import Zoom from '@material-ui/core/Zoom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	textField: {
		minWidth: 153,
	},
}))

export default function CustomDatePicker({ label, name, minDate, maxDate, commonValues, sm = true, md = true }) {
	const classes = useStyles()
	return (
		<Grid item xs={12} sm={sm} md={md}>
			<MuiPickersUtilsProvider utils={DateFns}>
				<KeyboardDatePicker
					label={label}
					name={name}
					autoOk
					fullWidth
					inputVariant='outlined'
					format='dd/MM/yyyy'
					placeholder='dd/MM/yyyy'
					maxDate={maxDate}
					maxDateMessage=''
					minDate={minDate}
					minDateMessage=''
					value={commonValues.values[name] ? commonValues.values[name] : null}
					onChange={(e) => commonValues.setFieldValue(name, e)}
					onBlur={commonValues.handleBlur}
					error={!!commonValues.errors[name]}
					className={classes.textField} //
				/>
			</MuiPickersUtilsProvider>
			<Zoom in={!!commonValues.errors[name]}>
				<FormHelperText error>{commonValues.errors[name]}</FormHelperText>
			</Zoom>
		</Grid>
	)
}
