import { StyleSheet } from 'react-native'
import { ViewStyle, TextStyle } from 'react-native'
type MyStyles = {
  container: ViewStyle
  portrait: ViewStyle
  item: TextStyle
  landscape: ViewStyle
  tablet: ViewStyle
  phone: ViewStyle
  containerTextDetails: ViewStyle
  info: TextStyle
  textItem: TextStyle
  content: TextStyle
  articleTitle: TextStyle
}

export const styles = (theme: 'light' | 'dark'): MyStyles =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    portrait: {
      padding: 10,
      backgroundColor: theme === 'dark' ? 'black' : 'white',
    },
    landscape: {
      paddingHorizontal: 32,
      paddingVertical: 16,
      backgroundColor: theme === 'dark' ? 'black' : 'white',
      flexDirection: 'row',
    },
    phone: {
      paddingHorizontal: 20,
    },
    tablet: {
      paddingHorizontal: 40,
    },

    item: {
      marginBottom: 12,
      padding: 16,
      backgroundColor: theme === 'dark' ? 'black' : '#eeeeee',
      borderRadius: 8,
      fontSize: 16,
      color: theme === 'dark' ? 'white' : 'dark',
    },
    containerTextDetails: {
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
