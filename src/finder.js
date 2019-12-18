import React from 'react';
import Url from './url';
import Repo from './repo'
import RepoUrl from './repo_url'

import { TextField, Paper } from '@material-ui/core';
class Finder extends React.Component {
	constructor(props) {
		super(props);
		this.state = { query: '', repos: '' ,rep:""};
	}
	
	handleInputChange = e => {
		this.setState({
			query: e.target.value,
		});
	};
	
	handleSubmit =async e => {
	
	
		e.preventDefault();
		const response = await Url.get('users', {
			params: {
				q: this.state.query,
			},
		});
		const resp = await  RepoUrl.get(`/${this.state.query}/repos`);
		
			// console.log(resp.data)
			// console.log(resp.data)
		console.log(response.data.items)
	  this.setState({ repos: response.data.items ,rep: resp.data});
	
}
	// componentDidMount(){
	// 	this.handleSubmit();
	//   }
	
	// 	handleSubmi =async e => {
	
	
	// 		e.preventDefault();
	// 		const resp = await  RepoUrl.get(`/${this.state.query}/repos`);
	// 		console.log(resp.data)
 	// 		this.setState({ rep: resp.data});
	// }
	
	render() {
		return (
			
			<div>
				<Paper elevation={6} style={{ padding: '15px', margin: '15px', backgroundColor: 'white' }}>
					<form onSubmit={this.handleSubmit}>
						<TextField fullWidth label="search..." onChange={this.handleInputChange}></TextField>
					</form>
				</Paper>
		{(this.state.repos !== '') &&<Repo repo={this.state.repos} repos={this.state.rep}/>}
			</div>
		);
	}
}
export default Finder;
