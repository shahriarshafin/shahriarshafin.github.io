
interface DescriptionProps {
  text: string;
}
const Description = ({ text }: DescriptionProps) => <p className="mb-7 text-xl">{text}</p>;

export default Description;
