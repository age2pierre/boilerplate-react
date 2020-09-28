import React from 'react'
import { createUseStyles } from 'react-jss'
import { Canvas, ContainerProps } from 'react-three-fiber'

import { useGlobalStyle } from '../designsytem/global'

const useStyle = createUseStyles({
  container: {
    width: '100vw',
    height: '100vh',
    userSelect: 'none',
    overflow: 'hidden',
  },
})

export function GameLayout(
  props: {
    threeScene: React.ReactNode
    htmlOverlay?: React.ReactNode
  } & Partial<ContainerProps>,
) {
  useGlobalStyle()
  const classes = useStyle()
  const { threeScene, htmlOverlay, ...canvasProps } = props
  return (
    <div className={classes.container}>
      {htmlOverlay}
      <Canvas concurrent={true} {...canvasProps}>
        {threeScene}
      </Canvas>
    </div>
  )
}
