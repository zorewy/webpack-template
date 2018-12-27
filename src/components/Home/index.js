import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from "antd";

class Index extends Component {
	constructor(props) {
		super(props)
		console.log(props)
	}
	render(){
		const {props} = this

		return (
			<div>
				<Link to='/index'>home</Link>
				<Button type="primary">Primary</Button>
				<Button>Default</Button>
				<Button type="dashed">Dashed</Button>
				<Button type="danger">Danger</Button>
			</div>
		)
	}
}


export default Index