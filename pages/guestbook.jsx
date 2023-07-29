import { PrismaClient } from '@prisma/client';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { LoginBtn } from '../components';
import { Heading } from '../utils';

export async function getServerSideProps() {
	const prisma = new PrismaClient();
	const contacts = await prisma.guest.findMany();
	prisma.$disconnect();

	return {
		props: {
			initialContacts: contacts,
		},
	};
}

const Guestbook = ({ initialContacts }) => {
	const [guestData, setGuestData] = useState(initialContacts);
	const { data: session } = useSession();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const name = session.user.name;
		const email = session.user.email;
		const message = e.target.message.value;
		const image_url = session.user.image;

		const userInfo = await signedUser({ name, email, message, image_url });
		setGuestData([userInfo, ...guestData]);
		e.target.message.value = '';
	};

	const signedUser = async (data) => {
		const requestOptions = {
			method: 'POST',
			body: JSON.stringify(data),
		};
		const response = await fetch('/api/guests', requestOptions);
		return await response.json();
	};

	return (
		<section>
			<Heading text='Sign My Guestbook' />
			{session ? (
				<div>
					<form
						onSubmit={handleSubmit}
						className='mt-3 flex justify-between items-center p-1 bg-sh-dark rounded max-w-[500px]'
					>
						<input
							type='text'
							name='message'
							required
							placeholder='your message...'
							className='px-4 py-2 w-full bg-transparent outline-none'
						/>
						<input
							type='submit'
							value='Sign'
							className='px-8 py-2 rounded bg-sh-dark-500 cursor-pointer'
						/>
					</form>
					<button
						onClick={() => signOut()}
						className='text-neutral-300 text-sm'
					>
						Sign out
					</button>
				</div>
			) : (
				<LoginBtn />
			)}

			<div className='space-y-2 mt-5'>
				{guestData.reverse().map((item) => (
					<div key={item.id} className=''>
						<p className='text-neutral-400 text-md font-light'>
							{item.name}:<span className='text-sh-white'> {item.message}</span>
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Guestbook;
