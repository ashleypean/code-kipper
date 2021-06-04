import styled from 'styled-components'

export const Container = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

export const Username = styled.p`
  font-size: 1.6rem;`
Username.displayName = 'Username'

export const Likes = styled.span`
  display: inline-flex;
  align-items: center;
  gap: .2rem;
  margin: 0 1rem;
  font-size: 1.2rem;
  color: #ff1744;`
Likes.displayName = 'Likes'

export const Language = styled.p`
  display: inline;
  font-size: 1.2rem;`
Language.displayName = 'Language'

export const Description = styled.p`
  font-size: 1.3rem;
  color: gray;`
Description.displayName = 'Description'

export const Tag = styled.span`
  font-size: 1.2rem;`
Tag.displayName = 'Tag'

export const TagContainer = styled.div`
  display: flex;
  height: auto;
  gap: .5rem;
  padding: 1rem 0;
  flex-wrap: wrap;
  font-size: .8rem;`
TagContainer.displayName = 'TagContainer'

export const Privacy = styled.span`
  display: inline-flex;
  justify-self: center;
  align-items: center;
  gap: .5rem;`
Privacy.displayName = 'Privacy'

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: .5rem 0;`
BottomContainer.displayName = 'BottomContainer'

export const CopiedText = styled.p`
  visibility: hidden;
  color: green;
  font-size: 1.4rem;
  text-align: right;;
  margin: 0;`
CopiedText.displayName = 'CopiedText'