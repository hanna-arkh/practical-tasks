import { View } from 'react-native'
import { Orientation } from './components/Orientation'
import { staticStyles } from 'styles/styles'
export default function App() {
  return (
    <View style={staticStyles.container}>
      <Orientation />
    </View>
  )
}
