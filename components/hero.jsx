import Avatar from './avatar';
import GreetingSwitcher from './greeting-switcher';

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <Avatar />
        <div className="ml-0 md:ml-16">
          <GreetingSwitcher />

          <h1 className="text-2xl font-normal leading-10">
            <span className="block">
              I am{' '}
              <span className="animate-up from-secondary to-secondary cursor-default bg-gradient-to-r font-bold tracking-widest">
                Shahriar Shafin
              </span>
              , a web developer
            </span>
            from Bangladesh who focuses on frontend technologies & collaborates to open source
            projects.
            <span className="mt-5 block">
              I am passionate about building excellent software that improves the lives of those
              around me.
            </span>
          </h1>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="to-primary from-secondary aspect-[1155/678] w-[70rem] bg-gradient-to-tr opacity-[0.15]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 90% 61.6%, 90.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 59.5% 27.5%, 74.2% 61.4%, 29.4% 68.1%, 65% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 10.1% 40.9%, 17.9% 100%, 77.6% 78%, 76.1% 83.7%, 86.1% 50%)'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
