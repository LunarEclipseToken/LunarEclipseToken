import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { BreedingRhombusSpinner } from 'react-epic-spinners'
import { Header } from './Header'
import { Menu } from './Menu'
import { Content } from './Content'
import './App.css';

const StyledAppContainer = styled.div`
  background: rgb(45,9,9);
  background: linear-gradient(142deg, rgba(45,9,9,1) 35%, rgba(94,28,0,1) 100%);
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
`

const StyledLoaderContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #200808;
  }
`

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer);
  }, [setLoading])

  return (
    <StyledAppContainer>
      <Router>
        <GlobalStyle />
        {loading ? (
          <StyledLoaderContainer>
            <BreedingRhombusSpinner color="#bd886a" />
          </StyledLoaderContainer>
        ) : (
          <>
            <Header onclick={() => setMenuOpen(!menuOpen)}/>
            <Menu menuOpen={menuOpen} onclick={() => setMenuOpen(false)}/>
            <Content />
          </>
        )}
      </Router>
    </StyledAppContainer>
  );
}

export default App;
