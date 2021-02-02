import s from './Paginator.module.css';
import React from 'react';

const Paginator = ({pagesNumbers,activePage,setActivePage}) => {
	const pagesItems = pagesNumbers.map(pageNumber => {
		if (pageNumber === activePage) {
			return <span key={pageNumber} className={`${s.page} ${s.activePage}`}>{pageNumber}</span>
		}
		return <span key={pageNumber} className={s.page} onClick={() => { setActivePage(pageNumber) }}>{pageNumber}</span>
	});
	return (
			<div className={s.pagination}>
				{pagesItems}
			</div>
	);
}


export default Paginator;
