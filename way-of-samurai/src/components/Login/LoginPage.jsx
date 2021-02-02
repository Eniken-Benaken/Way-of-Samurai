import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../Forms/LoginForm';
import { submitLogin } from '../../redux/thunkCreators';
import s from './LoginPage.module.css';
import { getIsAuth,getSubmitError,getCurrentRoute } from '../../redux/selectors';

const LoginPage = ({submitLogin,error,is_auth,current_route}) => {
	return (
		<div className={s.login_form}>
			<LoginForm submitLogin={submitLogin} error={error} is_auth={is_auth} current_route={current_route} />
		</div>
	);
}

const mapStateToProps = (state) => ({
	is_auth: getIsAuth(state),
	error: getSubmitError(state),
	current_route: getCurrentRoute(state)
})

export default connect(mapStateToProps,{submitLogin})(LoginPage);

