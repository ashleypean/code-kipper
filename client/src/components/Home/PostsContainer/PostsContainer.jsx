import React from 'react'
import { connect } from 'react-redux'
import CodeBlock from '../../Code'
import * as styles from './PostsContainer.styles'
import { makeStyles } from '@material-ui/core/styles'
import { Chip } from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'
import EditSharpIcon from '@material-ui/icons/EditSharp'
import NoEncryptionIcon from '@material-ui/icons/NoEncryption'
import PublicIcon from '@material-ui/icons/Public'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import { v4 as uuidv4 } from 'uuid'
import * as actions from '../../../redux/actions/actions'

function PostsContainer({setOpenModal, setEditDetails, modalOpen, userPosts, username, deletePostReducer, searchResults }) {
  const classes = makeStyles(styles.materialStyles)()

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

  return (
    <styles.Container modalOpen={modalOpen} id="post-container">
    {searchResults? searchResults.reduceRight( (acc, post, idx) => acc.concat(
      <styles.Post key={uuidv4()} postId={post._id} id={`post-${idx}`}>
        <styles.Username>{username}</styles.Username>

        <CodeBlock code={post.snippet} language={post?.language || ''} />

        <styles.Language><strong>Language: </strong>
          {post.language ? 
            post.language.charAt(0).toUpperCase() + post.language.slice(1) : 
            'N/A'} 
        </styles.Language>

        <styles.Description>
          {post?.description || ''}
        </styles.Description>

        <styles.TagContainer>
        {post?.tags.map((tag) => (
          <Chip variant="outlined" key={uuidv4()} className={classes.chip}
          label={tag} size="medium"/>
        ))}
        </styles.TagContainer>
        <styles.BottomContainer>
          <styles.Likes>
            <FavoriteIcon color="secondary" />{post?.likes || '0'} 
          </styles.Likes>

          {post?.public ? publicIcon : privateIcon}

          <DeleteIcon color="error" onClick={(e) => deletePost(post._id)}/>
        
          <EditSharpIcon id={`post-${idx}-copy`}onClick={(e) => editPost(post)} />

          <FileCopyIcon onClick={(e) => copySnippet(post.snippet, idx)} />
          
        </styles.BottomContainer>
          <styles.CopiedText id={`post-${idx}-copied-text`}>Copied!</styles.CopiedText>
      </styles.Post>
    ), []): 'No posts found'}
  </styles.Container>
  )
}


const privateIcon = (
  <styles.Privacy>
    <NoEncryptionIcon />
    Private
  </styles.Privacy>
)

const publicIcon = (
  <styles.Privacy>
    <PublicIcon />
    Public
  </styles.Privacy>
)


const mapDispatchToProps = (dispatch) => ({
  deletePostReducer: post_id => dispatch(actions.deletePost(post_id))
})



export default connect(null, mapDispatchToProps)(PostsContainer)