import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAlbum } from '../redux/actions/album_actions'
import { getPostsByAlbumId, clearPosts } from '../redux/actions/post_actions'
import { ListPostsLayout } from '../layouts/PostsLayout'
import { AlbumDetailLayout } from '../layouts/AlbumDetailLayout'
import { Post } from '../components/Post'

import { Loader } from '../components/Loader'

const AlbumDetailContainer = (props) => {
  useEffect(() => {
    props.getAlbum(props.albumId)
    props.getPostsByAlbumId(props.albumId)
    return () => {
      props.clearPosts()
    }
  }, [])
  if (props.loadingPosts && props.loadingAlbum) {
    return <Loader />
  }
  return (
    <AlbumDetailLayout title={props.album.title} >
      <ListPostsLayout >
        {
          props.posts.map(post => <Post key={post.id} data={post} />)
        }
      </ListPostsLayout>
    </AlbumDetailLayout>
  )
}
const ms = ({ posts, albums }) => ({
  album: albums.album,
  loadingAlbum: albums.loading,
  posts: posts.posts,
  loadingPosts: posts.loading
})
const md = (dispatch) => ({
  getAlbum: id => dispatch(getAlbum(id)),
  getPostsByAlbumId: id => dispatch(getPostsByAlbumId(id)),
  clearPosts: () => dispatch(clearPosts())
})

export const AlbumDetail = connect(ms, md)(AlbumDetailContainer)
