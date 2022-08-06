import Description from '../utils/Description';
import Heading from '../utils/Heading';
import RepoCard from '../utils/RepoCard';

export const getStaticProps = async () => {
	const res = await fetch('https://api.github.com/users/shahriarshafin/repos');
	let allAlbums = await res.json();

	return {
		props: { data: allAlbums },
	};
};

const openSource = ({ data }) => {
	return (
		<section>
			<Heading text='Open Source' />
			<Description text='Some open source repositories I have published or contributed to' />
			{<RepoCard repos={data} />}
		</section>
	);
};

export default openSource;
