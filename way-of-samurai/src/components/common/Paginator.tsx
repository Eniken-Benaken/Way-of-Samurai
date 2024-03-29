import s from './Paginator.module.css';
import React, { useEffect, useState } from 'react';

type PropsType = {
	total_items_count: number,
	page_size: number,
	active_page: number,
	set_active_page: (pageNumber: number) => void,
	portion_size: number
}

const Paginator : React.FC<PropsType> = ({ total_items_count,page_size, active_page, set_active_page, portion_size }) => {
	let pagesCount = Math.ceil(total_items_count / page_size);

	let pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	
	let portionsCount = Math.ceil(pagesCount/portion_size);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionNumber = (portionNumber - 1) * portion_size + 1;
	let rightPortionNumber = portionNumber * portion_size;

	useEffect(() => {
		let portionNumberToDisplay = Math.ceil(active_page/portion_size);
		setPortionNumber(portionNumberToDisplay);
	},[active_page,portion_size])

	const pagesItems = pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map(pageNumber => {
		if (pageNumber === active_page) {
			return <span key={pageNumber} className={`${s.page} ${s.active_page}`}>{pageNumber}</span>
		}
		return <span key={pageNumber} className={s.page} onClick={() => { set_active_page(pageNumber) }}>{pageNumber}</span>
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
