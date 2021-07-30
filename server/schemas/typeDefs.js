const { gql } = require('apollo-server-express');
// typeDefs
const typeDefs = gql`

type Book {
    _id: ID!
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String
}

type User {
    _id: ID!
    username: String
    email: String
    password: String
    savedBooks: [Book]
    bookCount: Int
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    me: User

} 

input bookData {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: bookData!): User
    deleteBook(bookId: String!): User
}

`;

module.exports = typeDefs;
