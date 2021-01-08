import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let dialogs_data = [
		{ 
			id: 1, 
			author: 'Dem Pigeon', 
			post_content: 'Hey, My name is Dem Pigeon',
			likes: 13
		},
		{ id: '2', author: 'Dem Pigeon', post_content: 'This is my first post' }
	]

	return(
		<div className={s.posts}>
			<div className={s.new_post}>
				<div><textarea className={s.new_post_content} placeholder="What is on your mind?"></textarea></div>
				<button>Add New</button>
				<button>Upload Image</button>
			</div>
			<Post 
				id={dialogs_data[0].id}
				author={dialogs_data[0].author}
				post_content={dialogs_data[0].post_content}
				likes={dialogs_data[0].likes} 
			/>
			<Post 
				id={dialogs_data[1].id}
				author={dialogs_data[1].author}
				post_content={dialogs_data[1].post_content}
				likes={dialogs_data[1].likes} 
			/>
			
		</div>
	);
}


export default MyPosts;
