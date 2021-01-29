import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../redux/thunkCreators';
import Header from './Header';

class HeaderContainer extends Component {
	render() {
		return <Header is_auth={this.props.is_auth} login={this.props.login} signOut={this.props.signOut} />
	}
}

const mapStateToProps = (state) => {
	return (
		{
			id: state.auth.id,
			email: state.auth.email,
			login: state.auth.login,
			is_auth: state.auth.is_auth,
		}
	)
}



export default connect(mapStateToProps, { signOut })(HeaderContainer);

