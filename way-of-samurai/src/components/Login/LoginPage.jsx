import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../Forms/LoginForm';
import { submitLogin,getCaptcha } from '../../redux/thunkCreators';
import s from './LoginPage.module.css';
import { getIsAuth,getSubmitError,getSubmitErrorCode,getCurrentRoute,getCaptchaUrl } from '../../redux/selectors';

const LoginPage = ({submitLogin,error,error_code,is_auth,current_route,captcha_url,getCaptcha}) => {
	if(error_code === 10) getCaptcha();
	const [captcha,setCaptcha] = useState(captcha_url);

	useEffect(() => {
		setCaptcha(captcha_url)
	},[captcha_url])

	return (
		<div className={s.login_form}>
			<LoginForm submitLogin={submitLogin} captchaUrl={captcha} error={error} error_code={error_code} is_auth={is_auth} current_route={current_route} />
		</div>
	);
}

const mapStateToProps = (state) => ({
	is_auth: getIsAuth(state),
	error: getSubmitError(state),
	error_code: getSubmitErrorCode(state),
	current_route: getCurrentRoute(state),
	captcha_url: getCaptchaUrl(state)
})

export default connect(mapStateToProps,{submitLogin,getCaptcha})(LoginPage);

