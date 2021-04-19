import React from 'react';
import { newsType } from '../../redux/reducers/news_reducer';
import s from './News.module.css';
import NewsPost from './NewsPost/NewsPost';

type PropsTypes = newsType;

const News: React.FC<PropsTypes> = (props) => {
	let news_posts = [...props.news_posts];

	return(
		<div className={s.posts}>
			{news_posts.map((post) => <NewsPost id={post.id} author={post.author} author_url={post.author_url} post_content={post.post_content} likes_count={post.likes_count} />)}
		</div>
	);
}


export default News;
