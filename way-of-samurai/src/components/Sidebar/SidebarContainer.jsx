import React from 'react';
import { connect } from 'react-redux';
import { getIsAuth } from '../../redux/selectors';
import Sidebar from './Sidebar';

const mapStateToProps = (state) => {
	return ({
		friends: state.sidebar.friends,
		menu_items: state.sidebar.menu_items,
		is_auth: getIsAuth(state)
	});
};

const mapDispatchToProps = (dispatch) => {
	return ({

	})
}

const SidebarContainer = connect(mapStateToProps,mapDispatchToProps)(Sidebar);

export default SidebarContainer;
