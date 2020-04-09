import gql from 'graphql-tag'
import React from 'react'
import { useQuery } from 'urql'
import type { ValuesType } from 'utility-types'

import type {
  DemoGetFilms,
  DemoGetFilmsVariables,
} from './__generated__/demo-get-films'

export type Film = ValuesType<
  NonNullable<NonNullable<DemoGetFilms['allFilms']>['films']>
>

export const FilmList = (props: { films: Film[] }) => {
  return (
    <ul>
      {props.films.map(film => (
        <li key={film?.id}>{film?.title ?? 'N/A'}</li>
      ))}
    </ul>
  )
}

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
    ? 'Please wait...'
    : error
    ? `errors => ${error.message}`
    : `Found ${data?.allFilms?.totalCount ?? 0} movies`

  return (
    <>
      <h1>SWAPI Example</h1>
      <p>{paragraph}</p>
      <FilmList films={data?.allFilms?.films ?? []} />
    </>
  )
}

export default DemoPage
