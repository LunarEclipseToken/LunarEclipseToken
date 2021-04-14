import React from 'react'
import styled from 'styled-components'
import { StyledNotVisibleXS, StyledVisibleXS, StyledButton } from './commonStyled'
import pancakeSvg from './pancake.svg'
import logo from './LunarEclipseDark.png'


const StyledHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background-color: #552a2a;
  font-size: 26px;
  font-weight: bold;
  padding: 15px;
  width: 100%;
  color: white;
  height: 60px;
  z-index: 20;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 240px;
    height: auto;
    opacity: 0.8;
  }
`
const StyledPancakeButton = styled(StyledButton)`
  &:hover {
    transform: translateY(-3px);
    box-shadow: 10px 20px 20px 0px rgba(35, 11, 11, 1);
    transition-duration: 0.2s;
  }

  img {
    width: 18px;
    margin-right: 8px;
  }
`

const StyledMenuButton = styled(StyledButton)`
  font-size: 13px;
  font-weight: 700;
  text-transform: none;
`


export function Header({ onclick }) {
  return (
    <StyledHeaderContainer>
      <img className="logo" src={logo} alt="lunar-eclipse-logo" />
      <StyledNotVisibleXS>
        <a href="#">
          <StyledPancakeButton>
            <img src={pancakeSvg} alt="Pancakeswap" />
            BUY ON PANCAKESWAP
          </StyledPancakeButton>
        </a>
      </StyledNotVisibleXS>
      <StyledVisibleXS>
        <StyledMenuButton onClick={onclick}>Menu</StyledMenuButton>
      </StyledVisibleXS>
    </StyledHeaderContainer>
  )
}