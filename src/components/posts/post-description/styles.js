import styled from 'styled-components'

export const Post = styled.div`
  background-color: ${p => p.theme.colors.background};
  box-shadow: 0 0 3px ${p => p.theme.colors.text};
  cursor: pointer;
  display: block;
  font-size: .8em;
  padding: 7px;
  text-align: center;
  width: 90%;
  margin: 5px 0;

  &:first-child {
    margin-top: 10px;
  }

  &:last-child {
    margin-bottom: 10px;
  }

  & > h3 {
    border-bottom: 1px solid ${p => p.theme.colors.text};
    margin-top: 0;
    margin-bottom: 3px;
    text-transform: capitalize;
  }
`
