import 'styled-components'
import defaultTheme from '@theme/default'

declare module 'styled-components' {
  type DefaultThemeType = typeof defaultTheme
  export interface DefaultTheme extends DefaultThemeType {}
}
