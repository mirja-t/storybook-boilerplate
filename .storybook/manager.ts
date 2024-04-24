import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

// https://storybook.js.org/docs/configure/theming

addons.setConfig({
  theme: create({
    base: 'light',
    fontBase: '"Fira Sans", sans-serif',
    brandTitle: 'MUI Storybook',
    brandUrl: 'https://mirja-t.github.io',
    brandImage: '/mt-logo.gif',
    appBg: 'white', 
    appContentBg: '#f4f4f4',
    appPreviewBg: '#f4f4f4',
    appBorderColor: 'transparent',
    appBorderRadius: 0,
    colorPrimary: '#ffed00',
    colorSecondary: '#e6007e',
    textColor: 'black',
    barTextColor: 'white',
    barBg: '#e6007e',
    inputBorderRadius: 5,
  }),
});