/**
 * @author zore.Wang
 * @date 2018/12/25
 * @Description:
 */

export const LOGIN_USER = 'LOGIN_USER'
export const loginUser = (formData) => {
	return {
		type: LOGIN_USER,
		formData
	}
}

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const loginUserSuccess = (formData) => {
	return {
		type: LOGIN_USER_SUCCESS,
		formData
	}
}
