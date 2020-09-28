import React, { useState } from 'react'
import dayjs from '../config/dayjs'

import Navigation from '../components/Navigation'
import DatePicker from '../components/DatePicker'
import MealToggle from '../components/MealToggle'
import Card from '../components/Card'
import StickyCart from '../components/StickyCart'
import Modal from '../components/Modal'
import {
  Text,
  SeparatorLine,
  CenterContent,
  Wrapper,
  WhiteSpace,
  StickyTop,
} from '../components/BaseStylings'

import items from '../data/items.json'

const ProductList = () => {
  const [date, setDate] = useState('2020-09-28')
  const [meal, setMeal] = useState('lunch')
  const [cartIsVisible, setCartIsVisible] = useState(false)
  const [modalIsShown, setModalIsShown] = useState(false)

  return (
    <>
      <StickyTop>
        <Navigation></Navigation>
        <DatePicker setDate={setDate} chosenDate={date} />
        <SeparatorLine />
      </StickyTop>
      <WhiteSpace height='132px' />
      <MealToggle currentMeal={meal} setMeal={setMeal} />
      <WhiteSpace height='60px' />
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
          <StickyCart setModalIsShown={setModalIsShown}></StickyCart>
        </CenterContent>
      )}
      <WhiteSpace height='40px' />
      <Modal isShown={modalIsShown} setModalIsShown={setModalIsShown}></Modal>
    </>
  )
}

export default ProductList
