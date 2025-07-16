import { useWindowDimensions, Text, SafeAreaView } from 'react-native'
import { styles, textStyle, direction } from '../styles/styles'

export default function Orientation() {
  const { width, height } = useWindowDimensions()
  const isPortrait = height >= width
  const textItems = [
    'Lorem ipsum dolor sit amet',
    'Nunc malesuada sagittis feugiat',
    'Morbi ipsum tellus, dictum ac lorem vel',
    'blandit porttitor mauris',
    'sagittis feugiat',
  ]
  return (
    <SafeAreaView style={[direction(isPortrait), styles.text]}>
      {textItems.map((text, index) => (
        <Text key={index} style={textStyle(isPortrait)}>
          {text}
        </Text>
      ))}
    </SafeAreaView>
  )
}
