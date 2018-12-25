import '@/assets/scss/index.scss'
import React, { Component } from 'react'

class Index extends Component {
	constructor(props) {
		super(props)
		console.log(props)
	}
	render(){
		const {props} = this

		return (
			<div className="test">111</div>
		)
	}
}


export default Index