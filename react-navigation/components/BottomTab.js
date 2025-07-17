import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedStack from './FeedStack'
import ProfileStack from './ProfileStack'
import SearchScreen from './SearchScreen'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
export default function BottomTab() {
  const getIconName = (route, focused) => {
    switch (route.name) {
      case 'Feed':
        return focused ? 'home' : 'home-outline'
      case 'Search':
        return focused ? 'search' : 'search-outline'
      case 'Profile':
        return focused ? 'person' : 'person-outline'
      default:
        return 'help-circle'
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
      <Tab.Screen name="Feed" component={FeedStack} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}
