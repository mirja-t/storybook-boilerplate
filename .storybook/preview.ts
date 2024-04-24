import type { Preview } from "@storybook/react";

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import theme from '../src/theme/theme';

const preview: Preview = {
  parameters: {
    // controls: {
    //   expanded: true, // Adds the description and default columns
    //   matchers: {
    //     color: /(background|color)$/i,
    //     date: /Date$/i,
    //   },
    // },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'light', value: '#efefef' },
        { name: 'white', value: '#fff' },
        { name: 'dark', value: '#333' },
      ],
    },
    options: {
      storySort: {
        order: ['Components', '*'],
      },
    },
    docs: {
      autodocs: 'tag',
    }
  },

  decorators: [withThemeFromJSXProvider({
    // GlobalStyles: CssBaseline,
    Provider: ThemeProvider,
    themes: {
      // Provide your custom themes here
      light: theme,
    },
    defaultTheme: 'light',
  })]
};

export default preview;
