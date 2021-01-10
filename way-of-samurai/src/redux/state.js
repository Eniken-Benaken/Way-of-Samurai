export let state = {
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
		]
	},
	dialogs: {
		dialogs: [
			{ id: "pavlo" , dialog_name:"Pavlo"  },
			{ id: "meyrin", dialog_name:"Meyrin" },
			{ id: "katya" , dialog_name:"Katya"  },
			{ id: "bruno" , dialog_name:"Bruno"  },
			{ id: "marko" , dialog_name:"Marko"  },
			{ id: "roman" , dialog_name:"Roman"  }
		],
		messages: [
			{ id: 1, message: "We need to get food." },
			{ id: 2, message: "This is so wrong to steal food from others like us!" },
			{ id: 3, message: "I would eat anything!" },
			{ id: 4, message: "I haven't slept for a long time" },
			{ id: 5, message: "Smoke is soothing me." },
			{ id: 6, message: "I hope we will be able to warm up this shelter" }
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