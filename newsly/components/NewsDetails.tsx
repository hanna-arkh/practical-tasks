import { Text, View } from 'react-native'
import { styles } from '../styles/styles'
import * as Device from 'expo-device'
import useOrientation from '../../orientation/hooks/useOrientation'

const NewsDetails = ({ route }) => {
  const { article } = route.params
  const { isPortrait } = useOrientation()
  const isTablet = Device.deviceType === Device.DeviceType.TABLET

  return (
    <View
      style={[
        styles.containerTextDetails,
        isPortrait ? styles.portrait : styles.landscape,
        isTablet ? styles.tablet : styles.phone,
      ]}
    >
      <Text style={[styles.textItem, styles.articleTitle]}>{article.title}</Text>
      <Text style={[styles.textItem, styles.content]}>{article.content}</Text>
      <Text style={[styles.textItem, styles.info]}>Category: {article.category}</Text>
      <Text style={[styles.textItem, styles.info]}>Author: {article.author}</Text>
    </View>
  )
}

export default NewsDetails
