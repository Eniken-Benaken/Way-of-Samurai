import { actions } from '../actions';

const initial_state = {
	users: [
		// {
		// 	user_id: "pavlo",
		// 	user_name: "Pavlo",
		// 	user_avatar: "https://static.wikia.nocookie.net/this-war-of-mine/images/7/7e/70px-Pavle.jpg",
		// 	user_status_message: "bububu",
		// 	user_city: "Sevastopol",
		// 	user_country: "Russia",
		// 	is_followed: false
		// },
		// {
		// 	user_id: "meirin",
		// 	user_name: "Meirin",
		// 	user_avatar: "https://static.wikia.nocookie.net/this-war-of-mine/images/d/de/70px-Marin.jpg",
		// 	user_status_message: "bububu",
		// 	user_city: "Grodno",
		// 	user_country: "Graznavia",
		// 	is_followed: false
		// },
		// { "user_id": "klindsley0", "user_name": "Kayne", "user_avatar": "https://robohash.org/quamducimusquae.jpg?size=50x50&set=set1", "user_status_message": "commodo placerat praesent blandit nam", "user_city": "Daxinshao", "user_country": "China", is_followed: false},
		// { "user_id": "imoulin1", "user_name": "Issi", "user_avatar": "https://robohash.org/utcommodideserunt.jpg?size=50x50&set=set1", "user_status_message": "cubilia curae donec pharetra magna vestibulum aliquet ultrices", "user_city": "Philadelphia", "user_country": "United States", is_followed: false},
		// { "user_id": "bcrossgrove2", "user_name": "Betsy", "user_avatar": "https://robohash.org/dolorfacereeos.jpg?size=50x50&set=set1", "user_status_message": "eu magna vulputate luctus cum sociis natoque", "user_city": "Krajanbonjor", "user_country": "Indonesia", is_followed: false},
		// { "user_id": "gcarik3", "user_name": "Gabriela", "user_avatar": "https://robohash.org/omnisetdolorum.jpg?size=50x50&set=set1", "user_status_message": "porta volutpat quam pede lobortis ligula sit amet eleifend", "user_city": "Tuupovaara", "user_country": "Finland", is_followed: false},
		// { "user_id": "istirman4", "user_name": "Irwinn", "user_avatar": "https://robohash.org/voluptasconsequaturrepellat.jpg?size=50x50&set=set1", "user_status_message": "cras in purus eu magna vulputate luctus cum sociis natoque", "user_city": "Kidodi", "user_country": "Tanzania", is_followed: false},
		// { "user_id": "kklimp5", "user_name": "Kristi", "user_avatar": "https://robohash.org/quivelet.jpg?size=50x50&set=set1", "user_status_message": "phasellus id sapien in sapien iaculis congue vivamus metus arcu", "user_city": "Gravatá", "user_country": "Brazil", is_followed: false},
		// { "user_id": "vmatherson6", "user_name": "Vanni", "user_avatar": "https://robohash.org/fugittotamblanditiis.jpg?size=50x50&set=set1", "user_status_message": "congue risus semper porta volutpat", "user_city": "Ojos de Agua", "user_country": "Honduras", is_followed: false},
		// { "user_id": "esercombe7", "user_name": "Enriqueta", "user_avatar": "https://robohash.org/praesentiumpossimustotam.jpg?size=50x50&set=set1", "user_status_message": "dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum", "user_city": "Xinchengzi", "user_country": "China", is_followed: false},
		// { "user_id": "tlimrick8", "user_name": "Tatiania", "user_avatar": "https://robohash.org/quisvoluptatesminus.jpg?size=50x50&set=set1", "user_status_message": "ante nulla justo aliquam quis turpis eget elit sodales", "user_city": "Mrzezino", "user_country": "Poland", is_followed: false},
		// { "user_id": "hrubes9", "user_name": "Hunt", "user_avatar": "https://robohash.org/odioadipisciporro.jpg?size=50x50&set=set1", "user_status_message": "eu nibh quisque id justo sit amet sapien", "user_city": "Graikochóri", "user_country": "Greece", is_followed: false},
		// { "user_id": "balldreda", "user_name": "Brigg", "user_avatar": "https://robohash.org/quaeestanimi.jpg?size=50x50&set=set1", "user_status_message": "habitasse platea dictumst aliquam augue quam sollicitudin", "user_city": "Roissy Charles-de-Gaulle", "user_country": "France", is_followed: false},
		// { "user_id": "agettingsb", "user_name": "Almira", "user_avatar": "https://robohash.org/illumetdolor.jpg?size=50x50&set=set1", "user_status_message": "vestibulum velit id pretium iaculis diam", "user_city": "Huotong", "user_country": "China", is_followed: false},
		// { "user_id": "syarrellc", "user_name": "Sammy", "user_avatar": "https://robohash.org/quiestnostrum.jpg?size=50x50&set=set1", "user_status_message": "faucibus orci luctus et ultrices posuere cubilia curae duis", "user_city": "Banjar Dukuh", "user_country": "Indonesia", is_followed: false},
		// { "user_id": "anightingaled", "user_name": "Alfreda", "user_avatar": "https://robohash.org/animinonfacilis.jpg?size=50x50&set=set1", "user_status_message": "iaculis congue vivamus metus arcu adipiscing molestie hendrerit", "user_city": "Planovskoye", "user_country": "Russia", is_followed: false},
		// { "user_id": "ldewiree", "user_name": "L;urette", "user_avatar": "https://robohash.org/occaecatiperspiciatisvoluptatem.jpg?size=50x50&set=set1", "user_status_message": "nulla eget eros elementum pellentesque quisque porta volutpat erat quisque", "user_city": "Rubirizi", "user_country": "Uganda", is_followed: false},
		// { "user_id": "jluscottf", "user_name": "Jennette", "user_avatar": "https://robohash.org/culpanamsequi.jpg?size=50x50&set=set1", "user_status_message": "libero convallis eget eleifend luctus", "user_city": "Banatsko Veliko Selo", "user_country": "Serbia", is_followed: false},
		// { "user_id": "adunstong", "user_name": "Augustina", "user_avatar": "https://robohash.org/nihileligendivoluptate.jpg?size=50x50&set=set1", "user_status_message": "primis in faucibus orci luctus", "user_city": "Xinbu", "user_country": "China", is_followed: false},
		// { "user_id": "jrembranth", "user_name": "Jens", "user_avatar": "https://robohash.org/corruptieaqueiusto.jpg?size=50x50&set=set1", "user_status_message": "fringilla rhoncus mauris enim leo rhoncus", "user_city": "Banhā", "user_country": "Egypt", is_followed: false},
		// { "user_id": "habrahmeri", "user_name": "Hannah", "user_avatar": "https://robohash.org/ullamtotamaut.jpg?size=50x50&set=set1", "user_status_message": "maecenas rhoncus aliquam lacus morbi", "user_city": "Tianbao", "user_country": "China", is_followed: false},
		// { "user_id": "bgiamittij", "user_name": "Bartram", "user_avatar": "https://robohash.org/exercitationemauteos.jpg?size=50x50&set=set1", "user_status_message": "convallis nunc proin at turpis a pede", "user_city": "Qiaoxi", "user_country": "China", is_followed: false},
		// { "user_id": "sskippenk", "user_name": "Shelley", "user_avatar": "https://robohash.org/velithicarchitecto.jpg?size=50x50&set=set1", "user_status_message": "in eleifend quam a odio", "user_city": "San Carlos", "user_country": "Chile", is_followed: false},
		// { "user_id": "dscogingsl", "user_name": "Denny", "user_avatar": "https://robohash.org/molestiaeeased.jpg?size=50x50&set=set1", "user_status_message": "ut nunc vestibulum ante ipsum primis", "user_city": "Casal Galego", "user_country": "Portugal", is_followed: false},
		// { "user_id": "sscanterburym", "user_name": "Silvana", "user_avatar": "https://robohash.org/quiaestquis.jpg?size=50x50&set=set1", "user_status_message": "lacinia eget tincidunt eget tempus vel pede morbi", "user_city": "Borovan", "user_country": "Bulgaria", is_followed: false},
		// { "user_id": "bnecoldsn", "user_name": "Bryanty", "user_avatar": "https://robohash.org/quosesteveniet.jpg?size=50x50&set=set1", "user_status_message": "commodo placerat praesent blandit nam nulla", "user_city": "Al Matūn", "user_country": "Yemen", is_followed: false},
		// { "user_id": "nfancetto", "user_name": "Nikolaos", "user_avatar": "https://robohash.org/expeditaexercitationemvoluptatibus.jpg?size=50x50&set=set1", "user_status_message": "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit", "user_city": "Port Barton", "user_country": "Philippines", is_followed: false},
		// { "user_id": "bblackhurstp", "user_name": "Batholomew", "user_avatar": "https://robohash.org/cumdolorexcepturi.jpg?size=50x50&set=set1", "user_status_message": "turpis adipiscing lorem vitae mattis nibh ligula", "user_city": "Xiabuji", "user_country": "China", is_followed: false},
		// { "user_id": "iplettsq", "user_name": "Israel", "user_avatar": "https://robohash.org/reiciendisaliquamut.jpg?size=50x50&set=set1", "user_status_message": "vestibulum proin eu mi nulla ac enim in tempor", "user_city": "Jaguarari", "user_country": "Brazil", is_followed: false},
		// { "user_id": "hallakerr", "user_name": "Harriet", "user_avatar": "https://robohash.org/quiaadcum.jpg?size=50x50&set=set1", "user_status_message": "lacinia aenean sit amet justo morbi ut odio", "user_city": "São Pedro do Estoril", "user_country": "Portugal", is_followed: false},
		// { "user_id": "whumbless", "user_name": "Wilfrid", "user_avatar": "https://robohash.org/totamlaudantiumadipisci.jpg?size=50x50&set=set1", "user_status_message": "ante vel ipsum praesent blandit lacinia erat vestibulum", "user_city": "Peñaflor", "user_country": "Chile", is_followed: false},
		// { "user_id": "ddownet", "user_name": "Dev", "user_avatar": "https://robohash.org/nullaipsumut.jpg?size=50x50&set=set1", "user_status_message": "non mi integer ac neque duis bibendum morbi non quam", "user_city": "Carromeu", "user_country": "Portugal" }
	],
	pageSize: 5,
	totalUsersCount: 50,
	activePage: 1
};

const users_reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actions.FOLLOW_USER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.user_id && !user.followed) {
						return {
							...user,
							followed: true
						}
					}
					else return user
				})
			}
		case actions.UNFOLLOW_USER:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.user_id && user.followed) {
						return {
							...user,
							followed: false
						}
					}
					else return user;
				})
			}
		case actions.SET_USERS:
			return {
				...state,
				users: [...action.users],
				totalUsersCount: action.totalUsersCount
			}
		case actions.SET_CURRENT_USERS_PAGE:
			return {
				...state,
				activePage: action.activePage
			}
		default:
			return state
	}
}
export default users_reducer;