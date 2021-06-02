import React from 'react'
import { useLocation } from 'react-router-dom'
import * as styles from './Sidebar.styles'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewStreamIcon from '@material-ui/icons/ViewStream';



const Sidebar = ({ modalOpen, handleSearch }) => { 
  const { pathname } = useLocation()

  const generateSidebar = () => {
    console.log(pathname)
    switch (pathname) {
      case '/': 
        return <DashboardSidebar handleSearch={handleSearch}/>
      default: 
        return null
    }
  }


  return (
    <styles.Container modalOpen={modalOpen}>
      {generateSidebar()}
    </styles.Container>
  )
}

const DashboardSidebar = ({ handleSearch }) => (
  <>
    <styles.LayoutButtonContainer>
      <ViewStreamIcon fontSize="large"/>
      <ViewHeadlineIcon fontSize="large"/>
      <ViewModuleIcon fontSize="large"/>
    </styles.LayoutButtonContainer>

    <styles.SearchBar 
      placeholder="Snippet Search" 
      onChange={handleSearch}
    />
  </>
   
)

export default Sidebar
