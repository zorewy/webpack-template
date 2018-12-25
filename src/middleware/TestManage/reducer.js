/**
 * @author zore.Wang
 * @date 2018/12/25
 * @Description:
 */

const TestReducer = (state = [], action) => {
	console.log(action)
	switch (action.type) {
		case 'TEST':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
		default:
			return state
	}
}

export default TestReducer