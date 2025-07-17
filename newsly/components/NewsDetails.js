import { Text, View, StyleSheet, useWindowDimensions } from 'react-native'

const NewsDetails = ({ route }) => {
  const { article } = route.params
  const { width, height } = useWindowDimensions()
  const isTablet = width > 768
  const isLandscape = width > height

  return (
    <View
      style={[
        styles.container,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textItem: {
    paddingBottom: 10,
  },
  articleTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  content: {
    fontSize: 20,
  },
  info: {
    alignSelf: 'flex-end',
  },
})
export default NewsDetails
