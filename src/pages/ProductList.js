import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import DatePicker from '../components/DatePicker'
import dayjs from '../config/dayjs'

const ProductList = () => {
  const [date, setDate] = useState('2020-09-27')

  return (
    <>
      <Navigation></Navigation>
      <DatePicker setDate={setDate} chosenDate={date}></DatePicker>
      <p>chosen date: {dayjs(date).format('dddd, DD MMMM YYYY')}</p>
    </>
  )
}

export default ProductList
