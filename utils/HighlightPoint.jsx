const HighlightPoint = ({ text }) => (
	<div className='flex items-center hover:text-sh-blue-500 transition ease-in cursor-default'>
		<div className='rounded-full h-1.5 w-1.5 bg-sh-white mr-2'></div>
		{text}
	</div>
);
export default HighlightPoint;
