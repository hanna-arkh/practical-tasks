import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SafeAreaView, Button, Text } from 'react-native'
import { SCREEN_NAMES } from '../constants/constants' // обязательно

type RootStackParamList = {
  [SCREEN_NAMES.feedScreen]: undefined
  [SCREEN_NAMES.postDetail]: { id: number }
}

type FeedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof SCREEN_NAMES.feedScreen
>

export const FeedScreen = () => {
  const navigation = useNavigation<FeedScreenNavigationProp>()
  const postId = 32

  return (
    <SafeAreaView>
      <Text>Feed Screen</Text>
      <Button
        title="To Post Detail Screen"
        onPress={() => {
          navigation.navigate(SCREEN_NAMES.postDetail, { id: postId })
        }}
      />
    </SafeAreaView>
  )
}
