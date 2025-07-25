import { create } from 'zustand'
import { Post, PostState } from '../types/types'

export const usePostsStore = create<PostState>(set => ({
  saved: [],
  addPost: (post: Post) =>
    set(state => ({
      saved: [...state.saved, post],
    })),
  deletePost: (id: number) =>
    set(state => ({
      saved: state.saved.filter(post => post.id !== id),
    })),
}))
