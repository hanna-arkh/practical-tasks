import { Text, View, useWindowDimensions } from 'react-native'
import { styles } from '../styles/styles'
import * as Device from 'expo-device'

const NewsDetails = ({ route }) => {
  const { article } = route.params
  const { width, height } = useWindowDimensions()
  // const isTablet = DeviceInfo.isTablet()
  const isLandscape = width > height
  const isTablet = Device.deviceType === Device.DeviceType.TABLET

  return (
    <View
      style={[
        styles.containerTextDetails,
        isLandscape ? styles.landscape : styles.portrait,
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
