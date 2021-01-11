import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const rerenderEntireTree = (state) => {
	ReactDOM.render(
  <React.StrictMode>
    <App app_state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);
}
