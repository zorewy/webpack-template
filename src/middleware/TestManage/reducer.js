/**
 * @author zore.Wang
 * @date 2018/12/25
 * @Description:
 */

const TestReducer = (state = [], action) => {
	switch (action.type) {
		case 'TEST':
			return Object.assign({}, state, {
				formData: action.formData
			})
		default:
			return state
	}
}

export default TestReducer