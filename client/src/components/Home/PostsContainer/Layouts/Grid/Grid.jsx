import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditSharpIcon from '@material-ui/icons/EditSharp'
import NoEncryptionIcon from '@material-ui/icons/NoEncryption'
import PublicIcon from '@material-ui/icons/Public'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import * as styles from './Grid.styles'
import CodeBlock from '../../../../Code'

function Grid({ modalOpen, searchResults, username, copySnippet, deletePost, editPost }) {
  return (
    <styles.Container modalOpen={modalOpen} id="post-container">
    {searchResults? searchResults.reduceRight( (acc, post, idx) => acc.concat(
      <styles.Post key={uuidv4()} postId={post._id} id={`post-${idx}`}>

        <CodeBlock code={post.snippet} language={post?.language || ''} />

        <styles.PostDetailsContainer>
          <styles.PostStatsContainer>
          {username}
          &nbsp; &middot; &nbsp;
          {
            post.language 
            ? post.language.charAt(0).toUpperCase() + post.language.slice(1).trim() 
            : 'N/A'
          } 

          &nbsp; &middot; &nbsp;

          {post?.public ? publicIcon : privateIcon}

          &nbsp; &middot; &nbsp;

          {`${post?.likes || '0'} Likes`}

          </styles.PostStatsContainer>

          <styles.IconsContainer>
            <DeleteIcon 
              color="error" 
              onClick={(e) => deletePost(post._id)}
              fontSize="inherit" />

            <EditSharpIcon 
              id={`post-${idx}-copy`}
              onClick={(e) => editPost(post)}
              fontSize="inherit" />

            <FileCopyIcon 
              onClick={(e) => copySnippet(post.snippet, idx)}
              fontSize="inherit" />
          </styles.IconsContainer>

        </styles.PostDetailsContainer>


        <styles.TagContainer>
          {post?.tags.map((tag) => (
            <p key={uuidv4()}>{`#${tag}`}</p>
          ))}
        </styles.TagContainer>

        <styles.CopiedText id={`post-${idx}-copied-text`}>
          Copied!
        </styles.CopiedText>
      </styles.Post>
    ), []): 'No posts found'}
  </styles.Container>
  )
}

export default Grid

const privateIcon = (
  <styles.Privacy>
    <NoEncryptionIcon fontSize="inherit" />
    Private
  </styles.Privacy>
)

const publicIcon = (
  <styles.Privacy>
    <PublicIcon fontSize="inherit" />
    Public
  </styles.Privacy>
)