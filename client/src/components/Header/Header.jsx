import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import * as styles from './Header.styles'
import * as actions from '../../redux/actions/actions'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Menu from '@material-ui/core/Menu';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed'
import SearchIcon from '@material-ui/icons/Search'
import ExploreIcon from '@material-ui/icons/Explore';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import Logo from '../../images/codekipper-logo.png'

const Header = ({modalOpen, searchBar, searchFunc, setOpenModal, logoutUser }) => {
  const location = useLocation()
  const history = useHistory()
  const [profileAnchor, setProfileAnchor] = useState(null)

  const tabs = {
    '/': 'Dashboard', 
    '/feed': 'Feed',
    '/explore': 'Explore',
    '/settings': 'Settings'
  }

  const goToPage = (page) => {
    setProfileAnchor(null)
    history.push(`/${page}`)
  }

  const handleClick = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  return (
    <styles.Header modalOpen={modalOpen}>
      

      <styles.CurrentTab> 
        {tabs[location.pathname]}
      </styles.CurrentTab>

      <styles.Title 
        modalOpen={modalOpen}
        onClick={() => goToPage('')}  
      >
        Code Kipper
      </styles.Title>

      <styles.IconsContainer>
        <DynamicFeedIcon onClick={() => goToPage('feed')}/>
        <ExploreIcon onClick={() => goToPage('explore')}/>

        <NotificationsIcon />

        <styles.Profile onClick={handleClick}>
          A
        </styles.Profile>

        <Menu
          id="simple-menu"
          anchorEl={profileAnchor}
          keepMounted
          open={Boolean(profileAnchor)}
          onClose={() => setProfileAnchor(null)}
        >
          <MenuItem onClick={() => goToPage('settings')}>
            Account Settings
          </MenuItem>
          <MenuItem onClick={logoutUser}>
            Logout
          </MenuItem>
        </Menu>

      </styles.IconsContainer>
    </styles.Header>
  )
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(actions.logoutUser())
})



export default connect(null, mapDispatchToProps)(Header)
