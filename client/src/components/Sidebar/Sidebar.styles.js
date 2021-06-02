import styled from 'styled-components'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewStreamIcon from '@material-ui/icons/ViewStream';

export const Container = styled.div`
  grid-area: sidebar;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};
  height: 100px;
  padding: 1rem;
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
  align-items: center;`
LayoutButtonContainer.displayName = 'LayoutButtonContainer'

export const ColumnLayout = styled(ViewStreamIcon)`
  cursor: pointer;`
ColumnLayout.displayName = 'ColumnLayout'

export const CondensedColumnLayout = styled(ViewHeadlineIcon)`
  cursor: pointer;`
ColumnLayout.displayName = 'ColumnLayout'

export const GridLayout = styled(ViewModuleIcon)`
cursor: pointer;`
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