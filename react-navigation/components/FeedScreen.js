import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, Button, Text } from 'react-native'

export const FeedScreen = () => {
  const navigation = useNavigation()
  const postId = 32
  return (
    <SafeAreaView>
      <Text>Feed Screen</Text>
      <Button
        title="To Post Detail Screen"
        onPress={() => {
          navigation.navigate('Post Detail', { id: postId })
        }}
      />
    </SafeAreaView>
  )
}
