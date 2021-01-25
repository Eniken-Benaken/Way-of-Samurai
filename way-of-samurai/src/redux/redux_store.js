import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogs_reducer from './reducers/dialogs_reducer';
import news_reducer from './reducers/news_reducer';
import profile_reducer from './reducers/profile_reducer';
import sidebar_reducer from './reducers/sidebar_reducer';
import users_reducer from './reducers/users_reducer';
import auth_reducer from './reducers/auth_reducer';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
	profile: profile_reducer,
	dialogs: dialogs_reducer,
	news: news_reducer,
	sidebar: sidebar_reducer,
	users: users_reducer,
	auth: auth_reducer
})


let store = createStore(reducers,applyMiddleware(thunkMiddleWare));

export default store;