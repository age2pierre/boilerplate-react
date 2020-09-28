import { OrbitControls, RoundedBox, Sky, Stars } from '@react-three/drei'
import {
  DepthOfField,
  EffectComposer,
  Vignette,
} from '@react-three/postprocessing'
import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import type { Mesh } from 'three'
import create from 'zustand'
import { combine } from 'zustand/middleware'

const useStore = create(
  combine(
    {
      hovered: false,
      active: false,
    },
    set => ({
      toggleActive() {
        set(state => ({ active: !state.active }))
      },
      setHover(hovered: boolean) {
        set({ hovered })
      },
    }),
  ),
)

export function CubesDemo() {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>()

  const store = useStore()

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh?.current != null) {
      mesh.current.rotation.x += 0.01
      mesh.current.rotation.y += 0.01
    }
  })

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, -10, 10]} color="indianred" />
      <pointLight position={[10, 10, -10]} color="orange" />
      <pointLight position={[-10, -10, 10]} color="lightblue" />

      <Sky />
      <OrbitControls />
      <Stars fade={true} />
      <RoundedBox
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={mesh as any}
        scale={store.active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={store.toggleActive}
        onPointerOver={() => store.setHover(true)}
        onPointerOut={() => store.setHover(false)}
      >
        <meshStandardMaterial color={store.hovered ? 'hotpink' : 'orange'} />
      </RoundedBox>
      <EffectComposer>
        <DepthOfField
          focusDistance={0.005}
          focalLength={0.05}
          bokehScale={2}
          height={480}
        />
        <Vignette eskil={false} offset={0} darkness={0.9} />
      </EffectComposer>
    </>
  )
}

export default CubesDemo
