import styled from 'styled-components'

export const Container = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem 0;
  margin: 4rem 6rem;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};`
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
  align-items: center;`
PostDetailsContainer.displayName = 'PostDetailsContainer'


export const Likes = styled.span`
  display: inline-flex;
  align-items: center;
  gap: .2rem;
  margin: 0 1rem;
  font-size: 1.2rem;
  color: #ff1744;`
Likes.displayName = 'Likes'

export const Tag = styled.span`
  font-size: 1.2rem;`
Tag.displayName = 'Tag'

export const TagContainer = styled.div`
  display: flex;
  height: auto;
  gap: .5rem;
  padding: 1rem;
  flex-wrap: wrap;`
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
  font-size: 1.4rem;
  text-align: right;;
  margin: 0;`
CopiedText.displayName = 'CopiedText'