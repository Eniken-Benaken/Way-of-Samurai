import React from 'react';
import PostForm from '../../Forms/PostForm';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	const posts = props.posts;

	const addPost = (new_post) => {
			props.addPost(new_post);
	};

	return(
		<div className={s.posts}>
			<div className={s.new_post}>
				{/* <div><textarea ref={newPost} className={s.new_post_content} placeholder="What is on your mind?" onChange={handleChange} value={newPostState}></textarea></div>
				<button onClick={addNewPost} >Add New</button>
				<button>Upload Image</button> */}
				<PostForm addPost={addPost} /> 
			</div>
			{posts.map(p => <Post 
				key={p.id}
				id={p.id}
				author={p.author}
				post_content={p.post_content}
				likes_count={p.likes_count} 
			/>)}
		</div>
	);
}


export default MyPosts;
