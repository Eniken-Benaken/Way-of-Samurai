import { store } from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderEntireTree = (state) => {
	ReactDOM.render(
  <React.StrictMode>
    <App state={state} dispatch={store.dispatch.bind(store)} />
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);