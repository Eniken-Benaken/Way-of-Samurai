import s from './Users.module.css';
import User from './User/User';
import React from 'react';

const Users = (props) => {
	const pagesItems = [];
	props.pagesNumbers.map(pageNumber => {
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
			{props.users.map(u => {
				let is_following = false;
				for (let user of props.is_following) {
					console.log(user, u.id);
					if (user === u.id) {
						is_following = true; 
						break;
					}
				}
				return <User
					key={u.id}
					user_id={u.id}
					user_name={u.name}
					user_avatar={u.photos.small}
					user_status_message={u.status}
					user_city={"u.city"}
					user_country={"u.country"}
					is_followed={u.followed}
					is_following={is_following}
					followUser={props.followUser}
					unfollowUser={props.unfollowUser}
				/>
			}
			)}
		</div>
	);
}


export default Users;
