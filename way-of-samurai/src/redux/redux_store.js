import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import dialogs_reducer from './reducers/dialogs_reducer';
import news_reducer from './reducers/news_reducer';
import profile_reducer from './reducers/profile_reducer';
import sidebar_reducer from './reducers/sidebar_reducer';
import users_reducer from './reducers/users_reducer';
import auth_reducer from './reducers/auth_reducer';
import app_reducer from './reducers/app_reducer';
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