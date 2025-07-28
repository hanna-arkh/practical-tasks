import { StyleSheet, View } from 'react-native'
import { MmkvTheme } from '../components/MmkvTheme'
import { AsyncTheme } from '../components/AsyncTheme'

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
