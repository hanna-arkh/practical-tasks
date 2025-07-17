import { SafeAreaView, Text } from 'react-native'

const PostDetailScreen = ({ route }) => {
  const { id } = route.params
  return (
    <SafeAreaView>
      <Text>Post Detail Screen</Text>
    </SafeAreaView>
  )
}

export default PostDetailScreen
