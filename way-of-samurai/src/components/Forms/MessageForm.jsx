import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import s from './MessageForm.module.css';
import * as Yup from 'yup';

const MessageForm = ({sendMessage}) => {
	const initialValues = {
		new_message: '',
	}

	const onSubmit = (values,{resetForm}) => {
		try {
			sendMessage(values.new_message);
			resetForm({});
		}
		catch(error) {
			console.error(error);
		}
	}

	const validationSchema = Yup.object({
		new_message: Yup.string().max(200, "Your message is too long")
	})

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form className={s.send_message_form}>
				<div className={s.send_message_input}>
					<Field
						component="textarea"
						name="new_message"

					/>
					<ErrorMessage name='new_message' />
				</div>
				<button type="submit" className={s.send_message_button}>Send message</button>
			</Form>
		</Formik>
	);
}

export default MessageForm;