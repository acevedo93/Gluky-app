import React, { useEffect, useState } from 'react'
import { FriendsLayout } from '../layouts/FriendsLayout'
import { Friend } from '../components/Friend'
import { connect } from 'react-redux'
import { getFriends } from '../redux/actions/user_actions'
import { Loader } from '../components/Loader'

const FriendsContainer = (props) => {
  const [fix, setFix] = useState(false)
  const renderFriends = (fix) => (
    <FriendsLayout fix={fix}>
      {
        props.friends.map(friend => (
          <Friend
            data={friend}
            key={friend.id}
            avatar={friend._links.avatar.href}
            name={friend.first_name}
          />)

        )
      }
    </FriendsLayout>
  )
  useEffect(() => {
    props.getFriends()
  }, [])
  useEffect(() => {
    const onScroll = e => {
      const newFix = window.scrollY > 200
      fix !== newFix &&
      setFix(newFix)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [fix])
  if (props.loading) {
    return <Loader />
  }
  return (
    <React.Fragment>
      {renderFriends()}
      {fix && renderFriends(true)}
    </React.Fragment>
  )
}
const ms = ({ users }) => ({
  friends: users.users,
  loading: users.loading
})

const md = (dispatch) => ({
  getFriends: () => dispatch(getFriends())
})

export const Friends = connect(ms, md)(FriendsContainer)
