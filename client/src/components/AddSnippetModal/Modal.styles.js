import styled from 'styled-components'

export const materialStyles = () => {
  return {
    exitIcon: {
      color: 'red',
      alignSelf: 'flex-end'
    },
    chip: {
      fontSize: '1.2rem'
    }, 
    selectElement: {
      root: {
        color: 'red', 
        background: 'white'
      },
      filled: {
        color: 'red', 
        background: 'white',
      }
    }
  }
}

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  height: auto;
  max-height: 750px;
  width: 60%;
  max-width: 800px;
  background: #1a2475;
  position: fixed; 
  padding: 3rem 2rem;
  box-sizing: border-box;
  top: 20%;
  left: 40%;
  font-family: Lato;
  color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
  width: 10px;
  border-radius: 12px;
  }
  
  &::-webkit-scrollbar-track {
  background: linear-gradient(90deg,#434343,#434343 1px,#111 0,#111);
  }
  
  &::-webkit-scrollbar-thumb {
  box-shadow: inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%);
  background-color: #434343;
  height: 10px;
  border-radius: 16px;
  }`
Container.displayName = 'Container'


export const TextArea = styled.textarea`
  grid-area: 'copyCode';
  min-width: 300px;
  min-height: 100px;
  height: auto;
  outline: none;
  resize: none;
  background: black;
  color: white;`
TextArea.displayName = 'TextArea'

export const Description = styled.textarea`
  grid-area: 'description';
  min-width: 300px;
  min-height: 100px;
  outline: none;
  resize: none;
  background: black;
  color: white;`
Description.displayName = 'Description'


export const TagsContainer = styled.div`
  width: 75%;
  min-height: .5rem;
  display: flex;
  flex-direction: row;
  gap: .3rem;
  flex-wrap: wrap;
  margin: .5rem 0;`
TagsContainer.displayName = 'TagsContainer'


export const Label = styled.label`
  margin-top: 1rem;
  margin-bottom: -.5rem;`
Label.displayName = 'Label'


export const Input = styled.input`
  height: 25px;
  padding: .3rem;
  margin: .5rem 0 0 ;
  outline: none; `
Input.displayName = 'Input'


