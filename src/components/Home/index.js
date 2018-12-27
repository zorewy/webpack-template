import '@/assets/scss/index.scss'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Index extends Component {
	constructor(props) {
		super(props)
		console.log(props)
	}
	render(){
		const {props} = this

		return (
			<div>
				<Link to='/index'>1</Link>
			</div>
		)
	}
}


export default Index