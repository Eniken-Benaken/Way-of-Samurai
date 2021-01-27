import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
// import s from './PostForm.module.css';

const PostForm = (props) => {
	const initialValues = {
		new_post: '',
	}

	const onSubmit = values => {
		props.addPost(values.new_post);
	}

	const validationSchema = Yup.object({
		new_post: Yup.string().max(200, "Your post text is too long")
	})

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
						name="new_post"

					/>
					<ErrorMessage name='new_post' />
				</div>
				<button type="submit">Add Post</button>
			</Form>
		</Formik>
	);
}

export default PostForm;