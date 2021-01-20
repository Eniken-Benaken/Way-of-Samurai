import s from './Users.module.css';
import User from './User/User';
import React from 'react';

const Users = (props) => {
	const pagesItems = [];
	props.pagesNumbers.map (pageNumber => {
		if (pageNumber === props.activePage) {
			pagesItems.push(<span key={pageNumber} className={`${s.page} ${s.activePage}`}>{pageNumber}</span>);
			return;
		}
		pagesItems.push(<span key={pageNumber} className={s.page} onClick={() => { props.setActivePage(pageNumber) }}>{pageNumber}</span>)
	});
	return (
		<div className={s.users}>
			<div className={s.pagination}>
				{pagesItems}
			</div>
			{props.users.map(u => <User
				key={u.id}
				user_id={u.id}
				user_name={u.name}
				user_avatar={u.photos.small}
				user_status_message={u.status}
				user_city={"u.city"}
				user_country={"u.country"}
				is_followed={u.followed}
				followUser={props.followUser}
				unfollowUser={props.unfollowUser}
			/>)}
		</div>
	);
}


export default Users;
