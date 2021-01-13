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
import { MyContext } from './store_context';

const App = (props) => {
  return (
		<BrowserRouter>
    	<div className="app-wrapper">
				<Header />
				<MyContext.Consumer>
					{store => <Sidebar sidebar={store.getState().sidebar} />}
				</MyContext.Consumer>}
				<div className="main_wrapper">
					<Route 
						exact path='/' 
						render={() => <Profile  />}
					/>
					<Route 
						path='/dialogs' 
						render={() => <DialogsContainer />}
					/>
					<MyContext.Consumer>
						{store => <Route 
							path='/news' 
							render={() => <News news_data={store.getState().news} />}
						/>}
					</MyContext.Consumer>
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
