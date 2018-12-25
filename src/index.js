import '@/assets/css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from '@/middleware/reducers'
import App from '@/components/Test'


const store = createStore(reducers)

( function (document){
	const element = document.createElement('div')
	element.setAttribute('id', 'app')
	document.body.appendChild(element)
} )(document)


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