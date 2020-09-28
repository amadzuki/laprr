import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'

import { IconImg, Text, SubText } from '../components/BaseStylings'

import searchResult from '../data/searchResult.json'

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  display: ${(props) => props.display};
`

const ModalWindow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 375px;
  max-width: 375px;
  height: 685px;
  position: fixed;
  top: 127px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px 8px 0 0;
  background-color: white;
  z-index: 6;
  display: ${(props) => props.display};
  padding: 24px;
  overflow-y: hidden;
`
const CloseButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const TitleText = styled(Text)`
  font-size: 20px;
`
const InputForm = styled.form`
  display: flex;
`
const InputBox = styled.input`
  border: 1px solid;
  border-color: mainText;
  border-radius: 4px;
  height: 40px;
  padding-left: 32px;
  width: 100%;
`
const LocationInputIcon = styled(IconImg)`
  position: absolute;
  height: 20;
  transform: translate(10px, 10px);
`
const SearchResultBox = styled.div`
  display: flex;
  margin: 16px 0;
`
const SearchResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`
const ResultName = styled(Text)`
  font-size: 12px;
  margin: 0;
`
const ResultAddress = styled(SubText)`
  margin: 0;
`
const Modal = ({ isShown, setModalIsShown }) => {
  const [input, setInput] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.value)
  }
  const [isResultShown, setIsResultShown] = useState(false)
  const handleOnChange = (search) => {
    setInput(search)
    if (search.length >= 3) {
      setIsResultShown(true)
    } else {
      setIsResultShown(false)
    }
  }
  return (
    <>
      <ModalStyled
        display={isShown ? 'flex' : 'none'}
        onClick={() => setModalIsShown(false)}
      ></ModalStyled>
      <ModalWindow display={isShown ? 'flex' : 'none'}>
        <CloseButtonBox>
          <IconImg
            src={process.env.PUBLIC_URL + '/icons/close.svg'}
            onClick={() => setModalIsShown(false)}
          />
        </CloseButtonBox>
        <TitleText>Cek makanan yang tersedia di lokasi kamu!</TitleText>
        <div>
          <LocationInputIcon
            src={process.env.PUBLIC_URL + '/icons/location-mark.svg'}
          />
          <InputForm onSubmit={handleSubmit} autoComplete='off'>
            <InputBox
              name='search'
              value={input}
              onChange={(event) => handleOnChange(event.target.value)}
            ></InputBox>
          </InputForm>
        </div>
        {isResultShown &&
          searchResult.map((result, index) => (
            <SearchResultBox key={index}>
              <IconImg
                src={process.env.PUBLIC_URL + '/icons/location-choose.svg'}
              />
              <SearchResultInfo>
                <ResultName>{result.name}</ResultName>
                <ResultAddress>{result.address}</ResultAddress>
              </SearchResultInfo>
            </SearchResultBox>
          ))}
      </ModalWindow>
    </>
  )
}

Modal.propTypes = {
  isShown: PropTypes.bool.isRequired,
  setModalIsShown: PropTypes.func.isRequired,
}

export default Modal
