import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './Feed'
import Saved from './Saved'
import { Ionicons } from '@expo/vector-icons'
import { iconNames, screenNames } from '../constants/constants'

const Tab = createBottomTabNavigator()
const BottomTab = () => {
  const getIconName = (route, focused) => {
    switch (route.name) {
      case screenNames.feed:
        return focused ? iconNames.listFocused : iconNames.listUnfocused
      case screenNames.saved:
        return focused ? iconNames.bookmarkFocused : iconNames.bookmarkUnfocused
      default:
        return iconNames.helpIcon
    }
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          const iconName = getIconName(route, focused)
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name={screenNames.feed} component={Feed} />
      <Tab.Screen name={screenNames.saved} component={Saved} />
    </Tab.Navigator>
  )
}
export default BottomTab
