import React, { Component } from 'react';
import { HashRouter,Switch,Route,Redirect } from 'react-router-dom';

import Home from '@/components/Home'
import Test from '@/components/Test'
import ErrorPage from '@/components/Test'

class allRouter extends Component{
	constructor(props)  {
		super(props)
	}
	render() {
		const {props} = this
		return (
			<HashRouter>
				<Switch>
					<Route path="/" exact render={() => (<Redirect to="/index"/>)}/>
					<Route path="/index" component={Home} />
					<Route path="/test" component={Test} />
					<Route path="/404" exact component={ErrorPage}/>
					<Redirect to="/404" />
				</Switch>
			</HashRouter>
		)
	}
}
export default allRouter;