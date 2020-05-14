import React from 'react'
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

export default function CustomButtonWithExtraComponent({ name, question, extraComponent, commonValues }) {
	const classes = useStyles()

	let [show, setShow] = React.useState(false)
	let [noVariant, setNoVariant] = React.useState('outlined')
	let [yesVariant, setYesVariant] = React.useState('outlined')

	let showOption = () => {
		setYesVariant('contained')
		setNoVariant('outlined')
		setShow(true)
		commonValues.setFieldValue(name, '')
	}

	let removeOption = () => {
		setNoVariant('contained')
		setYesVariant('outlined')
		setShow(false)
		commonValues.setFieldValue(name, 'no')
	}

	return (
		<>
			<Grid item className={classes.marginTop}>
				<FormControl fullWidth>
					<FormLabel className={classes.margin} error={!!commonValues.errors[name]}>
						{question}
					</FormLabel>
				</FormControl>
			</Grid>

			<Grid container>
				{show && extraComponent}
				{!show && (
					<Grid item>
						<Button className={classes.button} variant={yesVariant} disableElevation onClick={showOption}>
							Yes
						</Button>
						<Zoom in={!!commonValues.errors[name]}>
							<FormHelperText error>{commonValues.errors[name]}</FormHelperText>
						</Zoom>
					</Grid>
				)}

				<Grid item>
					<Button className={classes.button} variant={noVariant} disableElevation onClick={removeOption}>
						No
					</Button>
				</Grid>
			</Grid>
		</>
	)
}
