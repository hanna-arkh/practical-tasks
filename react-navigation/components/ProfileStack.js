import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from './ProfileScreen'
import SettingsScreen from './SettingsScreen'

const Stack = createStackNavigator()
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings Screen" component={SettingsScreen} />
    </Stack.Navigator>
  )
}
export default ProfileStack
