import * as React from 'react'
import { storiesOf } from "@storybook/react-native"
import { View, Text } from 'react-native'

import Template from './Template'

storiesOf('Template', module).add('default', () => (
  <Template>
    <View><Text>Lorem ipsum</Text></View>
  </Template>
))
