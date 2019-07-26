import React from 'react'
import { Posts } from '../../../containers/Posts'
import { Friends } from '../../../containers/Friends'
import { HomeLayout } from '../../../layouts/HomePageLayout'

export default () => (
  <HomeLayout>
    <Friends />
    <Posts />
  </HomeLayout>
)
