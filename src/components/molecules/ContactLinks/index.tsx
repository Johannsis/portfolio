import 'server-only';

import { userData } from '@jh/data/user';
import { Icon } from '@jh/icons';

function ContactLinks(): React.ReactElement {
  const socialLinks = userData.social;

  return (
    <nav
      aria-label="Contact links"
      className="flex h-fit flex-row gap-5 lg:relative lg:mb-36"
    >
      {socialLinks.map(
        ({ ariaLabel, icon, name, url }): React.ReactElement => (
          <a
            aria-label={ariaLabel}
            className="text-primary-80 hover:text-primary-100 duration-300 ease-out hover:scale-110"
            href={url}
            key={name}
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            target={url.startsWith('mailto:') ? undefined : '_blank'}
          >
            <Icon
              aria-hidden
              className="fill-current"
              iconName={icon}
              size={24}
            />
          </a>
        ),
      )}
    </nav>
  );
}

export default ContactLinks;
