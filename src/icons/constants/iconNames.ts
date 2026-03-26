export const IconNameEnum = {
  arrowRight: 'arrowRight',
  github: 'github',
  linkedin: 'linkedin',
  mail: 'mail',
} as const;

export type IconNames = keyof typeof IconNameEnum;
