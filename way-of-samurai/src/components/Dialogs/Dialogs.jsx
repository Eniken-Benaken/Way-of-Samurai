import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
	let dialogs = [
		{ id: 'pavlo' , dialog_name:"Pavlo"  },
		{ id: 'meyrin', dialog_name:"Meyrin" },
		{ id: 'katya' , dialog_name:"Katya"  },
		{ id: 'bruno' , dialog_name:"Bruno"  },
		{ id: 'marko' , dialog_name:"Marko"  },
		{ id: 'roman' , dialog_name:"Roman"  }
	]

	let messages = [
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
				{dialogs.map(d => <Dialog id={d.id} dialog_name={d.dialog_name} />)}
			</div>
			<div className={s.messages}>
				{messages.map(m => <Message id={m.id} message={m.message} />)}
			</div>
		</div>
	);
}

export default Dialogs;


