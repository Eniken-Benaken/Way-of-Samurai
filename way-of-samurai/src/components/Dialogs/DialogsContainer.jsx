import React from 'react';
import { newMessageTextActionCreator, sendMessageActionCreator } from '../../redux/actionCreators';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return ({
		dialogs: state.dialogs
	});
};

const mapDispatchToProps = (dispatch) => {
	return ({
		sendMessage: () => dispatch(sendMessageActionCreator()),
		handleNewMessageChange: (e) => {
			dispatch(newMessageTextActionCreator(e.target.value));
		}
	})
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;
