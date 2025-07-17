import { createStackNavigator } from '@react-navigation/stack'
import { FeedScreen } from './FeedScreen'
import PostDetailScreen from './PostDetailScreen'

const Stack = createStackNavigator()
const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed Screen" component={FeedScreen} />
      <Stack.Screen name="Post Detail" component={PostDetailScreen} />
    </Stack.Navigator>
  )
}
export default FeedStack
