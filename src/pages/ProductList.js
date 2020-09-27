import React, { useState } from 'react'
import dayjs from '../config/dayjs'

import Navigation from '../components/Navigation'
import DatePicker from '../components/DatePicker'
import MealToggle from '../components/MealToggle'
import Card from '../components/Card'
import StickyCart from '../components/StickyCart'
import {
  Text,
  SeparatorLine,
  CenterContent,
  Wrapper,
  WhiteSpace,
} from '../components/BaseStylings'

import items from '../data/items.json'

const ProductList = () => {
  const [date, setDate] = useState('2020-09-28')
  const [meal, setMeal] = useState('lunch')
  const [cartIsVisible, setCartIsVisible] = useState(false)

  return (
    <>
      <Navigation></Navigation>
      <DatePicker setDate={setDate} chosenDate={date} />
      <CenterContent>
        <SeparatorLine />
      </CenterContent>
      <MealToggle currentMeal={meal} setMeal={setMeal} />
      <CenterContent>
        <Wrapper>
          <Text>{dayjs(date).format('dddd, DD MMMM YYYY')}</Text>
        </Wrapper>
      </CenterContent>
      <CenterContent>
        {items.map((item, index) => (
          <Card key={index} item={item} addToCart={setCartIsVisible} />
        ))}
      </CenterContent>
      {cartIsVisible && (
        <CenterContent>
          <StickyCart></StickyCart>
        </CenterContent>
      )}
      <WhiteSpace height='40px' />
    </>
  )
}

export default ProductList
