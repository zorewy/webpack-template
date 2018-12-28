import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {test} from '@/middleware/actions'

const ReactMarkdown = require('react-markdown')

class Test extends Component {
	constructor(props){
		super(props)
		this.state = {
			key: ''
		}
	}
	handelChange(e){
		this.setState({
			key:e.target.value
		})
	}
	render(){
		const {props, state} = this
		console.log(this)
		const input = '###sad'

		// console.log(props)
		return (
			<div>
				<textarea onChange={this.handelChange.bind(this)}></textarea>
				<ReactMarkdown source={input} />,
				<Link to='/index'>test</Link>
			</div>
		)
	}
}

export default Test
