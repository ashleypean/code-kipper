import React from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import * as styles from './Sidebar.styles'
import { v4 as uuidv4 } from 'uuid'
import HomeIcon from '@material-ui/icons/Home';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed'
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SearchIcon from '@material-ui/icons/Search'
import * as actions from '../../redux/actions/actions'


const Sidebar = ({logoutUser}) => {
  const sideBarIcons = [<HomeIcon />, <SearchIcon />,  <DynamicFeedIcon />, <SettingsIcon />, <ExitToAppIcon />]
  const sideBarUrls = ['', 'explore', 'feed',  'settings', 'logout']
  const history = useHistory()
  const location = useLocation()

  const handleRedirect = (newLocation) => {
    newLocation = newLocation.toLowerCase()

    if(newLocation === 'logout') 
      logoutUser()
    else 
      history.push(`/${newLocation}`)
  }

  
 
  return (
    <styles.Container>
      {sideBarIcons.map((el, idx) => (
        <styles.Option active={location.pathname === `/${sideBarUrls[idx]}`}key={uuidv4()} onClick={() => handleRedirect(sideBarUrls[idx])}>{el}</styles.Option>
      ))}
    </styles.Container>
  )
}


const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(actions.logoutUser())
})



export default connect(null, mapDispatchToProps)(Sidebar)
