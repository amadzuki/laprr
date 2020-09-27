import React, { useState } from 'react'
import dayjs from '../config/dayjs'

import Navigation from '../components/Navigation'
import DatePicker from '../components/DatePicker'
import MealToggle from '../components/MealToggle'
import Card from '../components/Card'
import {
  Text,
  SeparatorLine,
  CenterContent,
  Wrapper,
} from '../components/BaseStylings'

import items from '../data/items.json'

const ProductList = () => {
  const [date, setDate] = useState('2020-09-27')
  const [meal, setMeal] = useState('lunch')

  return (
    <>
      <Navigation></Navigation>
      <DatePicker setDate={setDate} chosenDate={date} />
      <CenterContent>
        <SeparatorLine />
      </CenterContent>
      <MealToggle currentMeal={meal} setMeal={setMeal} />
      <Wrapper>
        <Text>{dayjs(date).format('dddd, DD MMMM YYYY')}</Text>
      </Wrapper>
      <Wrapper>
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Wrapper>
    </>
  )
}

export default ProductList
