import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import ProjectCardLeft from '../components/ProjectCardLeft';
const projects = () => {
	return (
		<div>
			<NavBar />
			<div className='max-w-[50rem] mx-auto w-full py-3 px-10 md:px-0 mt-10'>
				<h2 className='mb-2 text-3xl font-bold tracking-widest inline-block decoration-sh-white underline decoration-1 underline-offset-[12px]'>
					Projects
				</h2>
				<p className='my-2 text-xl'>
					A selection of projects ve worked on, during my career as a software
					developer.
				</p>
			</div>
			<ProjectCard />
			<ProjectCardLeft />
			<ProjectCard />
			<ProjectCardLeft />
			<Footer />
		</div>
	);
};

export default projects;
