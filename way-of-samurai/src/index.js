import store from './redux/redux_store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MyContext } from './store_context';

const rerenderEntireTree = (state) => {
	ReactDOM.render(
  <React.StrictMode>
    <MyContext.Provider value={store}>
			<App />
		</MyContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});