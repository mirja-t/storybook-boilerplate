'use client';
import { Roboto } from 'next/font/google';
import { Palette, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { ButtonColorTypes } from '@/components/Button';
import { ButtonOwnProps, PaletteOptions } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      dashed: true;
    }
    // interface ButtonPropsColorOverrides {
    //   custom: true;
    // }
  }
  
const theme = createTheme({
    palette: {
        primary: {
            main: '#e6007e',
        },
        secondary: {
            main: '#ffed00',
        },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained'
        },
        variants: [
          {
            props: { variant: 'dashed' },
            style: {
              borderStyle: 'dashed',
              borderWidth: 2,
            },
          },
        ],
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState.variant === 'dashed' && {
              borderColor: theme.palette[ownerState.color as ButtonColorTypes]?.main || theme.palette.primary.main,
              color: theme.palette[ownerState.color as ButtonColorTypes]?.main || theme.palette.primary.main,
            }),
          }),
        },
      },
    },
});

export default theme;

