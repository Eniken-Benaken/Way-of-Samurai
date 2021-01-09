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
						path='/profile' 
						render={() => <Profile posts={props.posts} />}
					/>
					<Route 
						path='/dialogs' 
						render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />}
					/>
					<Route 
						path='/news' 
						component={News}
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
