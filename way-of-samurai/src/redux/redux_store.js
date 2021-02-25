import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import dialogs_reducer from './reducers/dialogs_reducer.ts';
import news_reducer from './reducers/news_reducer.ts';
import profile_reducer from './reducers/profile_reducer.ts';
import sidebar_reducer from './reducers/sidebar_reducer.ts';
import users_reducer from './reducers/users_reducer.ts';
import auth_reducer from './reducers/auth_reducer.ts';
import app_reducer from './reducers/app_reducer.ts';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
	profile: profile_reducer,
	dialogs: dialogs_reducer,
	news: news_reducer,
	sidebar: sidebar_reducer,
	users: users_reducer,
	auth: auth_reducer,
	app: app_reducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleWare),
));

export default store;