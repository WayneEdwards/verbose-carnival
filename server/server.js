const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');

const { typeDefs, resolvers } = require('./schemas');
const {authMiddleware} = require('./utils/auth');



const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: authMiddleware 
});

server.start().then(() => {
     server.applyMiddleware({ app });
 });





app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
