import React from 'react';
import Url from './url';
import { TextField, Paper } from '@material-ui/core';
class Finder extends React.Component {
	constructor(props) {
		super(props);
		this.state = { query: '', repo: '' };
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
		console.log(response.data.items)
		this.setState({ repo: response.data });
	};
	render() {
		return (
			
			<div>
				<Paper elevation={6} style={{ padding: '15px', margin: '15px', backgroundColor: 'white' }}>
					<form onSubmit={this.handleSubmit}>
						<TextField fullWidth label="search..." onChange={this.handleInputChange}></TextField>
					</form>
				</Paper>
			</div>
		);
	}
}
export default Finder;
