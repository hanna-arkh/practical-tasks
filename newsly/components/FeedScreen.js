import { articles } from '../data'
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  StyleSheet,
} from 'react-native'

const FeedScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions()
  const isTablet = width >= 768
  const isLandscape = height > width

  return (
    <View
      style={[
        styles.container,
        isLandscape ? styles.landscape : styles.portrait,
        isTablet ? styles.tablet : styles.phone,
      ]}
    >
      <FlatList
        data={articles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('News Details', { article: item })}>
            <Text style={styles.item}>
              {item.id}. {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  portrait: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  landscape: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  phone: {
    paddingHorizontal: 20,
  },
  tablet: {
    paddingHorizontal: 40,
  },

  item: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    fontSize: 16,
  },
})
export default FeedScreen
