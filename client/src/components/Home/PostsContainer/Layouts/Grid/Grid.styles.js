import styled from 'styled-components'

export const Container = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  margin: 4rem 6rem;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};`
Container.displayName = 'PostsContainer'

export const Post = styled.div`
  border-radius: 4px;
  background:  #141732;
  box-shadow: 5px 5px 15px 5px #000;
  width: 500px;
  max-width: 700px;
  min-height: 100px;
  max-height: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;`
Post.displayName = 'Post'

export const PostDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;`
PostDetailsContainer.displayName = 'PostDetailsContainer'

export const PostStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-content: center;
  align-items: center;`
PostStatsContainer.displayName = 'IconsContainer'


export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  width: 30%;`
IconsContainer.displayName = 'IconsContainer'

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
  font-size: .8rem;
  text-align: right;;
  margin: 0;`
CopiedText.displayName = 'CopiedText'