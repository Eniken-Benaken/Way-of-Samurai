import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import s from './PostForm.module.css';

const PostForm = ({addPost}) => {
	const initialValues = {
		new_post: '',
	}

	const onSubmit = (values,{resetForm}) => {
		try {
			addPost(values.new_post);
			resetForm({});
		}
		catch(error) {
			console.error(error);
		}
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
			<Form className={s.new_post_form}>
				<div className={s.new_post_input}>
					<Field
						component="textarea"
						name="new_post"

					/>
					<ErrorMessage name='new_post' />
				</div>
				<button type="submit" className={s.add_post_button}>Add Post</button>
			</Form>
		</Formik>
	);
}

export default PostForm;