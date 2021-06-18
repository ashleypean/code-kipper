import styled from 'styled-components'

export const Container = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem 0;
  margin: 4rem 6rem;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};
  font-size: 1rem;`
Container.displayName = 'PostsContainer'

export const Post = styled.div`
  border-radius: 2px;
  background:  #141732;
  box-shadow: 5px 5px 15px 5px #000;
  width: 100%;
  max-width: 700px;
  padding: 1rem;
  display: flex;
  flex-direction: column;`
Post.displayName = 'Post'

export const PostDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: .8rem;`
PostDetailsContainer.displayName = 'PostDetailsContainer'


export const Likes = styled.span`
  display: inline-flex;
  align-items: center;
  gap: .2rem;
  margin: 0 1rem;
  color: #ff1744;`
Likes.displayName = 'Likes'

export const Tag = styled.span`
  font-size: .8rem;`
Tag.displayName = 'Tag'

export const TagContainer = styled.div`
  display: flex;
  height: auto;
  gap: .5rem;
  padding: 1rem 0 0 0;
  flex-wrap: wrap;
  font-size: .8rem;`
TagContainer.displayName = 'TagContainer'

export const Privacy = styled.span`
  display: inline-flex;
  justify-self: center;
  align-items: center;
  gap: .5rem;`
Privacy.displayName = 'Privacy'


export const CopiedText = styled.p`
  visibility: hidden;
  color: green;
  text-align: right;
  margin: 0;`
CopiedText.displayName = 'CopiedText'