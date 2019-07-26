import React from 'react'
import { AlbumDetail } from '../../../containers/AlbumDetail'
import { AlbumLayout } from '../../../layouts/AlbumLayout'
import { UserDetail } from '../../../containers/UserDetail'

export default (props) => (
  <AlbumLayout>
    <UserDetail />
    <AlbumDetail albumId={props.id} />
  </AlbumLayout>

)
