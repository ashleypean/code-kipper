import React from 'react'
import { useLocation } from 'react-router-dom'
import * as styles from './Sidebar.styles'

const Sidebar = ({ modalOpen, handleSearch, setPostLayout, postLayout }) => { 
  const { pathname } = useLocation()

  const generateSidebar = () => {
    console.log(pathname)
    switch (pathname) {
      case '/': 
        return <DashboardSidebar 
                  handleSearch={handleSearch}
                  setPostLayout={setPostLayout}
                  postLayout={postLayout}
                />
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

const DashboardSidebar = ({ handleSearch, setPostLayout, postLayout }) => (
  <>
    <styles.SearchBar 
      placeholder="Snippet Search" 
      onChange={handleSearch}
    />

  <styles.LayoutButtonContainer>
      Layout: 
      <styles.ColumnLayout 
        active={postLayout === 'column'}
        fontSize="large"
        onClick={() => setPostLayout('column')}
      />
      <styles.CondensedColumnLayout
        active={postLayout === 'condensed-column'}
        fontSize="large"
        onClick={() => setPostLayout('condensed-column')}
      />
      <styles.GridLayout
        active={postLayout === 'grid'}
        fontSize="large"
        onClick={() => setPostLayout('grid')}
      />
    </styles.LayoutButtonContainer>
  </>
   
)

export default Sidebar
