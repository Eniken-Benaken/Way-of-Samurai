import React from 'react';
import s from './Track.module.css';

type PropsTypes = {
	track_name: string,
	track_duration: string
}

const Track: React.FC<PropsTypes> = (props) => {
	return(
		<div className={s.track}>
			<div className={s.cover}>
			♪
			</div>
			<div className={s.track_name}>{props.track_name}</div>
			<div className={s.track_duration}>{props.track_duration}</div>
		</div>
	);
}


export default Track;
