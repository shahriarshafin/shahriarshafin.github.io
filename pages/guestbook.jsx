import { PrismaClient } from '@prisma/client';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { LoginBtn } from '../components';
import { Heading } from '../utils';

const prisma = new PrismaClient();

export async function getStaticProps() {
	const contacts = await prisma.guest.findMany({
		orderBy: {
			id: 'desc',
		},
	});
	return {
		props: {
			initialContacts: contacts,
		},
	};
}

const Guestbook = ({ initialContacts }) => {
	const [guestData, setGuestData] = useState(initialContacts);
	const { data: session } = useSession();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isSubmitting) {
			return;
		}
		setIsSubmitting(true);

		const name = session.user.name;
		const email = session.user.email;
		const message = e.target.message.value;
		const image_url = session.user.image;

		const userInfo = await signedUser({ name, email, message, image_url });

		e.target.message.value = '';
		setGuestData([userInfo, ...guestData]);
		setIsSubmitting(false);
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
						<button
							type='submit'
							className='rounded bg-sh-dark-500 inline-flex items-center py-2 w-32 font-semibold leading-6 text-sm text-center justify-center shadow text-white transition ease-in-out duration-150 cursor-pointer'
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<>
									<CgSpinner className='animate-spin mr-2 h-5 w-5 text-white' />
									Signing...
								</>
							) : (
								'Sign'
							)}
						</button>
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
				{guestData.map((item) => (
					<div key={item.id} className=''>
						<p className='text-neutral-400 text-md font-light font-sans'>
							{item.name}:<span className='text-sh-white'> {item.message}</span>
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Guestbook;
