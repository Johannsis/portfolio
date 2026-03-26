import 'server-only';

import { pageSections } from '@jh/data/user';

import HeaderNavItem from '../HeaderNavItem';

function HeaderSections(): React.ReactElement {
  return (
    <nav
      aria-label="Page sections"
      className="body-2xs hidden flex-col gap-6 uppercase lg:flex"
    >
      {pageSections.map((section): React.ReactElement => {
        return <HeaderNavItem key={section} sectionName={section} />;
      })}
    </nav>
  );
}

export default HeaderSections;
