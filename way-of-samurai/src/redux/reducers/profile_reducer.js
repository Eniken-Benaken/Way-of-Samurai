import { actions } from '../actions';

const initial_state = {
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
	],
	current_visited_user: '',
	status: '',
	isFetching: false,
	// "aboutMe": "",
	// "contacts": {
	// 	"facebook": "",
	// 	"website": "",
	// 	"vk": "",
	// 	"twitter": "",
	// 	"instagram": "",
	// 	"youtube": "",
	// 	"github": "",
	// 	"mainLink": ""
	// },
	// "lookingForAJob": false,
	// "lookingForAJobDescription": "",
	// "fullName": "",
	// "userId": "",
	// "photos": {
	// 	"small": "",
	// 	"large": ""
	// }
};

const profile_reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actions.ADD_POST:
			return {
				...state,
				posts: [...state.posts, {
					id: state.posts.length + 1,
					author: "Dem Pigoen",
					post_content: action.new_post,
					likes_count: 0
				}],
			}
		case actions.DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postId),
			}
		case actions.SET_USER_PROFILE:
			return {
				...state,
				current_visited_user: action.current_visited_user
			}
		case actions.SET_STATUS:
			return {
				...state,
				status: action.status
			}
		case actions.TOGGLE_IS_FETCHING:
			return {
				...state,
				is_fetching: action.is_fetching
			}
		case actions.SET_USER_INFO:
			console.log("profile_reducer dispatch SET_USER_INFO call with action data: ",action.current_visited_user_changes);
		default:
			return state
	}
}
export default profile_reducer;

// Если помог не забудь спасибо и лучший ответ)