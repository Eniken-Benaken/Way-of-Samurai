import { serverResponseType, a, resultCodesWithCaptcha } from "./API";


type loginInfo = {
	id: number | null;
	email: string | null;
	login: string | null;
}
export type getAuthDataRT = serverResponseType<loginInfo,resultCodesWithCaptcha>
type LoginRT = serverResponseType<{ userId: number; }>;
type LogoutRT = serverResponseType<object>;


export const authAPI = {
	async getAuthData() {
		try {
			const response: getAuthDataRT = await a.get(`auth/me`);
			return response.data;
		}
		catch (e) {
			console.error(e);
		}
	},
	async sendLoginData(email: string, password: string, rememberMe: boolean, captcha: string | null) {
		try {
			const response: LoginRT = await a.post(`auth/login`, { email, password, rememberMe, captcha });
			console.log(response);
			return response;
		}
		catch (e) {
			console.error(e);
		}
	},
	async signOut() {
		try {
			const response: LogoutRT = await a.delete(`auth/login`);
			console.log(response);
			return response;
		}
		catch (e) {
			console.error(e);
		}
	}
};
