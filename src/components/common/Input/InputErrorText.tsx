import * as React from 'react'
import styled from 'styled-components'
import Text from '../Text/Text'
import { colors, fontSizes } from '../../../theme/theme'

// **************************************************
// ***** Styled Components
// **************************************************
const ErrorText = styled(Text)`
  font-size: ${fontSizes.small};
  color: ${colors.error};
  margin-top: 10px;
`


// **************************************************
// ***** Interfaces
// **************************************************
export interface InputErrorTextProps {
  error: string
}

// **************************************************
// ***** Components
// **************************************************
const InputErrorText = ({ error }: InputErrorTextProps) => {
  // **************************************************
  // ***** Render
  // **************************************************
  return (
    <ErrorText>{error}</ErrorText>
  )
}

export default InputErrorText