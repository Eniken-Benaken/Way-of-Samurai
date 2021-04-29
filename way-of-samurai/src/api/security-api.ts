import { a } from "./API";

type getCaptchaRT = {
	data: {
		url: string;
	};
};

export const securityAPI = {
	async getCaptchaUrl() {
		const response: getCaptchaRT = await a.get(`security/get-captcha-url`);
		return response.data.url;
	}
};
