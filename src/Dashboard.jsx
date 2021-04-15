import React from 'react'
import styled from 'styled-components'
import { Hero } from './Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faRecycle, faFire, faMoneyBill, faUser, faCheck, faHourglass } from '@fortawesome/free-solid-svg-icons'
import { StyledButton } from './commonStyled'
import safe from './Shield.png'
import hold from './wallet.png'
import profit from './chart.png'

const StyledGrid = styled.div`
  margin-top: 60px;
  padding: 20px;
  background-color: #1e0909;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;

  @media (max-width: 899px) {
    display: flex;
    flex-direction: column;
  }

  > div, article {
    background: linear-gradient(142deg, #2a1617, #292e634a);
    border-radius: 8px;
  }
`

const StyledArticle = styled.article`
  min-height: 200px;
  max-height: 591px;
  border-radius: 10px;
  padding: 20px;

  @media (max-width: 899px) {
    max-height: unset;
  }

  h4 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    color: white;
    line-height: 1.2;

    small {
      color: #c47b70;
      text-shadow: 0px 0px 6px #934646;
      font-size: 12px;
      font-weight: 400;
      padding-left: 10px;
      letter-spacing: 1px;
    }
  }

  p {
    color: #bf7979;
    font-size: 14px;
    margin-top: 30px;
  }

  .flex, .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }

  .flex {
    margin-bottom: 13px;
  }

  .iconContainer {
    width: 22px;
    height: 22px;
    border-radius: 5px;
    background: #bd886a;
    border: 2px solid #ecc56a;
    text-align: center;
    float: left;
    font-size: 12px;
    line-height: 18px;
    margin-right: 10px;
    color: white;
  }

  .left {
    color: white;
    font-weight: 600;
  }
  .right {
    color: #f9c28c;
    font-size: 12px;
  }

  .bolder {
    font-weight: 700;
    color: #bf7979;
    display: block;
  }
`

const StyledBigArticle = styled(StyledArticle)`
  grid-column: 1/3;
  grid-row: 3/5;

  .flexContent {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 899px) {
      flex-direction: column;
    }
  }

  .items {
    padding: 20px;
    text-align: center;
    background-color: transparent;
    background-image: linear-gradient(142deg, #351b1d, #351b1d4a);
    border-radius: 10px;
    margin: 0 15px;
    flex: 1;
    min-height: 370px;
    height: 100%;

    @media (max-width: 899px) {
      min-height: unset;
      margin: 0;
      margin-bottom: 15px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    color: white;
    line-height: 1.2;
  }

  img {
    width: 65px;
    height: 65px;
  }
`

const StyledRoadMap = styled(StyledArticle)`
  grid-column: 3/4;
  grid-row: 3/5;

  .row {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 16px;
  }

  .icon {
    font-size: 9px;
    line-height: 14px;
    width: 17px;
    height: 17px;
    border-radius: 5px;
    text-align: center;
    color: white;
    margin-right: 10px;
  }

  .complete {
    background: #47ab5d;
    border: 2px solid #53ff79;
  }

  .pending {
    background: #d67b1e;
    border: 2px solid #ffae5b;
  }

  .notComplete {
    background: #4f2222;
    border: 2px solid #8e5050;
  }

  .text {
    color: white;
    font-size: 12px;
    font-weight: 600;

    span {
      color: #53ff79;
      font-size: 80%;
    }

    .orange {
      color: #ffae5b;
    }
  }
`

