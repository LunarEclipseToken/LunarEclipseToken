import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import { StyledNotVisibleXS } from './commonStyled'
import hero from './hero.jpg'


const params = (isMobile) => ({
  "particles": {
      "links": {
        "enable": true,
        "opacity": 0.1,
      },
      "number": {
          "value": isMobile ? 30 : 120,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 1,
          "random": true
      },
      "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "out_mode": "out",
          "random": true,
          "straight": false,
      },
      "line_linked": {
          "enable": false
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": false,
              
          }
      },
  }
})

const StyledHero = styled.header`
  width: 100%;
  height: auto;
  min-height: 320px;
  border-radius: 8px;
  background-image: linear-gradient(141deg, rgb(158 144 144 / 22%), #943f3f), url(${hero});
  background-size: cover;
  background-position: center top;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  box-shadow: 10px 20px 20px 0px rgba(35, 11, 11, 1);
  grid-column: 1 / 4;
  grid-row: 1;
  margin-bottom: 10px;
  text-align: center;
  color: white;
  justify-content: center;
  position: relative;
  overflow: hidden;
  h1 {
    font-size: 70px;
    font-weight: 800;
    letter-spacing: -3px;
    line-height: 40px;
    @media (max-width: 1024px) {
      line-height: 65px;
    }
    span {
      display: block;
      font-size: 25px;
      font-weight: 400;
      letter-spacing: normal;
      margin-top: 16px;
    }
  }
`

const StyledParticleCont = styled.span`
  position: absolute;
  width: 100%;
  height: auto;
`

export function Hero() {
  const isMobile = window.screen.width < 900;
  return (
    <>
      <StyledHero>
        <h1>
          Welcome to Lunar Eclipse.
          <StyledNotVisibleXS>
            <span>Your next moonshot. 4% redistributed 4% liquidity, safe, no BS.</span>
          </StyledNotVisibleXS>
        </h1>
        <StyledParticleCont>
          <Particles params={params(isMobile)} />
        </StyledParticleCont>
      </StyledHero>
      
    </>
  )
}