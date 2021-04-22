import { AppStateType } from './redux/redux_store';
import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/LoginPage';
import { connect, MapStateToProps } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';
import { init_app } from './redux/reducers/app_reducer';
import withSuspense from './components/common/withSuspense';
import { lazily } from 'react-lazily';

const DialogsContainer = lazily(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazily(() => import('./components/Profile/ProfileContainer'));

class App extends Component<PropsTypes> {
	componentDidMount() {
		this.props.init_app();
	}

	render() {
		if(!this.props.initialized) return <Preloader />
		else return (
			<div className="app-wrapper">
				<HeaderContainer />
				<SidebarContainer />
				<div className="main_wrapper">
				<Switch>
					<Route
						path='/profile/:userId?'
						render={withSuspense(ProfileContainer)}
					/>
					<Route
						exact path='/'
						render={() => <Redirect to='/profile' />}
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
						render={() => <UsersContainer />}
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



type mapStateToPropsType = {
	initialized: boolean
}

type mapDispatchToPropsType = {
	init_app: () => void
}

type PropsTypes = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) => ({
	initialized: state.app.initialized
})

export default compose(
	withRouter,
	connect<mapStateToPropsType,mapDispatchToPropsType,{},AppStateType>(mapStateToProps, { init_app })
)(App);
