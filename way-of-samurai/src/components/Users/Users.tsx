import s from './Users.module.css';
import User from './User/User';
import React from 'react';
import Paginator from '../common/Paginator';
import { userType } from '../../redux/reducers/users_reducer';

type PropsType = {
	users: Array<userType>,
	total_users_count: number,
	page_size: number,
	active_page: number,
	set_active_page: (pageNumber: number) => void,
	portion_size: number
	followUser: (userId: number) => void, 
	unfollowUser: (userId: number) => void, 
	is_following: Array<number>
}

const Users: React.FC<PropsType> = ({users, page_size, total_users_count, active_page, set_active_page, followUser, unfollowUser, is_following, portion_size}) => {
	return (
		<div className={s.users}>
			<Paginator page_size={page_size} active_page={active_page} set_active_page={set_active_page} total_items_count={total_users_count} portion_size={portion_size} />
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
