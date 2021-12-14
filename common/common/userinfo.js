// import base64 from "./base64.js"
export default {
	data() {
		return {

		}
	},
	methods: {
		// 获取用户角色
		getuserrole() {
			var _token = uni.getStorageSync("userInfo");
			return _token=_token.role;
		}
	}
}
