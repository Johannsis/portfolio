import 'server-only';

import MouseLight from '@jh/components/atoms/MouseLight';
import AboutWidget from '@jh/components/organisms/AboutWidget';
import AuroraBackground from '@jh/components/organisms/AuroraBackground';
import ExperienceWidget from '@jh/components/organisms/ExperienceWidget';
import Footer from '@jh/components/organisms/Footer';
import Header from '@jh/components/organisms/Header';

export default function Home(): React.ReactElement {
  return (
    <div className="bg-primary-10 text-primary-80 relative flex min-h-dvh w-full min-w-min grow flex-col px-6 py-12 antialiased transition-colors duration-500 ease-in-out md:px-12 lg:px-24">
      <AuroraBackground />
      <div className="z-10 flex min-h-full max-w-7xl flex-col gap-6 self-center lg:flex-row">
        <Header />
        <main className="mx-auto my-0 flex w-full grow flex-col gap-16 py-0 lg:mr-0 lg:max-w-[calc(60%-0.75rem)]">
          <AboutWidget />
          <ExperienceWidget />
        </main>
      </div>
      <Footer />
      <MouseLight />
    </div>
  );
}
