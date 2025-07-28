import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './Feed'
import Saved from './Saved'
import { Ionicons } from '@expo/vector-icons'
import { ICON_NAME, SCREEN_NAMES } from '../constants/constants'

type BottomTabParamList = {
  [SCREEN_NAMES.feed]: undefined
  [SCREEN_NAMES.saved]: undefined
}

const Tab = createBottomTabNavigator<BottomTabParamList>()
const BottomTab = () => {
  const getTabBarIconName = (route, focused: boolean) => {
    switch (route.name) {
      case SCREEN_NAMES.feed:
        return focused ? ICON_NAME.listFocused : ICON_NAME.listUnfocused
      case SCREEN_NAMES.saved:
        return focused ? ICON_NAME.bookmarkFocused : ICON_NAME.bookmarkUnfocused
      default:
        return ICON_NAME.helpIcon
    }
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          const tabBarIconName = getTabBarIconName(route, focused)
          return <Ionicons name={tabBarIconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name={SCREEN_NAMES.feed} component={Feed} />
      <Tab.Screen name={SCREEN_NAMES.saved} component={Saved} />
    </Tab.Navigator>
  )
}
export default BottomTab
