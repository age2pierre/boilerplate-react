import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Loading } from './Loading'

const LandingPage = React.lazy(() => import('./Main'))

export const App = () => (
  <BrowserRouter>
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact={true} path="/loading" component={Loading} />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
)
