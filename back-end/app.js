const express = require("express")
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const mongoose = require("mongoose")
const graphqlSchemaProduct = require("./graphql/schema/productSchema")
const graphqlResolversProduct = require("./graphql/resolvers/productResolver")
const graphqlSchemaUser = require("./graphql/schema/userSchema")
const graphqlResolversUser = require("./graphql/resolvers/userResolver")
const {mergeSchemas, mergeResolvers} = require('graphql-tools')

const app = express()

const mergedSchema  = mergeSchemas({
    schemas:[
        graphqlSchemaProduct,
        graphqlSchemaUser
    ]
})

const mergedResolvers = mergeResolvers([graphqlResolversProduct,graphqlResolversUser])

app.use(
    "/graphql",
    graphqlHTTP({
        schema: mergedSchema,
        rootValue: mergedResolvers,
        graphiql: true,
    })
)
const url = `mongodb+srv://Thimasha:Thimasha980829@cluster0.folnm.mongodb.net/unix_database?retryWrites=true&w=majority`
// `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-uox7n.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
    .connect(url, options)
    .then(() => app.listen(3001, console.log("Server is running!")))
    .catch(error => {
        throw error
    })