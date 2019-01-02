import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	Form, Icon, Input, Button, Checkbox,
} from 'antd'
import { loginUser } from '@/middleware/actions'

class Login extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const { props } = this
		const { getFieldDecorator } = this.props.form;
		const handleSubmit = (e) => {
			e.preventDefault();
			this.props.form.validateFields((err, values) => {
				if (!err) {
					// console.log('Received values of form: ', values);
					props.loginUserProps(values)
				}
			});
		}
		return (
			<div>
				<div className="pic"></div>
				<Form onSubmit={ handleSubmit }>
					<Form.Item>
						{ getFieldDecorator('userName', {
							rules: [
								{
									required: true,
									message: '请输入正确的用户名!',
									// pattern: //
								}
							],
						})(
							<Input prefix={ <Icon type="user" style={ { color: 'rgba(0,0,0,.25)' } }/> } placeholder="用户名"/>
						) }
					</Form.Item>
					<Form.Item>
						{ getFieldDecorator('password', {
							rules: [
								{
									required: true,
									message: '请输入你的密码!'
								}
							],
						})(
							<Input prefix={ <Icon type="lock" style={ { color: 'rgba(0,0,0,.25)' } }/> } type="password"
							       placeholder="密码"/>
						) }
					</Form.Item>
					<Form.Item>
						{ getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true,
						})(
							<Checkbox>Remember me</Checkbox>
						) }
						<a className="login-form-forgot" href="">Forgot password</a>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
						Or <a href="">register now!</a>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		formData: state.TestReducer.formData
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		loginUserProps: (data) => {
			dispatch(loginUser(data))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login))
