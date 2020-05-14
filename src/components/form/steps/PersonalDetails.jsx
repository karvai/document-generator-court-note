import React from 'react'
import { object, string, date, array } from 'yup'
import { subDays, subYears } from 'date-fns'
import CustomTextInput from '../inputs/CustomTextInput'
import CustomSelector from '../inputs/CustomSelector'
import NationalitySelector from '../inputs/NationalitySelector'
import CustomDatePicker from '../inputs/CustomDatePicker'
import Grid from '@material-ui/core/Grid'
import CustomButtonWithExtraComponent from '../inputs/CustomButtonWithExtraComponent'
import CustomSeparateButton from '../inputs/CustomSeparateButton'

// Arrays with options
const titlesArr = ['Mr.', 'Mrs.', 'Miss']
const nationalitiesArr = ['British', 'Irish', 'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian', 'Belgian', 'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican', 'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian', 'I-Kiribati', 'Icelander', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan', 'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian', 'Luxembourger', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivan', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian', 'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 'Mosotho', 'Motswana', 'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 'Nicaraguan', 'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish', 'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Polish', 'Portuguese', 'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi', 'Senegalese', 'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean', 'Slovakian', 'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Korean', 'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamer', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian/Tobagonian', 'Tunisian', 'Turkish', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbekistani', 'Venezuelan', 'Vietnamese', 'Yemenite', 'Zambian', 'Zimbabwean']
const languagesArr = ['Abkhazian', 'Afar', 'Afrikaans', 'Akan', 'Albanian', 'Amharic', 'Arabic', 'Aragonese', 'Armenian', 'Assamese', 'Avaric', 'Avestan', 'Aymara', 'Azerbaijani', 'Bambara', 'Bashkir', 'Basque', 'Belarusian', 'Bengali', 'Bihari', 'Bislama', 'Bosnian', 'Breton', 'Bulgarian', 'Burmese', 'Catalan', 'Central Khmer', 'Chamorro', 'Chechen', 'Chichewa', 'Chinese', 'Chuang', 'Chuvash', 'Cornish', 'Corsican', 'Cree', 'Croatian', 'Czech', 'Danish', 'Divehi', 'Dutch', 'Dzongkha', 'English', 'Esperanto', 'Estonian', 'Ewe', 'Faroese', 'Fijian', 'Finnish', 'French', 'Fulah', 'Gaelic', 'Galician', 'Ganda', 'Georgian', 'German', 'Gikuyu', 'Greek', 'Greenlandic', 'Guarani', 'Gujarati', 'Haitian', 'Hausa', 'Hebrew', 'Herero', 'Hindi', 'Hiri Motu', 'Hungarian', 'Icelandic', 'Ido', 'Igbo', 'Indonesian', 'Interlingua', 'Inuktitut', 'Inupiaq', 'Irish', 'Italian', 'Japanese', 'Javanese', 'Kannada', 'Kanuri', 'Kashmiri', 'Kazakh', 'Kinyarwanda', 'Komi', 'Kongo', 'Korean', 'Kwanyama', 'Kurdish', 'Kyrgyz', 'Lao', 'Latin', 'Latvian', 'Letzeburgesch', 'Limburgish', 'Lingala', 'Lithuanian', 'Luba-Katanga', 'Macedonian', 'Malagasy', 'Malay', 'Malayalam', 'Maltese', 'Manx', 'Maori', 'Marathi', 'Marshallese', 'Moldavian', 'Mongolian', 'Nauru', 'Navajo', 'Northern Ndebele', 'Ndonga', 'Nepali', 'Northern Sami', 'Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk', 'Nuosu', 'Occitan', 'Ojibwa', 'Oriya', 'Oromo', 'Ossetian', 'Pali', 'Panjabi', 'Pashto', 'Persian', 'Polish', 'Portuguese', 'Quechua', 'Romansh', 'Rundi', 'Russian', 'Samoan', 'Sango', 'Sanskrit', 'Sardinian', 'Serbian', 'Shona', 'Sindhi', 'Sinhalese', 'Slovak', 'Slovenian', 'Somali', 'Southern', 'South Ndebele', 'Spanish, Castilian', 'Sundanese', 'Swahili', 'Swati', 'Swedish', 'Tagalog', 'Tahitian', 'Tajik', 'Tamil', 'Tatar', 'Telugu', 'Thai', 'Tibetan', 'Tigrinya', 'Tonga', 'Tsonga', 'Tswana', 'Turkish', 'Turkmen', 'Twi', 'Uighur', 'Ukrainian', 'Urdu', 'Uzbek', 'Venda', 'Vietnamese', 'Walloon', 'Welsh', 'Western Frisian', 'Wolof', 'Xhosa', 'Yiddish', 'Yoruba', 'Zulu']
const applicantOrRespondentArr = ['Applicant', 'Respondent']

export default function PersonalDetails({ values, setFieldValue, errors, handleChange, handleBlur, validateField }) {
	let commonValues = { values, setFieldValue, errors, handleChange, handleBlur, validateField }

	return (
		<section>
			<Grid container>
				<CustomSelector label='Title *' name='title' optionsArray={titlesArr} commonValues={commonValues} sm={2} />
				<CustomTextInput label='First Name *' name='firstName' commonValues={commonValues} />
				<CustomTextInput label='Last Name *' name='lastName' commonValues={commonValues} />
			</Grid>

			<Grid container>
				<CustomDatePicker label='Date of Birth *' name='dateOfBirth' maxDate={Date()} commonValues={commonValues} sm={4} md={3} />
				<NationalitySelector label='Nationality *' name='nationality' optionsArray={nationalitiesArr} commonValues={commonValues} />
				<CustomTextInput label='Email Address *' name='email' commonValues={commonValues} sm={7} />
				<CustomTextInput label='Phone Number' name='phone' commonValues={commonValues} />
			</Grid>

			<Grid container>
				<CustomTextInput label='Address *' name='address' commonValues={commonValues} sm={5} md={6} />
				<CustomTextInput label='City *' name='city' commonValues={commonValues} sm={true} />
				<CustomTextInput label='Postcode *' name='postcode' commonValues={commonValues} sm={3} md={2} />
			</Grid>

			<Grid container>
				<CustomTextInput label='Court Case Number *' name='courtCaseNum' commonValues={commonValues} sm={4} md={3} />
				<CustomTextInput label='Court Name *' name='courtName' commonValues={commonValues} sm={true} />
				<CustomDatePicker label='Date of Hearing *' name='dateOfHearing' minDate={Date()} commonValues={commonValues} sm={4} md={3} />
			</Grid>

			<CustomSeparateButton name='applicantOrResponder' question='Are you Applicant or Responder? *' optionsArray={applicantOrRespondentArr} commonValues={commonValues} />

			<CustomButtonWithExtraComponent
				name='language'
				question='I would like the court to arrange for a free interpreter for me at future hearings *'
				commonValues={commonValues}
				extraComponent={
					<CustomSelector
						label='Language *'
						name='language'
						optionsArray={languagesArr}
						commonValues={commonValues}
						xs={8}
						sm={4}
						md={3}
						//
					/>
				}
			/>

			<CustomButtonWithExtraComponent
				name='disability'
				question='Do you have any disability you may need additional assistance with? *'
				commonValues={commonValues}
				extraComponent={
					<CustomTextInput
						label='Disability *'
						name='disability'
						multiline
						commonValues={commonValues}
						xs={8}
						sm={7}
						md={6}
						//
					/>
				}
			/>
		</section>
	)
}

// YUP Validation
PersonalDetails.validationSchema = object().shape({
	title: string().required('Required'),
	firstName: string().required('Required').max(50, 'Too long'),
	lastName: string().required('Required').max(50, 'Too long'),
	email: string().email('Invalid email address').required('Required'),
	dateOfBirth: date().nullable().required('Required').max(subYears(new Date(), 18), 'You need to be over 18'),
	nationality: array().required('Required'),
	phone: string().matches(/^(\+|\d)[0-9]{7,16}$/, 'Phone number is invalid'), // https://en.wikipedia.org/wiki/E.164 longest 15 digits
	address: string().required('Required'),
	city: string().required('Required'),
	postcode: string()
		.required('Required')
		.matches(/^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/, 'Postcode is invalid'), // https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom#Formatting regex validation
	courtCaseNum: string().required('Required'),
	courtName: string().required('Required'),
	dateOfHearing: date().nullable().required('Required').min(subDays(new Date(), 1), 'It cannot be in the past'),
	language: string().required('Required'),
	disability: string().required('Required'),
	applicantOrResponder: string().required('Required'),
})
