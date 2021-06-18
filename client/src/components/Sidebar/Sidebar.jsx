import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { Button } from '@material-ui/core'
import { useLocation } from 'react-router-dom'
import * as styles from './Sidebar.styles'

const Sidebar = ({ modalOpen, handleSearch, setPostLayout, postLayout, setOpenModal }) => { 
  const { pathname } = useLocation()

  const generateSidebar = () => {
    console.log(pathname)
    switch (pathname) {
      case '/': 
        return (
          <DashboardSidebar 
            handleSearch={handleSearch}
            setPostLayout={setPostLayout}
            postLayout={postLayout}
            setOpenModal={setOpenModal}
          />
        )
      default: 
        return <p>Sidebar</p>
    }
  }

  return (
    <styles.Container modalOpen={modalOpen}>
      {generateSidebar()}
    </styles.Container>
  )
}

const DashboardSidebar = ({ handleSearch, setPostLayout, postLayout, setOpenModal }) => (
  <>
    <styles.SearchBar 
      placeholder="Snippet Search" 
      onChange={handleSearch}
    />

  <styles.LayoutButtonContainer>
      Layout: 
      <Tooltip title="Column">
        <styles.ColumnLayout 
          active={postLayout === 'column'}
          fontSize="large"
          onClick={() => setPostLayout('column')}
        />
      </Tooltip>

      <Tooltip title="Condensed Column">
        <styles.CondensedColumnLayout
          active={postLayout === 'condensed-column'}
          fontSize="large"
          onClick={() => setPostLayout('condensed-column')}
        />
      </Tooltip>

      <Tooltip title="Grid">
        <styles.GridLayout
          active={postLayout === 'grid'}
          fontSize="large"
          onClick={() => setPostLayout('grid')}
        />
      </Tooltip>


    </styles.LayoutButtonContainer>

    <styles.AddSnippetButton onClick={() => setOpenModal(prev => !prev)}>
      Add a Snippet
    </styles.AddSnippetButton>
  </>
   
)

export default Sidebar
