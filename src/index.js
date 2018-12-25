import '@/assets/css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
const loggerMiddleware = createLogger()
import {Provider} from 'react-redux'
import reducer from '@/middleware/reducers'
import App from '@/components/Home'


const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware),
	loggerMiddleware,
)
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