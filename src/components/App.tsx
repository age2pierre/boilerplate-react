import { devtoolsExchange } from '@urql/devtools'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  Provider,
} from 'urql'

import { Loading } from './Loading'

const gqlClient = createClient({
  url: 'http://swapi.apis.guru/',
  exchanges:
    process.env.NODE_ENV === 'development'
      ? [dedupExchange, devtoolsExchange, cacheExchange, fetchExchange]
      : [],
})

const LandingPage = React.lazy(() => import('./Main'))
const DemoGql = React.lazy(() => import('./DemoGql'))

export const App = () => (
  <Provider value={gqlClient}>
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={true} path="/loading" component={Loading} />
          <Route exact={true} path="/demogql" component={DemoGql} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  </Provider>
)
