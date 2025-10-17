import Image from 'next/image';
import Link from 'next/link';

import { shimmer, toBase64 } from '@/lib/utils';

const ProjectCard = ({ leftAlign, image, title, des, tech, url }) => {
  return (
    <article
      className={'flex justify-center ' + (leftAlign ? 'lg:justify-end' : 'lg:justify-start')}
    >
      <div className="relative inline-flex max-w-max">
        <header
          className={
            'absolute bottom-2/4 left-2/4 right-2/4 top-2/4 z-10 ml-0 flex -translate-x-2/4 -translate-y-2/4 items-center justify-center ' +
            (leftAlign ? 'lg:-ml-90' : 'lg:ml-90')
          }
        >
          <div>
            <h2
              className={
                'mb-2 block text-left text-xl font-bold md:text-3xl ' +
                (leftAlign ? 'md:text-left' : 'md:text-right')
              }
            >
              <Link href={url} target="_self">
                {title}
              </Link>
            </h2>

            <p
              className={
                'w-72 rounded-lg border-2 border-background bg-card p-4 text-left text-xs md:w-80 md:text-base ' +
                (leftAlign ? 'md:text-left' : 'md:text-right')
              }
            >
              {des}
            </p>
            <ul
              className={
                'flex cursor-default gap-5 p-2 text-xs text-muted md:text-base ' +
                (leftAlign ? 'justify-start' : 'justify-start lg:justify-end')
              }
            >
              {tech.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </header>

        <Link href={url} target="_self">
          <div className="relative flex w-full scale-[.99] rounded-lg border-2 border-primary bg-primary opacity-25 shadow-lg transition ease-in hover:scale-100 hover:opacity-100 md:w-140 md:opacity-50">
            <Image
              className="h-full w-full rounded-lg"
              src={image}
              alt={`Project - ${title}`}
              draggable="false"
              width={1994}
              height={1314}
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1994, 1314))}`}
            />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
