import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
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

	return(
		<div className={s.posts}>
			<div className={s.new_post}>
				<div><textarea className={s.new_post_content} placeholder="What is on your mind?"></textarea></div>
				<button>Add New</button>
				<button>Upload Image</button>
			</div>
			{posts_data.map(p => <Post 
				id={p.id}
				author={p.author}
				post_content={p.post_content}
				likes_count={p.likes_count} 
			/>)}
		</div>
	);
}


export default MyPosts;
