import { RepositoryList } from '../data/repositories';
import Description from '../utils/Description';
import Heading from '../utils/Heading';
import RepoCard from '../utils/RepoCard';

const openSource = () => {
	return (
		<section>
			<Heading text='Open Source' />
			<Description text='This page lists some of the open source repositories I have published or contributed to.' />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3'>
				{RepositoryList.map((repo, index) => (
					<RepoCard key={index} {...repo} />
				))}
			</div>
		</section>
	);
};

export default openSource;
