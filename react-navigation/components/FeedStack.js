import { createStackNavigator } from '@react-navigation/stack'
import { FeedScreen } from './FeedScreen'
import PostDetailScreen from './PostDetailScreen'
import { SCREEN_NAMES } from '../constants/constants'
const Stack = createStackNavigator()
const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN_NAMES.feedScreen} component={FeedScreen} />
      <Stack.Screen name={SCREEN_NAMES.postDetail} component={PostDetailScreen} />
    </Stack.Navigator>
  )
}
export default FeedStack
