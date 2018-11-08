import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import Logo from './Logo'
import Template from '../../Template/Template'

 storiesOf('Logo', module)
   .add('default', () => (
     <Template>
       <Logo />
    </Template>
 ))