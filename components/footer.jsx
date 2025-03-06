import { socialMedia } from '@/app/data/data';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-[50rem] px-10 py-2 md:px-0">
      <div className="flex flex-col items-center justify-between gap-2 p-4 md:flex-row">
        <p className="order-2 md:order-1">© {new Date().getFullYear()} Shahriar Shafin</p>
        <div className="order-1 flex gap-3 text-lg md:order-2">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.url}
              aria-label={social.label}
              target="_blank"
              className="hover:text-primary hover:bg-background rounded-xl p-3 transition ease-in"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
