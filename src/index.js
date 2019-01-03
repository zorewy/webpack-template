import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from '@/middleware/reducers'
import AllRouter from '@/router/index'
import { BrowserRouter } from 'react-router-dom'

const loggerMiddleware = createLogger()
const store = createStore(
	reducer,
	applyMiddleware(
		// createSagaMiddleware,
		thunkMiddleware,
		loggerMiddleware
	)
)


/*
HashRouter 根据hash值进行切换
BrowserRouter
*/

ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter>
			<AllRouter/>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
)
