import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthData } from '../../redux/thunkCreators';
import Header from './Header';

class HeaderContainer extends Component {
	componentDidMount() {
		this.props.getAuthData()
		// authAPI.getAuthData()
		// 	.then(data => {
		// 		let {id,email,login} = data;
		// 		if (data.resultCode === 0) {
		// 			this.props.setAuthData(id,email,login);
		// 			this.props.setIsAuth(true)
		// 		}				
		// 	});
	}

	render() {
		return <Header is_auth={this.props.is_auth} login={this.props.login} />
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



export default connect(mapStateToProps, { getAuthData })(HeaderContainer);

