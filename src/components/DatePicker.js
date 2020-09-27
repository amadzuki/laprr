import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'

import dayjs from '../config/dayjs'
import dateArray from '../data/dateArray.json'

import { Text, SubText } from '../components/Texts'

const DatePickerStyled = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 24px 0;
`
const DateButton = styled.button`
  padding: 7px 14px;
  margin: 0 8px;
  border: none;
  background: none;

  &.chosenDate {
    border-radius: 50%;
    background-color: #424749;
  }
  &:focus {
    outline: none;
  }
`
const DayName = styled(SubText)`
  margin: 0;
  font-size: 8px;
  opacity: ${(props) => props.opacity};
  color: ${(props) => props.color};
`
const DateNumber = styled(Text)`
  margin: 0;
  font-size: 14px;
  opacity: ${(props) => props.opacity};
  color: ${(props) => props.color};
`
const DatePicker = ({ chosenDate, setDate }) => {
  const validateWeekend = (date) =>
    dayjs(date).format('dddd') === 'Sabtu' ||
    dayjs(date).format('dddd') === 'Minggu'
      ? true
      : false

  return (
    <DatePickerStyled>
      {dateArray.map((date, index) => {
        const isWeekend = validateWeekend(date)
        const isChosenDate = date === chosenDate ? true : false
        return (
          <DateButton
            key={index}
            onClick={() => setDate(date)}
            className={isChosenDate && 'chosenDate'}
            disabled={isWeekend && true}
          >
            <DayName
              opacity={isWeekend ? '0.3' : '1'}
              color={isChosenDate ? 'white' : ''}
            >
              {dayjs(date).format('ddd')}
            </DayName>
            <DateNumber
              opacity={isWeekend ? '0.3' : '1'}
              color={isChosenDate ? 'white' : ''}
            >
              {dayjs(date).format('DD')}
            </DateNumber>
          </DateButton>
        )
      })}
    </DatePickerStyled>
  )
}

DatePicker.propTypes = {
  setDate: PropTypes.func.isRequired,
}

export default DatePicker
