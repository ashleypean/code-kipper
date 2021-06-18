import styled from 'styled-components'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewStreamIcon from '@material-ui/icons/ViewStream';

export const Container = styled.div`
  grid-area: sidebar;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};
  height: 200px;
  padding: 1rem;
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  `
Container.displayName = 'Container'

export const LayoutButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem 0;`
LayoutButtonContainer.displayName = 'LayoutButtonContainer'

export const ColumnLayout = styled(ViewStreamIcon)`
  cursor: pointer;
  color: ${props => props.active ? 'white': 'blue'};`
ColumnLayout.displayName = 'ColumnLayout'

export const CondensedColumnLayout = styled(ViewHeadlineIcon)`
  cursor: pointer;
  color: ${props => props.active ? 'white': 'blue'};`
ColumnLayout.displayName = 'ColumnLayout'

export const GridLayout = styled(ViewStreamIcon)`
cursor: pointer;
height: 20px;
width: 150px;
color: ${props => props.active ? 'white': 'blue'};
transform: rotate(90deg);`
GridLayout.displayName = 'GridLayout'

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

export const AddSnippetButton = styled.button`
  color: white;
  cursor: pointer;
  background: #121FCF;
  border: 2px solid black;
  padding: .5rem 1rem;
  border-radius: 6px;`
AddSnippetButton.displayName = 'AddSnippetButton'