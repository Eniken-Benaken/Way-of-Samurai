import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import s from '../Login/LoginPage.module.css';

const LoginForm = (props) => {
	if(props.is_auth) return <Redirect to={props.current_route} />

	const initialValues = {
		email: '',
		password: '',
		rememberMe: false,
	}

	const onSubmit = values => {
		let {email,password,rememberMe} = values;
		console.log(email,password,rememberMe);
		props.submitLogin(email,password,rememberMe)
		// .then(response => console.log(response));
	}

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').min(10, "Must be longer than 10 characters")
    .max(40, "Nice try, nobody has a email that long").required('Required'),
		password: Yup.string().min(8, "Must be longer than 8 characters").required('Required')
	})

	let error = props.error && <div className={s.submit_error}>{props.error}</div>

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
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
				{error}
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
}

export default LoginForm;