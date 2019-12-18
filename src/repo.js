import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import './App.css';

import { Paper } from '@material-ui/core';
import { flexbox } from '@material-ui/system';
// const useStyles = makeStyles({
// 	card: {
// 	  minWidth: 275
// 	}
// 	});

class Repo extends React.Component {
	//  const classes = useStyles();

	render() {
		const { repo } = this.props;
		const { repos } = this.props;

		const repoList = repo.map(profile => profile.avatar_url);

		//  const re= repos.map(profile =>profile.html_url)
		//  window.open(re, "_blank");

		// console.log(re)
		return (
			<div style={{ display: flexbox }}>
				<Paper style={{ display: 'flex', width: '200px', marginLeft: '100px', cursor: 'pointer' }}>
					<img style={{ marginRight: '100px' }} alt="thumbnail" src={repoList} />
				</Paper>

				{/* <Grid container spacing={10}>
			<a href={re}>{re}</a>
		</Grid> */}
				{repos.map(profile => (
					<Card style={{ width: '425px', marginTop: '50px' }}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								<a href={profile.html_url}>{profile.name}</a>{' '}
								<a href={profile.html_url}>{profile.html_url}</a> <button>{profile.forks_count}</button>
								<button>{profile.watchers_count}</button>
							</Typography>
						</CardContent>
					</Card>
				))}
			</div>
		);
	}
}
export default Repo;
