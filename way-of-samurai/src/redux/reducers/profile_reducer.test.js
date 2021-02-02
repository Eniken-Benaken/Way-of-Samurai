import { deletePostAC } from '../actionCreators';
import { actions } from '../actions';
import profile_reducer from './profile_reducer';

const state = {
	posts: [
		{
			id: 1,
			author: "Dem Pigeon",
			post_content: "Hey, My name is Dem Pigeon",
			likes_count: 13
		},
		{
			id: 2,
			author: "Dem Pigeon",
			post_content: "This is my first post",
			likes_count: 2
		}
	]
};

it('posts length must decrement', () => {
	let action = deletePostAC(1);
	let newState = profile_reducer(state, action);
	expect(newState.posts.length).toBe(1);
})
// Если помог не забудь спасибо и лучший ответ)