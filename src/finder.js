import React from 'react';
import Url from './url';
import Repo from './repo';
import RepoUrl from './repo_url';
import { TextField, Paper } from '@material-ui/core';
class Finder extends React.Component {
	constructor(props) {
		super(props);
		this.state = { query: '', profile: '', repo: '', public: '' };
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

	render() {
		return (
			<div>
				<Paper elevation={6} style={{ padding: '15px', margin: '15px', backgroundColor: 'white' }}>
					<form onSubmit={this.handleSubmit}>
						<TextField fullWidth label="search..." onChange={this.handleInputChange}></TextField>
					</form>
				</Paper>
				{this.state.profile !== '' && (
					<Repo image={this.state.profile} info_repo={this.state.repo} show_repo={this.state.public} />
				)}
			</div>
		);
	}
}
export default Finder;
