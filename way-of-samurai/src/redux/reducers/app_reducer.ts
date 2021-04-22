import { Action, Reducer } from "redux"
import { getAuthData } from "./auth_reducer"
import { getUserData } from "./profile_reducer"

const INIT_APP = 'wos/app/INIT_APP'
const SET_CURRENT_ROUTE = 'wos/app/SET_CURRENT_ROUTE'



//ACs Types
interface IInitAppAC extends Action<typeof INIT_APP> {
	initialized: boolean
}

interface ISetCurrentRouteAC extends Action<typeof SET_CURRENT_ROUTE> {
	current_route: string
}

type AppAC_Types = IInitAppAC | ISetCurrentRouteAC;


//ACs
const initApp = (initialized: boolean):IInitAppAC => ({
	type: INIT_APP,
	initialized
})

export const setCurrentRoute = (current_route: string):ISetCurrentRouteAC => ({
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

const app_reducer: Reducer<appType,AppAC_Types> = (state = initial_state, action) => {
	switch (action.type) {
		case INIT_APP:
			// console.log('app_reducer.INIT_APP - prev.state+action.initialized',state,action.initialized);
			return {
				...state,
				initialized: action.initialized
			}
		case SET_CURRENT_ROUTE:
			// console.log('app_reducer.SET_CURRENT_ROUTE - prev.state+action.current_route',state,action.current_route);
			return {
				...state,
				current_route: action.current_route
			}
		default:
			return state
	}
}
export default app_reducer;