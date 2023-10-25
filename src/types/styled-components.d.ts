import 'styled-components';

import { COLORS } from '../styles/settings/colors';

type ThemeType = typeof COLORS;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
