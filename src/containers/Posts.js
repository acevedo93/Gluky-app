import React, { useEffect } from 'react'
import { ListPostsLayout } from '../layouts/PostsLayout'
import { Post } from '../components/Post'
import { connect } from 'react-redux'
import { getPosts, clearPosts } from '../redux/actions/post_actions'
import { Loader } from '../components/Loader'
const PostsContainer = (props) => {
  useEffect(() => {
    props.getPosts()
    return () => {
      clearPosts()
    }
  }, [])

  if (!props.posts.length) return <Loader />
  return (
    <ListPostsLayout>
      {
        props.posts.map(post => <Post key={post.id} data={post} />)
      }
    </ListPostsLayout>
  )
}
const ms = ({ posts }) => ({
  posts: posts.posts,
  loading: posts.loading,
  status: posts.status
})

const md = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
  clearPosts: () => dispatch(clearPosts())
})

export const Posts = connect(ms, md)(PostsContainer)
