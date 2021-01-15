import React from 'react';
import { connect } from 'react-redux';
import News from './News';

const mapStateToProps = (state) => {
	return ({
		news_posts: state.news.news_posts,
	});
};

const mapDispatchToProps = (dispatch) => {
	return ({

	})
}

const NewsContainer = connect(mapStateToProps,mapDispatchToProps)(News);

export default NewsContainer;
