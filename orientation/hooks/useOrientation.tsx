import { useWindowDimensions } from 'react-native'

const useOrientation = (): { isPortrait: boolean } => {
  const { width, height } = useWindowDimensions()
  return {
    isPortrait: height >= width,
  }
}
export default useOrientation
