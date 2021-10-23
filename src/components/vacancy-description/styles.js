import styled from 'styled-components'

export const Vacancy = styled.div`
  background-color: ${p => p.theme.colors.background};
  box-shadow: 0 0 3px ${p => p.theme.colors.text};
  cursor: pointer;
  width: 90%;
  padding: 5px;
  text-align: center;

  & > h3 {
    border-bottom: 1px solid ${p => p.theme.colors.text};
    margin-top: 0;
    margin-bottom: 3px;
    text-transform: capitalize;
  }

  & > div {
  }
`
