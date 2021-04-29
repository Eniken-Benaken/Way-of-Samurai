import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux_store';
import { sidebarType } from '../../redux/reducers/sidebar_reducer';
import { getFriendsBarItems, getIsAuth, getSideMenuItems } from '../../redux/selectors';
import Sidebar from './Sidebar';

type mapStateToPropsType = sidebarType & {is_auth: boolean}

const mapStateToProps = (state: AppStateType) => {
	return ({
		friends: getFriendsBarItems(state),
		menu_items: getSideMenuItems(state),
		is_auth: getIsAuth(state)
	});
};


const SidebarContainer = connect<mapStateToPropsType,{},{},AppStateType>(mapStateToProps,{})(Sidebar);

export default SidebarContainer;
