import styled, { css, up } from '@xstyled/styled-components'

export const Text = styled.p`
  font-family: primary;
  font-weight: 600;
  font-size: 14px;
  color: mainText;
  &.white {
    color: subtle;
  }
`

export const SubText = styled.p`
  font-family: primary;
  font-weight: 600;
  font-size: 8px;
  color: subText;
  &.white {
    color: subtle;
  }
`

export const SeparatorLine = styled.div`
  width: 100vw;
  border-bottom: 1px solid;
  border-bottom-color: subtle;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
`

export const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Wrapper = styled.div`
  margin: 0 16px;
  display: flex;
  width: 335px;

  ${up(
    'sm',
    css`
      justify-content: center;
    `
  )}
`

export const IconImg = styled.imgBox`
  height: 30px;
`

export const WhiteSpace = styled.divBox`
  height: 24px;
  background-color: white;
  position: relative;
  z-index: 0;
`

export const StickyTop = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1;
`
