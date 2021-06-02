import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  padding: 0 2rem;
  color: white;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};`
Header.displayName = 'Header'

export const CurrentTab = styled.h1`
  color: #4678FF;
  font-size: 2rem;
  font-weight: 200;
  margin: 0;
  width: 30%;`
CurrentTab.displayName = 'CurrentTab'

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  width: 66%;
  margin: 0;
  cursor: pointer;
  background: #121FCF;
  background: -webkit-linear-gradient(to right, #121FCF 21%, #CF1512 100%);
  background: -moz-linear-gradient(to right, #121FCF 21%, #CF1512 100%);
  background: linear-gradient(to right, #121FCF 21%, #CF1512 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`
Title.displayName = 'Title'

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 15%;` 
IconsContainer.displayName = 'IconsContainer'

export const AddButton = styled.button`
  color: white;
  background: transparent;
  border: none;`
AddButton.displayName = 'AddButon'

export const Profile = styled.p`
  display: inline-flex;
  border-radius: 50%;
  background: white;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  color: #C74548;
  justify-content: center;
  align-items: center;`
Profile.displayName = 'ProfileCircle'

export const MainLogo = styled.img`
  height: 2rem;
  width: 4rem;
  vertical-align: middle;`
MainLogo.displayName = 'MainLogo'