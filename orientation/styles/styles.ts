import { StyleSheet } from 'react-native'
import { COLORS } from '../constants/colors'

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

export const textStyle = isPortrait => ({
  fontSize: isPortrait ? 8 : 18,
})

export const direction = isPortrait => ({
  flexDirection: isPortrait ? 'column' : 'row',
})
