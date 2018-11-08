import * as React from 'react'
import styled from 'styled-components/native'
import { TouchableHighlightProps } from 'react-native'
import Text from '../Text/Text'
import { colors } from '../../../theme/theme'

// **************************************************
// ***** Styled Components
// **************************************************
const ButtonContainer = styled.TouchableHighlight.attrs({
  underlayColor: colors.primary,
})`
  border-radius: 20px;
  border: 1px solid ${colors.primary};
  background-color: ${colors.none};
  width: 100%;
  align-items: center;
  padding: 10px;
`
// **************************************************
// ***** Interfaces
// **************************************************
export interface ButtonProps {
  title: string
}

// **************************************************
// ***** Components
// **************************************************
const Button = ({ title, ...props }: ButtonProps & Partial<TouchableHighlightProps>) => {
 // **************************************************
 // ***** Render
 // **************************************************
  return (
    <ButtonContainer {...props}>
      <Text color={props.disabled && `${colors.white}${colors.opacity.p30}`}>{title}</Text>
    </ButtonContainer>
  )
}

export default Button