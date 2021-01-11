import { rerenderEntireTree } from '../render';

export let state = {
	sidebar: {
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
	},
	profile: {
		posts: [
			{ 
				id: 1, 
				author: "Dem Pigeon", 
				post_content: "Hey, My name is Dem Pigeon",
				likes_count: 13
			},
			{ 
				id: 2, 
				author: "Dem Pigeon", 
				post_content: "This is my first post",
				likes_count: 2
			}
		],
		textareaState: '',
		functions: {
			setters: {
				add_new_post: (post_content) => {
					state.profile.posts.push(
						{
							id: state.profile.posts.lenght+1,
							author: "Dem Pigoen",
							post_content: state.profile.textareaState,
							likes_count: 0
						}
					);
					state.profile.textareaState = "";
					rerenderEntireTree(state);
				},
				handleTextareaChange: (textarea_value) => {
					state.profile.textareaState = `${textarea_value}`;
					rerenderEntireTree(state);
				}
			}
		}
	},
	dialogs: {
		dialogs: [
			{ id: "pavlo" , dialog_name:"Pavlo", dialog_avatar: "https://static.wikia.nocookie.net/this-war-of-mine/images/7/7e/70px-Pavle.jpg" },
			{ id: "meyrin", dialog_name:"Meyrin", dialog_avatar:"https://static.wikia.nocookie.net/this-war-of-mine/images/d/de/70px-Marin.jpg"},
			{ id: "katya" , dialog_name:"Katya" , dialog_avatar:"https://static.wikia.nocookie.net/this-war-of-mine/images/2/2c/70px-Katia.jpg"},
			{ id: "bruno" , dialog_name:"Bruno" , dialog_avatar:"https://static.wikia.nocookie.net/this-war-of-mine/images/d/d6/70px-Bruno.jpg"},
			{ id: "marko" , dialog_name:"Marko" , dialog_avatar:"https://static.wikia.nocookie.net/this-war-of-mine/images/c/cc/70px-Marko.jpg"},
			{ id: "roman" , dialog_name:"Roman" , dialog_avatar:"https://static.wikia.nocookie.net/this-war-of-mine/images/0/07/70px-Roman.jpg"}
		],
		messages: [
			{ id: 1, message: "We need to get food.", author:"Dem Pigeon" },
			{ id: 2, message: "This is so wrong to steal food from others like us!", author:"Pavlo"},
			{ id: 3, message: "I would eat anything!", author:"Dem Pigeon" },
			{ id: 4, message: "I haven't slept for a long time", author:"Pavlo" },
			{ id: 5, message: "Smoke is soothing me.", author:"Dem Pigeon" },
			{ id: 6, message: "I hope we will be able to warm up this shelter", author:"Pavlo" }
		]
	},
	news: {
		news_posts: [
			{
				id: 1,
				author: "Buddy Melon",
				author_url: "/buddymelon",
				post_content: "Today's Weather is perfect!",
				likes_count: 26
			},
			{
				id: 2,
				author: "John Smith",
				author_url: "/johnsmith",
				post_content: "Hello! I'm learning React js too!!",
				likes_count: 202
			}
		]
	}
};

// add_new_post = (post_content) => {
// 	state.profile.posts.push(
// 		{
// 			id: posts.lenght+1,
// 			author: "Dem Pigoen",
// 			post_content: post_content,
// 			likes_count: 0
// 		}
// 	)
// }