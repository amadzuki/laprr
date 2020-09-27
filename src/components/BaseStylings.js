import styled from '@xstyled/styled-components'

export const Text = styled.p`
  font-family: primary;
  font-weight: 600;
  font-size: 14px;
  color: mainText;
`

export const SubText = styled.p`
  font-family: primary;
  font-weight: 600;
  font-size: 14px;
  color: subText;
`

export const SeparatorLine = styled.div`
  width: 95vw;
  border-bottom: 1px solid;
  border-bottom-color: subtle;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
`

export const CenterContent = styled.div`
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  margin: 0 16px;
  display: flex;
  flex-wrap: wrap;
`
