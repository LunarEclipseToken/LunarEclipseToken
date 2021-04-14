import React from 'react'
import styled from 'styled-components'


const StyledPageContainer = styled.div`
  padding-top: 40px;
`
const StyledArticleContainer = styled.article`
  border-radius: 10px;
  padding: 20px;
  background-color: transparent;
  background-image: linear-gradient(142deg, #351b1d, #351b1d4a);
  min-height: 370px;
  height: 100%;
  margin: 60px 20px 200px;
  
  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    color: white;
  }

  span {
    display: block;
    margin: 0;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #d6dbf3;
    line-height: 1.2;
  }

  p {
    color: #bf7979;
    font-size: 14px;
    margin-top: 30px;
    white-space: pre-line
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-size: 12px;
    font-weight: 600;
    text-shadow: 0px 0px 6px #4e469300;
    transition-duration: 0.2s;

    &:hover {
      transition-duration: 0.2s;
      color: #ecc56a;
      text-shadow: 0px 0px 6px #934646;
    }
  }
`

export function ArticlePage({ title, date, paragraph }) {
  return (
    <StyledPageContainer>
      <StyledArticleContainer>
        <header>
          <h1>{title}</h1>
        </header>
        <span>{date}</span>
        {paragraph.map((p => <p key={p}>{p}</p>))}
      </StyledArticleContainer>
    </StyledPageContainer>
  )
}
