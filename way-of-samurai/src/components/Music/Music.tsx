import React from 'react';
import Track from './Track/Track';
import s from './Music.module.css';

type PropsTypes = {
	
}

const Music: React.FC<PropsTypes> = (props: unknown) => {
	return(
		<div className={s.music_wrapper}>
			<div className={s.music_header}>My music</div>
			<Track track_name="Живи - Вася Обломов" track_duration="4:37" />
			<Track track_name="Dance Of The Fireflies - Lifescapes" track_duration="4:38" />
		</div>
	);
}


export default Music;
