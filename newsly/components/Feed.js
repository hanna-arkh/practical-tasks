import { createStackNavigator } from '@react-navigation/stack'
import FeedScreen from './FeedScreen'
import NewsDetails from './NewsDetails'

const Stack = createStackNavigator()
const Feed = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed Screen" component={FeedScreen} />
      <Stack.Screen name="News Details" component={NewsDetails} />
    </Stack.Navigator>
  )
}
export default Feed
