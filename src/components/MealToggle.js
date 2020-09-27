import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'

import { Text } from '../components/Texts'

const MealToggleStyled = styled.div`
  display: flex;
  justify-content: center;
`

const MealButton = styled.button`
  background: none;
  border: 2px solid grey;
  border-radius: 5px;
  padding: 8px 64px;

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
  font-size: 14px;
  margin: 0;
  color: ${(props) => props.color};
`

const MealToggle = ({ currentMeal, setMeal }) => {
  return (
    <MealToggleStyled>
      <MealButton
        className={currentMeal === 'lunch' ? 'lunch active' : 'lunch'}
        onClick={() => setMeal('lunch')}
      >
        <MealText color={currentMeal === 'lunch' ? 'white' : 'mainText'}>
          Lunch
        </MealText>
      </MealButton>
      <MealButton
        className={currentMeal === 'dinner' ? 'dinner active' : 'dinner'}
        onClick={() => setMeal('dinner')}
      >
        <MealText color={currentMeal === 'dinner' ? 'white' : 'mainText'}>
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
