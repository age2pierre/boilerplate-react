import React from 'react'
import { create } from 'react-test-renderer'

import { FilmList } from './DemoGql'

it('FilmList renders correctly', () => {
  const comp = (
    <FilmList films={[{ id: '0007', title: 'James Bond', created: null }]} />
  )
  const tree = create(comp).toJSON()
  expect(tree).toMatchSnapshot()
})
