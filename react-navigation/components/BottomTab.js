import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedStack from './FeedStack'
import ProfileStack from './ProfileStack'
import SearchScreen from './SearchScreen'
import { Ionicons } from '@expo/vector-icons'
import { screenNames, iconNames } from '../constants/constants'

const Tab = createBottomTabNavigator()
export const BottomTab = () => {
  const getIconName = (route, focused) => {
    switch (route.name) {
      case screenNames.feed:
        return focused ? iconNames.homeFocused : iconNames.homeUnfocused
      case screenNames.search:
        return focused ? iconNames.searchFocused : iconNames.searchUnfocused
      case screenNames.profile:
        return focused ? iconNames.profileFocused : iconNames.profileUnfocused
      default:
        return iconNames.helpIcon
    }
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          const iconName = getIconName(route, focused)
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen name={screenNames.feed} component={FeedStack} options={{ headerShown: false }} />
      <Tab.Screen name={screenNames.search} component={SearchScreen} />
      <Tab.Screen
        name={screenNames.profile}
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  )
}
