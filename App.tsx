import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import defaultTheme from '@theme/default'
import { Groups } from '@screens/Groups'
import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  )
}
