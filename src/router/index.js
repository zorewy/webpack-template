import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

// import Home from '@/components/Home'
// import Login from '@/components/UserManage/Login'
// import Test from '@/components/Test'
// import ErrorPage from '@/components/Test'
import AsyncLoader from '@/components/AsyncLoader'
import {
	Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import '@/assets/scss/index.scss'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const asyncHome = AsyncLoader(() => import ( /* webpackChunkName: "Home" */'@/components/Home'))
const asyncLogin = AsyncLoader(() => import( /* webpackChunkName: "Login" */'@/components/UserManage/Login'))
const asyncTest = AsyncLoader(() => import(/* webpackChunkName: "Test" */'@/components/Test'))
// const asyncErrorPage = AsyncLoader(() => import(/* webpackChunkName: "ErrorPage" */'../components/ErrorPage'))


class AllRouter extends Component{
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Layout className='page-wrapper'>
				<Header className="header">
					<div className="logo" />
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['2']}
						style={{ lineHeight: '64px' }}
					>
						<Menu.Item key="1">
							<Link to="/index">index</Link>
						</Menu.Item>
						<Menu.Item key="2">
							<Link to="/test">test</Link>
						</Menu.Item>
						<Menu.Item key="3">
							<Link to="/login">login</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Layout>
					<Sider width={200} style={{ background: '#fff' }}>
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							style={{ height: '100%', borderRight: 0 }}
						>
							<SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
								<Menu.Item key="1">option1</Menu.Item>
								<Menu.Item key="2">option2</Menu.Item>
								<Menu.Item key="3">option3</Menu.Item>
								<Menu.Item key="4">option4</Menu.Item>
							</SubMenu>
							<SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
								<Menu.Item key="5">option5</Menu.Item>
								<Menu.Item key="6">option6</Menu.Item>
								<Menu.Item key="7">option7</Menu.Item>
								<Menu.Item key="8">option8</Menu.Item>
							</SubMenu>
							<SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
								<Menu.Item key="9">option9</Menu.Item>
								<Menu.Item key="10">option10</Menu.Item>
								<Menu.Item key="11">option11</Menu.Item>
								<Menu.Item key="12">option12</Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Layout style={{ padding: '0 24px 24px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb>
						<Content style={{
							background: '#fff', padding: 24, margin: 0, minHeight: 280,
						}}
						>

							<Switch>
								<Route path="/" exact render={() => (<Redirect to="/index"/>)}/>
								<Route path="/index" component={asyncHome} />
								<Route path="/test" component={asyncTest} />
								<Route path="/login" component={asyncLogin} />
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		)
	}
}
export default AllRouter;
