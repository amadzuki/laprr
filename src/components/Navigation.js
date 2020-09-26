import React from 'react'
import styled from '@xstyled/styled-components'

const NavigationStyled = styled.div`
  display: flex;
  margin: 8px 0 0 8px;
`

const IconImg = styled.img`
  height: 30px;
`

const TextsGroup = styled.div`
  display: flex;
  flex-direction: column;
`
const LabelText = styled.p`
  font-family: primary;
  font-size: 8px;
  margin: 0;
`

const LocationText = styled.p`
  font-family: primary;
  font-size: 16px;
`

const Navigation = () => {
  return (
    <NavigationStyled>
      <IconImg src='/icons/arrow-left.svg' alt='arrow left icon'></IconImg>
      <TextsGroup>
        <LabelText>ALAMAT PENGANTARAN</LabelText>
        <LocationText>Tokopedia Tower</LocationText>
      </TextsGroup>
    </NavigationStyled>
  )
}

export default Navigation
