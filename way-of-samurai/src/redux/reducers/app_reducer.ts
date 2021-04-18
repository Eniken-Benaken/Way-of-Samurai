import { getAuthData } from "./auth_reducer"
import { getUserData } from "./profile_reducer"

export const INIT_APP = 'wos/app/INIT_APP'
export const SET_CURRENT_ROUTE = 'wos/app/SET_CURRENT_ROUTE'



//ACs Types
export type initAppType = {
	type: typeof INIT_APP,
	initialized: boolean
}

export type setCurrentRouteType = {
	type: typeof SET_CURRENT_ROUTE,
	current_route: string
}


//ACs
export const initApp = (initialized: boolean):initAppType => ({
	type: INIT_APP,
	initialized
})

export const setCurrentRoute = (current_route: string):setCurrentRouteType => ({
	type: SET_CURRENT_ROUTE,
	current_route
})



// THUNK CREATORS
export const init_app = () => async (dispatch: any) => {
	const response = await dispatch(getAuthData());
	if (response.resultCode === 0) {
		await dispatch(getUserData(response.data.id));
	}
	dispatch(initApp(true));
}





const initial_state = {
	initialized: false,
	current_route: ''
};

type appType = typeof initial_state

const app_reducer = (state = initial_state, action: any): appType => {
	switch (action.type) {
		case INIT_APP:
			console.log('app_reducer.INIT_APP - prev.state+action.initialized',state,action.initialized);
			return {
				...state,
				initialized: action.initialized
			}
		case SET_CURRENT_ROUTE:
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