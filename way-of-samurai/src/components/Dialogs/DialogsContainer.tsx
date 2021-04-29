import { dialogs_type, dialogs_actions } from '../../redux/reducers/dialogs_reducer';
import { app_actions,AppAC_Types } from '../../redux/reducers/app_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';
import { getDialogs } from '../../redux/selectors';
import { AppStateType } from '../../redux/redux_store';
import React from 'react';

type mapStateToPropsType = {
	dialogs: dialogs_type
}

type mapDispatchToPropsType = {
	sendMessage: (new_message: string) => void,
	setCurrentRoute: AppAC_Types
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return ({
		dialogs: getDialogs(state)
	});
};

export default compose<React.FC>(
	connect<mapStateToPropsType,mapDispatchToPropsType,{},AppStateType>(mapStateToProps,{
		sendMessage: dialogs_actions.sendMessage,
		setCurrentRoute: app_actions.setCurrentRoute
	}),
	withAuthRedirect
	)(Dialogs);
