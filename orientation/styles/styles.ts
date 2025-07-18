import { COLORS } from '../constants/colors'
import { StyleSheet } from 'react-native-unistyles'
import { ViewStyle, TextStyle } from 'react-native'
type MyStyles = {
  container: ViewStyle
  text: TextStyle
}

export const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export const styles = (isPortrait: boolean): MyStyles =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: isPortrait ? 'column' : 'row',
    },
    text: {
      alignItems: 'center',
      fontSize: isPortrait ? 8 : 18,
    },
  })
