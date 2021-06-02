import React, { useRef } from 'react'
import { Container, FormInput, SubmitButton, Label, Title, RegisterText, RegisterLink, InputContainer } from './Login.styles'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'

const Login = ({ loginUser }) => {
  useAppStyles()
  const emailInput = useRef()
  const passwordInput = useRef()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = emailInput.current.value, password = passwordInput.current.value
    loginUser({email, password})
  }


  return (
    <Container onSubmit={handleSubmit}>
      <Title>Code Kipper</Title>

      <InputContainer>
        <Label>Email</Label>
        <FormInput type="text" placeholder="Email" ref={emailInput} />
      </InputContainer>

      <InputContainer>
        <Label>Password</Label>
        <FormInput type="password" placeholder="Password" ref={passwordInput}/>
      </InputContainer>

      <SubmitButton type="submit">Submit</SubmitButton>

      <RegisterText>Not registered?  &nbsp;
        <RegisterLink href="/register">
          Create an account
        </RegisterLink>
      </RegisterText>
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
  loginUser: user => dispatch(actions.requestLogin(user))
})


export default connect(null, mapDispatchToProps)(Login)
