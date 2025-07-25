export interface Post {
  id: number
  title: string
  content: string
  author: string
  category: string
}

export type PostType = Post[]

export interface PostState {
  saved: PostType
  addPost: (post: Post) => void
  deletePost: (id: number) => void
}

export type Props = {
  article: Post
}
