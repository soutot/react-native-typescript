import * as React from 'react';
import styled from 'styled-components/native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../common/Input/Input'
import CreditCardInput, { creditCardValidationSchema, CARD_FIELD_NAME } from '../common/Input/CreditCardInput'
import Button from '../common/Button/Button'

/**************************************************
***** Styled Components
**************************************************/
const Wrapper = styled.View``

const InputContainer = styled.View`
  margin-top: 30px;
  flex-direction: column;
`

const ButtonContainer = styled.View`
  margin-top: 30px;
`

/**************************************************
***** Interfaces
**************************************************/
interface LoginFormProps {
  onSubmit: (values: any) => void
  cardNumber?: string
  password?: string
}

/**************************************************
***** Component
**************************************************/
const LoginForm = ({ onSubmit, cardNumber, password }: LoginFormProps) => (
  <Formik 
    initialValues={{
      cardNumber: cardNumber || '',
      password: password || '',
    }}
    onSubmit={values => onSubmit(values)}
    validationSchema={() =>
      Yup.object().shape({
        ...creditCardValidationSchema,
        password: Yup.string().required('Password is required'),
      })
    }
  >
    {({ handleChange, handleSubmit, values, setFieldValue, errors, touched, isValid, isSubmitting }) => (
      <Wrapper>
        <InputContainer>
          <CreditCardInput
            placeholder='Card number'
            value={values[CARD_FIELD_NAME]}
            onValueChange={value =>
              setFieldValue(CARD_FIELD_NAME, value)
            }
            onBlur={value =>
              setFieldValue(CARD_FIELD_NAME, value)
            }
            error={errors[CARD_FIELD_NAME]}
          />
          <Input
            placeholder='Password'
            error={touched.password && errors && errors.password}
            secureTextEntry={true}
            onChangeText={handleChange('password')}
            value={values.password}
          />
        </InputContainer>
        <ButtonContainer>
          <Button onPress={() => handleSubmit()} disabled={!isValid || isSubmitting} title='Next' />
        </ButtonContainer>
      </Wrapper>
    )}
  </Formik>
)

export default LoginForm;