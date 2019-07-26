import React from 'react'
import { UserDetailLayout } from '../layouts/UserDetailLayout'
import { connect } from 'react-redux'
import { UserDetailComponent } from '../components/UserDetail'
const UserDetailContainer = (props) => {
  return (
    <UserDetailLayout>
      <UserDetailComponent />
    </UserDetailLayout>
  )
}
export const UserDetail = connect(null, null)(UserDetailContainer)
