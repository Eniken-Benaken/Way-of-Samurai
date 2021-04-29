import { currentVisitedUserType } from "../redux/reducers/profile_reducer";
import { serverResponseType, a } from "./API";

type PhotoType = {
	large: string;
	small: string;
};
type setProfileInfoRT = serverResponseType<object>;
type setProfilePhotoRT = serverResponseType<PhotoType>;
type setStatusRT = serverResponseType<object>;
type getStatusRT = {
	data: string;
};


export const profileAPI = {
	async getUserData(userId: number | null) {
		try {
			const response = await a.get(`profile/${userId}`);
			return response.data;
		}
		catch (e) {
			console.error(e);
		}
	},
	async getStatus(userId: number | null) {
		const response: getStatusRT = await a.get(`profile/status/${userId}`);
		return response;
	},
	async setStatus(status: string) {
		const response: setStatusRT = await a.put(`profile/status`, { status: status });
		return response.data;
	},
	async setProfilePhoto(photo: any) {
		const formData = new FormData();
		formData.append('image', photo);
		const response: setProfilePhotoRT = await a.put(`profile/photo`, formData, {
			headers: {
				'Content-type': 'multipart/form-data'
			}
		});
		return response.data;
	},
	async setProfileInfo(changed_info: currentVisitedUserType) {
		const response: setProfileInfoRT = await a.put(`profile`, changed_info);
		return response;
	},
};
