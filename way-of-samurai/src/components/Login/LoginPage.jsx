import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import LoginForm from '../Forms/LoginForm';
import s from './LoginPage.module.css';

const LoginPage = (props) => {
	return (
		<div className={s.login_form}>
			<LoginForm />
		</div>
	);
}


export default LoginPage;