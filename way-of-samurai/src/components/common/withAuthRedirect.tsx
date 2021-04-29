import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../redux/redux_store';
import { getIsAuth } from '../../redux/selectors';

let mapStateToProps = (state: AppStateType) => ({
	is_auth: getIsAuth(state),
})

type PropsType = ReturnType<typeof mapStateToProps>
const withAuthRedirect = (Component: React.ComponentType) => {
	class RedirectComponent extends React.Component<PropsType> {
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
