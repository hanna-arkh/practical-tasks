import { useWindowDimensions, Text, SafeAreaView } from 'react-native'
import { styles, textStyle, direction } from '../styles/styles'

export default function Orientation() {
  const { width, height } = useWindowDimensions()
  const isPortrait = height >= width
  return (
    <SafeAreaView style={[direction(isPortrait), styles.text]}>
      <Text style={textStyle(isPortrait)}>Lorem ipsum dolor sit amet</Text>
      <Text style={textStyle(isPortrait)}>Nunc malesuada sagittis feugiat</Text>
      <Text style={textStyle(isPortrait)}>Morbi ipsum tellus, dictum ac lorem vel</Text>
      <Text style={textStyle(isPortrait)}>blandit porttitor mauris</Text>
      <Text style={textStyle(isPortrait)}>sagittis feugiat</Text>
    </SafeAreaView>
  )
}
