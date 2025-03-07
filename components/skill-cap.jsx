import Image from 'next/image';

const SkillCap = ({ name, logo }) => {
  return (
    <div className="flex transform cursor-default items-center rounded-lg border-2 border-background bg-card px-3 py-3 transition-transform ease-in hover:scale-105 hover:shadow-lg">
      <div className="relative h-6 w-6">
        <Image src={logo} draggable={false} alt={name + ' logo'} fill sizes="100vw" />
      </div>
      <h3 className="ml-2">{name}</h3>
    </div>
  );
};

export default SkillCap;
