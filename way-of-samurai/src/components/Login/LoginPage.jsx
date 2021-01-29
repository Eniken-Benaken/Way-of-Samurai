import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../Forms/LoginForm';
import { submitLogin } from '../../redux/thunkCreators';
import s from './LoginPage.module.css';

const LoginPage = (props) => {
	return (
		<div className={s.login_form}>
			<LoginForm submitLogin={props.submitLogin} error={props.error} is_auth={props.is_auth} current_route={props.current_route} />
		</div>
	);
}

const mapStateToProps = (state) => ({
	is_auth: state.auth.is_auth,
	error: state.auth.submit_error,
	current_route: state.app.current_route
})

export default connect(mapStateToProps,{submitLogin})(LoginPage);