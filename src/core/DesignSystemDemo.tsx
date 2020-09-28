import React from 'react'
import { createUseStyles } from 'react-jss'

import { useGlobalStyle } from '../designsytem/global'
import type { Theme } from '../designsytem/theme'

const LoremIpsum = () => {
  const rng = Math.random()
  if (rng < 0.33) {
    return (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat
        quam non nisi molestie lacinia. Sed tempus non ex ultricies imperdiet.
        Praesent in quam ipsum.
      </>
    )
  } else if (rng > 0.66) {
    return (
      <>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit... Aenean pulvinar lorem sed ullamcorper
        vehicula. Curabitur mollis risus diam, eget tempus leo mollis eu.
      </>
    )
  } else {
    return (
      <>
        Donec maximus sodales molestie. Nullam in sollicitudin libero. Donec
        hendrerit fermentum sapien, eget fermentum nisl bibendum nec. Phasellus
        imperdiet fermentum nibh, auctor condimentum nisl accumsan ut.
        Pellentesque vitae metus diam.
      </>
    )
  }
}

const useStyles = createUseStyles<Theme, 'container'>(theme => ({
  container: {
    margin: `${theme.spacing(1)} ${theme.spacing(3)}`,
  },
}))

export function DesignSystemDemo() {
  useGlobalStyle()
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1>Title of level 1</h1>
      <h2>Title of level 2</h2>
      <h3>Title of level 3</h3>
      <h4>Title of level 4</h4>
      <h5>Title of level 5</h5>
      <h6>Title of level 6</h6>
      <p>
        <LoremIpsum />
        <a> Link to nowhere. </a>
        <LoremIpsum />
        <em>Small text</em>
        <LoremIpsum />
      </p>
      <h2>List items</h2>
      <ul>
        <li>
          <LoremIpsum />
        </li>
        <ul>
          <li>
            <LoremIpsum />
          </li>
        </ul>
        <li>
          <LoremIpsum />
        </li>
      </ul>
      <h2>Buttons</h2>
      <button>Click me</button>
    </div>
  )
}
