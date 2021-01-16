import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, newPostTextActionCreator } from '../../../redux/actionCreators';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
	const stateCopy = {
		...state,
		profile: {
			posts: [...state.profile.posts],
			newPostState: state.profile.newPostState
		}
	}

	return ({
		posts: stateCopy.profile.posts,
		newPostState: stateCopy.profile.newPostState
	});
};

const mapDispatchToProps = (dispatch) => {
	return ({
		addPost: () => {
			const action = addPostActionCreator();
				dispatch(action);
		},
		handleChange: (e) => {
			dispatch(newPostTextActionCreator(e));
		}
	})
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
