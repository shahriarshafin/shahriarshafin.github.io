import { ProjectList } from '../data/projects';
import Description from '../utils/Description';
import Heading from '../utils/Heading';
import ProjectCard from '../utils/ProjectCard';

const projects = () => {
	return (
		<section>
			<Heading text={'Projects'} />
			<Description
				text={
					'Some selected live projects that I worked on during my student days'
				}
			/>

			<div className='space-y-10'>
				{ProjectList.map((project) => (
					<ProjectCard
						key={project.id}
						leftAlign={project.id % 2 == 0}
						{...project}
					/>
				))}
			</div>
		</section>
	);
};

export default projects;
