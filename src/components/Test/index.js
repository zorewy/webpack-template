import '@/assets/scss/index.scss'
import React, { Component } from 'react'
import { List } from 'react-content-loader'
import {test} from '@/middleware/actions'
class Test extends Component {
	constructor(props){
		super(props)
	}
	render(){
		const {props} = this
		console.log(props)
		return (

			<div className="test">
				<div className="name">2121</div>
				<div className="line">454</div>
			</div>
		)
	}
}

export default Test