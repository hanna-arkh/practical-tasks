import { TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { usePostsStore } from '../store/usePostsStore'
import { ICON_NAME } from '../constants/constants'
import { Post } from '../types/types'
import { Props } from '../types/types'

export const SavedButton = ({ article }: Props) => {
  const saved = usePostsStore(state => state.saved)
  const addPost = usePostsStore(state => state.addPost)
  const deletePost = usePostsStore(state => state.deletePost)
  const isSaved = saved.some(post => post.id === article.id)
  const { dark } = useTheme()

  const handlerButton = () => {
    if (isSaved) {
      deletePost(article.id)
    } else {
      addPost(article)
    }
  }
  return (
    <TouchableOpacity onPress={() => handlerButton()}>
      <Ionicons
        name={isSaved ? ICON_NAME.bookmarkFocused : ICON_NAME.bookmarkUnfocused}
        size={24}
        color={dark ? 'white' : 'black'}
      />
    </TouchableOpacity>
  )
}
