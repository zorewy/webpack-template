/**
 * @author zore.Wang
 * @date 2018/12/25
 * @Description:
 */

const UserReducer = (state = {
	formData: {},
	auth: {},
	loginData: {},
}, action) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return Object.assign({}, state, {
				formData: action.formData
			})
		case 'LOGIN_USER_SUCCESS':
			return Object.assign({}, state, {
				formData: action.formData
			})
		case 'LOGIN_USER_FAILURE':
			return Object.assign({}, state, {
				formData: action.formData
			})
		default:
			return state
	}
}

export default UserReducer
