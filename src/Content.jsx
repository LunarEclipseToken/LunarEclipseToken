import React from 'react'
import styled from 'styled-components'

import logo from './LunarEclipseDark.png'
import { Routes } from './Routes'


const StyledContentContainer = styled.div`
  margin-left: 200px;

  @media (max-width: 899px) {
    width: 100%;
    margin-left: 0;
  }
`

const StyledFooter = styled.footer`
  background-color: #1a0101;
  height: 100px; 
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #272b4e;
  font-size: 25px;

  @media (max-width: 899px) {
    margin-top: 50px;
  }

  img {
    width: 200px;
    opacity: 0.5;
  }
`

export function Content() {
  return (
    <StyledContentContainer>
      <Routes />
      <StyledFooter><img src={logo} alt="lunar-eclipse-logo"/></StyledFooter>
    </StyledContentContainer>
  )
}
