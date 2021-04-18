import { connect } from 'react-redux';
import { addPostAC } from '../../../redux/reducers/profile_reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
		posts: state.profile.posts
});

const mapDispatchToProps = (dispatch) => {
	return ({
		addPost: (new_post) => {
			const action = addPostAC(new_post);
				dispatch(action);
		}
	})
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
