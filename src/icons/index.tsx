import 'server-only';

import clsx from 'clsx/lite';

import type { IconNames } from './constants/types';
import Icons from './svgs';

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

async function Icon({
  'aria-hidden': ariaHidden,
  className,
  height,
  iconName,
  size,
  stroke,
  viewBox,
  width,
}: IconComponentProps): Promise<null | React.ReactElement> {
  const heightValue = size || height;
  const widthValue = size || width;

  const iconLoader = Icons[iconName];

  if (!iconLoader) return null;

  const iconModule = await iconLoader();

  if (!iconModule?.default) return null;

  const IconComponent = iconModule.default;

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

export { Icon };
