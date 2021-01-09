
import React from 'react';
import Form from "./components/Form/Form"
import "./styles/signInSignUp.css"

const SignInSignUpPage = (props) => {

  return (
    <div className="sign-in-sign-up-page">
      <Form {...props} />
    </div>
  )
}

export default SignInSignUpPage