import { TextStyle, ViewStyle } from 'react-native'
import { COLORS } from '../constants/colors'
import { StyleSheet } from 'react-native-unistyles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
  },
})

export const textStyle = (isPortrait: boolean): TextStyle => ({
  fontSize: isPortrait ? 8 : 18,
})

export const direction = (isPortrait: boolean): ViewStyle => ({
  flexDirection: isPortrait ? 'column' : 'row',
})
