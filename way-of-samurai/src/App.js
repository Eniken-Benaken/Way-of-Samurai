import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
		<BrowserRouter>
    	<div className="app-wrapper">
				<Header />
				<Sidebar sidebar={props.store.getState().sidebar} /> 
				<div className="main_wrapper">
					<Route 
						exact path='/' 
						render={() => <Profile store={props.store} />}
					/>
					<Route 
						path='/dialogs' 
						render={() => <DialogsContainer store={props.store} />}
					/>
					<Route 
						path='/news' 
						render={() => <News news_data={props.store.getState().news} />}
					/>
					<Route 
						path='/music' 
						component={Music}
					/>
					<Route 
						path='/settings' 
						component={Settings}
					/>
				</div>
    	</div>
		</BrowserRouter>
  );
};

export default App;
