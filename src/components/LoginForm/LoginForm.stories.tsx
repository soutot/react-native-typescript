import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import LoginForm from './LoginForm'
import Template from '../Template/Template'

 storiesOf('LoginForm', module)
   .add('default', () => (
     <Template>
       <LoginForm onSubmit={action('Action')}/>
    </Template>
 ))