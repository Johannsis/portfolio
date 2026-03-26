import 'server-only';

import Section from '@jh/components/atoms/Section';
import SectionTitle from '@jh/components/atoms/SectionTitle';
import AboutReadMore from '@jh/components/molecules/AboutReadMore';

function AboutWidget(): React.ReactElement {
  return (
    <Section ariaLabel="About me" className="lg:p-4!" id="about">
      <SectionTitle title="about" />
      <p className="body-xs text-primary-80 leading-relaxed font-normal">
        I&apos;m a detail-oriented Software Engineer passionate about building
        performant, pixel-perfect, and accessible interfaces that combine
        creative design with maintainable engineering. I love integrating
        cutting-edge technologies with thoughtful design to create engaging user
        experiences focused on responsiveness, performance, usability, and SEO,
        while optimizing for Core Web Vitals.
      </p>
      <AboutReadMore />
    </Section>
  );
}

export default AboutWidget;
