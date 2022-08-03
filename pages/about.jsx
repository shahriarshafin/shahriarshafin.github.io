import { Institutions } from '../data/data';
import EduCard from '../utils/EduCard';
import Heading from '../utils/Heading';

const about = () => {
	return (
		<section>
			<Heading text={'Education'} />

			<div className='space-y-4 mt-3'>
				{Institutions.map((edu, index) => (
					<EduCard key={index} {...edu} />
				))}
			</div>
		</section>
	);
};

export default about;
