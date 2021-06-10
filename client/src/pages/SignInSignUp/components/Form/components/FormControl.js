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
  const { toggleSigningUp, setUser, isSigningUp, setAuthenticated, history, classes } = props


  const signUp = async e => {
    e.preventDefault()
    if (isSigningUp) {
      const args = {
        reenteredPassword,
        setUser,
        password,
        setAuthenticated,
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
      setUser,
      password,
      setAuthenticated,
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
