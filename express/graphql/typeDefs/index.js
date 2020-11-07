import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Book {
        _id: ID!
        title: String!
        description: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
    }

    type LoginData {
        token: String!
        tokenExpiration: String!
        user: User!
    }

    input UserInput {
        name: String!
        email: String!
        password: String!
        password_confirmation: String!
    }

    type Query {
        books: [Book]
        loginUser(email: String!, password: String!): LoginData!
    }

    type Mutation {
        addUser(userInput: UserInput): User!
    }
`;

export default typeDefs;
