import { highlightList } from '../data/highlights';
import HighlightPoint from '../utils/HighlightPoint';

const Highlights = () => {
	return (
		<div className='p-4 bg-sh-dark-500 shadow-lg border-l-4 border-x-sh-blue rounded-sm text-sh-blue'>
			<h2 className='text-lg font-bold inline-block text-transparent bg-clip-text mb-3 bg-gradient-to-r from-sh-blue via-[#a855f7] to-[#ec4899]'>
				New year, new projects:
			</h2>
			<div>
				{highlightList.map((point, index) => (
					<HighlightPoint key={index} text={point.text} />
				))}
			</div>
		</div>
	);
};

export default Highlights;
