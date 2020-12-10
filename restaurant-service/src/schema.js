const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    restaurants: [Restaurant!]!
  }

  type Restaurant {
    id: ID!
    name: String!
    address1: String!
    city: String!
    state: String!
    zip: String!
    lat: String!
    long: String!
    telephone: String!
    tags: String!
    website: String!
    genre: String!
    hours: String!
    attire: String!
  }
`

module.exports = typeDefs
