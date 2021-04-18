import { sendMessageActionCreator } from '../../redux/reducers/dialogs_reducer';
import { setCurrentRoute } from '../../redux/reducers/app_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';
import { getDialogs } from '../../redux/selectors';

const mapStateToProps = (state) => {
	return ({
		dialogs: getDialogs(state)
	});
};

const mapDispatchToProps = (dispatch) => {
	return ({
		sendMessage: (new_message) => dispatch(sendMessageActionCreator(new_message)),
		setCurrentRoute: (current_route) => dispatch(setCurrentRoute(current_route))
	})
}





export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
