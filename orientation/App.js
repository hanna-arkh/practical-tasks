import { View } from 'react-native'
import { Orientation } from './components/Orientation'
import { styles } from './styles/styles'
export default function App() {
  return (
    <View style={styles.container}>
      <Orientation />
    </View>
  )
}
