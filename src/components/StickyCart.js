import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from '@xstyled/styled-components'

import { Text, SubText, IconImg } from './BaseStylings'

const animateOnLoad = keyframes`
  0% {
    opacity: 0;
    bottom: -50px;
  }
  100% {
    opacity: 1;
    bottom: 0;
  }
`
const StickyCartStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  animation: 0.5s ${animateOnLoad} ease-in-out;
`
const StickyCartBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 330px;
  padding: 8px 16px;
  background-color: secondary;
  border-radius: 5px;
`
const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const ItemsCarted = styled(Text)`
  font-size: 12px;
  margin: 0;
`
const Narration = styled(SubText)`
  margin: 0;
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
`

const BlurredBottom = styled.div`
  height: 16px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
`

const StickyCart = ({ setModalIsShown }) => {
  return (
    <StickyCartStyled>
      <StickyCartBox>
        <CartInfo>
          <ItemsCarted className='white'>5 items | Rp 125.000</ItemsCarted>
          <Narration className='white'>Termasuk ongkos kirim</Narration>
        </CartInfo>
        <IconButton onClick={() => setModalIsShown(true)}>
          <IconImg
            src={process.env.PUBLIC_URL + '/icons/shopping-cart.svg'}
            alt='shopping cart icon'
            height={20}
          />
          <IconImg
            src={process.env.PUBLIC_URL + '/icons/arrow-right-ios.svg'}
            alt='arrow right ios icon'
            height={12}
          />
        </IconButton>
      </StickyCartBox>
      <BlurredBottom></BlurredBottom>
    </StickyCartStyled>
  )
}

StickyCart.propTypes = {
  setModalIsShown: PropTypes.func.isRequired,
}

export default StickyCart
