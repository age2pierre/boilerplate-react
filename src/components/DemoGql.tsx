import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'urql'

import {
  DemoGetFilms,
  DemoGetFilmsVariables,
} from './__generated__/demo-get-films'

export const DemoPage = () => {
  const [{ fetching, data, error }] = useQuery<
    DemoGetFilms,
    DemoGetFilmsVariables
  >({
    query: gql`
      query DemoGetFilms {
        allFilms {
          totalCount
          films {
            id
            title
            created
          }
        }
      }
    `,
  })

  const paragraph: string = fetching
    ? 'Please wiat while loading...'
    : error
    ? `errors => ${error.message}`
    : `Found ${data?.allFilms?.totalCount ?? 0} movies`

  return (
    <>
      <h1>SWAPI Example</h1>
      <p>{paragraph}</p>
      <ul>
        {(data?.allFilms?.films ?? []).map(datum => (
          <li key={datum?.id}>{datum?.title}</li>
        ))}
      </ul>
    </>
  )
}

export default DemoPage
