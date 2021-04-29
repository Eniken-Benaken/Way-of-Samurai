import axios from "axios";
export const a = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "5b4d3778-fd4c-41ab-b731-1b26cfea860b"
	},
})
//	https://social-network.samuraijs.com/api/1.0/profile/users?page=1&count=5

export enum resultCodes {
	Success = 0,
	Error = 1,
}

export enum captchaRC {
	CaptchaRequired = 10
}
export type resultCodesWithCaptcha = resultCodes | captchaRC
export type serverResponseType<Data,ResultCodes = resultCodes> = {
	data: {
		resultCode: ResultCodes,
		messages: string[],
		data: Data
	}
}



