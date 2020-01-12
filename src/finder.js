import React from 'react';
import Url from './url';
import Repo from './repo';
import RepoUrl from './repo_url';
import { TextField, Paper } from '@material-ui/core';
class Finder extends React.Component {
	constructor(props) {
		super(props);
		this.state = { query: '', profile: '', repo: '', public_repo : '' };
	}
	handleInputChange = e => {
		this.setState({
			query: e.target.value,
		});
	};

	
	handleSubmit = async e => {
		e.preventDefault();
		const response = await Url.get('users', {
			params: {
				q: this.state.query,
			},
		});
		const resp = await RepoUrl.get(`/${this.state.query}/repos`);
		// console.log(response);
		// this.setState({ repos: response.data.items, rep: resp.data });

		const public_repo = await RepoUrl.get(`/${this.state.query}`);
		console.log(public_repo.data);
		this.setState({ profile: response.data.items, repo: resp.data, public: public_repo.data });
	};
	
	// componentDidMount(){
	// 	this.handleSubmit.bind(this)();
	//   }
	
	render() {
		return (
			<div>
				<Paper elevation={6} style={{ padding: '15px', margin: '15px', backgroundColor: 'white' }}>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<TextField fullWidth label="search..." onChange={this.handleInputChange}></TextField>
					</form>
				</Paper>
				{this.state.profile !== '' && (
					<Repo {...this.state} />
				)}
			</div>
		);
	}
}
export default Finder;
