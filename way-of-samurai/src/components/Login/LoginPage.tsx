import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../Forms/LoginForm';
import { submitLogin,getCaptcha } from '../../redux/reducers/auth_reducer';
import s from './LoginPage.module.css';
import { getIsAuth,getSubmitError,getSubmitErrorCode,getCurrentRoute,getCaptchaUrl } from '../../redux/selectors';
import { AppStateType } from '../../redux/redux_store';


type mapStateToPropsType = {
	error: string,
	error_code: number | null,
	is_auth: boolean,
	current_route: string,
	captcha_url: string | null,
}

type mapDispatchToPropsType = {
	submitLogin: (email: string, password: string, rememberMe: boolean, captcha: any) => void,
	getCaptcha: () => void
}

type PropsTypes = mapStateToPropsType & mapDispatchToPropsType


const LoginPage: React.FC<PropsTypes> = ({submitLogin,error,error_code,is_auth,current_route,captcha_url,getCaptcha}) => {
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



const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
	is_auth: getIsAuth(state),
	error: getSubmitError(state),
	error_code: getSubmitErrorCode(state),
	current_route: getCurrentRoute(state),
	captcha_url: getCaptchaUrl(state)
})

export default connect<mapStateToPropsType,mapDispatchToPropsType,{},AppStateType>(mapStateToProps,{submitLogin,getCaptcha})(LoginPage);