import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Button } from "antd";
import {test} from '@/middleware/actions'
const QRCode = require('qrcode.react')
class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name : ''
		}
		this.init = () => {
			console.log('init----------------');
		}
		this.init()
	}
	render(){
		const { props, state } = this
		const data = props.formData
		let setActionData = () => {
			props.testProps({
				name: 'sad'
			})
			this.setState({
				name: '21312'
			})
		}
		return (
			<div>
				<Link to='/index'>home</Link>
				<QRCode value="http://facebook.github.io/react/" bgColor='#f10' fgColor='#808080'></QRCode>
				<Button className="" onClick={setActionData}>设置action的值</Button>
				{
					data && <div></div>
				}
			</div>
		)
	}
}

/*
 connect(mapStateToProps, mapDispatchToProps, mergeProps, options = {})
 在connect 中 (mapStateToProps，mapDispatchToProps) 的返回值 必须是一个纯对象
*/
let mapStateToProps = (state) => {
	return {
		formData: state.TestReducer.formData
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		testProps: (data) => {
			dispatch(test(data))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Index)
