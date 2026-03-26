interface TechTagProps {
  tag: string;
}

function TechTag({ tag }: TechTagProps): React.ReactElement {
  return (
    <li className="body-2xs bg-primary-80 text-primary-20 border-secondary-100/60 rounded-full border px-3 py-1 transition-all duration-300">
      {tag}
    </li>
  );
}

export default TechTag;
