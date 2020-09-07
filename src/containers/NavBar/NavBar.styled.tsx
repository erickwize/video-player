import styled from 'styled-components'

export const GrowRemainingSpace = styled.div`
  flex-grow: 1
`

export const AccountIcon = styled.div`
  display: none;
  
  @media (min-width: 960px) {
    display: flex;
  }
`

export const DrawerList = styled.div`
  width: 250px;
`

export const SearchWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-left: 0;
  margin-right: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  @media (min-width:600px) {
    width: auto;
    margin-left: 24px;
  }
`

export const SearchIconWrapper = styled.div`
  padding: 0px 16px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center
`