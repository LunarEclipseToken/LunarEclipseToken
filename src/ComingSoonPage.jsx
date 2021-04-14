import React from 'react'
import styled from 'styled-components'
import { CirclesToRhombusesSpinner } from 'react-epic-spinners'

const StyledPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95vh;
  text-align: center;

  h1 {
    font-size: 60px;
    font-weight: 700;
    color: #bd886a60;
  }
`

export function ComingSoonPage() {
  return (
    <StyledPageContainer>
      <div>
        <h1>COMING SOON</h1>
        <CirclesToRhombusesSpinner color="#bd886a60" size={20} style={{ width: '100%' }} />
      </div>
    </StyledPageContainer>
  )
}

