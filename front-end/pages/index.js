import { gql } from '@apollo/client';
import client from '../apollo-client';
import NavBar from './components/NavBar';

const Home = ({ products }) => {
	return (
		<div className="w-full flex flex-col justify-center">
			<NavBar />
			<div className="flex grid grid-cols-3 gap-4">
				{products.map((product) => (
					<div
						className="h-full bg-white py-6 justify-center  "
						key={product._id}
					>
						<div className="py-3 h-full flex">
							<div className="bg-pink-50 shadow-lg border-gray-100 border sm:rounded-xl p-8 flex mr-10 ">
								<div className="h-40 md:w-36 sm:w-16 overflow-hidden  border sm:rounded-3xl mr-5">
									<img
										className="rounded-2xl shadow-xl h-40 w-36"
										src="https://i.pinimg.com/originals/26/b7/96/26b796ab18440e7b03a80a4e3aae9710.jpg"
									/>
								</div>
								<div className="flex flex-col  space-y-4 justify-center">
									<div className="flex justify-between items-start">
										<h2 key={product.title} className="text-2xl font-bold">
											{product.title}
										</h2>
									</div>
									<p
										key={product.body}
										className=" text-gray-400 max-h-40 overflow-y-hidden"
									>
										{product.body}
									</p>
									<div className="flex text-xl font-bold text-a justify-end">
										Rs. 280.00
									</div>
									<div className="flex items-center justify-between w-full">
										<button
											className="text-black font-bold rounded-full border-2 border-indigo-600 hover:bg-purple-400 mr-5"
											style={{ width: '103px', height: '28px' }}
											variant="outlined"
										>
											Add to Cart
										</button>
										<button
											className="bg-purple-600 hover:bg-purple-900 text-white font-bold rounded-full"
											style={{ width: '60px', height: '28px' }}
											varaint="contained"
										>
											Buy
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

export default Home;

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query products {
				products {
					title
					body
					_id
				}
			}
		`,
	});

	return {
		props: {
			products: data.products,
		},
	};
}
