import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

import GithubContext from '../../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);
	const { loading, users } = githubContext;

	return (
		<>
			{!loading ? (
				<div className='grid-3'>
					{users.map((user) => {
						return <UserItem key={user.id} user={user} />;
					})}
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Users;
