import styled from 'styled-components'

export const Container = styled.form`
  height: 60%;
  max-height: 850px;
  width: 300px;
  grid-area: content;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  gap: 1rem;
  box-sizing: border-box;
  background: transparent;
  
  @media screen and (max-width: 400px) {
    height: 75%;
    width: 250px;
  }
  @media screen and (min-width: 450px) {
    padding: 2rem 1rem;
    -webkit-box-shadow: 2px 2px 4px 1px #181c33; 
    box-shadow: 2px 2px 4px 1px #181c33;
  }`
Container.displayName = 'Container'

export const InputContainer = styled.div`
  width: 100%;`;
InputContainer.displayName = 'InputContainer'


export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: .5rem;
  color: white;
  background: #121FCF;
  background: -webkit-linear-gradient(to right, #121FCF 21%, #CF1512 100%);
  background: -moz-linear-gradient(to right, #121FCF 21%, #CF1512 100%);
  background: linear-gradient(to right, #121FCF 21%, #CF1512 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`
Title.displayName = 'Title'


export const Label = styled.label`
  box-sizing: border-box;
  font-size: .9rem;
  margin: 0;
  padding: 0 .3rem;
  color: whitesmoke;
  align-self: start;`
Label.displayName = 'Label'



export const FormInput = styled.input`
  height: 2rem;
  width: 95%;
  background: none;
  color: white;
  outline: none;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0 .4rem;
  
  &:focus {
    color: white;
    border: 1px solid white;
  }`
FormInput.displayName = 'FormInput'



export const SubmitButton = styled.button`
  border: none;
  background: #3428A6;
  padding: .4rem 1rem;
  color: white;
  font-size: .8rem;
  border-radius: 4px;`
SubmitButton.displayName = 'SubmitButton'



export const LoginText = styled.p`
  font-size: .6rem;`
LoginText.displayName = 'LoginText'

export const LoginLink = styled.a`
  font-size: .6rem;
  color: #121FCF;
  
  &:hover {
    color: gray;
  }`
LoginLink.displayName = 'LoginLink'