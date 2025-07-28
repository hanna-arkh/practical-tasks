import { StyleSheet, View } from 'react-native'
import { MmkvTheme } from './MmkvTheme'
import { AsyncTheme } from './AsyncTheme'

export default function App() {
  return (
    <View style={styles.container}>
      <MmkvTheme />
      <AsyncTheme />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
