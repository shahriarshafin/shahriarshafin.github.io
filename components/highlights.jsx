import { highlightList } from '@/app/data/highlights';

const Highlights = () => {
  return (
    <section className="border-x-primary text-primary bg-card rounded-sm border-l-4 p-4 shadow">
      <h2 className="to-secondary from-primary mb-3 inline-block bg-gradient-to-r via-[#a855f7] bg-clip-text text-lg font-bold text-transparent">
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
  <li className="hover:text-primary-foreground flex cursor-default items-center transition ease-in">
    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-white"></div>
    {text}
  </li>
);

export default Highlights;
