import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
  containerTextDetails: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textItem: {
    paddingBottom: 10,
  },
  articleTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  content: {
    fontSize: 20,
  },
  info: {
    alignSelf: 'flex-end',
  },
})
