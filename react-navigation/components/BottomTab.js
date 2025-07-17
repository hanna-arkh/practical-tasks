import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedStack from './FeedStack'
import ProfileStack from './ProfileStack'
import SearchScreen from './SearchScreen'
import { Ionicons } from '@expo/vector-icons'
import { SCREEN_NAMES, ICON_NAMES } from '../constants/constants'

const Tab = createBottomTabNavigator()
export const BottomTab = () => {
  const getTabBarIconName = (route, focused) => {
    switch (route.name) {
      case SCREEN_NAMES.feed:
        return focused ? ICON_NAMES.homeFocused : ICON_NAMES.homeUnfocused
      case SCREEN_NAMES.search:
        return focused ? ICON_NAMES.searchFocused : ICON_NAMES.searchUnfocused
      case SCREEN_NAMES.profile:
        return focused ? ICON_NAMES.profileFocused : ICON_NAMES.profileUnfocused
      default:
        return ICON_NAMES.helpIcon
    }
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          const tabBarIconName = getTabBarIconName(route, focused)
          return <Ionicons name={tabBarIconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen name={SCREEN_NAMES.feed} component={FeedStack} options={{ headerShown: false }} />
      <Tab.Screen name={SCREEN_NAMES.search} component={SearchScreen} />
      <Tab.Screen
        name={SCREEN_NAMES.profile}
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  )
}
