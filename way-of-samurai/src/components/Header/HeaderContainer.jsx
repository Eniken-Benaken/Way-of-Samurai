import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/API';
import { setAuthData, setIsAuth } from './../../redux/actionCreators';
import Header from './Header';

class HeaderContainer extends Component {
	componentDidMount() {
		// this.props.toggleIsFetching(true);
		authAPI.getAuthData()
			.then(data => {
				let {id,email,login} = data;
				if (response.data.resultCode === 0) {
					this.props.setAuthData(id,email,login);
					this.props.setIsAuth(true)
				}				
			});
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



export default connect(mapStateToProps, { setAuthData, setIsAuth })(HeaderContainer);

