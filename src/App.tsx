import * as React from 'react'
import { StatusBar } from 'react-native'
import Router from './Router';
import { colors } from './theme/theme'

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar
          backgroundColor={colors.background.primary}
          barStyle='light-content'
        />
        <Router />
      </React.Fragment>
    );
  }
}