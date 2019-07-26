/* eslint-disable no-return-assign */
import React from 'react'
import { connect } from 'react-redux'
import { Login } from '../components/LoginRegister/Login'
import { LoginRegisterLayout } from '../layouts/LoginRegisterLayout'
import { handleInput } from '../hooks/handleInput'
import { loginSimulation } from '../redux/actions/user_actions'
import { Loader } from '../components/Loader'

export const LoginRegisterContainer = (props) => {
  const loginData = {
    user: handleInput(''),
    password: handleInput('')
  }
  const submit = (e) => {
    e.preventDefault()
    const { user, password } = loginData
    props.loginSimulation({
      user: user.value,
      password: password.value
    })
  }
  if (props.loading) {
    return <Loader />
  }
  if (props.token) {
    return window.location.href = '/'
  }
  return (
    <LoginRegisterLayout>
      <Login
        {...loginData}
        submit={submit}
        disable={props.loading}
        error={props.error}
      />
    </LoginRegisterLayout>
  )
}
const ms = ({ users }) => ({
  loading: users.loading,
  status: users.status,
  token: users.token,
  error: users.error
})

const md = (dispath) => ({
  loginSimulation: data => dispath(loginSimulation(data))
})
export const LoginRegister = connect(ms, md)(LoginRegisterContainer)
