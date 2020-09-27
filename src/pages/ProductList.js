import React, { useState } from 'react'
import dayjs from '../config/dayjs'

import Navigation from '../components/Navigation'
import DatePicker from '../components/DatePicker'
import MealToggle from '../components/MealToggle'

const ProductList = () => {
  const [date, setDate] = useState('2020-09-27')
  const [meal, setMeal] = useState('lunch')

  return (
    <>
      <Navigation></Navigation>
      <DatePicker setDate={setDate} chosenDate={date}></DatePicker>
      <MealToggle currentMeal={meal} setMeal={setMeal} />
      <p>chosen date: {dayjs(date).format('dddd, DD MMMM YYYY')}</p>
    </>
  )
}

export default ProductList
