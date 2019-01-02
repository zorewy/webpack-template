import React, {Component} from 'react'
import {
	Form, Icon, Input, Button, Checkbox,
} from 'antd'
class Login extends Component{
	constructor(props) {
		super(props)
	}

	render(){
		const { getFieldDecorator } = this.props.form;
		const handleSubmit = (e) => {
			e.preventDefault();
			this.props.form.validateFields((err, values) => {
				if (!err) {
					console.log('Received values of form: ', values);
				}
			});
		}
		return (
			<div>
				<Form onSubmit={handleSubmit}>
					<Form.Item>
						{getFieldDecorator('用户名', {
							rules: [{ required: true, message: '请输入你的用户名!' }],
						})(
							<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: '请输入你的密码!' }],
						})(
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true,
						})(
							<Checkbox>Remember me</Checkbox>
						)}
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
export default  Form.create()(Login)
