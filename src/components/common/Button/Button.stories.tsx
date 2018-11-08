import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Button from './Button'
import Template from '../../Template/Template'

 storiesOf('Button', module)
   .add('default', () => (
     <Template>
       <Button title='Press' onPress={action('Action')}/>
    </Template>
 ))