export function Dashboard() {
  return (
    <StyledGrid>
        <Hero />
        <StyledArticle>
          <h4>
            About Lunar Eclipse
            <small>Brief description</small>
          </h4>
          <p>We are tired of all the scams that happen among tokens. So we decided to take matters into our own hands. That's why we created LunarEclipse, the son of the <a href="https://eclipsetoken.org/">Eclipse token</a> which is the son of <a href="https://xspace.finance/">xpace token</a> which is a another fork of another fork, with the intention of being 100% safe from rug pulls. How? Because we, the devs have no rugs to pull. This token is for you, let's moon.</p>
        </StyledArticle>
        <StyledArticle>
          <h4>
            Tokenomics
            <small>Update daily</small>
          </h4>
          <div className="content">
            <div className="flex">
              <div className="left">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faCoins} />
                </div>
                <div>Max Supply</div>
              </div>
              <div className="right">100,000,000,000,000</div>
            </div>
            <div className="flex">
              <div className="left">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faRecycle} />
                </div>
                <div>Circulating</div>
              </div>
              <div className="right">60,000,000,000,000</div>
            </div>
            <div className="flex">
              <div className="left">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faFire} />
                </div>
                <div>Burned</div>
              </div>
              <div className="right">40,000,000,000,000</div>
            </div>
            <div className="flex">
              <div className="left">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faMoneyBill} />
                </div>
                <div>Marketcap</div>
              </div>
              <div className="right">$0</div>
            </div>
            <div className="flex">
              <div className="left">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>Holders</div>
              </div>
              <div className="right">1</div>
            </div>
          </div>
        </StyledArticle>
        <StyledArticle>
          <h4>
            DxSale Launch start!
            <small>0% Passed</small>
          </h4>
          <p>
            <i>
              LunarEclipse fair launch started. let's reach the presale goal!
              <br/>
            
              <br/>
              
            </i>
            
          </p>
          <a href="https://dxsale.app/app/pages/defipresale?saleID=1143&chain=BSC">
            <StyledButton>
              DxSale pre-launch
            </StyledButton>
          </a>
        </StyledArticle>
        <StyledBigArticle>
          <h4>
            Points of interest
            <small>Reasons why to own LunarEclipse</small>
          </h4>
          <div className="flexContent">
            <div className="items one">
              <img src={safe} alt=""/>
              <h3>Completely Secured</h3>
              <p>Audited smart contract (within first week after launch), no big devs holdings (all burnt from start), Liquidity Pool locked for 1 years!</p>
            </div>
            <div className="items two">
              <img src={hold} alt=""/>
              <h3>Rewarding for Holders</h3>
              <p>Keep holding your LunarEclipse tokens, and you will earn more. For each transaction, a 4% fee is sent back to our beloved holders.</p>
            </div>
            <div className="items three">
              <img src={profit} alt=""/>
              <h3>Inventive Construction</h3>
              <p>With a combination of burning, automatic LP filling and rewarding of holders, LunarEclipse is set to rise!</p>
            </div>
          </div>
        </StyledBigArticle>
        <StyledRoadMap>
          <h4>
            Roadmap
            <small>Trace our work</small>
          </h4>
          <div className="row">
            <div className="icon pending">
              <FontAwesomeIcon icon={faHourglass} />
            </div>
            <div className="text">Presale live on DXSales <span className="orange">In progress</span></div>
          </div>
          <div className="row">
          <div className="icon notComplete" />

            <div className="text">Presale sold out </div>
          </div>
          <div className="row">
          <div className="icon notComplete" />

            <div className="text">Listing on PANCAKESWAP </div>
          </div>
          <div className="row">
          <div className="icon notComplete" />

            <div className="text">Marketing on Poocoin </div>
          </div>
          <div className="row">
          <div className="icon notComplete" />

            <div className="text">Reach 1000 holders </div>
          </div>
          <div className="row">
          <div className="icon notComplete" />

            <div className="text">Audit LunarEclipse Smart Contract </div>
          </div>
          <div className="row">
          <div className="icon notComplete" />

            <div className="text">Reach 3000 holders </div>
          </div>
          <div className="row">
          <div className="icon notComplete" />
            <div className="text">Launch holder contest ($1000) </div>
          </div>
          <div className="row">
          <div className="icon notComplete" />
            <div className="text">Litepaper released </div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">Whitebit listing</div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">Reach 5000 holders</div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">Launch second holder contest ($2000)</div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">Whitepaper released</div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">CoinmarketCap & Coingecko Listing</div>
          </div>
          <div className="row">
            <div className="icon notComplete" />
            <div className="text">Listing on Exchange</div>
          </div>
        </StyledRoadMap>
      </StyledGrid>
  )
}

