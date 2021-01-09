import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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

let posts = [
	{ 
		id: 1, 
		author: 'Dem Pigeon', 
		post_content: 'Hey, My name is Dem Pigeon',
		likes_count: 13
	},
	{ 
		id: 2, 
		author: 'Dem Pigeon', 
		post_content: 'This is my first post',
		likes_count: 2
	}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
