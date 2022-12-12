import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import defaultTheme from '@theme/default'
import { Loading } from '@components/index'
import { Groups } from '@screens/Groups'
import { NewGroup } from '@screens/NewGroup'
import { Players } from '@screens/Players'

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
