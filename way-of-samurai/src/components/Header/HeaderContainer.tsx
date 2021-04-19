import React, { Component } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { getIsAuth,getCurrentUserEmail,getCurrentUserLogin } from '../../redux/selectors';
import { signOut } from '../../redux/reducers/auth_reducer';
import Header from './Header';
import { AppStateType } from '../../redux/redux_store';



type mapStateToPropsType = {
	is_auth: boolean,
	login: string | null,
	email: string | null
}

type mapDispatchToPropsType = {
	signOut: () => void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType


class HeaderContainer extends Component<PropsType> {
	render() {
		return <Header is_auth={this.props.is_auth} login={this.props.login} signOut={this.props.signOut} />
	}
}


const mapStateToProps = (state: AppStateType) => {
	return (
		{
			email: getCurrentUserEmail(state),
			login: getCurrentUserLogin(state),
			is_auth: getIsAuth(state),
		}
	)
}



export default connect<mapStateToPropsType,mapDispatchToPropsType,{},AppStateType>(mapStateToProps, { signOut })(HeaderContainer);

