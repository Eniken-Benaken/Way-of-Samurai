import s from './Users.module.css';
import User from './User/User';
import React from 'react';
import Paginator from '../common/Paginator';

const Users = ({pagesNumbers,activePage,setActivePage,users,followUser,unfollowUser,is_following}) => {
	return (
		<div className={s.users}>
			<Paginator pagesNumbers={pagesNumbers} activePage={activePage} setActivePage={setActivePage} />
			{users.map(u => {
				let is_follow = false;
				for (let user of is_following) {
					if (user === u.id) {
						is_follow = true; 
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
					is_following={is_follow}
					followUser={followUser}
					unfollowUser={unfollowUser}
				/>
			}
			)}
		</div>
	);
}


export default Users;
