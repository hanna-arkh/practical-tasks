import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, Button, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProfileStackParamList } from '../types/navigation'
import { SCREEN_NAMES } from '../constants/constants'

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  typeof SCREEN_NAMES.profile
>

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  return (
    <SafeAreaView>
      <Text>Profile Screen</Text>
      <Button
        title="To settings screen"
        onPress={() => {
          navigation.navigate(SCREEN_NAMES.settings)
        }}
      />
    </SafeAreaView>
  )
}
export default ProfileScreen
