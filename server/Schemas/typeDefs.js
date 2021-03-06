const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        _id: ID
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    input UserBookInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Query {
        me: User
        users: [User]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: UserBookInput): User
        deleteBook(bookId: String!): User
    }`;

module.exports = typeDefs;