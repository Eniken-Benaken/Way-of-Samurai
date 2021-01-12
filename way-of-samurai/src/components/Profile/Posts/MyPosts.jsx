import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let posts = props.posts;
	const newPost = React.createRef();
	const addNewPost = () => {
		if(newPost.current.value) {
			props.add_post();
		}		
	};

	const handleChange = (e) => {
		props.handleNewPostStateChange(e.target.value);
	}

	return(
		<div className={s.posts}>
			<div className={s.new_post}>
				<div><textarea ref={newPost} className={s.new_post_content} placeholder="What is on your mind?" onChange={handleChange} value={props.newPostState}></textarea></div>
				<button onClick={addNewPost} >Add New</button>
				<button>Upload Image</button>
			</div>
			{posts.map(p => <Post 
				id={p.id}
				author={p.author}
				post_content={p.post_content}
				likes_count={p.likes_count} 
			/>)}
		</div>
	);
}


export default MyPosts;
