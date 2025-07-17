import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './Feed'
import Saved from './Saved'
import { Ionicons } from '@expo/vector-icons'
import { iconNames, screenNames } from '../constants/constants'

const Tab = createBottomTabNavigator()
export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName
          if (route.name === screenNames.feed) {
            iconName = focused ? iconNames.listFocused : iconNames.listUnfocused
          } else if (route.name === screenNames.saved) {
            iconName = focused ? iconNames.bookmarkFocused : iconNames.bookmarkUnfocused
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name={screenNames.feed} component={Feed} />
      <Tab.Screen name={screenNames.saved} component={Saved} />
    </Tab.Navigator>
  )
}
