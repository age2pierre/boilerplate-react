import React from 'react'
import { ThemeProvider } from 'react-jss'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { THEME } from '../designsytem/theme'
import CubesDemo from './CubesDemo'
import { DesignSystemDemo } from './DesignSystemDemo'
import { GameLayout } from './GameLayout'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <Switch>
          <Route exact={true} path="/designsystem">
            <DesignSystemDemo />
          </Route>
          <Route exact={true} path="/cubes">
            <GameLayout threeScene={<CubesDemo />} />
          </Route>
          <Route path="*">
            <Redirect to="/cubes" />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  )
}
