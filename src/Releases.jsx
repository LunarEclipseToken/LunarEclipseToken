import React from 'react'
import styled from 'styled-components'
import { Article } from './Article'
import { SmallHero } from './SmallHero'
import contractImg from './contract-token-initiated.jpg'
import crypto from './crypto.jpg'


const StyledReleasePage = styled.div`
  margin-top: 60px;
  padding: 20px;
  background-color: #1e0909;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  padding-bottom: 100px;
  padding-top: 20px;

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`

export function Releases() {
  return (
    <StyledReleasePage>
      <SmallHero title={"Press releases."} />
      <StyledGrid>
        <Article 
          title="Eclipse Token Contract Initiated"
          description="Today we initiated the development of the unique Eclipse Token Contract. A carefully planned out process of an experienced team of Crypto-developers."
          link="/eclipse-token-contract-initiated/"
          imgSrc={contractImg}
        />
        <Article 
          title="Lorem Ipsum"
          description="Today we initiated the development of the unique Eclipse Token Contract. A carefully planned out process of an experienced team of Crypto-developers."
          link="/lorem-ipsum/"
          imgSrc={crypto}
        />
      </StyledGrid> 
    </StyledReleasePage>
  )
}
