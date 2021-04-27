import React from 'react';
import s from './ProfileInfo.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { userContactsType } from '../../../redux/reducers/profile_reducer';


type PropsTypes = {
	fullName: string,
	userId: number,
	contacts: userContactsType,
	lookingForAJob: boolean,
	lookingForAJobDescription: string | null,
	submitProfileInfoChange: (changed_info: any) => void,
	error: string | null,
	aboutMe: string | null
}


const ProfileInfoForm: React.FC<PropsTypes> = ({fullName,userId,contacts,lookingForAJob,lookingForAJobDescription,submitProfileInfoChange,error,aboutMe}) => {
	const initialValues = {
		...contacts,
		lookingForAJob,
		lookingForAJobDescription,
		fullName,
		aboutMe
	}

	const onSubmit = (values: typeof initialValues) => {
		let {lookingForAJob,lookingForAJobDescription,fullName,facebook,github,instagram,mainLink,twitter,vk,website,youtube,aboutMe} = values;
		const formData = {userId,fullName,lookingForAJob,aboutMe, lookingForAJobDescription,contacts:{facebook,github,instagram,mainLink,twitter,vk,website,youtube}}
		submitProfileInfoChange(formData)
	}

	const validationSchema = Yup.object({
	})

	let serverErrorMessage = error ? <div className={s.submit_error}>{error}</div> : null

	return(
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<div>
					<label htmlFor="fullName">Your Full Name is </label>
					<Field
						type="text"
						name="fullName"
						placeholder='fullName'
					/>
					<ErrorMessage name='fullName' />
				</div>
				<div>
					<label htmlFor="lookingForAJobDescription">Describe your skills </label>
					<Field
						component="textarea"
						name="lookingForAJobDescription"
						placeholder='lookingForAJobDescription'
					/>
					<ErrorMessage name='lookingForAJobDescription' />
				</div>
				<div>
					<label htmlFor="aboutMe">Tell about yourself </label>
					<Field
						component="textarea"
						name="aboutMe"
						placeholder='aboutMe'
					/>
					<ErrorMessage name='aboutMe' />
				</div>
				<div>
					<label htmlFor="facebook">Your facebook account link</label>
					<Field
						type="text"
						name="facebook"
						placeholder='facebook'
					/>
					<ErrorMessage name='facebook' />
				</div>
				<div>
					<label htmlFor="github">Your github account link</label>
					<Field
						type="text"
						name="github"
						placeholder='github'
					/>
					<ErrorMessage name='github' />
				</div>
				<div>
					<label htmlFor="instagram">Your instagram account link</label>
					<Field
						type="text"
						name="instagram"
						placeholder='instagram'
					/>
					<ErrorMessage name='instagram' />
				</div>
				<div>
					<label htmlFor="mainLink">Your mainLink</label>
					<Field
						type="text"
						name="mainLink"
						placeholder='mainLink'
					/>
					<ErrorMessage name='mainLink' />
				</div>
				<div>
					<label htmlFor="twitter">Your twitter account link</label>
					<Field
						type="text"
						name="twitter"
						placeholder='twitter'
					/>
					<ErrorMessage name='twitter' />
				</div>
				<div>
					<label htmlFor="vk">Your vk account link</label>
					<Field
						type="text"
						name="vk"
						placeholder='vk'
					/>
					<ErrorMessage name='vk' />
				</div>
				<div>
					<label htmlFor="website">Your website</label>
					<Field
						type="text"
						name="website"
						placeholder='website'
					/>
					<ErrorMessage name='website' />
				</div>
				<div>
					<label htmlFor="youtube">Your youtube account link</label>
					<Field
						type="text"
						name="youtube"
						placeholder='youtube'
					/>
					<ErrorMessage name='youtube' />
				</div>

				<div>
					<label htmlFor="lookingForAJob">I'm looking for a job </label>
					<Field
						type="checkbox"
						name="lookingForAJob"
					/>
				</div>
				{serverErrorMessage}
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
}

export default ProfileInfoForm;
