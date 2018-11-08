import * as React from 'react'
import { storiesOf } from "@storybook/react-native"
import Text from './Text'
import Template from '../../Template/Template'

 storiesOf('Text', module)
   .add('default', () => (
     <Template>
       <Text>Lorem Ipsum</Text>
    </Template>
 ))