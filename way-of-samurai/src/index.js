import store from './redux/redux_store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

const rerenderEntireTree = () => {
	ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
			<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerenderEntireTree();

store.subscribe(() => {
	rerenderEntireTree();
});