import { Text, SafeAreaView } from 'react-native'
import { styles, textStyle, direction } from '../styles/styles'
import { useOrientation } from '../hooks/useOrientation'

export const Orientation = () => {
  const { isPortrait } = useOrientation()

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
