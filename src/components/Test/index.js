import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {test} from '@/middleware/actions'
class Test extends Component {
	constructor(props){
		super(props)
	}
	render(){
		const {props} = this
		// console.log(props)
		return (
			<div>
				<Link to='/index'>test</Link>
			</div>
		)
	}
}

export default Test