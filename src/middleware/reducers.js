/**
 * @author zore.Wang
 * @date 2018/12/25
 * @Description:
 */
import { combineReducers } from 'redux'
import TestReducer from './TestManage/reducer'
import UserReducer from './UserManage/reducer'

export default combineReducers({
	TestReducer,
	UserReducer
})
