import { Institutions } from '../data/data';
import { Skills } from '../data/skills';
import EduCard from '../utils/EduCard';
import Heading from '../utils/Heading';
import SkillCap from '../utils/SkillCap';

const about = () => {
	return (
		<>
			<section>
				<Heading text={'Tech Stack'} />

				<div className='mt-3 lg:px-5 w-full flex flex-wrap gap-4'>
					{Skills.map((item) => (
						<SkillCap key={item.id} {...item} />
					))}
				</div>
			</section>

			<section>
				<Heading text={'Education'} />

				<div className='space-y-4 mt-3 lg:px-5'>
					{Institutions.map((edu) => (
						<EduCard key={edu.id} {...edu} />
					))}
				</div>
			</section>
		</>
	);
};

export default about;
