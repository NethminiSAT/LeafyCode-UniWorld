import { gql } from '@apollo/client';
import client from '../apollo-client';
import NavBar from './components/NavBar';

const Users = ({ users }) => {
	return (
		<div className="w-full flex flex-col justify-center">
			<NavBar />
			<div className="flex grid grid-cols-3 gap-4 justify-center">
				{users.map((user) => (
					<div className="h-full bg-white justify-center " key={user._id}>
						<div className="py-3 h-full flex">
							<div className="bg-pink-50 shadow-lg border-gray-100 border sm:rounded-xl p-8 flex mr-10 ">
								<div className="h-36 md:w-36 sm:w-16 overflow-hidden  border sm:rounded-3xl mr-5">
									<img
										className="rounded-2xl shadow-xl h-36 w-36"
										src="https://avatars.sched.co/8/90/1938608/avatar.jpg.320x320px.jpg?409"
									/>
								</div>
								<div className="flex flex-col  space-y-4 justify-center">
									<div className="flex justify-between items-start">
										<h2 key={user.name} className="text-2xl font-bold">
											{user.name}
										</h2>
									</div>
									<p
										key={user.email}
										className=" text-gray-400 max-h-40 overflow-y-hidden"
									>
										{user.email}
									</p>
									<div className="flex items-center justify-between w-full">
										<button
											className="text-black font-bold rounded-full border-2 border-red-600 hover:bg-red-400 mr-5"
											style={{ width: '103px', height: '28px' }}
											variant="outlined"
										>
											Delete
										</button>
										<button
											className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full"
											style={{ width: '60px', height: '28px' }}
											varaint="contained"
										>
											Edit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Users;

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query users {
				users {
					email
					name
					password
					_id
				}
			}
		`,
	});

	return {
		props: {
			users: data.users,
		},
	};
}
