const express = require('express');
const env = require('dotenv').config();
const connectDB = require("./config/db");

const app = express();

connectDB();


const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const port = process.env.PORT || 4000;





app.use('/graphql',graphqlHTTP({
    schema, 
    graphiql:process.env.NODE_ENV === 'development',
})
)





app.listen(port,()=>console.log('Server is running'))