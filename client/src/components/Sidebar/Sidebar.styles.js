import styled from 'styled-components'

export const Container = styled.div`
  grid-area: sidebar;
  position: fixed;
  filter: ${props => props.modalOpen? 'blur(5px)': 'blur(0px)'};
  margin: 10rem 0 0 0;
  height: 500px;
  width: 100px;
  background: #141732;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;`
Container.displayName = 'Container'

export const Option = styled.li`
  text-decoration: none;
  list-style-type: none;
  color: ${props => props.active? 'white': 'gray'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  width: 100%;
  height: 100%;
  &:hover {
    background: #fff;
    color: blue;
  }`
Option.displayName = 'Option'