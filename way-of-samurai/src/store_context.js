import React from 'react';

export const MyContext = React.createContext(null);
MyContext.displayName = 'Store_Context';

export const Provider = (props) => {
	return (
		<MyContext.Provider value={props.store}>
			{props.children}
		</MyContext.Provider>
	)
}