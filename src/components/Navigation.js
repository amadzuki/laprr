import React from 'react'
import styled from '@xstyled/styled-components'

const NavigationStyled = styled.div`
  display: flex;
  margin: 16px 0 0 16px;
`

const IconImg = styled.imgBox`
  height: 30px;
`

const TextsGroup = styled.div`
  display: flex;
  flex-direction: column;
`
const LabelText = styled.p`
  font-family: primary;
  font-size: 8px;
  margin: 0 8px;
  color: subText;
`

const LocationText = styled.p`
  font-family: primary;
  font-size: 16px;
  margin: 0 8px;
  color: mainText;
`

const Navigation = () => {
  return (
    <NavigationStyled>
      <IconImg
        src={`${process.env.PUBLIC_URL}/icons/arrow-left.svg`}
        alt='arrow left icon'
      ></IconImg>
      <TextsGroup>
        <LabelText>ALAMAT PENGANTARAN</LabelText>
        <LocationText>
          <span>Tokopedia Tower</span>
          <span>
            <IconImg
              src={`${process.env.PUBLIC_URL}/icons/arrow-down.svg`}
              alt='arrow down icon'
              height='16px'
            />
          </span>
        </LocationText>
      </TextsGroup>
    </NavigationStyled>
  )
}

export default Navigation
