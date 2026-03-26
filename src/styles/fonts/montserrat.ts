import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['200', '300', '400', '500', '600', '700'],
});
