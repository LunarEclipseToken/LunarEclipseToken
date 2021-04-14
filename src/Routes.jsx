import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Dashboard } from './Dashboard'
import { Releases } from './Releases';
import { ArticlePage } from './ArticlePage';
import { ComingSoonPage } from './ComingSoonPage';

export function Routes() {
  return (
    <>
      <Switch>
        <Route path="/eclipse-token-contract-initiated/">
          <ArticlePage
            title="Eclipse Token Contract Initiated"
            date="Posted on February 22, 2021"
            paragraph={[
              "Today we initiated the development of the unique Eclipse Token Contract. A carefully planned out process of an experienced team of Crypto-developers.",
              "We are looking forward to sharing our journey with the community!",
              "Eclipse – By the community, for the community!",
            ]}
          />
        </Route>
        <Route path="/website-launch/">
          <ArticlePage
              title="Webapp is fully developped and live! "
              date="Posted on February 27, 2021"
              paragraph={[
                "Webapp is fully developped and live! Responsive, made on react and open source, altought the design is heavily imspired by our parent token Eclipse. The development of this app has been made from scratch using different technologies.",
                "Some parts are still missing but we'll there. Expect to see a live chart of the token on the home page and other live metrics.",
              ]}
            />
        </Route>
        <Route path="/press-releases/">
          <Releases />
        </Route>
        <Route path="/contests/">
          <ComingSoonPage />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
      </>
  )
}
