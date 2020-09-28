import { darken } from 'polished'
import { createUseStyles } from 'react-jss'

import type { THEME } from './theme'

export const useGlobalStyle = createUseStyles<typeof THEME>(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.dark,
      color: theme.palette.darkContrast,
      fontFamily: theme.typo.mainFont,
      ...theme.typo.variant(-1),
    },
    a: {
      color: theme.palette.primary,
      cursor: 'pointer',
      '&:hover': {
        color: darken(0.3, theme.palette.primary),
      },
    },
    button: {
      ...theme.typo.variant(-1, { wght: 600 }),
      backgroundColor: theme.palette.primary,
      color: theme.palette.lightContrast,
      textTransform: 'uppercase',
      border: '0px solid',
      borderRadius: '2px',
      padding: `${theme.spacing(-1)} ${theme.spacing(0)}`,
      cursor: 'pointer',
      width: 'max-content',
      transition: '0.25s ease',
      boxShadow: `0px 0px ${theme.spacing(1)} 0px rgba(0, 0, 0, 0.5)`,

      '&:hover': {
        backgroundColor: darken(0.15, theme.palette.primary),
      },
    },

    h1: { ...theme.typo.headerVariant(5) },
    h2: { ...theme.typo.headerVariant(4) },
    h3: { ...theme.typo.headerVariant(3) },
    h4: { ...theme.typo.headerVariant(2) },
    h5: { ...theme.typo.headerVariant(1) },
    h6: { ...theme.typo.headerVariant(0) },

    em: { ...theme.typo.variant(-2) },
  },
}))
