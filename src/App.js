import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import FormWizard from './components/FormWizard'
import GeneratedDocument from './components/GeneratedDocument'
import Glossary from './components/Glossary'
import TermConditions from './components/TermConditions'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import Footer from './components/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const theme = createMuiTheme({
	typography: {
		fontFamily: '"Montserrat", sans-serif',
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
	overrides: {
		MuiDialogActions: {
			root: {
				display: 'none',
			},
		},
		MuiGrid: {
			item: {
				margin: 5,
			},
		},
		MuiPickersSlideTransition: {
			transitionContainer: {
				marginBottom: 12,
			},
		},
		MuiFormHelperText: {
			root: {
				marginTop: 0,
			},
			contained: {
				marginLeft: 0,
				marginRight: 0,
			},
		},
		MuiIconButton: {
			root: {
				padding: 5,
			},
		},
		MuiButton: {
			root: {
				'@media (max-width: 600px)': {
					fontSize: '0.7rem',
				},
			},
			outlined: {
				padding: '6px 16px',
				border: 'none',
				position: 'relative',
			},
		},
		MuiFormControlLabel: {
			root: {
				marginLeft: '-5px',
			},
		},
		MuiTypography: {
			body2: {
				'@media (max-width: 600px)': {
					fontSize: '0.7rem',
				},
			},
			h4: {
				'@media (max-width: 600px)': {
					fontSize: '1.7rem',
				},
			},
		},
		MuiFormLabel: {
			root: {
				lineHeight: '1.3',
				'@media (max-width: 600px)': {
					fontSize: '0.9rem',
				},
			},
		},
		MuiButtonGroup: {
			grouped: {
				'@media (max-width: 600px)': {
					textTransform: 'none',
				},
			},
		},
		MuiContainer: {
			maxWidthMd: {
				paddingLeft: 5,
				paddingRight: 5,
			},
		},
	},
})

export default function App() {
	const [state, setState] = useState({ address: '56 Empire Court', agreeTC: true, agreeWithParty: 'I agree with the other party that ', applicantOrResponder: 'Applicant', childDoB1: null, childInitials1: 's', childLiveWith1: 'Partner', childNeeds1: 'Emotional and behavioural', childToLiveWith1: 'Me', childrenRisk: 'no', city: 'Wembley', courtCaseNum: 's', courtName: 's', disability: 'no', disagreeWithParty: 'I do not agree with the other party that ', domesticViolenceDetails: '', domesticViolenceScale: 'Never', email: 'karvai_kip@hotmail.com', firstName: 'sds', immigrationStatus: 'No', isBritish: false, isTogether: 'Yes', language: 'no', lastName: 'Karvay', leavingHouseDetails: '', leavingHouseScale: 'Never', nationality: ['Afghan'], numChildren: 1, phone: '07873533608', policeInvolvedDetails: '', policeInvolvedScale: 'Never', postcode: 'HA9 0AQ', preventSeeingChildrenDetails: '', preventSeeingChildrenScale: 'Never', relationship: 'Not formalized', seeingFamilyDetails: '', seeingFamilyScale: 'Never', threatenedChildrenDetails: '', threatenedChildrenScale: 'Never', title: 'Mr.' })

	return (
		<div className='App'>
			<BrowserRouter>
				<MuiThemeProvider theme={theme}>
					<Header />
					<div className='content'>
						<Route exact path='/' component={Home} />
						<Route path='/form' render={(e) => <FormWizard setState={setState} {...e} />} />
						<Route path='/generated-document' render={() => <GeneratedDocument state={state} />} />
						<Route path='/glossary' component={Glossary} />
						<Route path='/terms' component={TermConditions} />
					</div>
					<Footer />
				</MuiThemeProvider>
			</BrowserRouter>
		</div>
	)
}
