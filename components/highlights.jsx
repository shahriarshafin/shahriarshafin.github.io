import { highlightList } from '@/app/data/highlights';

const Highlights = () => {
  return (
    <section className="rounded-xs border-l-4 border-x-primary bg-card p-4 text-primary shadow-sm">
      <h2 className="mb-3 inline-block bg-linear-to-r from-primary via-[#a855f7] to-secondary bg-clip-text text-lg font-bold text-transparent">
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
  <li className="flex cursor-default items-center transition ease-in hover:text-primary-foreground">
    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-white"></div>
    {text}
  </li>
);

export default Highlights;
