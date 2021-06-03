import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import DeleteIcon from '@material-ui/icons/Delete'
import EditSharpIcon from '@material-ui/icons/EditSharp'
import NoEncryptionIcon from '@material-ui/icons/NoEncryption'
import PublicIcon from '@material-ui/icons/Public'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import * as styles from './Column.styles'
import CodeBlock from '../../../../Code'

function Column({ modalOpen, searchResults, username, copySnippet, deletePost, editPost }) {

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
              <p key={uuidv4()}>{`#${tag}`}</p>
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

export default Column
