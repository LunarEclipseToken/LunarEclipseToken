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
        <Route path="/lorem-ipsum/">
          <ArticlePage
              title="Lorem Ipsum"
              date="Posted on February 27, 2021"
              paragraph={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur, leo ac convallis venenatis, eros odio condimentum ipsum, a ultricies turpis massa eget dui. Donec purus enim, convallis sed quam nec, tincidunt semper magna. Sed ullamcorper, dui quis dapibus rhoncus, magna tortor bibendum ante, ut tincidunt dolor erat sit amet dolor. Fusce purus dui, feugiat id magna ornare, tempor elementum magna.",
                "Proin eget sem sagittis, gravida ex vitae, porta neque. Proin at auctor felis, et semper dui. Morbi ut mi purus. Pellentesque laoreet lacus ante, vitae suscipit lorem tristique eu.",
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
