import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	return(
		<div className={s.posts}>
			<div className={s.new_post}>
				<div><textarea className={s.new_post_content} placeholder="What is on your mind?"></textarea></div>
				<button>Add New</button>
				<button>Upload Image</button>
			</div>
			<Post author='Dem Pigeon' post_content="Hey, My name is Dem Pigeon" likes="13" />
			<Post author='Dem Pigeon' post_content="This is my first post" likes="2" />
		</div>
	);
}


export default MyPosts;
