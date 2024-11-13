'use client';

import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const webLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Open Source', path: '/open-source' }
  ];

  return (
    <nav className="fixed top-0 z-20 mb-28 w-full bg-sh-dark-500 bg-opacity-80 shadow-lg backdrop-blur-sm backdrop-filter">
      <div className="mx-auto w-full max-w-[50rem] px-5 py-2.5 md:px-10 lg:px-0">
        <div className="flex w-full items-center">
          <div className="inline-flex w-3/4 items-center justify-start">
            <div className="dropdown">
              <label onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                <HiOutlineMenuAlt1 className="mr-5 h-9 w-9 cursor-pointer rounded-lg bg-sh-dark p-2" />
              </label>
              {isMenuOpen && (
                <ul className="absolute mt-3 w-64 space-y-5 rounded-md border border-sh-white-500 bg-sh-dark-500 bg-opacity-[0.97] px-2 py-5 shadow-lg shadow-sh-dark-500 backdrop-filter">
                  {webLinks.map((link, index) => (
                    <li key={index} onClick={() => setIsMenuOpen(false)}>
                      <Link
                        href={link.path}
                        className={pathname === link.path ? 'menu-item active' : 'menu-item'}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link
              href="/"
              className="mr-7 flex h-10 w-10 scale-90 select-none rounded-full border-2 border-sh-blue transition ease-in hover:scale-100"
            >
              <Image
                className="rounded-full"
                src="/images/icons/icon-72x72.png"
                alt="Shafin's avatar"
                draggable="false"
                width={565}
                height={565}
              />
            </Link>
            <div className="hidden md:flex">
              <ul className="inline-flex flex-row gap-3">
                {webLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className={pathname === link.path ? 'menu-item active' : 'menu-item'}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex w-1/4 justify-end gap-3 text-xl">
            <Link
              target="_blank"
              aria-label="github link"
              href="https://github.com/shahriarshafin"
              className="cursor-pointer rounded-xl p-3 transition ease-in hover:bg-sh-dark"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
