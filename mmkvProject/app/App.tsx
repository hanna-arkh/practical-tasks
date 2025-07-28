import { View } from 'react-native'
import { MmkvTheme } from '../components/MmkvTheme'
import { AsyncTheme } from '../components/AsyncTheme'
import { styles } from '../styles/styles'

export default function App() {
  const s = styles()
  return (
    <View style={s.containerApp}>
      <MmkvTheme />
      <AsyncTheme />
    </View>
  )
}
