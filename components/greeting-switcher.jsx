'use client';

import { greetingList } from '@/app/data/greetings';
import { useState } from 'react';

const GreetingSwitcher = () => {
  const [arrItem, setArrItem] = useState(0);

  return (
    <div className="group relative inline-block">
      <p
        onClick={() => setArrItem((arrItem + 1) % greetingList.length)}
        className="animate-up from-primary to-primary my-5 inline-block cursor-pointer select-none bg-gradient-to-r text-3xl font-bold tracking-widest"
      >
        {greetingList[arrItem].text}
        <span className="italic">!</span>
      </p>
      <div className="absolute bottom-0 mb-14 hidden flex-col items-center group-hover:flex">
        <span className="whitespace-no-wrap bg-background relative z-10 rounded-md p-2 text-xs leading-none text-white shadow-lg">
          {greetingList[arrItem].lang}
        </span>
        <div className="bg-background -mt-2 h-3 w-3 rotate-45"></div>
      </div>
    </div>
  );
};

export default GreetingSwitcher;
