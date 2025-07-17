import { Text, SafeAreaView } from 'react-native'
import { styles, textStyle, direction } from '../styles/styles'
import { useOrientation } from '../hooks/useOrientation'

export const Orientation = () => {
  const { isPortrait } = useOrientation()

  const textItems: string[] = [
    'Lorem ipsum dolor sit amet',
    'Nunc malesuada sagittis feugiat',
    'Morbi ipsum tellus, dictum ac lorem vel',
    'blandit porttitor mauris',
    'sagittis feugiat',
  ]
  return (
    <SafeAreaView style={[direction(isPortrait), styles.text]}>
      {textItems.map((text: string, index: number) => (
        <Text key={index} style={textStyle(isPortrait)}>
          {text}
        </Text>
      ))}
    </SafeAreaView>
  )
}
