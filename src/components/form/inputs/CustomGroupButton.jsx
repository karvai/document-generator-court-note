import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Zoom from '@material-ui/core/Zoom'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import CustomButtonWithExtraComponent from './CustomButtonWithExtraComponent'
import CustomTextInput from './CustomTextInput'

const useStyles = makeStyles((theme) => ({
	marginTop: {
		marginTop: 15,
	},
	button: {
		height: 56,
	},
}))

export default function CustomGroupButton({ name, question, commonValues, fullWidth = true, optionsArray, detailsName }) {
	const classes = useStyles()
	const [activeIndexButton, setActiveIndexButton] = useState()
	const [showDetail, setShowDetail] = useState(false)

	const handleClick = (value, index) => {
		setActiveIndexButton(index)
		commonValues.setFieldValue(name, value)
		if (value !== 'Never') {
			setShowDetail(true)
		} else {
			setShowDetail(false)
			commonValues.setFieldValue(detailsName, '')
		}
	}

	return (
		<>
			<Grid item className={classes.marginTop}>
				<FormControl fullWidth>
					<FormLabel error={!!commonValues.errors[name]}>{question}</FormLabel>
				</FormControl>
			</Grid>

			<Grid container>
				<Grid item xs={12}>
					<ButtonGroup fullWidth={fullWidth} className={classes.button}>
						{optionsArray.map((value, index) => (
							<Button
								name={name}
								key={index}
								value={value}
								disableElevation
								variant={index === activeIndexButton ? 'contained' : 'outlined'}
								onClick={() => handleClick(value, index)} //
							>
								{value}
							</Button>
						))}
					</ButtonGroup>
					<Zoom in={!!commonValues.errors[name]}>
						<FormHelperText error>{commonValues.errors[name]}</FormHelperText>
					</Zoom>
				</Grid>

				{showDetail && (
					<CustomButtonWithExtraComponent
						name={detailsName}
						question='Would you like to provide more details? *'
						commonValues={commonValues}
						extraComponent={
							<CustomTextInput
								label={'Please describe in details'}
								name={detailsName}
								multiline
								commonValues={commonValues}
								xs={8}
								sm={4}
								md={9} //
							/>
						}
					/>
				)}
			</Grid>
		</>
	)
}
