import * as React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native'
import styled from 'styled-components/native'
import Text from '../common/Text/Text'
import Logo from '../common/Logo/Logo'
import LoginForm from '../LoginForm/LoginForm'

/**************************************************
***** Styled Components
**************************************************/
const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
` 

const MarginContainer = styled.View`
  margin: 10px;
`

const MainContainer = styled(MarginContainer)``

const LogoContainer = styled.View`
  margin: 10px;
`

const ContentContainer = styled.View`
  flex-direction: column;
`

const BottomContainer = styled(MarginContainer)`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`

const SantanderLogo = styled.Image`
  height: 30px
  width: 100px;
  margin: 0 5px;
`

/**************************************************
***** Interfaces
**************************************************/
interface LoginProps {}

/**************************************************
***** Component
**************************************************/
class Login extends React.PureComponent<LoginProps> {
  static navigationOptions = {
    header: null
  }

  /**************************************************
  ***** Render
  **************************************************/
  render() {
    return (
      <KeyboardAvoidingView
        behavior={(Platform.OS === 'ios') ? 'padding' : 'position'}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: -50 })}
      >
        <Wrapper>
          <MainContainer>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <ContentContainer>
              <Text>Lorem ipsum lorem ipsum</Text>
            </ContentContainer>
            <LoginForm onSubmit={(values) => console.log(values)} />
          </MainContainer>
          <BottomContainer>
            <Text>Lorem ipsum</Text>
            <SantanderLogo source={require('../../assets/logo-ts.png')} />
          </BottomContainer>
        </Wrapper>
      </KeyboardAvoidingView>
    )
  }
}

export default Login;