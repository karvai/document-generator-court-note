import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'

const useStyles = makeStyles((theme) => ({
	chip: {
		marginTop: -10,
		marginBottom: -10,
		marginLeft: 5,
		'&:first-of-type': {
			marginLeft: 0,
		},
	},
}))

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: 250,
		},
	},
}

export default function NationalitySelector({ label, name, optionsArray, commonValues, xs = 12, sm = true, md = true }) {
	const classes = useStyles()

	const handleNatChange = (e) => {
		commonValues.setFieldValue('nationality', e)
		commonValues.setFieldValue('isBritish', e.includes('British'))
	}

	return (
		<Grid item xs={xs} sm={sm} md={md}>
			<FormControl fullWidth variant='outlined'>
				<InputLabel>{label}</InputLabel>
				<Select
					multiple
					label={label}
					name={name}
					value={commonValues.values[name] ? commonValues.values[name] : []}
					onChange={(e) => handleNatChange(e.target.value)}
					onBlur={commonValues.handleBlur}
					error={!!commonValues.errors[name]}
					MenuProps={MenuProps}
					renderValue={(selected) => (
						<div>
							{selected.map((value) => (
								<Chip key={value} label={value} className={classes.chip} />
							))}
						</div>
					)}>
					{optionsArray.map((nat) => (
						<MenuItem key={nat} value={nat}>
							{nat}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Zoom in={!!commonValues.errors[name]}>
				<FormHelperText error>{commonValues.errors[name]}</FormHelperText>
			</Zoom>
		</Grid>
	)
}
