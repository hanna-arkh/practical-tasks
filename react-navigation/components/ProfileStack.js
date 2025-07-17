import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from './ProfileScreen'
import SettingsScreen from './SettingsScreen'
import { SCREEN_NAMES } from '../constants/constants'

const Stack = createStackNavigator()
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN_NAMES.profile} component={ProfileScreen} />
      <Stack.Screen name={SCREEN_NAMES.settings} component={SettingsScreen} />
    </Stack.Navigator>
  )
}
export default ProfileStack
