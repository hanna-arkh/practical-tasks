import { createStackNavigator } from '@react-navigation/stack'
import NewsDetails from './NewsDetails'
import SavedScreen from './SavedScreen'
import { SCREEN_NAMES } from '../constants/constants'
const Stack = createStackNavigator()

const Saved = () => (
  <Stack.Navigator id={undefined}>
    <Stack.Screen name={SCREEN_NAMES.savedScreen} component={SavedScreen} />
    <Stack.Screen name={SCREEN_NAMES.newsDetails} component={NewsDetails} />
  </Stack.Navigator>
)

export default Saved
