import 'server-only';

import ContactLinks from '@jh/components/molecules/ContactLinks';
import HeaderSections from '@jh/components/molecules/HeaderSections';
import { userData } from '@jh/data/user';

function Header(): React.ReactElement {
  return (
    <header className="mb-20 flex min-h-60 flex-col gap-6 lg:fixed lg:mb-0 lg:max-h-dvh lg:min-h-[90dvh] lg:max-w-[33%] lg:justify-between 2xl:max-w-[calc(20%-0.75rem)]">
      <div className="flex w-full flex-col gap-4">
        <h1 className="titles-4xl [background-image:var(--title-radial-gradient)] bg-clip-text leading-tight font-extrabold tracking-tight text-transparent lg:leading-12">
          {userData.name}
        </h1>
        <p className="titles-xl text-primary-100 font-bold tracking-tight">
          {userData.job}
        </p>
        <p className="body-sm text-primary-80 font-medium">
          Based in {userData.location}
        </p>
        <p className="body-sm text-primary-80 mt-2 max-w-xs">
          {userData.motto}
        </p>
      </div>
      <HeaderSections />
      <ContactLinks />
    </header>
  );
}

export default Header;
