import * as React from "react"
import { View, Text } from 'react-native'
import { storiesOf } from "@storybook/react-native"

import { SHOW_STORYBOOK, ENV } from 'react-native-dotenv';

storiesOf("test", module).add("Default", () => (
	<View>
		<Text>Story: {SHOW_STORYBOOK}</Text>
    <Text>Env: {ENV}</Text>
	</View>
))