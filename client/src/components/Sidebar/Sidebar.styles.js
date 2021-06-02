import styled from 'styled-components'

export const Container = styled.div`
  grid-area: sidebar;
  position: fixed;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};
  margin: 10rem 0 0 0;
  height: 100px;
  padding: 1rem;
  /* background: #141732; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  `
Container.displayName = 'Container'

export const Option = styled.li`
  text-decoration: none;
  list-style-type: none;
  color: ${props => props.active? 'white': 'gray'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  width: 100%;
  height: 100%;
  &:hover {
    background: #fff;
    color: blue;
  }`
Option.displayName = 'Option'

export const LayoutButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchBar = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  background-color:rgba(0,0,0,0.4);
  color: white;
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 0 1rem;`
SearchBar.displayName = 'SearchBar'