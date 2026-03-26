import 'server-only';

import Section from '@jh/components/atoms/Section';
import SectionTitle from '@jh/components/atoms/SectionTitle';
import ExperienceCard from '@jh/components/molecules/ExperienceCard';
import { userData } from '@jh/data/user';
import { isProd } from '@jh/flags/environment';
import { Icon } from '@jh/icons';

function ExperienceWidget(): React.ReactElement {
  const data = userData.experience;
  const isProduction = isProd();

  return (
    <Section ariaLabel="Work experience" id="experience">
      <SectionTitle title="experience" />
      <div className="group/list flex grow flex-col gap-8 transition-all duration-500 ease-out">
        {data.map(
          (experience): React.ReactElement => (
            <ExperienceCard key={experience.companyName} {...experience} />
          ),
        )}
      </div>
      <a
        aria-label="View Full Resume (opens PDF in new tab)"
        className="text-primary-80 hover:text-primary-100 mt-4 flex items-center gap-2 fill-current font-semibold transition-colors duration-200 ease-in-out lg:p-4"
        href={
          isProduction
            ? '/portfolio/assets/Johannes-Hoersch-CV.pdf'
            : '/assets/Johannes-Hoersch-CV.pdf'
        }
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="body-md font-medium">View Full Resume</span>
        <Icon
          aria-hidden
          className="fill-current"
          iconName="arrowRight"
          size={20}
          viewBox="0 0 24 24"
        />
      </a>
    </Section>
  );
}

export default ExperienceWidget;
