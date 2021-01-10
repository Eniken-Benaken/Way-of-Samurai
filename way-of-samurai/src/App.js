import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
		<BrowserRouter>
    	<div className="app-wrapper">
				<Header />
				<Sidebar /> 
				<div className="main_wrapper">
					<Route 
						exact path='/' 
						render={() => <Profile profile_data={props.app_state.profile} />}
					/>
					<Route 
						path='/dialogs' 
						render={() => <Dialogs dialogs_data={props.app_state.dialogs} />}
					/>
					<Route 
						path='/news' 
						render={() => <News news_data={props.app_state.news} />}
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
