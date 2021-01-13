import React from 'react';
import { addPostActionCreator, newPostTextActionCreator } from '../../../redux/actionCreators';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	let state = props.store.getState();
	let posts = state.profile.posts;
	let newPostState = state.profile.newPostState;

	const newPost = React.createRef();
	
	const addPost = () => {
		const action = addPostActionCreator();
			props.store.dispatch(action);
	};

	const handleChange = (e) => {
		const action = newPostTextActionCreator(e.target.value);
		props.store.dispatch(action);
	}

	return(
		<MyPosts 
			addPost={addPost} 
			handleChange={handleChange}
			posts={posts}
			newPostState={newPostState}
		/>
	);
}


export default MyPostsContainer;
