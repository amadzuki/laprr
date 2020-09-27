import React from 'react'
import styled from '@xstyled/styled-components'

import { Text, SubText } from './Texts'

const NavigationStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 0 16px;
`

const IconImg = styled.imgBox`
  height: 30px;
`

const TextsGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`
const LabelText = styled(SubText)`
  margin: 4px 8px;
  font-size: 8px;
`

const DestinationBox = styled.div`
  display: flex;
  align-items: center;
`

const DestinationText = styled(Text)`
  margin: 0 8px;
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
        <DestinationBox>
          <DestinationText>Tokopedia Tower</DestinationText>
          <IconImg
            src={`${process.env.PUBLIC_URL}/icons/arrow-down.svg`}
            alt='arrow down icon'
            height='16px'
          />
        </DestinationBox>
      </TextsGroup>
    </NavigationStyled>
  )
}

export default Navigation
