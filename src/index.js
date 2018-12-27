import '@/assets/css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {Provider} from 'react-redux'
import reducer from '@/middleware/reducers'

import APP from '@/layouts/index'
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom'
const loggerMiddleware = createLogger()
const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware)
)
// console.log(store.getState())
// store.dispatch({
// 	type: TEST,
// 	formData: ['1']
// })
// console.log(store.getState())


/*
HashRouter 根据hash值进行切换
BrowserRouter
*/

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<APP />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
)