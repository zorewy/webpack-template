import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {test} from '@/middleware/actions'
import TestComponent from './testComponent'
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
	componentWillMount(){
		// 首次渲染之前调用, 只调用一次
		console.log('componentWillMount 首次渲染之前调用, 只调用一次')
	}
	componentDidMount() {
		// 组件渲染之后调用，只调用一次
		console.log('componentDidMount 组件渲染之后调用，只调用一次')
	}
	componentDidUpdate() {
		// 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
		console.log('componentDidUpdate')
	}
	componentWillUnmount(){
		// 组件卸载时 --> 调用 一些事件监听和定时器需要在此时清除。
		console.log('componentWillUnmount 组件卸载的时候调用')
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
				<TestComponent data={{name: 'sd'}}/>
			</div>
		)
	}
}

export default Test
