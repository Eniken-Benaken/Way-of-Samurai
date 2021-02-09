import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/actionCreators';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
		posts: state.profile.posts
});

const mapDispatchToProps = (dispatch) => {
	return ({
		addPost: (new_post) => {
			const action = addPostActionCreator(new_post);
				dispatch(action);
		}
	})
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
