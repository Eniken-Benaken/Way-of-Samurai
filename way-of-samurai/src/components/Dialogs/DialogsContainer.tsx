import { dialogs_type, sendMessage } from '../../redux/reducers/dialogs_reducer';
import { setCurrentRoute } from '../../redux/reducers/app_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';
import { getDialogs } from '../../redux/selectors';
import { AppStateType } from '../../redux/redux_store';

type mapStateToPropsType = {
	dialogs: dialogs_type
}

type mapDispatchToPropsType = {
	sendMessage: (new_message: string) => void,
	setCurrentRoute: (current_route: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return ({
		dialogs: getDialogs(state)
	});
};




export default compose(
	connect<mapStateToPropsType,mapDispatchToPropsType,{},AppStateType>(mapStateToProps,{
		sendMessage,
		setCurrentRoute
	}),
	withAuthRedirect
)(Dialogs) as React.FC;
