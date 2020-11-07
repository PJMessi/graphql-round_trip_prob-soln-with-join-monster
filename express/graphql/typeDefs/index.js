import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Book {
        _id: ID!
        title: String!
        description: String!
        author: Author!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
    }

    type Author {
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

    input AuthorInput {
        name: String!
        email: String!
    }

    input BookInput {
        title: String!
        description: String!
        author: String!
    }



    type Query {
        loginUser(email: String!, password: String!): LoginData!
        getAuthors: [Author]
        getBooks: [Book]
    }

    type Mutation {
        addUser(userInput: UserInput): User!
        addAuthor(authorInput: AuthorInput): Author!
        addBook(bookInput: BookInput): Book!
    }
`;

export default typeDefs;
