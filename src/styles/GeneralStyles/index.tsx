import { ThemeProvider } from 'styled-components';

import { Global } from '../generic/global';
import { Reset } from '../generic/reset';
import { COLORS } from '../settings/colors';
import { StylesProps } from './types';

export function GeneralStyles({ children }: StylesProps) {
  return (
    <ThemeProvider theme={COLORS}>
      <Reset />
      <Global />
      {children}
    </ThemeProvider>
  );
}
