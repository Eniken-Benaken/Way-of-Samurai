import { sendMessageActionCreator } from '../../redux/actionCreators';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
	return ({
		dialogs: state.dialogs,
		is_auth: state.auth.is_auth
	});
};

const mapDispatchToProps = (dispatch) => {
	return ({
		sendMessage: (new_message) => dispatch(sendMessageActionCreator(new_message))
	})
}





export default compose(
	connect(mapStateToProps,mapDispatchToProps)
)(Dialogs);
