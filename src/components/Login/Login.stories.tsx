import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import Login from './Login'
import Template from '../Template/Template'

storiesOf("Login", module).add("Default", () => (
	<Template>
    <Login />
  </Template>
))