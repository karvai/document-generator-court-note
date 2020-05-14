import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Zoom from '@material-ui/core/Zoom'

const useStyles = makeStyles((theme) => ({
	marginTop: {
		marginTop: 15,
	},
	button: {
		height: 56,
	},
}))

export default function CustomSeparateButton({ name, question, commonValues, optionsArray }) {
	const classes = useStyles()
	const [activeIndexButton, setActiveIndexButton] = useState()

	const handleClick = (value, index) => {
		setActiveIndexButton(index)
		commonValues.setFieldValue(name, value)
	}

	return (
		<>
			<Grid item className={classes.marginTop}>
				<FormControl fullWidth>
					<FormLabel error={!!commonValues.errors[name]}>{question}</FormLabel>
				</FormControl>
			</Grid>

			<Grid container>
				{optionsArray.map((value, index) => (
					<Grid key={index} item>
						<Button
							className={classes.button}
							disableElevation
							variant={index === activeIndexButton ? 'contained' : 'outlined'}
							onClick={() => handleClick(value, index)} //
						>
							{value}
						</Button>
						{index === 0 && (
							<Zoom in={!!commonValues.errors[name]}>
								<FormHelperText error>{commonValues.errors[name]}</FormHelperText>
							</Zoom>
						)}
					</Grid>
				))}
			</Grid>
		</>
	)
}
