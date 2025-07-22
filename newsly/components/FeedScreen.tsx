import { articles } from '../data'
import { FlatList, View, TouchableOpacity, Text, useWindowDimensions } from 'react-native'
import { styles } from '../styles/styles'
import * as Device from 'expo-device'
import { getTheme } from 'expo-settings'

const FeedScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions()
  const isLandscape = height > width
  const isTablet = Device.deviceType === Device.DeviceType.TABLET
  const theme = getTheme()
  return (
    <View
      style={[
        styles.container,
        isLandscape ? styles.landscape : styles.portrait,
        isTablet ? styles.tablet : styles.phone,
      ]}
    >
      <FlatList
        data={articles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('News Details', { article: item })}>
            <Text style={styles.item}>
              {item.id}. {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Text>{theme}</Text>
    </View>
  )
}

export default FeedScreen
