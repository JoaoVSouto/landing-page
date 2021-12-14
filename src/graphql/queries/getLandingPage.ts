import { gql } from 'graphql-request'

export const GET_LANDING_PAGE = gql`
  query GET_LANDING_PAGE {
    landingPage {
      logo {
        url
        alternativeText
      }
    }
  }
`
