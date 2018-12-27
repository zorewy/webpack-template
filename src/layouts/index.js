/**
 * @author zore.Wang
 * @date 2018/12/27
 * @Description:
 */
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RouterIndex from '@/router/index'
import { Layout, Menu, Icon, Card } from 'antd'
const {Header, Footer, Sider, Content} = Layout
const SubMenu = Menu.SubMenu
import '@/assets/scss/index.scss'

/* App component */
class App extends Component {
	constructor () {
		super()
		this.state = {
			collapsed: false,
			openKeys: ['1'],
			data: []
		}
	}
	render () {
		const {state} = this
		const toggle = () => {
			this.setState({
				collapsed: !state.collapsed
			})
		}
		const onOpenChange = (openKeys) => {
			const latestOpenKey = openKeys.slice(1)
			if (Number(latestOpenKey) !== Number(state.openKeys)) {
				this.setState({
					openKeys: latestOpenKey
				})
			} else {
				this.setState({
					openKeys: openKeys
				})
			}
		}
		return (
			<Layout>
				<Sider
					trigger={null}
					collapsible
					collapsed={state.collapsed}>
					<Menu theme="dark"
					      mode="inline"
					      defaultSelectedKeys={['0']}
					      openKeys={state.openKeys}
					      onOpenChange={onOpenChange}
					>
						{
							state.data.map(function (item, index) {
								return <SubMenu
									key={`${[item.id]}`}
									title={<span><Icon type="team"/><span>{item.title}</span></span>}>
									{
										item.submenu.map((o, i) => {
											return <Menu.Item key={i} data-id={i}>
												<Link to={o.url}>{o.title}</Link>
											</Menu.Item>
										})
									}
								</SubMenu>
							})
						}
					</Menu>
				</Sider>
				<Layout>
					<Header style={{background: '#fff', padding: 0}}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={toggle}
						/>
					</Header>
					<Content className="pages-main">
						<RouterIndex/>
					</Content>
					<Footer style={{textAlign: 'center'}}>
						zore ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		)
	}
}

export default App
