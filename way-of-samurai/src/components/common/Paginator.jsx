import s from './Paginator.module.css';
import React, { useEffect, useState } from 'react';

const Paginator = ({ totalItemsCount,pageSize, activePage, setActivePage, portionSize }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	
	let portionsCount = Math.ceil(pagesCount/portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionNumber = portionNumber * portionSize;

	useEffect(() => {
		let portionNumberToDisplay = Math.ceil(activePage/portionSize);
		setPortionNumber(portionNumberToDisplay);
	},[activePage])

	const pagesItems = pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map(pageNumber => {
		if (pageNumber === activePage) {
			return <span key={pageNumber} className={`${s.page} ${s.activePage}`}>{pageNumber}</span>
		}
		return <span key={pageNumber} className={s.page} onClick={() => { setActivePage(pageNumber) }}>{pageNumber}</span>
	});
	return (
		<div className={s.pagination}>
			{portionNumber>1 && <button onClick={() => {setPortionNumber(portionNumber-1)}}>Prev</button>}
				{pagesItems}
			{portionNumber<portionsCount && <button onClick={() => {setPortionNumber(portionNumber+1)}}>Next</button>}
		</div>
	);
}


export default Paginator;
