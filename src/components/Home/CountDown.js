/**
 * @author zore.Wang
 * @date 2018/12/28
 * @Description:
 */
import React, {Component} from 'react'

class CountDown extends Component{
	constructor(props){
		super(props)
		this.state = {
			verifyCodeText: '获取验证码'
		}
	}
	componentWillReceiveProps() {
		let timer = 60
		this.trick = setInterval(()=> {
			timer --
			if (timer <= 1) {
				this.setState({
					verifyCodeText: '重新获取'
				})
				clearInterval(this.trick)
				return
			}
			this.setState({
				verifyCodeText: timer + 's'
			})
		}, 1000)
	}
	render() {
		return this.state.verifyCodeText;
	}
}
export default CountDown
