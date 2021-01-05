import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	return(
		<div className={s.posts}>
			My posts
			<div className={s.item}>
				<textarea></textarea>
				<button>Add New</button>
				<button>Upload Image</button>
			</div>
			<Post />
		</div>
	);
}


export default MyPosts;
