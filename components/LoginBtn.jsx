import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';

export default function Component() {
	const { data: session } = useSession();
	if (session) {
		return <button onClick={() => signOut()}>Sign out</button>;
	}
	return (
		<button
			onClick={() => signIn('github')}
			className='mt-3 px-3 py-2 border border-[#404040] rounded text-base bg-[#24292e] flex items-center gap-2'
		>
			<FaGithub className='text-2xl' />
			Sign in with GitHub
		</button>
	);
}
