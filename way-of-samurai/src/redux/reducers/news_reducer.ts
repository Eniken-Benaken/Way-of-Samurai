const initial_state = {
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
};

type newsType = typeof initial_state;

const news_reducer = (state = initial_state, action: unknown): newsType => {
	return state;
}

export default news_reducer;