import * as React from 'react'
import styled from 'styled-components/native'

import Text from '../Text/Text'
import { colors, fontSizes } from '../../../theme/theme'

/**************************************************
***** Styled Components
**************************************************/
const InputFieldOutlineContainer = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 10px;
`
const TextFieldStyled = styled.TextInput.attrs({
  placeholderTextColor: colors.text,
})`
  text-align: center;
  border: 1px solid ${colors.neutral}33;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  background: ${colors.none};
  color: ${colors.text};
`

const ErrorText = styled(Text)`
  align-self: center;
  font-size: ${fontSizes.small};
  color: ${colors.error};
  margin-top: 10px;
`

/**************************************************
***** Interfaces
**************************************************/
interface Props {
  placeholder?: string
  label?: string
  name?: string
  value?: string
  onChange?: () => void
  disabled?: boolean
  error?: string
}

/**************************************************
***** Component
**************************************************/
const InputFieldOutline = ({
  placeholder,
  label,
  value,
  onChange,
  error,
  ...props
}: Props) => (
  <InputFieldOutlineContainer>
    <TextFieldStyled
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
    <ErrorText>{error ? error : ''}</ErrorText>
  </InputFieldOutlineContainer>
)

export default InputFieldOutline
