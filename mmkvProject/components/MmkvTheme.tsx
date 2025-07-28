import React from 'react'
import { useMMKVString } from 'react-native-mmkv'
import { Button, SafeAreaView, Text } from 'react-native'
import { styles } from '../styles/styles'

export const MmkvTheme = () => {
  const [themeState, setThemeState] = useMMKVString('theme')
  const s = styles(themeState)

  const changeTheme = () => {
    if (themeState === 'light') {
      setThemeState('dark')
    } else {
      setThemeState('light')
    }
  }
  return (
    <SafeAreaView style={s.container}>
      <Text style={s.textStyle}>Current theme from MMKV storage: {themeState}</Text>
      <Button title="Change Theme" onPress={changeTheme} />
    </SafeAreaView>
  )
}
