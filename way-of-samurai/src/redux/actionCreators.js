import { actions } from './actions';

export const addPostActionCreator = () => ({	type: actions.ADD_POST });
export const newPostTextActionCreator = (textarea_value) => 
({type: actions.HANDLE_NEW_POST_CHANGE,	textarea_value: textarea_value});

export const sendMessageActionCreator = () => ({	type: actions.SEND_MESSAGE });
export const newMessageTextActionCreator = (textarea_value) => 
({type: actions.HANDLE_NEW_MESSAGE_CHANGE,	textarea_value: textarea_value});