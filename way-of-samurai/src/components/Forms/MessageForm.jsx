import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
// import { submitLogin } from '../../redux/thunkCreators';
// import s from './MessageForm.module.css';

const MessageForm = (props) => {
	const initialValues = {
		new_message: '',
	}

	const onSubmit = values => {
		props.sendMessage(values.new_message);
	}

	const validationSchema = Yup.object({
		new_message: Yup.string().max(200, "Your message is too long")
	})


	// const sd =
	// 	<div className={s.new_message_wrapper}>
	// 		<textarea ref={newMessage} className={s.new_message} value={newMessageState} onChange={handleNewMessageChange}></textarea>
	// 		<div className={s.new_message_buttons}>
	// 			<button onClick={sendMessage}>Add message</button>
	// 			<button>😉</button>
	// 		</div>
	// 	</div>

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<div>
					<Field
						type="textarea"
						name="new_message"

					/>
					<ErrorMessage name='new_message' />
				</div>
				<button type="submit">Send message</button>
			</Form>
		</Formik>
	);
}

export default MessageForm;