import React from 'react';
import s from './News.module.css';
import NewsPost from './NewsPost/NewsPost';

const News = (props) => {
	return(
		<div className={s.posts}>
			<NewsPost author='Buddy Melon' post_content="Today's Weather is perfect!" likes="26" />
			<NewsPost author='John Smith' post_content="Hello! I'm learning React js too" likes="202" />
		</div>
	);
}


export default News;
