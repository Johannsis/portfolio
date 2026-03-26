import 'server-only';

function Footer(): React.ReactElement {
  return (
    <footer className="text-primary-100 z-10 mt-12 w-full">
      <div className="border-secondary-100/15 mx-auto flex w-full max-w-7xl flex-col gap-3 border-t py-10 lg:flex-row lg:items-center lg:justify-between lg:py-12">
        <p className="body-xs leading-relaxed font-normal">
          Designed with <span aria-hidden="true">💚</span> in{' '}
          <span className="text-primary-100 font-semibold">Next.js</span> and{' '}
          <span className="text-primary-100 font-semibold">Tailwind CSS</span>,
          deployed in GitHub Pages.
        </p>
        <p className="body-xs text-primary-80 leading-relaxed font-normal">
          © {new Date().getFullYear()} Johannes Hoersch
        </p>
      </div>
    </footer>
  );
}

export default Footer;
