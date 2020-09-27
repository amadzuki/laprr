import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'

import { Text } from './BaseStylings'

const MealToggleStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 4px 0 32px 0;
`

const MealButton = styled.button`
  background: none;
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
  return (
    <MealToggleStyled>
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
