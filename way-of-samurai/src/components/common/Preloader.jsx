import React from 'react';
import preloader from '../../assets/images/preloader.svg';

const Preloader = () => {
	return (
		<div>
			<img src={preloader} alt="preloader" style={{ width: '30px' }} />
		</div>
	);
}


export default Preloader;
