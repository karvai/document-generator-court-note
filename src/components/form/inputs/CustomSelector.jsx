import React from 'react'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Zoom from '@material-ui/core/Zoom'

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: 250,
		},
	},
}

export default function CustomSelector({ label, name, optionsArray, initialValue = '', commonValues, xs = 12, sm = true, md }) {
	return (
		<Grid item xs={xs} sm={sm} md={md}>
			<FormControl variant='outlined' fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select
					label={label}
					name={name}
					value={commonValues.values[name] ? commonValues.values[name] : initialValue}
					onChange={commonValues.handleChange}
					onBlur={commonValues.handleBlur}
					error={!!commonValues.errors[name]}
					MenuProps={MenuProps}
					//
				>
					{optionsArray.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</Select>
				<Zoom in={!!commonValues.errors[name]}>
					<FormHelperText error>{commonValues.errors[name]}</FormHelperText>
				</Zoom>
			</FormControl>
		</Grid>
	)
}
