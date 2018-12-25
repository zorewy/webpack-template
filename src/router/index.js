import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'

import Home from '@/components/Home'
import Test from '@/components/Test'

class RouterIndex extends Component{
	constructor(props)  {
		super(props)
	}
	render() {
		const {props} = this
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact render={() => (<Redirect to="/index"/>)}/>
					<Route path="/index" component={Home} />
					<Route path="/test" component={Test} />
				</Switch>
			</BrowserRouter>
		)
	}
}
export default RouterIndex;