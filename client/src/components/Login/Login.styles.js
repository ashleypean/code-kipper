import styled from 'styled-components'

export const Container = styled.form`
  height: 50%;
  max-height: 650px;
  width: 300px;
  grid-area: content;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  gap: 2rem;
  padding: 2rem 1rem;
  box-sizing: border-box;
  background: transparent;
  
  @media screen and (max-width: 400px) {
    height: 75%;
    width: 250px;
  }
  @media screen and (min-width: 450px) {
    -webkit-box-shadow: 2px 2px 4px 1px #1f2c69; 
    box-shadow: 2px 2px 4px 1px #1f2c69;
  }`
Container.displayName = 'Container'


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



export const InputContainer = styled.div`
  width: 100%;
  background-color: transparent;`;
InputContainer.displayName = 'InputContainer'


export const Label = styled.label`
  font-size: .9rem;
  margin: 0;
  color: white;
  align-self: start;`
Label.displayName = 'Label'



export const FormInput = styled.input`
  height: 2rem;
  width: 95%;
  border-image: linear-gradient(to right, #121FCF 21%, #CF1512 100%);
  border-image-slice: 1;
  background: transparent;
  color: white;
  outline: none;
  border-radius: 4px;
  padding: 0 .4rem;
  
  &:focus {
    color: white;
    border-image: linear-gradient(to right, #CF1512 21%, #121FCF 100%);
    border-image-slice: 1;
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



export const RegisterText = styled.p`
  font-size: .6rem;`
RegisterText.displayName = 'RegisterText'



export const RegisterLink = styled.a`
  font-size: .6rem;
  color: #121FCF;
    
  &:hover {
    color: gray;
  }`
RegisterLink.displayName = 'RegisterLink'