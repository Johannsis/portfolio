import type Icons from '@jh/icons/svgs';

export type IconNames = keyof typeof Icons;

export interface IconProps {
  className?: string;
  height?: number | string;
  size?: number;
  stroke?: string;
  viewBox?: string;
  width?: number | string;
}
