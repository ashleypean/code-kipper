import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/actions'
import Column from './Layouts/Column/Column'
import CondensedColumn from './Layouts/CondensedColumn/CondensedColumn'
import Grid from './Layouts/Grid/Grid'

function PostsContainer({setOpenModal, setEditDetails, modalOpen, userPosts, username, deletePostReducer, searchResults, postLayout }) {

  const deletePost = async (post_id) => {
    deletePostReducer(post_id)
  }

  const editPost = async (post) => {
    await setEditDetails({...post})
    await setOpenModal(true)
  }

  //FIX COPY SNIPPET - SHOULD NOT USE USER POSTS (replace w/ searchResults)
  const copySnippet = async (post_snippet, idx) => {
    const clipboard = navigator.clipboard
    clipboard.writeText(post_snippet)

    const text = document.querySelector(`#post-${idx}-copied-text`)
    text.style.visibility = 'visible'

    setTimeout(() => text.style.visibility = 'hidden', 1500) 
  }

  const generateLayout = () => {
    if (postLayout === 'column') 
      return (
        <Column 
          modalOpen={modalOpen}
          searchResults={searchResults}
          username={username}
          copySnippet={copySnippet}
          deletePost={deletePost}
          editPost={editPost}
        />
      )
    else if (postLayout === 'condensed-column')
      return (
        <CondensedColumn 
          modalOpen={modalOpen}
          searchResults={searchResults}
          username={username}
          copySnippet={copySnippet}
          deletePost={deletePost}
          editPost={editPost}
      />
      )
    else if (postLayout === 'grid')
      return (
        <Grid 
          modalOpen={modalOpen}
          searchResults={searchResults}
          username={username}
          copySnippet={copySnippet}
          deletePost={deletePost}
          editPost={editPost}
        />
      )
    else 
      return 'default'
  } 

  return (
    <>
    {generateLayout()}
    </>
  )
}


const mapDispatchToProps = (dispatch) => ({
  deletePostReducer: post_id => dispatch(actions.deletePost(post_id))
})



export default connect(null, mapDispatchToProps)(PostsContainer)