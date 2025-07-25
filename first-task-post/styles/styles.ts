import { StyleSheet } from 'react-native'
import { COLORS } from '../constants/colors'

export const styles = StyleSheet.create({
  avatarIcon: {
    height: 60,
    width: 60,
  },
  containerPost: {
    backgroundColor: COLORS.background,
  },
  feedback: {
    backgroundColor: COLORS.background,
    flexDirection: 'row',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icons: {
    height: 50,
    paddingRight: 15,
    width: 50,
  },
  mainPic: {
    height: 400,
    width: '100%',
  },
  name: {
    fontWeight: 'bold',
  },
  saveIcon: {
    marginLeft: 'auto',
  },
  textContent: {
    paddingHorizontal: 10,
  },
  containerApp: {
    alignItems: 'center',
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: 'center',
  },
})
