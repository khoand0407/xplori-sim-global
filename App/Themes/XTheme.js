import { DefaultTheme } from 'react-native-paper';
import XploriColor from './Colors';

export default {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: XploriColor.primary,
    // accent: '#f1c40f',
    text: '#000000',
  },
};
