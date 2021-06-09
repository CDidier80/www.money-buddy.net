import ThemedButton from '../../../../../TopLevelComponents/ThemedButton'
import ReenterPasswordField from './ReenterPasswordField'
import PasswordTextfield from './PasswordTextfield'
import EmailTextfield from './EmailTextfield'
import AccountPrompt from './AccountPrompt'
import RememberMe from './RememberMe'
import { useState } from 'react'
import React from 'react'

const { signup, signin } = require('../modules/formFunctions')

const FormControl = props => {
  const { toggleSigningUp, setUserInfo, isSigningUp, setAuth, history, classes } = props

  const [reenteredPassword, setReenterPassword] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const signUp = async e => {
    e.preventDefault()
    if (isSigningUp) {
      const args = {
        reenteredPassword,
        setUserInfo,
        password,
        setAuth,
        email
      }
      const signedUp = await signup(args)
      signedUp && history.push('/dashboard')
    }
  }

  const signIn = async e => {
    e.preventDefault()
    const args = {
      history: history,
      setUserInfo,
      password,
      setAuth,
      email
    }
    await signin(args)
  }

  const submitForm = isSigningUp ? signUp : signIn

  const forAll = {
    isSigningUp,
    submitForm,
    classes
  }

  const propsEmailField = {
    ...forAll,
    setEmail,
    email
  }

  const propsPasswordField = {
    setPassword,
    ...forAll,
    password
  }

  const propsReenterField = {
    setReenterPassword,
    reenteredPassword,
    ...forAll
  }

  const propsAccountPrompt = {
    toggleSigningUp,
    ...forAll
  }

  const onlyClasses = { classes }

  return (
    <>
      <EmailTextfield {...propsEmailField} />
      <PasswordTextfield {...propsPasswordField} />
      {isSigningUp && <ReenterPasswordField {...propsReenterField} />}
      <RememberMe {...onlyClasses} />
      <ThemedButton onClick={e => submitForm(e)}>
        {isSigningUp ? 'Confirm and Sign Up' : 'Sign In'}
      </ThemedButton>
      <AccountPrompt {...propsAccountPrompt} />
    </>
  )
}

export default FormControl
