import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from '@xstyled/styled-components'
import { display } from '@xstyled/system'

import { Text } from './BaseStylings'

const animateOnAppear = keyframes`
0% {
    opacity: 0;
    top: 100px;
  }
100% {
    opacity: 1;
    top: 136px;
  }
`

const MealToggleStyled = styled.div`
  position: fixed;
  top: 136px;
  right: 50%;
  transform: translateX(50%);
  z-index: 2;
  animation: ${animateOnAppear} 0.5s ease-in-out;
  ${display}
`

const MealButton = styled.button`
  display: inline-block;
  background: white;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 8px 64px;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);

  &.lunch {
    border-right: none;
    border-radius: 5px 0 0 5px;
  }
  &.dinner {
    border-radius: 0 5px 5px 0;
  }
  &.active {
    background-color: mainText;
  }

  &:focus {
    outline: none;
  }
`

const MealText = styled(Text)`
  margin: 0;
  color: ${(props) => props.color};
`

const MealToggle = ({ currentMeal, setMeal }) => {
  const [display, setDisplay] = useState('flex')
  let position = window.pageYOffset
  window.addEventListener('scroll', () => {
    if (window.pageYOffset <= position) {
      if (display !== 'flex') {
        setDisplay('flex')
      }
    } else {
      setDisplay('none')
    }
    position = window.pageYOffset
  })
  return (
    <MealToggleStyled display={display}>
      <MealButton
        className={currentMeal === 'lunch' ? 'lunch active' : 'lunch'}
        onClick={() => setMeal('lunch')}
      >
        <MealText color={currentMeal === 'lunch' ? 'white' : 'grey'}>
          Lunch
        </MealText>
      </MealButton>
      <MealButton
        className={currentMeal === 'dinner' ? 'dinner active' : 'dinner'}
        onClick={() => setMeal('dinner')}
      >
        <MealText color={currentMeal === 'dinner' ? 'white' : 'grey'}>
          Dinner
        </MealText>
      </MealButton>
    </MealToggleStyled>
  )
}

MealToggle.propTypes = {
  currentMeal: PropTypes.string.isRequired,
  setMeal: PropTypes.func.isRequired,
}

export default MealToggle
