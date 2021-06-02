import React from 'react'
import { useLocation } from 'react-router-dom'
import * as styles from './Header.styles'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Logo from '../../images/codekipper-logo.png'

const Header = ({modalOpen, searchBar, searchFunc}) => {
  const location = useLocation()
  const tabs = {
    '/': 'Dashboard', 
    '/feed': 'Feed',
    '/explore': 'Explore',
    '/settings': 'Settings'
  }

  return (
    <styles.Header modalOpen={modalOpen}>
      <styles.MainLogo src={Logo}/>
      <styles.CurrentTab> {tabs[location.pathname]}</styles.CurrentTab>
      {searchBar? <styles.SearchBar placeholder="Search here" onChange={searchFunc}/>: null}
      <styles.Title modalOpen={modalOpen}>Code Kipper</styles.Title>
      <styles.IconsContainer>
        <NotificationsIcon fontSize="large"/>
        <styles.Profile>A</styles.Profile>
      </styles.IconsContainer>
    </styles.Header>
  )
}

export default Header
