import React from 'react';
// import logo from './logo.svg';
import Finder from './finder';
import Repo from './repo';
import './App.css';class Data extends React.Component {
	render() {
		return( <div><Finder/>
		<Repo/>
		</div>);
	}
}
export default Data;
