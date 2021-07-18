const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type Product {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
  }

  input ProductInput {
    title: String!
    body: String!
  }
  
  input ProductUpdate {
    title: String!
    body: String!
    _id: ID!
  }

  type Query {
    products:[Product!]
  }

  type Mutation {
    createProduct(product:ProductInput): Product
    updateProduct(product:ProductUpdate): Product
    deleteProduct(_id: ID!): Product
  }

  schema {
    query: Query
    mutation: Mutation
  }
  
`)