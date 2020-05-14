import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
	page: {
		padding: 50,
	},
	container: {
		flexDirection: 'row',
	},
	containerFullWidth: {
		width: '50%',
	},
	textToRight: {
		fontSize: 13,
		textAlign: 'right',
	},
	textToLeft: {
		fontSize: 13,
		textAlign: 'left',
	},
	textCenter: {
		fontSize: 16,
		textAlign: 'center',
		paddingTop: 40,
	},
	textSignature: {
		fontSize: 10,
		textAlign: 'center',
		paddingTop: 10,
	},
	textNormal: {
		fontSize: 12,
		padding: 10,
	},
	textEachStep: {
		fontSize: 12,
		padding: '15px 0',
	},
	textUnderline: {
		fontSize: 12,
		padding: 10,
		textDecoration: 'underline',
	},
	textBullet: {
		fontSize: 12,
		padding: 10,
		marginLeft: 10,
	},
})

export default function PDFDocument({ state }) {
	const checkImmigration = () => {
		if (!state.isBritish && state.immigrationStatus === 'Yes') {
			return (
				<Text style={styles.textNormal}>
					• Other party <Text style={styles.textUnderline}>tried</Text> to control me by telling that I could be deported because of my immigration status
				</Text>
			)
		}
	}

	return (
		<Document>
			<Page size='A4' style={styles.page}>
				<View style={styles.container}>
					<View style={styles.containerFullWidth}>
						<Text style={styles.textToLeft}>IN THE {state.courtName.toUpperCase()} FAMILY COURT</Text>
					</View>
					<View style={styles.containerFullWidth}>
						<Text style={styles.textToRight}>CASE NO: {state.courtCaseNum.toUpperCase()}</Text>
					</View>
				</View>

				<View style={{ marginTop: 10 }}>
					<Text style={styles.textCenter}>
						The {state.applicantOrResponder}'s Note for the FHDRA on {new Date(state.dateOfHearing).toLocaleString('en-GB').slice(0, 10)}
					</Text>
				</View>

				<View style={{ marginTop: 30 }}>
					<Text style={styles.textEachStep}>
						1. My name is {state.title} {state.lastName} and I'm the {state.applicantOrResponder} in this case. This is my note for hearing today.
					</Text>
					<Text style={styles.textEachStep}>2. Some relevant key events are:</Text>
					<Text style={styles.textNormal}>
						<Text style={styles.textUnderline}>Me:</Text> Born on {new Date(state.dateOfBirth).toLocaleString('en-GB').slice(0, 10)} and currently live at {state.address}, {state.city}, {state.postcode}
					</Text>
					<Text style={styles.textNormal}>
						<Text style={styles.textUnderline}>Contact details:</Text> Email is {state.email} {state.phone !== '' && `and phone number is ${state.phone}`}
					</Text>
					<Text style={styles.textNormal}>
						<Text style={styles.textUnderline}>Relationship:</Text> {state.relationship}, begun on {new Date(state.relationshipBegun).toLocaleString('en-GB').slice(0, 10)} {state.isTogether === 'No' && `and ended on ${new Date(state.relationshipEnded).toLocaleString('en-GB').slice(0, 10)}`}
					</Text>
					{[...Array(state.numChildren)].map((number, index) => (
						<Text key={index + 1} style={styles.textNormal}>
							<Text style={styles.textUnderline}>Child {index + 1}:</Text> {state[`childInitials${index + 1}`]} born on {new Date(state[`childDoB${index + 1}`]).toLocaleString('en-GB').slice(0, 10)} {state.childNeeds !== 'None' && 'has ' + state[`childNeeds${index + 1}`].toLowerCase()} and lives with {state[`childLiveWith${index + 1}`].toLowerCase()}. I would like child to live with {state[`childToLiveWith${index + 1}`].toLowerCase()} {state[`childToLiveWith${index + 1}`] === 'Partner' && 'and see ' + state[`childToSee${index + 1}`].toLowerCase()}
						</Text>
					))}
					<Text style={styles.textEachStep}>3. I make this application because I want to:</Text>
					{state.referMediaton && <Text style={styles.textNormal}>• Refer to mediation and return to court at a later date</Text>}
					{state.negotiateResolution && <Text style={styles.textNormal}>• Negotiate a resolution at the first court hearing</Text>}
					{state.emergencyOrders && <Text style={styles.textNormal}>• Make emergency orders to protect my {state.numChildren === 1 ? 'child' : 'children'}</Text>}
					{state.dismissCase && <Text style={styles.textNormal}>• Dismiss the case and make no orders</Text>}
					<Text style={styles.textEachStep}>4. {state.agreeWithParty}</Text>
					<Text style={styles.textEachStep}>5. {state.disagreeWithParty}</Text>
					<Text style={styles.textEachStep}>6. Facts of domestic abuse are:</Text>
					{checkImmigration()}
					{state.leavingHouseScale !== 'Never' && (
						<Text style={styles.textNormal}>
							{'• Other party'} <Text style={styles.textUnderline}>{state.leavingHouseScale.toLowerCase()}</Text> {'tried to prevent me from leaving the house.'} {state.leavingHouseDetails !== 'no' && state.leavingHouseDetails}
						</Text>
					)}
					{state.seeingFamilyScale !== 'Never' && (
						<Text style={styles.textNormal}>
							{'• Other party'} <Text style={styles.textUnderline}>{state.seeingFamilyScale.toLowerCase()}</Text> {'tried to keep me away from seeing my friends or family.'} {state.seeingFamilyDetails !== 'no' && state.seeingFamilyDetails}
						</Text>
					)}
					{state.threatenedChildrenScale !== 'Never' && (
						<Text style={styles.textNormal}>
							{'• Other party'} <Text style={styles.textUnderline}>{state.threatenedChildrenScale.toLowerCase()}</Text> {'threatened my'} {state.numChildren === 1 ? 'child.' : 'children.'} {state.threatenedChildrenDetails !== 'no' && state.threatenedChildrenDetails}
						</Text>
					)}
					{state.preventSeeingChildrenScale !== 'Never' && (
						<Text style={styles.textNormal}>
							{'• Other party'} <Text style={styles.textUnderline}>{state.preventSeeingChildrenScale.toLowerCase()}</Text> {'threatened me to take my'} {state.numChildren === 1 ? 'child' : 'children'} {'away or prevent me from seeing'} {state.numChildren === 1 ? 'it.' : 'them.'} {state.preventSeeingChildrenDetails !== 'no' && state.preventSeeingChildrenDetails}
						</Text>
					)}
					{state.domesticViolenceScale !== 'Never' && (
						<Text style={styles.textNormal}>
							{'• Domestic Violence'} <Text style={styles.textUnderline}>{state.domesticViolenceScale.toLowerCase()}</Text> {'occurred.'} {state.domesticViolenceDetails !== 'no' && state.domesticViolenceDetails}
						</Text>
					)}
					{state.policeInvolvedScale !== 'Never' && (
						<Text style={styles.textNormal}>
							{'• Police has been involved'} <Text style={styles.textUnderline}>{state.policeInvolvedScale.toLowerCase()}</Text> {'in arguments between me and the other party.'} {state.policeInvolvedDetails !== 'no' && state.policeInvolvedDetails}
						</Text>
					)}

					<Text style={styles.textEachStep}>7. {state.childrenRisk !== 'no' ? 'I believe that my ' + (state.numChildren === 1 ? 'child' : 'children') + ' may be at risk of harm. ' + state.childrenRisk : '---'}</Text>
					<Text style={styles.textEachStep}>8. {state.language !== 'no' ? 'I would like the court to arrange for an ' + state.language.toLowerCase() + ' interpreter for me at future hearings' : '---'}</Text>
					<Text style={styles.textEachStep}>9. {state.disability !== 'no' ? 'I need additional assistance with my disability. ' + state.disability : '---'}</Text>
					<Text style={styles.textEachStep}>10. This note has been prepared using software provided by the students and staff at London South Bank University. I have made it without any legal advice at court today. I have made it so that the court and the other party to this case might understand what my position is.</Text>
					<Text style={styles.textEachStep}>11. I have provided copies of this document to the court and in doing so I consent to them being read by the court, Cafcass and by the other party.</Text>
					<Text style={styles.textCenter}>_________________</Text>
					<Text style={styles.textSignature}>(Signature)</Text>
				</View>
			</Page>
		</Document>
	)
}
