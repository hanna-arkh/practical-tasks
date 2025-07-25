import { getTheme } from 'expo-settings'
import { Appearance } from 'react-native'

export const resolveTheme = () => {
  const nativeTheme = getTheme()
  if (nativeTheme === 'system') {
    return Appearance.getColorScheme()
  } else {
    return nativeTheme
  }
}
