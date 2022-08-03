import { ProjectList } from '../data/projects';
import Description from '../utils/Description';
import Heading from '../utils/Heading';
import ProjectCard from '../utils/ProjectCard';

const projects = () => {
	return (
		<section>
			<Heading text='Projects' />
			<Description text='A selection of projects ve worked on, during my career as a software developer.' />

			<div className='space-y-10'>
				{ProjectList.map((project, index) => (
					<ProjectCard key={index} leftAlign={index % 2 !== 0} {...project} />
				))}
			</div>
		</section>
	);
};

export default projects;
