import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { submitLogin } from '../../redux/thunkCreators';
// import s from './LoginForm.module.css';

const LoginForm = (props) => {
	const initialValues = {
		email: '',
		password: '',
		rememberMe: false,
	}

	const onSubmit = values => {
		let {email,password,rememberMe} = values;
		submitLogin(email,password,rememberMe)
		.then(response => console.log(response));
	}

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').min(2, "Must be longer than 2 characters")
    .max(40, "Nice try, nobody has a email that long").required('Required'),
		password: Yup.string().min(8, "Must be longer than 2 characters").required('Required')
	})

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<div>
					<label htmlFor="email">Email: </label>
					<Field
						type="text"
						name="email"

					/>
					<ErrorMessage name='email' />
				</div>
				<div>
					<label htmlFor="password">Password: </label>
					<Field
						type="password"
						name="password"
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
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
}

export default LoginForm;