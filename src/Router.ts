import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { SHOW_STORYBOOK } from 'react-native-dotenv';

import Login from './components/Login/Login';
import Storybook from '../storybook';

export default StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Storybook: {
      screen: Storybook,
    },
  },
  {
    initialRouteName: SHOW_STORYBOOK ? 'Storybook' : 'Login',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);