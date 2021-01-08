import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
	let dialogs_data = [
		{ id: 'pavlo' , dialog_name:"Pavlo"  },
		{ id: 'meyrin', dialog_name:"Meyrin" },
		{ id: 'katya' , dialog_name:"Katya"  },
		{ id: 'bruno' , dialog_name:"Bruno"  },
		{ id: 'marko' , dialog_name:"Marko"  },
		{ id: 'roman' , dialog_name:"Roman"  }
	]

	let messages_data = [
		{ id: 1, message: "We need to get food." },
		{ id: 2, message: "This is so wrong to steal food from others like us!" },
		{ id: 3, message: "I would eat anything!" },
		{ id: 4, message: "I haven't slept for a long time" },
		{ id: 5, message: "Smoke is soothing me." },
		{ id: 6, message: "I hope we will be able to warm up this shelter" }
	]


	return (
		<div className={s.dialogs_wrapper}>
			<div className={s.dialog_items}>
				<Dialog id={dialogs_data[0].id} dialog_name={dialogs_data[0].dialog_name} />
				<Dialog id={dialogs_data[1].id} dialog_name={dialogs_data[1].dialog_name} />
				<Dialog id={dialogs_data[2].id} dialog_name={dialogs_data[2].dialog_name} />
				<Dialog id={dialogs_data[3].id} dialog_name={dialogs_data[3].dialog_name} />
				<Dialog id={dialogs_data[4].id} dialog_name={dialogs_data[4].dialog_name} />
				<Dialog id={dialogs_data[5].id} dialog_name={dialogs_data[5].dialog_name} />
			</div>
			<div className={s.messages}>
				<Message id={messages_data[0].id} message={messages_data[0].message} />
				<Message id={messages_data[1].id} message={messages_data[1].message} />
				<Message id={messages_data[2].id} message={messages_data[2].message} />
				<Message id={messages_data[3].id} message={messages_data[3].message} />
				<Message id={messages_data[4].id} message={messages_data[4].message} />
				<Message id={messages_data[5].id} message={messages_data[5].message} />
			</div>
		</div>
	);
}

export default Dialogs;


