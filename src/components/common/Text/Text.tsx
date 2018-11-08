import * as React from 'react'
import styled from 'styled-components/native'
import { colors, fontSizes } from '../../../theme/theme'

// **************************************************
// ***** Styled Components
// **************************************************
const TextComponent = styled.Text`
  color: ${(props: Props) => props.color || colors.text};
  font-size: ${(props: Props) => props.fontSize || fontSizes.medium};
`

// **************************************************
// ***** Interfaces
// **************************************************
interface Props {
  children: string
  fontSize?: string
  color?: string
  style?: any
}

// **************************************************
// ***** Component
// **************************************************
const Text = ({ children, fontSize, color, style }: Props) => {
  return (
    <TextComponent style={style} fontSize={fontSize} color={color}>
      {children}
    </TextComponent>
  )
}

export default Text
