import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/LoginPage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';
import { init_app } from './redux/thunkCreators';

class App extends Component {
	componentDidMount() {
		this.props.init_app();
	}

	render() {
		if(!this.props.initialized) return <Preloader />
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<SidebarContainer />
				<div className="main_wrapper">
					<Route
						exact path='/'
						render={() => <ProfileContainer />}
					/>
					<Route
						path='/profile/:userId?'
						render={() => <ProfileContainer  />}
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
					<Route
						path='/login'
						render={() => <LoginPage />}
					/>
				</div>
				<h1>Hello Testing</h1>
			</div>
		);
	};
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	withRouter,
	connect(mapStateToProps, { init_app })
)(App);
