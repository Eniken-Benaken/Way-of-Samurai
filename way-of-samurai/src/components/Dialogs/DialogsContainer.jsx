import React from 'react';
import { newMessageTextActionCreator, sendMessageActionCreator } from '../../redux/actionCreators';
import Dialogs from './Dialogs';
import { MyContext } from '../../store_context';


const DialogsContainer = (props) => {
	return (
		<MyContext.Consumer>
			{store => {
				
				return	<Dialogs
						sendMessage={() => store.dispatch(sendMessageActionCreator())}
						handleNewMessageChange={(e) => {
							store.dispatch(newMessageTextActionCreator(e.target.value));
						}}
						dialogs={store.getState().dialogs.dialogs}
						messages={store.getState().dialogs.messages}
						newMessageState={store.getState().dialogs.newMessageState}
					/>
				}
			}
		</MyContext.Consumer>
	);
}


export default DialogsContainer;
