import React from 'react'
import PropTypes from 'prop-types'

import dateArray from '../data/dateArray.json'

const DatePicker = ({ setDate }) => {
  return (
    <>
      {dateArray.map((date, index) => (
        <button key={index} onClick={() => setDate(date)}>
          {date}
        </button>
      ))}
    </>
  )
}

DatePicker.propTypes = {
  setDate: PropTypes.func.isRequired,
}

export default DatePicker
