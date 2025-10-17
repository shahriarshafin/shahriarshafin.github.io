import Avatar from './avatar';
import GreetingSwitcher from './greeting-switcher';

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <Avatar />
        <div className="ml-0 md:ml-16">
          <GreetingSwitcher />

          <h1 className="text-2xl font-normal leading-10">
            <span className="block">
              I am{' '}
              <span className="font-bold tracking-widest cursor-default animate-up bg-linear-to-r from-secondary to-secondary">
                Shahriar Shafin
              </span>
              , a web developer
            </span>
            from Bangladesh who focuses on frontend technologies & collaborates to open source
            projects.
            <span className="block mt-5">
              I am passionate about building excellent software that improves the lives of those
              around me.
            </span>
          </h1>
        </div>
      </div>
      <div
        className="absolute top-0 left-1/2 blur-3xl -translate-x-1/2 -z-10 xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-1155/678 w-280 bg-linear-to-tr from-secondary to-primary opacity-[0.15]"
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
