import React from 'react'
import { useLocation } from 'react-router-dom'
import { genertatePostLayout } from '../../utils/PostLayout'
import * as styles from './Sidebar.styles'

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
      <styles.ColumnLayout 
        fontSize="large"
        onClick={() => genertatePostLayout('column')}
      />
      <styles.CondensedColumnLayout
        fontSize="large"
        onClick={() => genertatePostLayout('condensed-column')}
      />
      <styles.GridLayout
        fontSize="large"
        onClick={() => genertatePostLayout('grid')}
      />
    </styles.LayoutButtonContainer>

    <styles.SearchBar 
      placeholder="Snippet Search" 
      onChange={handleSearch}
    />
  </>
   
)

export default Sidebar
