type friendType = {
	id: number,
	friend_avatar: string,
	friend_name: string
}

type menuItemType = {
	id: number,
	icon: string,
	item: string,
	path: string
}

type sidebar_type = {
	friends: Array<friendType>,
	menu_items: Array<menuItemType>
}

const initial_state: sidebar_type = {
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
			path: "/profile"
		},
		{
			id: 2,
			icon: "✉",
			item: "Messages",
			path: "/dialogs"
		},
		{
			id: 3,
			icon: "👥",
			item: "Users",
			path: "/users"
		},
		{
			id: 4,
			icon: "📢",
			item: "News",
			path: "/news"
		},
		{
			id: 5,
			icon: "♫",
			item: "Music",
			path: "/music"
		},
		{
			id: 6,
			icon: "⛮",
			item: "Settings",
			path: "/settings"
		},
	]
};

const sidebar_reducer = (state = initial_state,action: unknown):sidebar_type => {
	return state;
}

export default sidebar_reducer;