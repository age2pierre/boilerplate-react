import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createClient, Provider } from 'urql'

import { Loading } from './Loading'

const gqlClient = createClient({
  url: 'http://swapi.apis.guru/',
})

export const LandingPage = React.lazy(() => import('./Main'))
export const DemoGql = React.lazy(() => import('./DemoGql'))

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
