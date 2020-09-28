import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'
import IDR, { currency } from '../config/currency'
import { Rating } from '@material-ui/lab'

import { Text, SubText } from '../components/BaseStylings'

const CardWrapper = styled.div`
  margin: 24px;
  max-width: 335px;
  border-radius: 5px;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
`

const CardImg = styled.img`
  width: 335px;
  height: 240px;
`

const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`

const RatingInfo = styled.div`
  display: flex;
`

const RatingNumber = styled(Text)`
  margin: 0 0 4px 0;
`

const RatingStarsBox = styled.div`
  display: flex;
  margin-left: 8px;
`

const ItemName = styled(Text)`
  margin: 4px 0;
`

const MerchantName = styled(SubText)`
  font-size: 12px;
  margin: 4px 0 8px 0;
`

const ItemPrice = styled(Text)`
  margin: 8px 0;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`

const AddButton = styled.button`
  border: none;
  background-color: primary;
  font-family: primary;
  font-weight: 600;
  color: subtle;
  padding: 8px 16px;
  border-radius: 5px;
`

const Card = ({ item, setCartIsVisible }) => {
  return (
    <CardWrapper>
      <CardImg src={process.env.PUBLIC_URL + item.imagePath} />
      <CardInfos>
        <RatingInfo>
          <RatingNumber>
            {currency(item.rating, { precision: 1, symbol: '' }).format()}
          </RatingNumber>
          <RatingStarsBox>
            <Rating
              defaultValue={item.rating}
              max={5}
              precision={0.5}
              size='small'
              readOnly
            />
          </RatingStarsBox>
        </RatingInfo>
        <ItemName>{item.name}</ItemName>
        <MerchantName>{item.merchant}</MerchantName>
        <Box>
          <ItemPrice>{IDR(item.price).format()}</ItemPrice>
          <AddButton onClick={() => setCartIsVisible(true)}>ADD +</AddButton>
        </Box>
      </CardInfos>
    </CardWrapper>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  setCartIsVisible: PropTypes.func.isRequired,
}

export default Card
