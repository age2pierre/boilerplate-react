import { getContrast } from 'polished'

export interface TypoOpts {
  sizeScale: number
  weightScale: number

  wght: number
  wdth: number
  ital: number
}

export const MAJOR_THIRD = 1.25
export const MINOR_SECOND = 1.125

export const THEME = {
  typo: {
    mainFont: "'Roboto', sans-serif",
    variant(pow: number, opts?: Partial<TypoOpts>) {
      const {
        sizeScale = MAJOR_THIRD,
        weightScale = MINOR_SECOND,

        wght,
        wdth = 100,
        ital = 0,
      } = opts ?? {}

      const f = Math.pow(sizeScale, pow)
      const w = Math.pow(weightScale, pow)

      return {
        fontSize: `clamp(${f * 8}px, ${f * 2}vw,${f * 26}px)`,
        fontWeight: wght ?? w * 400,
        fontVariationSettings: `
        'wght' ${wght ?? w * 400},
        'wdth' ${wdth},
        'ital' ${ital}; 
      `,
      }
    },
    headerVariant(pow: number, opts?: Partial<TypoOpts>) {
      const { sizeScale = MINOR_SECOND } = opts ?? {}

      const m = Math.pow(sizeScale, pow) * 12
      return {
        ...this.variant(pow, opts),
        margin: `${m}px 0`,
      }
    },
  },

  palette: {
    primary: '#f1d558',
    accent: '#a8a087',
    sucess: '#41aa52',
    warning: '#f54b17',
    info: '#82b7e7',
    dark: '#2b2b2b',
    darkContrast: '#ebebeb',
    light: '#ebe8e4',
    lightContrast: '#1f1f1f',

    getBestContrast(color: string) {
      const scoreDark = getContrast(color, this.darkContrast)
      const scoreLight = getContrast(color, this.lightContrast)
      return scoreDark >= scoreLight ? this.darkContrast : this.lightContrast
    },
  },

  spacing(pow: number) {
    const f = Math.pow(1.5, pow)
    return `clamp(${f * 8}px, ${f * 2}vw,${f * 26}px)`
  },
} as const

export type Theme = typeof THEME
