import * as React from 'react'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme/theme'

// **************************************************
// **************************************************
// Styled Components
// **************************************************
// **************************************************
const LinearGradientStyled = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`

// **************************************************
// *****  Interfaces
// **************************************************
interface Props {
  children: React.ReactNode
}

// **************************************************
// *****  Component
// **************************************************
const Template = ({ children }: Props) => {
  return <LinearGradientStyled colors={[colors.background.primary, colors.background.secondary]} start={{x: 0.0, y: 1}} end={{x: 1, y: 0.0}}>{children}</LinearGradientStyled>
}

export default Template
