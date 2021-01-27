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
	newPostState: '',
	current_user: '',
	status: '',
		// "aboutMe": "Lorem ipsum dolor sit amet consectetur adipisicing.",
		// "contacts": {
		// 	"facebook": "facebook.com",
		// 	"website": null,
		// 	"vk": "vk.com/dimych",
		// 	"twitter": "https://twitter.com/@sdf",
		// 	"instagram": "instagra.com/sds",
		// 	"youtube": null,
		// 	"github": "github.com",
		// 	"mainLink": null
		// },
		// "lookingForAJob": true,
		// "lookingForAJobDescription": "не ищу, а дурачусь",
		// "fullName": "dem pigeon",
		// "userId": 0,
		// "photos": {
		// 	"small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
		// 	"large": "https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=a54fc963e39dd6645fce012663ed13c1"
		// }
};

const profile_reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actions.ADD_POST:
			return {
				...state,
				posts: [...state.posts,{
					id: state.posts.length + 1,
					author: "Dem Pigoen",
					post_content: action.new_post,
					likes_count: 0
				}],
			}
		case actions.SET_USER_PROFILE:
			return {
				...state,
				current_user: action.current_user
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
		default:
			return state
	}
}
export default profile_reducer;

// Если помог не забудь спасибо и лучший ответ)