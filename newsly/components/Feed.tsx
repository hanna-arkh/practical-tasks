import { createStackNavigator } from '@react-navigation/stack'
import FeedScreen from './FeedScreen'
import NewsDetails from './NewsDetails'
import { SCREEN_NAMES } from '../constants/constants'

type RootStackParamList = {
  [SCREEN_NAMES.feedScreen]: undefined
  [SCREEN_NAMES.newsDetails]: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const Feed = () => (
  <Stack.Navigator id={undefined}>
    <Stack.Screen name={SCREEN_NAMES.feedScreen} component={FeedScreen} />
    <Stack.Screen name={SCREEN_NAMES.newsDetails} component={NewsDetails} />
  </Stack.Navigator>
)

export default Feed
