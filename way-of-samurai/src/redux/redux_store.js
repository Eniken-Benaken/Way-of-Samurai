import {combineReducers, createStore} from 'redux';
import dialogs_reducer from './reducers/dialogs_reducer';
import news_reducer from './reducers/news_reducer';
import profile_reducer from './reducers/profile_reducer';
import sidebar_reducer from './reducers/sidebar_reducer';

let reducers = combineReducers({
	profile: profile_reducer,
	dialogs: dialogs_reducer,
	news: news_reducer,
	sidebar: sidebar_reducer
})

let store = createStore(reducers);

export default store;