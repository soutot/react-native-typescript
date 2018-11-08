import * as React from 'react'
import styled from 'styled-components/native'

import InputErrorText from "./InputErrorText"

import { colors } from '../../../theme/theme'
import { TextInputProps } from 'react-native';

/**************************************************
***** Styled Components
**************************************************/
const InputContainer = styled.View`
  flex-direction: column;
  width: 100%;
`
const TextFieldStyled = styled.TextInput.attrs({
  placeholderTextColor: colors.text,
})`
  border-bottom-width: 1px;
  border-color: ${colors.white};
  height: 40px;
  width: 100%;
  background: ${colors.none};
  color: ${colors.text};
`
/**************************************************
***** Interfaces
**************************************************/
export interface InputProps {
  placeholder?: string
  label?: string
  name?: string
  value?: string
  onChange?: () => void
  error?: string
}

/**************************************************
***** Component
**************************************************/
const Input = ({
  placeholder,
  label,
  name,
  value,
  onChange,
  error,
  ...props
}: InputProps & TextInputProps) => (
  <InputContainer>
    <TextFieldStyled
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
    <InputErrorText error={error ? error : ''}/>
  </InputContainer>
)

export default Input
