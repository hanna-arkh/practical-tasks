import { Text, SafeAreaView } from 'react-native'
import { styles } from '../styles/styles'
import useOrientation from '../hooks/useOrientation'

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
    <SafeAreaView style={styles(isPortrait).container}>
      {textItems.map((text: string, index: number) => (
        <Text key={index} style={styles(isPortrait).text}>
          {text}
        </Text>
      ))}
    </SafeAreaView>
  )
}
