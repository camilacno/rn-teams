import { ThemeProvider } from 'styled-components'
import defaultTheme from '@theme/default'
import { Groups } from '@screens/Groups'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Groups />
    </ThemeProvider>
  )
}
