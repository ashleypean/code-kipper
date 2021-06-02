import React, { useRef } from 'react'
import { Container, FormInput, SubmitButton, Label, Title, LoginText, LoginLink, InputContainer } from './Register.styles'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'


const Register = ({registerUser}) => {
  useAppStyles()
  const nameInput = useRef(), emailInput = useRef(), confirmPasswordInput = useRef(), passwordInput = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const passwordsMatch = confirmPassword()
    if(passwordsMatch) {
      registerUser({
        name: nameInput.current.value, 
        email: emailInput.current.value, 
        password: passwordInput.current.value
      })
    }
  }

  const confirmPassword = (e) => {
    const password1 = passwordInput.current.value, password2 = confirmPasswordInput.current.value
    if(password1 !== password2) {
      window.alert('passwords do not match!')
      passwordInput.current.value = ''
      confirmPasswordInput.current.value = ''
    }
    else return password1 === password2
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Title>Code Kipper</Title>

      <InputContainer>
        <Label>Name</Label>
        <FormInput type="text" placeholder="Name" ref={nameInput} />
      </InputContainer>

      <InputContainer>
        <Label>Email</Label>
        <FormInput type="text" placeholder="Email" ref={emailInput} />
      </InputContainer>

      <InputContainer>
        <Label>Password</Label>
        <FormInput type="text" placeholder="Password" ref={passwordInput} />
      </InputContainer>

      <InputContainer>
        <Label>Confirm Password</Label>
        <FormInput type="password" placeholder="Confirm Password" ref={confirmPasswordInput} />
      </InputContainer>

      <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>

      <LoginText>
        Already registered? &nbsp;
        <LoginLink href="/login">Login now</LoginLink>
      </LoginText>
    </Container>
  )
}

const useAppStyles = () => {
  const app = document.querySelector('#root')
  app.style.display = 'flex'
  app.style.justifyContent = 'center'
  app.style.alignItems = 'center'
}

const mapDispatchToProps = (dispatch) => ({
  registerUser: user => dispatch(actions.registerUser(user))
})

export default connect(null, mapDispatchToProps)(Register)
