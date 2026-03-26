import 'server-only';

function AboutReadMore(): React.ReactElement {
  return (
    <details className="group flex flex-col gap-4">
      <summary className="body-xs text-primary-100 border-secondary-100/30 bg-primary-20/30 order-2 w-fit cursor-pointer list-none rounded-xl border px-3 py-2 leading-6 transition-all duration-300 hover:scale-105 [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">Read More</span>
        <span className="hidden group-open:inline">Show Less</span>
      </summary>
      <div className="body-xs text-primary-80 order-1 flex flex-col gap-4 leading-relaxed font-normal">
        <p>
          Currently, I&apos;m a{' '}
          <span className="text-primary-100 font-bold">
            {' '}
            Senior Front-End Engineer
          </span>{' '}
          at
          <span className="text-primary-100 font-bold"> TelevisaUnivision</span>
          , specializing in performance and new features. I contribute to the
          creation and integration of UI components that power
          TelevisaUnivision&apos;s frontend, ensuring that the platform meets
          the highest standards of quality, performance, and best practices to
          deliver an outstanding user experience.
        </p>
        <p>
          In the past, I&apos;ve had the opportunity to develop software across
          a variety of environments, from{' '}
          <span className="text-primary-100 font-bold">start-ups</span> to{' '}
          <span className="text-primary-100 font-bold">large corporations</span>{' '}
          and{' '}
          <span className="text-primary-100 font-bold">
            digital banking products
          </span>
          .
        </p>
      </div>
    </details>
  );
}

export default AboutReadMore;
