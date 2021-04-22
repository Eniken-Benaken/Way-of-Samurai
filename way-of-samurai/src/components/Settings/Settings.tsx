import React from 'react';
import s from './Settings.module.css';

const Settings: React.FC<unknown> = (props) => {
	return(
		<div className={s.settings_wrapper}>
			<div className={s.settings_header}>Personal info</div>
			<div className={s.person_info}>
				<div className={s.name}>
					Your name: <input type="text" value="Dem" /> Your lastname: <input type="text" value="Pigeon" />
				</div>
				<div className={s.login_info}>
					Your email: <input type="email" value="Dem.Pigeon@gmail.com" /> Your password: <input type="password" value="PigeonRules" />
				</div>
				<div className={s.phone_number}>
					Your phone number: <input type="text" value='+1351245239' />
				</div>
			</div>
			<div className={s.action_buttons}>
				<button>Save Changes</button>
				<button>Discard Changes</button>
			</div>
		</div>
	);
}


export default Settings;
