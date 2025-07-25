import { articles } from '../data'
import { FlatList, View, TouchableOpacity, Text } from 'react-native'
import { styles } from '../styles/styles'
import * as Device from 'expo-device'
import useOrientation from '../../orientation/hooks/useOrientation'

const FeedScreen = ({ navigation }) => {
  const { isPortrait } = useOrientation()
  const isTablet = Device.deviceType === Device.DeviceType.TABLET

  return (
    <View
      style={[
        styles.container,
        isPortrait ? styles.portrait : styles.landscape,
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
    </View>
  )
}

export default FeedScreen
