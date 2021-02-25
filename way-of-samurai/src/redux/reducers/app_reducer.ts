import { initAppType, setCurrentRouteType } from './../actionCreators';
import { actions } from '../actions';



const initial_state = {
	initialized: false,
	current_route: ''
};

const app_reducer = (state = initial_state, action: any):typeof initial_state => {
	switch (action.type) {
		case actions.INIT_APP:
			console.log('app_reducer.INIT_APP - prev.state+action.initialized',state,action.initialized);
			return {
				...state,
				initialized: action.initialized
			}
		case actions.SET_CURRENT_ROUTE:
			console.log('app_reducer.SET_CURRENT_ROUTE - prev.state+action.current_route',state,action.current_route);
			return {
				...state,
				current_route: action.current_route
			}
		default:
			return state
	}
}
export default app_reducer;