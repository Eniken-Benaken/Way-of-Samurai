import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getIsAuth } from '../../redux/selectors';

let mapStateToProps = (state) => ({
	is_auth: getIsAuth(state),
})
const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if(!this.props.is_auth) return <Redirect to="/login" />
			return(
				<Component {...this.props} />
			);
		}
	}

	return connect(mapStateToProps)(RedirectComponent);
}

export default withAuthRedirect;
