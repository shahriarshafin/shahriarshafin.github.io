import { shimmer, toBase64 } from '@/lib/utils';
import Image from 'next/image';

const EduCard = ({ institution, logo, degree, startDate, endDate }) => {
  return (
    <article className="transform items-center gap-3 rounded-lg border-2 border-sh-dark bg-sh-dark-500 p-4 text-sh-white transition-transform ease-in hover:scale-[1.02] hover:shadow-lg md:flex">
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center md:h-16 md:w-16">
          <Image
            src={logo}
            alt={`${institution} logo`}
            draggable="false"
            width={160}
            height={160}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(160, 160))}`}
          />
        </div>
        <h3 className="block text-lg font-bold md:hidden md:text-xl">{institution}</h3>
      </div>
      <div className="mt-1">
        <div>
          <h3 className="hidden text-lg font-bold md:block md:text-xl">{institution}</h3>
          <h4>{degree}</h4>
          <small className="text-sm text-sh-white-500">
            <time>{startDate}</time> - <time>{endDate}</time>
          </small>
        </div>
      </div>
    </article>
  );
};

export default EduCard;
