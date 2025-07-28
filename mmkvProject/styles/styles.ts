import { StyleSheet } from 'react-native'

export const styles = (themeState?: string) =>
  StyleSheet.create({
    containerApp: {
      flex: 1,
    },
    container: {
      backgroundColor: themeState === 'light' ? 'white' : 'black',
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      color: themeState === 'light' ? 'black' : 'white',
      fontSize: 16,
    },
  })
