'use client';

import { greetingList } from '@/app/data/greetings';
import { useState } from 'react';

const GreetingSwitcher = () => {
	const [arrItem, setArrItem] = useState(0);

	return (
		<div className='group relative inline-block'>
			<p
				onClick={() => setArrItem((arrItem + 1) % greetingList.length)}
				className='animate-up my-5 inline-block cursor-pointer select-none bg-gradient-to-r from-sh-blue to-sh-blue text-3xl font-bold tracking-widest'
			>
				{greetingList[arrItem].text}
				<span className='italic'>!</span>
			</p>
			<div className='absolute bottom-0 mb-14 hidden flex-col items-center group-hover:flex'>
				<span className='whitespace-no-wrap relative z-10 rounded-md bg-sh-dark p-2 text-xs leading-none text-sh-white shadow-lg'>
					{greetingList[arrItem].lang}
				</span>
				<div className='-mt-2 h-3 w-3 rotate-45 bg-sh-dark'></div>
			</div>
		</div>
	);
};

export default GreetingSwitcher;
