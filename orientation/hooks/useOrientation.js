import { useWindowDimensions } from 'react-native'

export const useOrientation = () => {
  const { width, height } = useWindowDimensions()
  return {
    isPortrait: height >= width,
  }
}
