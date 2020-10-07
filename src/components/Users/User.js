import React, { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';

import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
	const githubContext = useContext(GithubContext);

	const { user, getUser, loading, getUserRepos, repos } = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		//eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		company,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	if (loading) return <Spinner />;

	return (
		<>
			<Link to='/' className='btn btn-light'>
				Back To Search
			</Link>
			Hirable :{' '}
			{hireable ? (
				<i className='fas fa-check text-success'></i>
			) : (
				<i className='fas fa-times-circle text-danger'> </i>
			)}
			<div className='card grid-2'>
				<div className='all-center'>
					<img
						src={avatar_url}
						alt=''
						className='round-img'
						style={{ width: '15rem' }}
					/>
					<h1>{name}</h1>
					<p>location: {location}</p>
				</div>
				<div>
					{bio && (
						<>
							<h3>Bio</h3>
							<p>{bio}</p>
						</>
					)}
					<a href={html_url} className='btn btn-dark my-1'>
						Visit Github Profile
					</a>
					<ul>
						<li>
							{login && (
								<>
									<strong> Username : </strong> {login}
								</>
							)}
						</li>
						<li>
							{company && (
								<>
									<strong> Company : </strong> {company}
								</>
							)}
						</li>
						<li>
							{blog && (
								<>
									<strong> Website : </strong> {blog}
								</>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className='card text-center'>
				<div className='badge badge-primary'>Followers: {followers}</div>
				<div className='badge badge-success'>Following: {following}</div>
				<div className='badge badge-light'>Public Repos: {public_repos}</div>
				<div className='badge badge-dark'>Pubic Gists: {public_gists}</div>
			</div>
			<Repos repos={repos} />
		</>
	);
};

export default User;
