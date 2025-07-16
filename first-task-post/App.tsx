import { View } from 'react-native'
import { Post } from './components/Post'
import { styles } from './styles/styles'

export default function App() {
  return (
    <View style={styles.containerApp}>
      <Post />
    </View>
  )
}
