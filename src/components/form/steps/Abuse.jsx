import React from 'react'
import { object, string, boolean } from 'yup'
import CustomSeparateButton from '../inputs/CustomSeparateButton'
import CustomGroupButton from '../inputs/CustomGroupButton'
import CustomButtonWithExtraComponent from '../inputs/CustomButtonWithExtraComponent'
import CustomTextInput from '../inputs/CustomTextInput'

// Arrays with options
const yesNoArr = ['Yes', 'No']
const scaleArr = ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
const policeScaleArr = ['Never', 'Once', 'More than once']

export default function Abuse({ values, setFieldValue, errors, handleChange, handleBlur, validateField }) {
	let commonValues = { values, setFieldValue, errors, handleChange, handleBlur, validateField }

	return (
		<section>
			{!values['isBritish'] && (
				<CustomSeparateButton
					name='immigrationStatus'
					question='Has the other party ever tried to control you by telling you that you could be deported because of your immigration status? *'
					optionsArray={yesNoArr}
					commonValues={commonValues} //
				/>
			)}

			<CustomGroupButton
				name='leavingHouseScale'
				detailsName='leavingHouseDetails'
				question='How often has the other party tried to prevent you from leaving the house? *'
				optionsArray={scaleArr}
				commonValues={commonValues} //
			/>

			<CustomGroupButton
				name='seeingFamilyScale'
				detailsName='seeingFamilyDetails'
				question='How often has the other party tried to keep you away from seeing your friends or family? *'
				optionsArray={scaleArr}
				commonValues={commonValues} //
			/>

			<CustomGroupButton
				name='threatenedChildrenScale'
				detailsName='threatenedChildrenDetails'
				question='How often has the other party threatened your child(ren)? *'
				optionsArray={scaleArr}
				commonValues={commonValues} //
			/>

			<CustomGroupButton
				name='preventSeeingChildrenScale'
				detailsName='preventSeeingChildrenDetails'
				question='Has the other party ever threatened you to take your child(ren) away or prevent you from seeing them? *'
				optionsArray={scaleArr}
				commonValues={commonValues} //
			/>

			<CustomGroupButton
				name='domesticViolenceScale'
				detailsName='domesticViolenceDetails'
				question='How often has Domestic Violence occurred? *'
				optionsArray={scaleArr}
				commonValues={commonValues} //
			/>

			<CustomGroupButton
				name='policeInvolvedScale'
				detailsName='policeInvolvedDetails'
				question='Has the police been involved in any arguments between you and the other party? *'
				fullWidth={false}
				optionsArray={policeScaleArr}
				commonValues={commonValues} //
			/>

			<CustomButtonWithExtraComponent
				name='childrenRisk'
				question='I believe that my child(ren) may be at risk of harm *'
				commonValues={commonValues}
				extraComponent={
					<CustomTextInput
						label={'Please describe in details'}
						name='childrenRisk'
						multiline
						commonValues={commonValues}
						xs={8}
						sm={4}
						md={9} //
					/>
				}
			/>
		</section>
	)
}

// YUP Validation
Abuse.validationSchema = object().shape({
	isBritish: boolean(),
	immigrationStatus: string().when('isBritish', {
		is: false,
		then: string().required('Required'),
	}),
	leavingHouseScale: string().required('Required'),
	leavingHouseDetails: string().when('leavingHouseScale', {
		is: 'Rarely' || 'Sometimes' || 'Often' || 'Always',
		then: string().required('Required'),
	}),
	seeingFamilyScale: string().required('Required'),
	seeingFamilyDetails: string().when('seeingFamilyScale', {
		is: 'Rarely' || 'Sometimes' || 'Often' || 'Always',
		then: string().required('Required'),
	}),
	threatenedChildrenScale: string().required('Required'),
	threatenedChildrenDetails: string().when('threatenedChildrenScale', {
		is: 'Rarely' || 'Sometimes' || 'Often' || 'Always',
		then: string().required('Required'),
	}),
	preventSeeingChildrenScale: string().required('Required'),
	preventSeeingChildrenDetails: string().when('preventSeeingChildrenScale', {
		is: 'Rarely' || 'Sometimes' || 'Often' || 'Always',
		then: string().required('Required'),
	}),
	domesticViolenceScale: string().required('Required'),
	domesticViolenceDetails: string().when('domesticViolenceScale', {
		is: 'Rarely' || 'Sometimes' || 'Often' || 'Always',
		then: string().required('Required'),
	}),
	policeInvolvedScale: string().required('Required'),
	policeInvolvedDetails: string().when('policeInvolvedScale', {
		is: 'Once' || 'More than once',
		then: string().required('Required'),
	}),
	childrenRisk: string().required('Required'),
})
