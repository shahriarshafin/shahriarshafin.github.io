import { highlightList } from '@/app/data/highlights';

const Highlights = () => {
  return (
    <section className="rounded-sm border-l-4 border-x-sh-blue bg-sh-dark-500 p-4 text-sh-blue shadow">
      <h2 className="mb-3 inline-block bg-gradient-to-r from-sh-blue via-[#a855f7] to-sh-purple bg-clip-text text-lg font-bold text-transparent">
        New year, New goals:
      </h2>
      <ul>
        {highlightList.map((point) => (
          <HighlightPoint key={point.id} text={point.text} />
        ))}
      </ul>
    </section>
  );
};

const HighlightPoint = ({ text }) => (
  <li className="flex cursor-default items-center transition ease-in hover:text-sh-blue-500">
    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-sh-white"></div>
    {text}
  </li>
);

export default Highlights;
