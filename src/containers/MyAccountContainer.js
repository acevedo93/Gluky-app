import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { MyAccountComponent } from '../components/MyAccount'
import { MyAccountLayout } from '../layouts/MyAccountLayout'
import { getMyProfile, editAccount, removeAuthentication } from '../redux/actions/user_actions'
import { handleInput } from '../hooks/handleInput'
import { Loader } from '../components/Loader'

const MyAccountContainer = (props) => {
  const inputs = {
    name: handleInput(''),
    lastName: handleInput(''),
    phone: handleInput(''),
    gender: handleInput('')
  }
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    props.getMyProfile()
  }, [])

  const selectAvatar = (src) => {
    setAvatar(src)
  }

  const editAccount = (e) => {
    e.preventDefault()
    props.editAccount({
      first_name: inputs.name.value || props.user.name,
      last_name: inputs.lastName.value || props.user.lastname,
      phone: inputs.phone.value || props.user.phone,
      genrer: inputs.gender.value || props.user.gender,
      avatar: avatar
    })
  }
  const logOut = () => {
    props.removeAuthentication()
  }
  if (props.loading) {
    return (<Loader />)
  }
  if (Object.keys(props.user).length > 0) {
    return (
      <MyAccountLayout>
        <MyAccountComponent
          data={props.user}
          inputs={inputs}
          selectAvatar={selectAvatar}
          avatar={avatar}
          onSubmit={editAccount}
          logout={logOut}
        />
      </MyAccountLayout>
    )
  }
  return null
}
const ms = ({ users }) => ({
  user: users.user,
  loading: users.loading
})
const md = (dispatch) => ({
  getMyProfile: () => dispatch(getMyProfile()),
  editAccount: (data) => dispatch(editAccount(data)),
  removeAuthentication: () => dispatch(removeAuthentication())
})

export const MyAccount = connect(ms, md)(MyAccountContainer)
