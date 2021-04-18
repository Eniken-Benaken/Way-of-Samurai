import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Switch, withRouter } from 'react-router-dom';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/LoginPage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';
import { init_app } from './redux/reducers/app_reducer';
import withSuspense from './components/common/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
				<Switch>
					<Route
						exact path='/'
						render={withSuspense(ProfileContainer)}
					/>
					<Route
						path='/profile/:userId?'
						render={withSuspense(ProfileContainer)}
					/>
					<Route
						path='/dialogs'
						render={withSuspense(DialogsContainer)}
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
						render={() => <UsersContainer haha="haha" />}
					/>
					<Route
						path='/login'
						render={() => <LoginPage />}
					/>
					</Switch>
				</div>
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
