/**
 * @author zore.Wang
 * @date 2019/1/3
 * @Description:
 */
import React from 'react'
import {Spin} from 'antd'
const asyncLoad = (importComponent) => {
	class AsyncLoaderComponent extends React.Component{
		constructor(props) {
			super(props);

			this.state = {
				component: null
			};
		}

		async componentDidMount() {
			const {default: component} = await importComponent();

			this.setState({
				component: component
			});
		}

		render() {
			const C = this.state.component;
			return C ? <C {...this.props} /> :
				<div style={{position: 'absolute', top: '50%', left: '50%'}}>
					<Spin tip="加载中" delay={100}></Spin></div>;
		}
	}

	return AsyncLoaderComponent
}
export default asyncLoad
