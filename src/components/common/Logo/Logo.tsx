import * as React from 'react'
import { ImageProps, Image } from 'react-native'
import styled from 'styled-components/native'

/**************************************************
***** Styled Components
**************************************************/
const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 170px;
`

/**************************************************
***** Component
**************************************************/
const Logo = (props: Partial<ImageProps>) => (
  <Wrapper>
    <Image {...props} source={require('../../../assets/logo-react.png')} />
  </Wrapper>
)

export default Logo;