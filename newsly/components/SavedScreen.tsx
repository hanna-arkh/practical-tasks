import { articles } from '../data'
import { FlatList, View, TouchableOpacity, Text, useWindowDimensions } from 'react-native'
import { styles } from '../styles/styles'
import * as Device from 'expo-device'
import { useTheme } from '@react-navigation/native'
import { usePostsStore } from '../store/usePostsStore'

const SavedScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions()
  const isLandscape = height > width
  const isTablet = Device.deviceType === Device.DeviceType.TABLET
  const theme = useTheme() as unknown as 'light' | 'dark'
  const s = styles(theme)
  const saved = usePostsStore(state => state.saved)

  return (
    <View
      style={[s.container, isLandscape ? s.landscape : s.portrait, isTablet ? s.tablet : s.phone]}
    >
      <FlatList
        data={saved}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('News Details', { article: item })}>
            <Text style={s.item}>
              {item.id}. {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default SavedScreen
