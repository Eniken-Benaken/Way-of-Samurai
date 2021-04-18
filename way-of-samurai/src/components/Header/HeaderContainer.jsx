import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIsAuth,getCurrentUserEmail,getCurrentUserLogin } from '../../redux/selectors';
import { signOut } from '../../redux/reducers/auth_reducer';
import Header from './Header';

class HeaderContainer extends Component {
	render() {
		return <Header is_auth={this.props.is_auth} login={this.props.login} signOut={this.props.signOut} />
	}
}

const mapStateToProps = (state) => {
	return (
		{
			email: getCurrentUserEmail(state),
			login: getCurrentUserLogin(state),
			is_auth: getIsAuth(state),
		}
	)
}



export default connect(mapStateToProps, { signOut })(HeaderContainer);

