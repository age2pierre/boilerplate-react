import { THEME } from './theme'

describe('getBestContrast', () => {
  it('should return light color for dark ones', () => {
    const rslt = THEME.palette.getBestContrast(THEME.palette.dark)
    expect(rslt).toBe(THEME.palette.darkContrast)
  })
  it('should return dark color for light ones', () => {
    const rslt = THEME.palette.getBestContrast(THEME.palette.light)
    expect(rslt).toBe(THEME.palette.lightContrast)
  })
})
