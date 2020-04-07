import React from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <p>Welcome to your awesome boilerplate</p>
      <ul>
        <li>
          <Link to="/demogql">Demo Gql</Link>
        </li>
        <li>
          <Link to="/loading">Loading</Link>
        </li>
      </ul>
    </>
  )
}

export default Main
