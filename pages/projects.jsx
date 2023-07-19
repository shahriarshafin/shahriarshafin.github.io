import { ProjectList } from '../data/projects';
import { Description, Heading, ProjectCard } from '../utils';

const projects = () => {
	return (
		<section>
			<Heading text={'Featured Projects'} />
			<Description text='Discover a collection of projects highlighting my journey as a web developer' />

			<div className='space-y-10'>
				{ProjectList.map((project, idx) => (
					<ProjectCard
						key={project.id}
						leftAlign={(idx + 1) % 2 === 0}
						{...project}
					/>
				))}
			</div>
		</section>
	);
};

export default projects;
