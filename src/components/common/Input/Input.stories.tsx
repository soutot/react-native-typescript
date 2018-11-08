import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import InputOutlined from './InputOutlined'
import Input from './Input'
import Template from '../../Template/Template'

 storiesOf('Input', module)
 .add('Default', () => (
  <Template>
    <Input
       placeholder='Card number'
       label='Card number'
       name='cardNumber'
       onChange={action('Changed')}
       error='Cartão obrigatório'
    />
 </Template>
))
   .add('Outlined', () => (
     <Template>
       <InputOutlined
          placeholder='Card number'
          label='Card number'
          name='cardNumber'
          onChange={action('Changed')}
          error='Cartão obrigatório'
       />
    </Template>
 ))