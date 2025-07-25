import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './components/BottomTab'
import { ThemeProvider } from './components/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </ThemeProvider>
  )
}
