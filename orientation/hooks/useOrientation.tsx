import { useWindowDimensions } from 'react-native'

export const useOrientation = (): { isPortrait: boolean } => {
  const { width, height } = useWindowDimensions()
  return {
    isPortrait: height >= width,
  }
}
