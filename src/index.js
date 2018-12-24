import '@/assets/css/index.css'
import '@/components/hello'
import React, {Component} from 'react'
import ReactDom from 'react-dom'

(function (document){
	const element = document.createElement('div');
	element.setAttribute('id', 'app');
	document.body.appendChild(element);
})(document)

class Index extends Component {
	render(){
		return (
			<div>sadsa</div>
		)
	}
}
ReactDom.render(
	<Index/>,
	document.getElementById('app')
)