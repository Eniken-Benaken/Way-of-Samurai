import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<SidebarContainer />
				<div className="main_wrapper">
					<Route
						exact path='/profile/:userId?'
						render={() => <ProfileContainer />}
					/>
					<Route
						path='/dialogs'
						render={() => <DialogsContainer />}
					/>
					<Route 
							path='/news' 
							render={() => <NewsContainer />}
					/>
					<Route
						path='/music'
						component={Music}
					/>
					<Route
						path='/settings'
						component={Settings}
					/>
					<Route 
						path='/users'
						render={() => <UsersContainer />}
					/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
