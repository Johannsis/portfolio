import 'server-only';

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps): React.ReactElement {
  return (
    <h2 className="titles-lg text-primary-100 sticky top-0 z-10 w-full py-6 font-bold tracking-wider uppercase lg:sr-only">
      <span className="bg-primary-10/20 absolute top-0 left-[calc(50%-50vw)] -z-10 h-full w-screen backdrop-blur-xs transition-colors" />
      {title}
    </h2>
  );
}

export default SectionTitle;
