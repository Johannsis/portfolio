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
        creative design with maintainable code. I love integrating cutting-edge
        technologies to create engaging user experiences focused on
        responsiveness and performance to reach high Core Web Vitals and CrUX
        Vis scores.
      </p>
      <AboutReadMore />
    </Section>
  );
}

export default AboutWidget;
