import { SafeAreaView, Text } from 'react-native'
import { SCREEN_NAMES } from '../constants/constants'
import { RouteProp } from '@react-navigation/native'

type FeedStackParamList = {
  [SCREEN_NAMES.feedScreen]: undefined
  [SCREEN_NAMES.postDetail]: { id: number }
}
type PostDetailRouteProp = RouteProp<FeedStackParamList, typeof SCREEN_NAMES.postDetail>
type Props = {
  route: PostDetailRouteProp
}
const PostDetailScreen = ({ route }: Props) => {
  const { id } = route.params
  return (
    <SafeAreaView>
      <Text>Post Detail Screen {id} </Text>
    </SafeAreaView>
  )
}

export default PostDetailScreen
