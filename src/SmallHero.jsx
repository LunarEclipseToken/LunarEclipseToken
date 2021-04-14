import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
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
  height: 100px;
  border-radius: 8px;
  background-image: linear-gradient(141deg, rgb(158 144 144 / 22%), #943f3f), url(${hero});
  background-size: cover;
  background-position: center top;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  box-shadow: 10px 20px 20px 0px rgba(35, 11, 11, 1);
  margin-bottom: 10px;
  color: white;
  padding: 0 15px;
  position: relative;
  overflow: hidden;
  h1 {
    font-size: 40px;
    font-weight: 800;
    letter-spacing: -1px;
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

export function SmallHero({ title }) {
  const isMobile = window.screen.width < 900;
  return (
    <>
      <StyledHero>
        <h1>
          {title}
        </h1>
        <StyledParticleCont>
          <Particles params={params(isMobile)} />
        </StyledParticleCont>
      </StyledHero>
    </>
  )
}