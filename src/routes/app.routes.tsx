import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Groups, NewGroup, Players } from '@screens/index'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name='groups' component={Groups}/>
      <Screen name='players' component={Players}/>
      <Screen name='newGroup' component={NewGroup}/>
    </Navigator>
  )
}