import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledArticleContainer = styled.div`
  border-radius: 10px;
  padding: 20px;
  background-color: transparent;
  background-image: linear-gradient(142deg, #351b1d, #351b1d4a);
  min-height: 370px;
  height: 100%;

  img {
    width: 100%;
    border: 2px solid gray;
    border-radius: 6px;
    margin-bottom: 20px;
  }

  h4 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    color: white;
    line-height: 1.2;
  }

  p {
    color: #bf7979;
    font-size: 14px;
    margin-top: 30px;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 12px;
    font-weight: 600;
    text-shadow: 0px 0px 6px #4e469300;
    transition-duration: 0.2s;

    &:hover {
      text-decoration: none;
      transition-duration: 0.2s;
      color: #ecc56a;
      text-shadow: 0px 0px 6px #934646;
    }
  }
`

export function Article({ imgSrc, title, description, link }) {
  return (
    <StyledArticleContainer>
      <img src={imgSrc} alt="article header"/>
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to={link}>Read more &gt;&gt;</Link>
    </StyledArticleContainer>
  )
}
