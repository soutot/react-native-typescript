import * as React from "react"
import { TextInputProps } from "react-native"
import styled from "styled-components/native"
import * as Yup from "yup"

import Input, { InputProps } from "./Input"
import InputErrorText from "./InputErrorText"

import { addGaps, replaceAll } from "../../../helpers/helpers"

/*******************************************
 *** Global Constants
 ******************************************/
const CARD_NUMBER_MAX_LENGTH = 19
export const CARD_FIELD_NAME = 'cardNumber'

/*******************************************
 *** Exported Constants
 ******************************************/
export const creditCardValidationSchema = {
	cardNumber: Yup.number()
		.typeError('Provide a valid card')
		.integer('Type only card numbers')
		.required('Provide a valid card'),
}

export const creditCardFieldName = "cardNumber"

/*******************************************
 *** Styled Components
 ******************************************/
const InputContainer = styled.View`
  flex-direction: column;
  width: 100%;
`

const InputFieldStyled = styled(Input).attrs<any>({
	mainStyle: {
		margin: 5,
		backgroundColor: "#f5f5f5",
	},
})``

/*******************************************
 *** Logic
 ******************************************/
const onCardNumberChange = (onValueChange: (value: string) => void) => (
	text: string
) => {
	const cardNumber = addGaps(replaceAll(text, " ", ""), [4, 8, 12])
	onValueChange(cardNumber)
}

const onCardNumberBlur = (onBlur: (value: string) => void) => (
	text: string
) => {
	const cardNumber = addGaps(replaceAll(text, " ", ""), [4, 8, 12])
	if (onBlur) {
		onBlur(cardNumber)
	}
}

/*******************************************
 *** Interfaces
 ******************************************/
interface Props {
	onBlur?: (value: string) => void
	onValueChange?: (value: string) => void
	maxLength?: string
}

/*******************************************
 *** Component
 ******************************************/
const CreditCardInput = ({
	onBlur,
	onValueChange,
	maxLength,
  error,
  value,
  placeholder,
  label,
  name,
  onChange,
	...props
}: Props & TextInputProps & InputProps) => {
	return (
		<InputContainer>
			<Input
				placeholder={placeholder}
				label={label}
				name={CARD_FIELD_NAME}
				keyboardType="numeric"
				maxLength={maxLength || CARD_NUMBER_MAX_LENGTH}
				value={value}
				clearTextOnFocus={false}
				onBlur={() => onCardNumberBlur(onBlur)(value)}
        onChangeText={onCardNumberChange(onValueChange)}
        error={error}
				{...props}
			/>
		</InputContainer>
	)
}

export default CreditCardInput