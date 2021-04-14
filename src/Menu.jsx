import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faChartBar, faChartLine, faRss, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faReddit, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'
import pancakeSvg from './pancake.svg'
import bscscan from './bscscan-logo.svg'
import { Link } from 'react-router-dom'

const StyledMenuContainer = styled.div`
  position: fixed;
  top: 60px;
  width: 200px;
  background: linear-gradient(142deg, #2a1617, #0000001f);
  left: 0;
  height: calc(100vh - 60px);
  min-height: 740px;
  padding: 15px;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: #d6dbff;
    font-size: 10px;
  }

  @media (max-width: 899px) {
    width: 100%;
    left: ${(props) => props.menuOpen ? '0' : '-100vw'};
    transition-duration: 0.4s;
    z-index: 3;
    background: linear-gradient(142deg, #402121, #26100a);
    padding: 30px;
    min-height: unset;
  }
`

const StyledMenuBlock = styled.div`
  .top {
    margin-top: 0;
  }
`

const StyledMenuTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #a97a7a;
  margin-top: 20px;
  height: 20px;
`
const StyledMenuItems = styled.div`
  height: 30px;
  line-height: 30px;
  letter-spacing: 0;
  font-weight: 500;
  span {
    font-size: 12px;
    padding-left: 8px;
    transition: 0.2s;
  }
  svg {
    transition: 0.2s;
  }
  &:hover {
    svg, img {
      transform: scale(1.2);
      color: white;
    }
    span {
      padding-left: 11px;
      color: white;
    }
  }

img {
  width: 13px;
  height: 13px;
  position: relative;
  top: -2px;
  transition: 0.2s;
}
`
const StyledButtonsCont = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: 100px;
  left: 0px;
  padding: 15px;
  padding-bottom: 146px;

  @media (max-width: 899px) {
    padding-bottom: 30px;
  }
`
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  float: left;
  margin-top: 15px;
  background: #4e2727;
  border-radius: 5px;
  border: 2px solid #804b4b;
  box-shadow: 10px 20px 20px 0px rgba(35, 11, 11, 0.8);

  transition-duration: 0.2s;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 10px 20px 20px 0px rgba(35, 11, 11, 1);
    transition-duration: 0.2s;
  }
`

export function Menu({ menuOpen, onclick }) {
  return (
    <StyledMenuContainer menuOpen={menuOpen}>
      <StyledMenuBlock>
        <StyledMenuTitle className="top">Website navigation</StyledMenuTitle>
        <StyledMenuItems onClick={onclick}>
          <Link to="/">
            <FontAwesomeIcon icon={faTachometerAlt}/>
            <span>Dashboard</span>
          </Link>
        </StyledMenuItems>
        <StyledMenuItems onClick={onclick}>
          <Link to="/press-releases/">
            <FontAwesomeIcon icon={faRss}/>
            <span>Releases</span>
          </Link>
        </StyledMenuItems>
        <StyledMenuItems onClick={onclick}>
          <Link to="/contests/">
            <FontAwesomeIcon icon={faTrophy}/>
            <span>Contests</span>
          </Link>
        </StyledMenuItems>
      </StyledMenuBlock>
      <StyledMenuBlock>
        <StyledMenuTitle>Important links</StyledMenuTitle>
        <StyledMenuItems>
          <a href="#">
            <img src={pancakeSvg} alt="Pancakeswap" />
            <span>Buy on Pancakeswap</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faChartLine}/>
            <span>Chart</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faChartBar}/>
            <span>BSC Scan</span>
          </a>
        </StyledMenuItems>
      </StyledMenuBlock>
      <StyledMenuBlock>
        <StyledMenuTitle>Socials</StyledMenuTitle>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faTelegramPlane}/>
            <span>Telegram</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter}/>
            <span>Twitter</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faReddit}/>
            <span>Reddit</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faDiscord}/>
            <span>Discord</span>
          </a>
        </StyledMenuItems>
      </StyledMenuBlock>
      <StyledButtonsCont>
        <a href="#">
          <StyledButton>
            <img src={bscscan} alt="bscscan-logo"/>
          </StyledButton>
        </a>
      </StyledButtonsCont>
    </StyledMenuContainer>
  )
}