import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'

import { Text, SubText } from '../components/BaseStylings'

const CardWrapper = styled.div`
  margin-bottom: 24px;
  max-width: 335px;
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

const RatingStars = styled.div`
  display: flex;
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

const Card = ({ item }) => {
  return (
    <CardWrapper>
      <CardImg src={process.env.PUBLIC_URL + item.imagePath} />
      <CardInfos>
        <RatingInfo>
          <RatingNumber>{item.rating}</RatingNumber>
          <RatingStars></RatingStars>
        </RatingInfo>
        <ItemName>{item.name}</ItemName>
        <MerchantName>{item.merchant}</MerchantName>
        <Box>
          <ItemPrice>{item.price}</ItemPrice>
          <AddButton>ADD +</AddButton>
        </Box>
      </CardInfos>
    </CardWrapper>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Card
