import '@/assets/css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {Provider} from 'react-redux'
import reducer from '@/middleware/reducers'
import App from '@/components/Test'
import {TEST} from "./middleware/TestManage/action";
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


const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>
const PrimaryLayout = ({ match }) => {
	console.log(match)
	return(
		<div className="primary-layout">
			<header>
				<Link to="/aa" title="sad">21321</Link>
				<Link to="/bb" title="sad">21321</Link>
			</header>
			<main>
				<Switch>
					<Route path="/aa" exact component={HomePage} />
					<Route path="/bb" component={UsersPage} />
				</Switch>
			</main>
		</div>
	)
}

/*
HashRouter 根据hash值进行切换
BrowserRouter
*/

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PrimaryLayout />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
)