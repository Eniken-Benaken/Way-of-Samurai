import React from 'react';
import { connect } from 'react-redux';
import News from './News';
import { newsType } from '../../redux/reducers/news_reducer'
import { AppStateType } from '../../redux/redux_store';


type mapStateToPropsType = newsType;

type mapDispatchToPropsType = {

}

const mapStateToProps = (state: AppStateType) => {
	return ({
		news_posts: state.news.news_posts,
	});
};

const mapDispatchToProps = (dispatch: any) => {
	return ({

	})
}

const NewsContainer = connect<mapStateToPropsType,mapDispatchToPropsType,{},AppStateType>(mapStateToProps,mapDispatchToProps)(News);

export default NewsContainer;
