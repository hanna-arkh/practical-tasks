import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, Button, Text } from 'react-native'

const ProfileScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text>Profile Screen</Text>
      <Button
        title="To settings screen"
        onPress={() => {
          navigation.navigate('Settings Screen')
        }}
      />
    </SafeAreaView>
  )
}
export default ProfileScreen
