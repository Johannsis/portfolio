import 'server-only';

import clsx from 'clsx/lite';

import type { IconNames } from './constants/iconNames';
import svgs from './svgs';

interface IconComponentProps {
  'aria-hidden'?: boolean;
  className?: string;
  height?: number | string;
  iconName: IconNames;
  size?: number;
  stroke?: string;
  viewBox?: string;
  width?: number | string;
}

export function Icon({
  'aria-hidden': ariaHidden,
  className,
  height,
  iconName,
  size,
  stroke,
  viewBox,
  width,
}: IconComponentProps): null | React.ReactElement {
  const heightValue = size || height;
  const widthValue = size || width;

  const IconComponent = svgs[iconName];

  if (!IconComponent) {
    return null;
  }

  return (
    <span aria-hidden={ariaHidden} className="relative flex">
      <IconComponent
        className={clsx('w-full', className)}
        height={heightValue}
        stroke={stroke}
        viewBox={viewBox}
        width={widthValue}
      />
    </span>
  );
}
