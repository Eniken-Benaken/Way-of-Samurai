import store from './redux/redux_store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderEntireTree = (state) => {
	ReactDOM.render(
  <React.StrictMode>
    <App state={state} store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});