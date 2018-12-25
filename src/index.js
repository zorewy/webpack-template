import '@/assets/css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {Provider} from 'react-redux'
import reducer from '@/middleware/reducers'
import App from '@/components/Home'
import {TEST} from "./middleware/TestManage/action";

const loggerMiddleware = createLogger()

const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware)
)
console.log(store.getState())
store.dispatch({
	type: TEST,
	formData: ['1']
})
console.log(store.getState())
/*
HashRouter 根据hash值进行切换
BrowserRouter
*/

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
)