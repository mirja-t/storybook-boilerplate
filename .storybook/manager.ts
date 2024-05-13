import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

// https://storybook.js.org/docs/configure/theming

addons.setConfig({
  theme: create({
    base: 'light',
    fontBase: '"Fira Sans", sans-serif',
    brandTitle: 'MUI Storybook',
    brandUrl: 'https://mirja-t.github.io',
    brandImage: '/mt-logo.svg',

    colorPrimary: '#e6007e',
    colorSecondary: '#ffed00',

    // Text colors
    textColor: 'black',
    textInverseColor: 'black',

    // Toolbar default and active colors
    barTextColor: 'black',
    barSelectedColor: '#e6007e',
    barHoverColor: '#e6007e',
    barBg: '#f4f4f4',

    appBg: '#e6007e', 
    appContentBg: '#f4f4f4',
    appPreviewBg: '#f4f4f4',
    appBorderColor: 'transparent',
    appBorderRadius: 0,
    
    // Form colors
    inputBg: '#f4f4f4',
    inputBorder: '#CCC',
    inputTextColor: 'black',
    inputBorderRadius: 0,
  }),
});