import { store } from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderEntireTree = (state) => {
	ReactDOM.render(
  <React.StrictMode>
    <App state={state} add_new_post={store.add_new_post.bind(store)} handleNewPostStateChange={store.handleNewPostStateChange.bind(store)} getNewPostState={store.getNewPostState.bind(store)} />
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);