import styled from 'styled-components/native'

const CardContainer = styled.View`
  height: ${({ height }) => height || '163px'};
  width: ${({ width }) => width || 'auto'};
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  display: flex;
  shadow-color: black;
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`}
`

export { CardContainer }
