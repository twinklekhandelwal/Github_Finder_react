import React from 'react';
// import logo from './logo.svg';
import Finder from './finder';
import './App.css';class Data extends React.Component {
	render() {
		return <Finder onFormsubmit={this.handleSubmit} />;
	}
}
export default Data;
