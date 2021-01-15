import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = (state) => {
	return ({
		friends: state.sidebar.friends,
		menu_items: state.sidebar.menu_items
	});
};

const mapDispatchToProps = (dispatch) => {
	return ({

	})
}

const SidebarContainer = connect(mapStateToProps,mapDispatchToProps)(Sidebar);

export default SidebarContainer;
