import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '@/components/Home'
import Test from '@/components/Test'
import ErrorPage from '@/components/Test'

class AllRouter extends Component{
	render() {
		console.log('213', this)
		return (
			<Switch>
				<Route path="/" exact render={() => (<Redirect to="/index"/>)}/>
				<Route path="/index" component={Home} />
				<Route path="/test" component={Test} />
				<Route path="/404" component={ErrorPage} />
			</Switch>
		)
	}
}
export default AllRouter;
