import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Redirect } from 'react-router-dom';
import s from '../Login/LoginPage.module.css';


type PropsTypes = {
	error: string,
	error_code: number | null,
	is_auth: boolean,
	current_route: string,
	captchaUrl: string | null,
	submitLogin: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void,
}

const LoginForm: React.FC<PropsTypes> = ({submitLogin,error,is_auth,current_route,captchaUrl}) => {
	if(is_auth) return <Redirect to={current_route} />

	const initialValues = {
		email: '',
		password: '',
		rememberMe: false,
		captcha: null
	}

	const onSubmit = (values: typeof initialValues) => {
		let {email,password,rememberMe,captcha} = values;
		submitLogin(email,password,rememberMe,captcha)
		// .then(response => console.log(response));
	}

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').min(10, "Must be longer than 10 characters")
    .max(40, "Nice try, nobody has a email that long").required('Required'),
		password: Yup.string().min(8, "Must be longer than 8 characters").required('Required')
	})

	const validationSchemaWithCaptcha = Yup.object({
		email: Yup.string().email('Invalid email format').min(10, "Must be longer than 10 characters")
    .max(40, "Nice try, nobody has a email that long").required('Required'),
		password: Yup.string().min(8, "Must be longer than 8 characters").required('Required'),
		captcha: Yup.string().min(4, "Captcha must be longer than 3 characters").required('Required')
	})

	let serverErrorMessage = error && <div className={s.submit_error}>{error}</div>

	let captcha = captchaUrl && <div className={s.captcha}>
		<img src={captchaUrl} alt="captcha"/>
		<Field 
			type="text"
			name="captcha"
			placeholder="Type symbols u c on image here"/>
			<ErrorMessage name="captcha" />
	</div>

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={captchaUrl? validationSchemaWithCaptcha:validationSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<div>
					<Field
						type="text"
						name="email"
						placeholder='email'
					/>
					<ErrorMessage name='email' />
				</div>
				<div>
					<Field
						type="password"
						name="password"
						placeholder='password'
					/>
					<ErrorMessage name='password' />
				</div>
				<div>
					<label htmlFor="rememberMe">Remember Me </label>
					<Field
						type="checkbox"
						name="rememberMe"
					/>
				</div>
				{serverErrorMessage}
				{captcha}
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
}

export default LoginForm;