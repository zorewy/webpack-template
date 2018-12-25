import React, { Component } from 'react';



import Home from '@/components/Home'
import Test from '@/components/Test'

class RouterIndex extends Component{
	constructor(props)  {
		super(props)
	}
	render() {
		const {props} = this
		return (
			<Switch>
				<Route path="/" exact render={() => (<Redirect to="/index"/>)}/>
				<Route path="/index" component={Home} />
				<Route path="/test" component={Test} />
			</Switch>
		)
	}
}
export default RouterIndex;