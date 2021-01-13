import {actions} from '../actions';

const initial_state = {
	friends: [
		{
			id: 1,
			friend_avatar: "https://million-wallpapers.ru/wallpapers/5/51/424703866779568/nejtiri-2017-avatara-2.jpg",
			friend_name: "Tairin"
		},
		{
			id: 2,
			friend_avatar: "https://pbs.twimg.com/media/EgFRKr2WAAA-RRY.jpg",
			friend_name: "Tsu Tei"
		},
		{
			id: 3,
			friend_avatar: "https://www.film.ru/sites/default/files/images/Sigourney-Weaver2.jpg",
			friend_name: "Grace Austin"
		}
	],
	menu_items: [
		{
			id: 1,
			icon: "👤",
			item: "Profile",
			path: "/"
		},
		{
			id: 2,
			icon: "✉",
			item: "Messages",
			path: "/dialogs"
		},
		{
			id: 3,
			icon: "📢",
			item: "News",
			path: "/news"
		},
		{
			id: 4,
			icon: "♫",
			item: "Music",
			path: "/music"
		},
		{
			id: 5,
			icon: "⛮",
			item: "Settings",
			path: "/settings"
		},
	]
};

const sidebar_reducer = (state = initial_state,action) => {
	return state;
}

export default sidebar_reducer;