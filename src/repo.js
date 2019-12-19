import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import './App.css';
class Repo extends React.Component {
	render() {
		const { repo } = this.props;
		const { repos } = this.props;
		return (
			<div>
				<div style={{display: 'inline-block'}}>
					{repo.map(profile => (
						<Card
							style={{width: '235px', marginLeft: '200px', cursor: 'pointer' }}>
							<CardContent>
								<img style={{ width: '200px' }} alt="thumbnail" src={profile.avatar_url} />
								<a href={profile.html_url}>
									<Button variant="contained" style={{ marginTop: '20px', width: '100%' }}>
										view
									</Button>
								</a>
								<p style={{ fontSize: '27', color: '#666' }}>{profile.login}</p>
								<hr />
								<br />
								<hr />
							</CardContent>
						</Card>
					))}
				</div>
				<div style={{ marginLeft: '450px', display: 'inline-block' }}>
					{repos.map(profile => (
						<Card style={{ width: '425px', display: 'inline-block', marginLeft: '50px' }}>
							<CardContent>
								<Typography color="textSecondary" gutterBottom>
									<a
										href={profile.html_url}
										style={{ fontSize: '15px', textDecoration: 'none', display: 'table-cell' }}
										target="_blank"
										rel="noopener noreferrer">
										{profile.name}
									</a>
									<p>
										<a
											href={profile.html_url}
											style={{
												fontSize: '13px',
												lineHeight: '0',
												textDecoration: 'none',
												color: 'black',
											}}
											target="_blank"
											rel="noopener noreferrer">
											{profile.full_name}
										</a>
									</p>
									<p style={{ fontSize: '13px' }}>{profile.description}</p>
									<p style={{ fontSize: '15px', display: 'inline-block' }}>{profile.language}</p>
									<span
										style={{
											backgroundColor: '#0275d8',
											marginLeft: '100px',
											padding: '3px 10px 3px 10px',
										}}>
										{profile.forks_count}Fork
									</span>
									<span style={{ backgroundColor: '#d9534f', padding: '3px 10px 3px 10px' }}>
										{profile.watchers_count}watchers
									</span>
									<span style={{ backgroundColor: '#4CAF50 ', padding: '3px 10px 3px 10px' }}>
										{profile.stargazers_count}star
									</span>
									<p>{profile.created_at}</p>
								</Typography>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		);
	}
}
export default Repo;
