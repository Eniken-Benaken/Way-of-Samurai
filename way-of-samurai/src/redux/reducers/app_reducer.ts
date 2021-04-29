import { Reducer } from "redux"
import { ThunkAction } from "redux-thunk"
import { AppStateType } from "../redux_store"
import { getAuthData } from "./auth_reducer"
import { BaseThunkType, InferActionTypes, PropertyTypes } from "./common";


export type AppAC_Types = PropertyTypes<typeof app_actions>
export type AppActionTypes = InferActionTypes<typeof app_actions>;

//ACs
export const app_actions = {
	initApp: (initialized: boolean) => ({
		type: 'wos/app/INIT_APP',
		initialized
	} as const),
	setCurrentRoute: (current_route: string) => ({
		type: 'wos/app/SET_CURRENT_ROUTE',
		current_route
	} as const)
}


type ThunkType = BaseThunkType<AppActionTypes>



// THUNK CREATORS
export const init_app = (): ThunkType => async (dispatch) => {
	await dispatch(getAuthData());
	dispatch(app_actions.initApp(true));
}





const initial_state = {
	initialized: false,
	current_route: ''
};

type appType = typeof initial_state

const app_reducer: Reducer<appType,AppActionTypes> = (state = initial_state, action) => {
	switch (action.type) {
		case 'wos/app/INIT_APP':
			// console.log('app_reducer.INIT_APP - prev.state+action.initialized',state,action.initialized);
			return {
				...state,
				initialized: action.initialized
			}
		case 'wos/app/SET_CURRENT_ROUTE':
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