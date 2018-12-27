import '@/assets/scss/index.scss'
import React, { Component } from 'react'

class ErrorPage extends Component {
	constructor(props){
		super(props)
	}
	render(){
		const {props} = this
		console.log(props)
		return (
			<div className="error-page">
				<div className="name">404</div>
			</div>
		)
	}
}

export default ErrorPage