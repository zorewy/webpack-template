import '@/assets/css/index.css'
import Test from '@/components/Test'
import React, {Component} from 'react'
import ReactDom from 'react-dom'

(function (document){
	const element = document.createElement('div');
	element.setAttribute('id', 'app');
	document.body.appendChild(element);
})(document)


ReactDom.render(
	<Test/>,
	document.getElementById('app')
)