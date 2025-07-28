import { View } from 'react-native'
import { MmkvTheme } from '../components/MmkvTheme'
import { AsyncTheme } from '../components/AsyncTheme'
import { styles } from '../styles/styles'
import { storage } from '../src/storage/storageMMKV'

export default function App() {
  const initialTheme = storage.getString('theme') ?? 'light'
  const s = styles(initialTheme)
  return (
    <View style={s.containerApp}>
      <MmkvTheme />
      <AsyncTheme />
    </View>
  )
}
