import { createStackNavigator } from '@react-navigation/stack'
import { FeedScreen } from './FeedScreen'
import PostDetailScreen from './PostDetailScreen'
import { SCREEN_NAMES } from '../constants/constants'

type FeedStackParamList = {
  [SCREEN_NAMES.feedScreen]: undefined
  [SCREEN_NAMES.postDetail]: { id: number }
}
const Stack = createStackNavigator<FeedStackParamList>()

const FeedStack = () => (
  <Stack.Navigator id={undefined}>
    <Stack.Screen name={SCREEN_NAMES.feedScreen} component={FeedScreen} />
    <Stack.Screen name={SCREEN_NAMES.postDetail} component={PostDetailScreen} />
  </Stack.Navigator>
)

export default FeedStack
