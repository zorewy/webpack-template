/**
 * @author zore.Wang
 * @date 2019/1/2
 * @Description:
 */
import React, {Component} from 'react'

class testComponent extends Component{
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentWillReceiveProps(nextProps) {
		// 接受新的props的时候调用
		this.setState({
			name: nextProps.data.name
		})
		console.log('componentWillReceiveProps', nextProps)
	}
	render() {
		console.log(this.props.data);
		return (
			<div>{this.props.data.name}</div>
		)
	}
}
export default testComponent
