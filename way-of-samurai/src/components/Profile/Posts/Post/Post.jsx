import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return(
		<div className={s.item}>
			<img src="https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=a54fc963e39dd6645fce012663ed13c1" alt="avatar"/>
			Post #
		</div>
		/* <div className={s.item}>{props.post_contents}</div> */
	);
}


export default Post;
