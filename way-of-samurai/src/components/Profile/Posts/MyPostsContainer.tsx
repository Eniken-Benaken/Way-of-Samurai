import { connect } from 'react-redux';
import { profile_actions, postType } from '../../../redux/reducers/profile_reducer';
import { AppStateType } from '../../../redux/redux_store';
import { getPosts } from '../../../redux/selectors';
import MyPosts from './MyPosts';

type mapStateToPropsType = {
	posts: Array<postType>
}

type mapDispatchToPropsType = {
	addPostAC: (new_post: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) => ({
		posts: getPosts(state)
});


const addPostAC = profile_actions.addPostAC

export default connect<mapStateToPropsType,mapDispatchToPropsType,{},AppStateType>(mapStateToProps,{addPostAC})(MyPosts);
