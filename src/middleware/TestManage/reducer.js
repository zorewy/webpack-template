/**
 * @author zore.Wang
 * @date 2018/12/25
 * @Description:
 */

const TestReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map(todo =>
				(todo.id === action.id)
					? {...todo, completed: !todo.completed}
					: todo
			)
		default:
			return state
	}
}

export default TestReducer