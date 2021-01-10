import React from 'react';
import s from './NewsPost.module.css';

const NewsPost = (props) => {
	return(
		<div className={s.item} id={props.id}>
			<img src="https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=a54fc963e39dd6645fce012663ed13c1" alt="avatar"/>
			<div className={s.post_content_wrapper}>
				<div className={s.author}>
					<a href={props.author_url}>{props.author}</a>
				</div>
				<div className={s.post_content}>{props.post_content}</div>
			</div>
			<div className={s.action_buttons}>
				<div className={s.likes}>{props.likes_count}{"\u2764"} like</div>			
				<div className={s.add_comment}>add comment</div>
			</div>
		</div>
		/* <div className={s.item}>{props.post_contents}</div> */
	);
}


export default NewsPost;
